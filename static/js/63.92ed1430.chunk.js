(window.webpackJsonpjianghu=window.webpackJsonpjianghu||[]).push([[63],{1198:function(e,t,n){var a=n(1199);"string"===typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(86)(a,r);a.locals&&(e.exports=a.locals)},1199:function(e,t,n){(e.exports=n(85)(!1)).push([e.i,'#my_share_box .file_updateAt,\n#my_share_box .file_size,\n#my_share_box .file_name,\n#my_share_box .toUser,\n#my_share_box .fromUser,\n#my_share_box .file_createdAt {\n  font-size: 1.2rem;\n}\n#my_share_box .file_name {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 17px;\n}\n#my_share_box .file_name .name {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 60%;\n}\n#my_share_box .file_name .name .fName {\n  display: inline-block;\n  height: 17px;\n  line-height: 17px;\n  max-width: 100%;\n}\n#my_share_box .file_name .name i[class^="weblink-"] {\n  width: 2.4rem;\n  height: 2.4rem;\n  margin-right: 1rem;\n  font-size: 1.7rem;\n  margin-top: 0.5rem;\n}\n#my_share_box .file_name .hidden {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40%;\n  height: 17px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n#my_share_box .file_name .hidden >div {\n  float: right;\n  margin-right: 1rem;\n  cursor: pointer;\n}\n#my_share_box .weblink-row:hover .file_name .hidden {\n  opacity: 1;\n}\n',""])},2018:function(e,t,n){"use strict";n.r(t);n(439);var a,r=n(281),i=(n(1026),n(1027)),l=(n(101),n(37)),s=(n(111),n(4)),c=n(6),o=n.n(c),p=(n(100),n(23)),u=n(15),m=n(28),f=n(29),d=n(31),h=n(30),w=n(32),b=(n(154),n(79)),v=(n(280),n(160)),g=n(0),y=n.n(g),x=(n(1198),n(52)),k=n(1106),F=n.n(k),O=n(38),_=n.n(O),I=n(41),E=n(87),N=n(155),j=n(17),S=n(110),T=n(1082),C=n(289),z=Object(x.a)(function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,1113))},!0),A=Object(x.a)(function(){return Promise.all([n.e(3),n.e(17)]).then(n.bind(null,1064))},!0),K=function(){return y.a.createElement(v.a,{status:"warning",title:"\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25\u6216\u4e0d\u652f\u6301\u6b64\u7c7b\u578b\u6587\u4ef6\u9884\u89c8"})},P=b.a.confirm,D=Object(S.a)(a=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={shareList:[],loading:!1,previewImgIsOpen:!1,previewImgList:[],previewFileType:"",previewFilePath:"",previewFileName:"",previewFileIsOpen:!1},n.getToMyShare=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({loading:!0});case 2:return e.next=4,Object(I.eb)();case 4:return a=e.sent,e.next=7,n.setState({loading:!1});case 7:if(200!==a.code){e.next=13;break}return r=a.data.map(function(e){return{id:e.id,toUser:"".concat(e.targetName,"\uff08").concat(e.departmentName,"\uff09"),toUserId:e.target,fromUserId:e.userId,fromUser:"".concat(e.username),fileId:e.pathFile?e.pathFile.id:"",fileName:e.pathFile?e.pathFile.name:"",fileSize:e.pathFile?e.pathFile.size:"",isDir:e.pathFile?e.pathFile.isDir:"",createdAt:_()(e.createdAt).format("YYYY-MM-DD HH:mm"),sortAt:new Date(e.createdAt).getTime()}}),e.next=11,n.setState({shareList:r});case 11:e.next=14;break;case 13:p.a.warning(a.msg);case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onPreviewFileError=function(e){console.error(e,"error in file-viewer")},n.previewFileHandleOk=function(){n.setState({previewFileIsOpen:!1})},n.previewFileHandleCancel=function(){n.setState({previewFileIsOpen:!1})},n.cancelShare=function(e,t){P({title:"\u5220\u9664\u5206\u4eab?",content:"\u5220\u9664\u5206\u4eab\u540e\uff0c\u6b64\u5206\u4eab\u8bb0\u5f55\u4f1a\u5c06\u201d\u5206\u4eab\u8005\u201c\u7684\u201d\u6211\u7684\u5206\u4eab\u201c\u8bb0\u5f55\u4e2d\u540c\u6b65\u79fb\u9664\uff0c\u786e\u8ba4\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\u5417\uff1f",okText:"\u5220\u9664\u5206\u4eab",okType:"danger",cancelText:"\u518d\u60f3\u60f3",onOk:function(){var t=Object(u.a)(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.v)({id:e.id});case 2:200===(a=t.sent).code?(p.a.success("\u5220\u9664\u5206\u4eab\u6210\u529f"),n.getToMyShare()):p.a.warning(a.msg);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()})},n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.shareList,a=t.loading,c=t.previewFileIsOpen,o=t.previewFileName,p=t.previewFilePath,u=t.previewFileType,m=t.previewImgIsOpen,f=t.previewImgList,d=[{title:"\u6587\u4ef6\uff08\u5939\uff09\u540d",dataIndex:"fileName",ellipsis:!0,width:600,fixed:"left",render:function(t,n,a){var r=t.split("/")[t.split("/").length-1];return y.a.createElement("div",{className:"file_name"},y.a.createElement("div",{className:"hidden"},1!==n.isDir&&y.a.createElement("div",{onClick:function(){return e.downFileItem(n)},title:"\u4e0b\u8f7d"},y.a.createElement(s.a,{type:"download",style:{fontSize:"1.7rem",color:"#3b8cff"}}))),y.a.createElement("div",{className:"name"},y.a.createElement("i",{className:1===n.isDir?N.d.folder:Object(N.c)(r)},y.a.createElement("span",{className:"path1"}),y.a.createElement("span",{className:"path2"}),y.a.createElement("span",{className:"path3"}),y.a.createElement("span",{className:"path4"}),y.a.createElement("span",{className:"path5"}),y.a.createElement("span",{className:"path6"}),y.a.createElement("span",{className:"path7"}),y.a.createElement("span",{className:"path8"})),y.a.createElement("span",{className:"fName ellipsis"},y.a.createElement("a",{href:"javascript:;",onClick:function(){return e.openFile(n)}},t))))}},{title:"\u5927\u5c0f",dataIndex:"fileSize",width:150,sorter:function(e,t){return e.fileSize-t.fileSize},render:function(e,t,n){return y.a.createElement("div",{className:"file_size"},y.a.createElement("span",null,1===t.isDir?"-":Object(E.l)(e)))}},{title:"\u5206\u4eab\u8005",dataIndex:"fromUser",width:200,render:function(e,t,n){return y.a.createElement("div",{className:"fromUser ellipsis"},e)}},{title:"\u5206\u4eab\u65f6\u95f4",width:250,dataIndex:"createdAt",sorter:function(e,t){return e.sortAt-t.sortAt},render:function(e,t,n){return y.a.createElement("div",{className:"file_createdAt"},e)}},{title:"\u64cd\u4f5c",width:120,fixed:"right",dataIndex:"action",render:function(t,n,a){return y.a.createElement("div",{className:"file_action"},y.a.createElement(l.a,{onClick:function(){return e.cancelShare(n,a)},type:"danger",size:"small"},"\u5220\u9664"))}}];return y.a.createElement("div",{id:"my_share_box"},y.a.createElement(z,{modalIsOpen:m,previewList:f,onToggle:function(t){return e.previewImgToggle(t)}}),y.a.createElement(b.a,{width:"pdf"===u.toLowerCase()?"650px":"90%",title:"\u9884\u89c8\u201c".concat(o,"\u201d"),visible:c,onOk:this.previewFileHandleOk,onCancel:this.previewFileHandleCancel},c&&"pdf"===u.toLowerCase()&&y.a.createElement(A,{filePath:p}),c&&"pdf"!==u.toLowerCase()&&y.a.createElement(F.a,{fileType:u,filePath:p,onError:this.onPreviewFileError,errorComponent:K,unsupportedComponent:K})),y.a.createElement(i.a,{message:"\u4e0e\u6211\u5206\u4eab\uff08\u522b\u4eba\u5206\u4eab\u7ed9\u6211\u7684\u6587\u4ef6\uff09",type:"info"}),y.a.createElement(r.a,{rowKey:"id",loading:a,scroll:{x:"100%"},rowClassName:function(){return"weblink-row"},columns:d,dataSource:n}))}},{key:"componentDidMount",value:function(){this.getToMyShare()}},{key:"previewImgToggle",value:function(e){this.setState(function(t){return{previewImgIsOpen:e}})}},{key:"downFileItem",value:function(e){this.downloadFile(e)}},{key:"downloadFile",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,a,r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Number(t.fileSize)>j.b)){e.next=4;break}return Object(E.k)("".concat(I.y,"?fileId=").concat(t.fileId,"&token=").concat(j.c.getCache("token"),"&downloadUrl=").concat(I.c,"&type=share"),"\u4e0b\u8f7d\u94fe\u63a5\u590d\u5236\u6210\u529f"),e.abrupt("return",Object(T.a)());case 4:return n=C.a.getRSAKeyPair(),e.next=7,Object(I.Q)({fileId:t.fileId,publicKey:Object(E.I)(n.publicKey)});case 7:200===(a=e.sent).code?(r=a.data.miKey,i=(i=C.a.privateKeyDecrypt(r,n.privateKey)).toString("utf8"),Object(E.q)(a.data,{type:"share",mikey:i})):p.a.warning(a.msg);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"openFile",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,a,r,l,s,c,u,m,f,d,h=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==t.isDir){e.next=4;break}return e.abrupt("return");case 4:if(!(Number(t.fileSize)>j.b)){e.next=7;break}return e.abrupt("return",p.a.warning({key:"prewFile",content:"\u6587\u4ef6\u4f53\u79ef\u8fc7\u5927\uff0c\u8bf7\u4e0b\u8f7d\u540e\u5728\u672c\u5730\u9884\u89c8"}));case 7:if(n=t.fileName,a=n.split("."),r="",1!==a.length){e.next=12;break}return e.abrupt("return",p.a.warning({key:"prewFile",content:"\u4e0d\u652f\u6301\u6b64\u6587\u4ef6\u7684\u9884\u89c8"}));case 12:return r=a[a.length-1],l="",s=C.a.getRSAKeyPair(),console.log(s),e.next=18,Object(I.Q)({fileId:t.fileId,publicKey:Object(E.I)(s.publicKey)});case 18:if(200!==(c=e.sent).code){e.next=55;break}return u=c.data.miKey,m=(m=C.a.privateKeyDecrypt(u,s.privateKey)).toString("utf8"),f=p.a.loading("\u8d44\u6e90\u89e3\u6790\u4e2d\u2026\u2026",0),e.next=26,Object(E.t)(c.data,{type:"share",mikey:m});case 26:d=e.sent,console.log(d),l=d.url,setTimeout(f,0),e.t0=Object(E.w)(r),e.next="\u56fe\u7247"===e.t0?33:"\u97f3\u9891"===e.t0?37:"\u89c6\u9891"===e.t0?41:"\u6587\u6863"===e.t0?45:52;break;case 33:return console.log("\u56fe\u7247\u7684\u9884\u89c8"),console.log("\u8fdb\u884c\u6253\u5f00\u6587\u4ef6\u64cd\u4f5c",n,r),Object(E.B)(l).then(function(e){h.setState({previewImgIsOpen:!0,previewImgList:[{src:e.imgSrc,w:e.width||200,h:e.height||200,title:n}]})}).catch(function(e){return console.error(e)}),e.abrupt("break",53);case 37:return console.log("\u97f3\u9891\u7684\u9884\u89c8"),console.log("\u8fdb\u884c\u6253\u5f00\u6587\u4ef6\u64cd\u4f5c",n,r),this.setState({previewFileType:r,previewFilePath:l,previewFileIsOpen:!0,previewFileName:n}),e.abrupt("break",53);case 41:return console.log("\u89c6\u9891\u7684\u9884\u89c8"),console.log("\u8fdb\u884c\u6253\u5f00\u6587\u4ef6\u64cd\u4f5c",n,r),this.setState({previewFileType:r,previewFilePath:l,previewFileIsOpen:!0,previewFileName:n}),e.abrupt("break",53);case 45:if(console.log("\u6587\u6863\u7684\u9884\u89c8"),console.log("\u8fdb\u884c\u6253\u5f00\u6587\u4ef6\u64cd\u4f5c",n,r),"txt"!==r){e.next=50;break}return Object(E.C)(l).then(function(e){b.a.info({title:"TXT\u9884\u89c8",content:y.a.createElement("div",{style:{whiteSpace:"pre-line"}},y.a.createElement(i.a,{style:{marginBottom:"10px"},message:"\u82e5\u51fa\u73b0\u4e71\u7801\u73b0\u8c61\u8bf7\u4e0b\u8f7d\u540e\u5728\u672c\u5730\u9884\u89c8\u3002"}),e.content),width:650,okText:"\u5173\u95ed"})}).catch(),e.abrupt("return");case 50:return this.setState({previewFileType:r,previewFilePath:l,previewFileIsOpen:!0,previewFileName:n}),e.abrupt("break",53);case 52:return e.abrupt("return",p.a.warning({key:"prewFile",content:"\u4e0d\u652f\u6301\u6b64\u6587\u4ef6\u7684\u9884\u89c8"}));case 53:e.next=56;break;case 55:p.a.warning(c.msg);case 56:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(g.Component))||a;t.default=D}}]);