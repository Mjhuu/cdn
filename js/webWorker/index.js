
var workercode = function () {
    // 引入脚本
    // eslint-disable-next-line no-restricted-globals
    var _ = self;
    _.importScripts("https://yunpan.weblinkon.com/js/aes.js");
    _.importScripts("https://yunpan.weblinkon.com/js/md5.min.js");
    // eslint-disable-next-line no-undef
    var _aesjs = aesjs, _SparkMD5 = SparkMD5;
    // 监听主线程发来的消息
    _.onmessage = async function (e) {
        switch (e.data.type) {
            case 'dealPublicImgUrl':
                var i1 = e.data.i || '';
                var data = e.data.data;
                var userSkey = e.data.userSkey;
                var userToken = e.data.userToken;
                var shareType = e.data.shareType || '';
                var mikey = e.data.mikey || '';
                try{
                    fetchEncryptFile(data, {userSkey: userSkey, userToken: userToken, type: shareType, mikey: mikey}).then(function (data) {
                        _.postMessage({
                            i: i1, url: data.url, decryptFile: data.decryptFile
                        })
                        console.log('线程关闭');
                        _.close();
                    });
                }catch (e) {
                    console.log('线程关闭');
                    _.close();
                }
                break
            case 'dealFile':
                var file = e.data.file;
                var key = e.data.key;
                var shardCount = e.data.shardCount;
                var startIndex = e.data.startIndex;
                var nextIndex = e.data.nextIndex;
                var i2 = e.data.i;
                var shardSize = e.data.shardSize;
                var size = e.data.size;
                var index = 0;
                for(var ii = startIndex; ii< nextIndex; ii++){
                    index++;
                    console.log({ii, index});
                    var start = ii * shardSize;
                    var end;
                    if(shardCount === ii + 1){
                        shardSize = size - ii * shardSize;
                        end = size;
                    }else {
                        end = start + shardSize;
                    }
                    var encryptFile = await getEncryptFile({
                        file: file.slice(start, end), key, fileName: file.name
                    });
                    var d = await getFileMd5(encryptFile.encryptFile);
                    _.postMessage({
                        d: d, encryptFile: encryptFile, ii: ii, i: i2
                    })
                }
                if(index === nextIndex){
                    console.log('线程关闭');
                    _.close();
                }
                break;
            default:
                break
        }
    }


    // 关闭自身
    // _.close();

    /*函数*/
    // 获取解密后的文件对象
    function fetchEncryptFile({token, fileName, size, skey}, {type, mikey, userToken, userSkey} = {}) {

        return new Promise((resolve, reject) => {
            fetch(`https:/api.weblinkon.com/download?token=${encodeURIComponent(token)}`, {
                headers: {
                    'Token': userToken,
                }
            }).then(res => res.blob()).then(async blob => {
                var decryptFile = await getDecryptFile({
                    fileName: fileName, file: blob, encryptedHex: skey
                }, {type, mikey}, userSkey)
                var url = URL.createObjectURL(decryptFile.decryptFile);
                resolve({
                    url,
                    decryptFile: decryptFile.decryptFile
                })
            }).catch(err => {
                reject('文件获取失败')
            });
        })
    }
    /*解密文件*/
    function getDecryptFile({file, fileName, encryptedHex}, obj = {}, userSkey) {
        return new Promise(((resolve, reject) => {
            var mikey = '';
            if(obj.type === 'share'){
                // 文件来源于分享文件 需要获取分享者的密钥
                mikey = obj.mikey;
            }else {
                mikey = userSkey
            }
            if(!mikey){
                return reject('密钥获取失败')
            }
            mikey = JSON.parse(mikey);
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = async () => {
                // 将加密后的文件Buffer转为数组
                var encryptArray = new Uint8Array(reader.result);
                // console.log(encryptArray);
                // 重新组合的Uint8Array
                var newUint8Array = new Uint8Array(encryptArray.length);
                // console.log(encryptArray.length);
                var size = encryptArray.length;
                var shardSize = size * 1 / 100;
                // 如果分片小于5M则用5M进行分片
                if(shardSize < 1048576 * 5){
                    shardSize = 1048576 * 5;   //以20MB为一个分片,每个分片的大小
                }
                // 如果分片大于20M则用20M进行分片
                if(shardSize > 1048576 * 20){
                    shardSize = 1048576 * 20;  //以20MB为一个分片,每个分片的大小
                }
                var shardCount = Math.ceil(size / shardSize);   //总片数
                for(var fileIndex = 0; fileIndex< shardCount; fileIndex++){
                    var start = fileIndex * shardSize;
                    var end;
                    if(shardCount === fileIndex + 1){
                        shardSize = size - fileIndex * shardSize;
                        end = size;
                    }else {
                        end = start + shardSize;
                    }
                    // console.log(shardCount, shardSize, start, end);
                    var blockUint8Arr = encryptArray.slice(start, end);

                    // 对文加密件数组进行解密
                    var decryptFileArr = aesDecrypt(blockUint8Arr, aesDecrypt(encryptedHex, mikey, true));
                    // console.log('解密服务端的加密文件的二进制数组', '第'+fileIndex+'片', decryptFileArr);
                    newUint8Array.set(decryptFileArr, start)

                }

                // console.log('服务端返回的加密二进制数组', encryptArray);

                var decryptNewArrayBuffer = new Uint8Array(newUint8Array).buffer;
                // console.log('解密服务端的加密文件的二进制数组--总', newUint8Array);
                // 加密后的文件对象
                var decryptFile = new File([new Blob([decryptNewArrayBuffer])], fileName);
                resolve({
                    decryptFile,
                })
            }
        }))
    }
    // 用AES解密
    function aesDecrypt(data, key = [ 12, 22, 23, 34, 5, 36, 37, 8, 9, 110, 11, 2, 31, 14, 36, 162 ], isHex = false) {
        data = isHex ? _aesjs.utils.hex.toBytes(data) : data;
        var aesCtr = new _aesjs.ModeOfOperation.ctr(key);
        // 解密后的数据
        return aesCtr.decrypt(data)
    }

    /*加密文件*/
    function getEncryptFile({file, fileName, key}) {
        return new Promise(((resolve, reject) => {
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = async () => {
                var fileArr = new Uint8Array(reader.result);

                // console.log('原始二进制数组', fileArr);
                // 加密成二进制数组
                var encryptFileArr = aesEncrypt(fileArr, key);
                var encryptNewArrayBuffer = new Uint8Array(encryptFileArr).buffer;
                // console.log('加密成二进制数组', encryptFileArr);
                // 加密后的文件对象
                var encryptFile = new File([new Blob([encryptNewArrayBuffer])], fileName);
                // console.log('加密后的文件大小',encryptFile.size);
                resolve({
                    encryptFile,
                })
            }
        }))
    }
    /*用AES加密*/
    function aesEncrypt(data, key, returnHex = false) {
        var aesCtr = new _aesjs.ModeOfOperation.ctr(key);
        var encryptedBytes = aesCtr.encrypt(data);
        // To print or store the binary data, you may convert it to hex
        var encryptedHex = _aesjs.utils.hex.fromBytes(encryptedBytes);
        // 加密后的数据
        return returnHex ? {
            encryptedHex,
            encryptedBytes
        } : encryptedBytes
    }

    /*加密文件获取md5*/
    function getFileMd5(ofile) {
        return new Promise((resolve, reject) => {
            var file = ofile;
            var tmp_md5;
            var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
                // file = this.files[0],
                chunkSize = 8097152, // Read in chunks of 2MB
                chunks = Math.ceil(file.size / chunkSize),
                currentChunk = 0,
                // eslint-disable-next-line no-undef
                spark = new _SparkMD5.ArrayBuffer(),
                fileReader = new FileReader();

            fileReader.onload = function (e) {
                // console.log('read chunk nr', currentChunk + 1, 'of', chunks);
                spark.append(e.target.result); // Append array buffer
                currentChunk++;
                var md5_progress = Math.floor((currentChunk / chunks) * 100);

                // console.log(file.name + "  正在处理，请稍等," + "已完成" + md5_progress + "%");

                if (currentChunk < chunks) {
                    loadNext();
                } else {
                    tmp_md5 = spark.end();
                    resolve(tmp_md5)
                }
            };

            fileReader.onerror = function () {
                reject('oops, something went wrong.');
            };

            function loadNext() {
                var start = currentChunk * chunkSize,
                    end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
                fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
            }

            loadNext();
        })
    }

}

var code = workercode.toString()
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))

var blob = new Blob([code], {type: 'application/javascript'})

var worker_script = URL.createObjectURL(blob)

window.worker_script = worker_script;
