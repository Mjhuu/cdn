(window.webpackJsonpjianghu=window.webpackJsonpjianghu||[]).push([[49],{1194:function(e,n,t){"use strict";t.d(n,"a",function(){return k});var o,r,a,i,s,c=new Array(20),l=new Array(12),m=new Date,d="\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u7678",u="\u5b50\u4e11\u5bc5\u536f\u8fb0\u5df3\u5348\u672a\u7533\u9149\u620c\u4ea5",p="\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341",f="\u6b63\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u51ac\u814a",w="\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d",h="\u9f20\u725b\u864e\u5154\u9f99\u86c7\u9a6c\u7f8a\u7334\u9e21\u72d7\u732a";navigator.appName;function b(e,n){return e>>n&1}function k(){return c[0]=268949,c[1]=3402,c[2]=3493,c[3]=133973,c[4]=1386,c[5]=464219,c[6]=605,c[7]=2349,c[8]=334123,c[9]=2709,c[10]=2890,c[11]=267946,c[12]=2773,c[13]=592565,c[14]=1210,c[15]=2651,c[16]=395863,c[17]=1323,c[18]=2707,c[19]=265877,l[0]=0,l[1]=31,l[2]=59,l[3]=90,l[4]=120,l[5]=151,l[6]=181,l[7]=212,l[8]=243,l[9]=273,l[10]=304,l[11]=334,function(){var e,n,t,s,d=!1,u=m.getYear();for(u<1900&&(u+=1900),e=365*(u-2001)+Math.floor((u-2001)/4)+l[m.getMonth()]+m.getDate()-23,m.getYear()%4==0&&m.getMonth()>1&&e++,n=0;;n++){for(t=s=c[n]<4095?11:12;t>=0;t--){if(e<=29+b(c[n],t)){d=!0;break}e=e-29-b(c[n],t)}if(d)break}o=2001+n,r=s-t+1,a=e,12==s&&(r==Math.floor(c[n]/65536)+1&&(r=1-r),r>Math.floor(c[n]/65536)+1&&r--),i=Math.floor((m.getHours()+3)/2)}(),function(){var e="",n=m.getYear();n<1900&&(n+=1900),e+=n+"\u5e74"+(m.getMonth()+1)+"\u6708"+m.getDate()+"\u65e5   "+m.getHours()+":"+(m.getMinutes()<10?"0":"")+m.getMinutes()+"   \u661f\u671f"+w.charAt(m.getDay()),e}(),function(){var e="\u519c\u5386";e+=d.charAt((o-4)%10),e+=u.charAt((o-4)%12),e+="\u5e74(",e+=h.charAt((o-4)%12),e+=") ",r<1?(e+="\u95f0",e+=f.charAt(-r-1)):e+=f.charAt(r-1),e+="\u6708",e+=a<11?"\u521d":a<20?"\u5341":a<30?"\u5eff":"\u5345",a%10==0&&10!=a||(e+=p.charAt((a-1)%10)),e+=" ",13==i&&(e+="\u591c"),e+=u.charAt((i-1)%12),s=e+="\u65f6"}(),s}},2002:function(e,n,t){var o=t(2003);"string"===typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(86)(o,r);o.locals&&(e.exports=o.locals)},2003:function(e,n,t){(e.exports=t(85)(!1)).push([e.i,".lock-box {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 99999;\n  -moz-user-select: none; /*\u706b\u72d0*/\n  -webkit-user-select: none; /*webkit\u6d4f\u89c8\u5668*/\n  -ms-user-select: none; /*IE10*/\n  -khtml-user-select: none; /*\u65e9\u671f\u6d4f\u89c8\u5668*/\n  user-select: none;\n}\n.lock-box >.bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden;\n}\n.lock-box >.bg >img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.1);\n  filter: blur(1rem);\n  -webkit-filter: blur(1rem);\n  -moz-filter: blur(1rem);\n  -ms-filter: blur(1rem);\n  -o-filter: blur(1rem);\n}\n.lock-box >.bg >.mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0,0,0,0.4);\n}\n.lock-box >.lock-content {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.lock-box >.lock-content >.datetime {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.lock-box >.lock-content >.datetime >.time {\n  font-size: 7rem;\n}\n.lock-box >.lock-content >.datetime >.date {\n  font-size: 2.5rem;\n}\n.lock-box >.lock-content >.datetime >.lunar {\n  margin-top: 0.5rem;\n  font-size: 1.6rem;\n}\n.lock-box >.lock-content >.password {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 1rem 0;\n}\n.lock-box >.lock-content >.password >p {\n  margin: 1rem 0;\n}\n.lock-box >.lock-content >.password >.lock-list ul {\n  display: flex;\n}\n.lock-box >.lock-content >.password >.lock-list ul >li {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  margin: 0.3rem;\n}\n.lock-box >.lock-content >.password >.lock-list ul >li >svg {\n  width: 2rem;\n  height: 2rem;\n}\n.lock-box >.lock-content >.pwd-box {\n  position: relative;\n}\n.lock-box >.lock-content >.pwd-box >.cancel {\n  position: absolute;\n  bottom: 3.8rem;\n  right: 3.6rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.lock-box >.lock-content >.pwd-box >.cancel:active {\n  color: #b1b1b1;\n}\n.lock-box >.lock-content >.pwd-box >ul {\n  width: 25rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.lock-box >.lock-content >.pwd-box >ul >li {\n  width: 6.5rem;\n  height: 6.5rem;\n  margin: 0.5rem;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: rgba(255,255,255,0.3);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.lock-box >.lock-content >.pwd-box >ul >li:active {\n  background-color: rgba(255,255,255,0.6);\n}\n.lock-box >.lock-content >.pwd-box >ul >li .zero {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  font-weight: 600;\n}\n.lock-box >.lock-content >.pwd-box >ul >li .top {\n  width: 100%;\n  height: 3.4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  font-weight: 600;\n  position: relative;\n  top: 0.5rem;\n}\n.lock-box >.lock-content >.pwd-box >ul >li .bottom {\n  width: 100%;\n  height: 2rem;\n  display: flex;\n  position: relative;\n  top: 0rem;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 0.2rem;\n  font-size: 1.3rem;\n}\n.lock-box >.lock-content >.top {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5rem;\n  margin-top: 6rem;\n  margin-bottom: 3rem;\n}\n.lock-box >.lock-content >.top >svg {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n",""])},2117:function(e,n,t){"use strict";t.r(n);var o,r,a,i=t(6),s=t.n(i),c=t(15),l=(t(100),t(23)),m=t(28),d=t(29),u=t(31),p=t(30),f=t(32),w=t(0),h=t.n(w),b=(t(2002),t(56)),k=t(64),g=t(51),v=t(890),x=t(369),E=t.n(x),y=t(17),N=t(87),A=t(110),j=t(38),_=t.n(j),M=t(1194),z=Object(b.b)(function(e){return{userInfo:e.userInfo,allNoReadMsgCount:e.allNoReadMsgCount}},function(e){return Object(k.b)({setPropInfo:g.l},e)})(o=Object(A.a)((a=r=function(e){function n(){var e,t;Object(m.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={display:"none",lockImg:E.a,passwordError:!1,passwordText:"\u8f93\u5165\u4f60\u7684\u9501\u5c4f\u5bc6\u7801\uff0c\u4ee5\u89e3\u9501",errorCount:0,passwordArr:[],numberArr:[{number:1},{number:2,word:"ABC"},{number:3,word:"DEF"},{number:4,word:"GHI"},{number:5,word:"JKL"},{number:6,word:"MNO"},{number:7,word:"PQRS"},{number:8,word:"TUV"},{number:9,word:"WXYZ"},{number:0}],timer:_()().format("HH:mm:ss"),date:_()().format("M\u6708D\u65e5"),day:_()().format("dddd"),lunar:Object(M.a)()},t.keyupEvent=function(e){"Backspace"===e.key?t.delPassword():["0","1","2","3","4","5","6","7","8","9"].includes(e.key)&&t.verifyPassword({number:Number(e.key)})},t.delPassword=function(){var e=t.state.passwordArr;0===e.length?t.setState({passwordError:!t.state.passwordError}):(e.pop(),t.setState({passwordArr:e}))},t.passwordError=function(e){var n=t.state.errorCount,o=t.props.userInfo,r=o.skey;if(!r)return l.a.warning({key:"skeyError",content:"\u5bc6\u94a5\u83b7\u53d6\u5931\u8d25"});r=JSON.parse(r);var a=o.lockPassword?window.aesjs.utils.utf8.fromBytes(Object(N.a)(o.lockPassword,r,!0)):"";if(Number(e)!==Number(a)){if(5===(n+=1))return y.c.delCache("token"),window.location.reload(),!1;t.setState({passwordError:!t.state.passwordError,passwordArr:[],errorCount:n,passwordText:"\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff0c\u4f60\u8fd8\u6709".concat(5-n,"\u6b21\u673a\u4f1a\u3002\u673a\u4f1a\u7528\u5b8c\u4e4b\u540e\u7cfb\u7edf\u5c06\u81ea\u52a8\u9000\u51fa\u5f53\u524d\u8d26\u53f7\u3002")})}else t.closeLock()},t.closeLock=Object(c.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.props.onClose(!1),e.next=3,t.setState({passwordArr:[],errorCount:0,passwordText:"\u8f93\u5165\u4f60\u7684\u9501\u5c4f\u5bc6\u7801\uff0c\u4ee5\u89e3\u9501"});case 3:y.c.setCache("lockShow",!1);case 4:case"end":return e.stop()}},e)})),t.verifyPassword=function(){var e=Object(c.a)(s.a.mark(function e(n){var o,r,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(6!==(o=t.state.passwordArr).length){e.next=6;break}r=o.join(""),t.passwordError(r),e.next=10;break;case 6:return o.push(n.number),e.next=9,t.setState({passwordArr:o});case 9:6===o.length&&(a=o.join(""),t.passwordError(a));case 10:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.display,o=n.lockImg,r=n.passwordError,a=n.passwordText,i=n.passwordArr,s=n.numberArr,c=n.date,l=n.day,m=n.timer,d=n.lunar,u=this.props,p=u.lockShow,f=u.userInfo,w=u.allNoReadMsgCount;return h.a.createElement("div",{style:{display:t}},h.a.createElement(v.a,{in:p,timeout:800,classNames:{enterActive:"animate__animated animate__bounceInDown",exitActive:"animate__animated animate__bounceOutUp"},onEnter:function(){e.setState({display:"block"})},onExited:function(){e.setState({display:"none"})}},h.a.createElement("section",{className:"lock-box"},h.a.createElement("div",{className:"bg"},h.a.createElement("img",{src:f.id&&f.lockUrl||o,alt:""}),h.a.createElement("div",{className:"mask"})),h.a.createElement("div",{className:"lock-content"},h.a.createElement("div",{className:"top"},h.a.createElement("svg",{t:"1579610166437",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1819",width:"200",height:"200"},h.a.createElement("path",{d:"M765.605 364.064h-42.268v-84.536c0-116.658-94.68-211.337-211.337-211.337s-211.337 94.68-211.337 211.337v84.536h-42.268c-46.706 0-84.535 37.83-84.535 84.535v422.675c0 46.705 37.83 84.535 84.535 84.535h507.21c46.706 0 84.535-37.83 84.535-84.535V448.599c0-46.706-37.83-84.535-84.535-84.535zM512 744.47c-46.706 0-84.535-37.83-84.535-84.536 0-46.705 37.83-84.535 84.535-84.535s84.535 37.83 84.535 84.535c0 46.707-37.83 84.536-84.535 84.536z m131.03-380.407H380.97v-84.536c0-72.277 58.753-131.029 131.03-131.029s131.03 58.752 131.03 131.03v84.535z","p-id":"1820",fill:"#ffffff"}))),h.a.createElement("div",{className:"datetime"},h.a.createElement("section",{className:"time"},m),h.a.createElement("section",{className:"date"},c," ",h.a.createElement("span",null,l)),h.a.createElement("section",{className:"lunar"},this.props.userInfo.lunar||d)),0!==w&&h.a.createElement("div",{style:{marginTop:"1rem"},className:"allNoReadMsgCount"},h.a.createElement("span",{"aria-label":"",role:"img"},"\ud83d\udce2 \u60a8\u6709",w,"\u6761\u672a\u8bfb\u6d88\u606f")),h.a.createElement("div",{className:"password"},h.a.createElement(v.a,{in:r,timeout:800,classNames:{enterActive:"animate__animated animate__shakeX",exitActive:"animate__animated animate__shakeX"}},h.a.createElement("p",null,a)),h.a.createElement("div",{className:"lock-list"},h.a.createElement(v.a,{in:r,timeout:500,classNames:{enterActive:"animate__animated animate__shakeX",exitActive:"animate__animated animate__shakeX"},onEnter:function(){},onExited:function(){}},h.a.createElement("ul",null,[0,0,0,0,0,0].map(function(e,n){return h.a.createElement("li",{key:n},i.length>=n+1?h.a.createElement("svg",{t:"1579611500180",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3568",width:"200",height:"200"},h.a.createElement("path",{d:"M830.187 193.799c-80.775-81.406-192.702-131.801-316.4-131.801-0.189 0-0.378 0-0.567 0h-1.221c-248.525 0-450 201.475-450 450s201.462 450 450 450 450-201.475 450-450v-1.25c0-0.157 0-0.343 0-0.53 0-123.696-50.393-235.622-131.772-316.367z","p-id":"3569",fill:"#ffffff"})):h.a.createElement("svg",{t:"1579610910582",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2600",width:"200",height:"200"},h.a.createElement("path",{d:"M512 127.936c211.776 0 384.064 172.288 384.064 384.064 0 211.776-172.288 384.064-384.064 384.064S127.936 723.776 127.936 512C127.936 300.224 300.224 127.936 512 127.936M512 63.936C264.512 63.936 63.936 264.512 63.936 512c0 247.488 200.576 448.064 448.064 448.064 247.488 0 448.064-200.64 448.064-448.064C960.064 264.512 759.488 63.936 512 63.936L512 63.936z","p-id":"2601",fill:"#ffffff"})))}))))),h.a.createElement("div",{className:"pwd-box"},0!==i.length&&h.a.createElement("div",{onClick:function(){return e.delPassword()},className:"cancel"},"\u5220\u9664"),h.a.createElement("ul",null,s.map(function(n,t){return h.a.createElement("li",{onClick:function(){return e.verifyPassword(n)},key:t},0!==n.number?h.a.createElement("div",null,h.a.createElement("div",{className:"top"},n.number),h.a.createElement("div",{className:"bottom"},n.word)):h.a.createElement("div",{className:"zero"},n.number))})))))))}},{key:"componentDidUpdate",value:function(e,t,o){e.lockShow!==this.props.lockShow&&(this.props.lockShow?(window.addEventListener("keydown",this.keyupEvent),this.dealTime()):(window.removeEventListener("keydown",this.keyupEvent),clearInterval(n.timer)))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyupEvent),clearInterval(n.timer)}},{key:"dealTime",value:function(){var e=this;n.timer=setInterval(function(){e.setState({timer:_()().format("HH:mm:ss"),date:_()().format("M\u6708D\u65e5"),day:_()().format("dddd"),lunar:Object(M.a)()})},1e3)}}]),n}(w.Component),r.defaultProps={lockShow:!1},r.timer=null,o=a))||o)||o;n.default=z}}]);