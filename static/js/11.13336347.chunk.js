(window.webpackJsonpjianghu=window.webpackJsonpjianghu||[]).push([[11],{1208:function(e,t,n){"use strict";n.r(t);n(111);var o,r,i,a=n(4),s=n(6),c=n.n(s),l=n(15),d=n(28),u=n(29),m=n(31),f=n(30),v=n(32),p=n(0),g=n.n(p),h=(n(2075),n(890)),b=n(87),x=n(2077),S=n.n(x),k=n(898),y=n.n(k),w=n(110),P=Object(w.a)((i=r=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={loadingState:!0,delayState:!1,playState:!1,controlState:!1,timer:null,voiceTimer:null,muteState:!1,fullscreen:!1,voiceAddReduce:!1,oVideo:null,totalSecond:0,totalTime:null,currentTime:"00:00:00",residueTime:"00:00:00",hoverTime:"00:00:00",bufferTime:0,videoProgressWidth:0,videoBufferWidth:0,voiceProgressWidth:100,voiceVolume:1,videoProgressTopClick:!1,speedList:[{speed:2,select:!1},{speed:1.5,select:!1},{speed:1.25,select:!1},{speed:1,select:!0},{speed:.8,select:!1}],defaultSpeed:1,hoverTimeWidth:0,hoverLineColor:!0,hoverLineState:!1,hoverTimeState:!1,hoverTimeLeft:0,errorPlay:!1},n.keyup=function(){document.addEventListener("keyup",n.onKeyUp)},n.onKeyUp=function(e){switch(console.log("\u952e\u76d8"),e.preventDefault?e.preventDefault():e.returnValue=!1,e.keyCode){case 32:n.playOrPause(e);break;case 38:n.arrowControl("Up");break;case 40:n.arrowControl("Down")}},n.isFullScreen=function(){window.onresize=Object(b.n)(function(){Object(b.d)()||n.setState({fullscreen:!1})},100)},n.mouseMove=function(){document.addEventListener("mouseup",n.videoProgressMouseup),document.addEventListener("mousemove",n.onMouseMove)},n.onMouseMove=function(e){if(e.stopPropagation(),n.state.videoProgressTopClick){var o=e.clientX,r=n.videoProgress.current.clientWidth,i=o-t.stx;i<0&&(i=0),i>r&&(i=r),n.setState({hoverLineState:!1,hoverTimeState:!1,videoProgressWidth:i/r*100})}},n.arrowControl=function(){var e=Object(l.a)(c.a.mark(function e(t){var o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=n.state.voiceProgressWidth,"up"===t.toLowerCase()?(o+=10)>100&&(o=100):"down"===t.toLowerCase()&&(o-=10)<=0&&(o=0),n.setState({muteState:0===o,voiceProgressWidth:o,voiceVolume:o/100,voiceAddReduce:!0}),n.state.oVideo.volume=o/100,clearTimeout(n.state.voiceTimer),n.setState({voiceTimer:setTimeout(function(){n.setState({voiceAddReduce:!1})},2e3)});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.canPlay=function(){var e=Object(l.a)(c.a.mark(function e(t){var o,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\u53ef\u4ee5\u64ad\u653e"),e.next=3,n.setState({oVideo:t.target,loadingState:!1,totalSecond:t.target.duration,voiceProgressWidth:t.target.volume||0});case 3:if(o=Object(b.E)(n.state.totalSecond),r="".concat(o.hour,":").concat(o.minute,":").concat(o.second),n.state.totalTime){e.next=8;break}return e.next=8,n.setState({residueTime:r});case 8:n.setState({totalTime:r,bufferTime:n.state.oVideo.buffered.end(0),videoBufferWidth:n.state.bufferTime/n.state.oVideo.duration*100});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.timeUpdate=function(){var e=Object(l.a)(c.a.mark(function e(t){var o,r,i,a,s,l,d;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.target,r=o.buffered.end(0),i=r/o.duration*100,e.next=5,n.setState({oVideo:o,bufferTime:r,videoBufferWidth:i});case 5:return a=Object(b.E)(o.currentTime),s=Object(b.E)(n.state.totalSecond-o.currentTime),l="".concat(a.hour,":").concat(a.minute,":").concat(a.second),d="".concat(s.hour,":").concat(s.minute,":").concat(s.second),e.next=11,n.setState({currentTime:l,residueTime:d});case 11:if(!(o.readyState<=2&&n.state.playState)){e.next=17;break}return e.next=14,n.setState({delayState:!0});case 14:console.log("\u5f53\u524d\u7f51\u7edc\u4e0d\u7a33\u5b9a"),e.next=19;break;case 17:return e.next=19,n.setState({delayState:!1});case 19:if(n.state.videoProgressTopClick){e.next=22;break}return e.next=22,n.setState({videoProgressWidth:n.state.oVideo.currentTime/n.state.oVideo.duration*100});case 22:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.videoEnded=function(){var e=Object(l.a)(c.a.mark(function e(t){var o,r,i,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.target,!1,e.next=4,n.setState({oVideo:o,playState:!1});case 4:return r=Object(b.E)(n.state.totalSecond),i="".concat(r.hour,":").concat(r.minute,":").concat(r.second),a=i,n.state.oVideo.currentTime=0,"00:00:00",0,e.next=12,n.setState({totalTime:i,residueTime:a,currentTime:"00:00:00",videoProgressWidth:0});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.voiceProgressClick=function(e){e.persist(),e.stopPropagation();var t=n.state.oVideo,o=parseInt(e.nativeEvent.offsetX/n.voiceProgress.current.offsetWidth*100),r=o/100;console.log(t,r),t.volume=r,n.setState({muteState:0===r,voiceProgressWidth:o,voiceVolume:r})},n.videoProgressMove=function(e){if(e.persist(),!n.state.videoProgressTopClick){var t=e.nativeEvent.offsetX/n.videoProgress.current.offsetWidth*n.state.oVideo.duration,o=Object(b.E)(t),r="".concat(o.hour,":").concat(o.minute,":").concat(o.second),i=t>n.state.oVideo.currentTime,a=t/n.state.oVideo.duration*100,s=e.nativeEvent.offsetX+"px";n.setState({hoverTime:r,hoverLineState:!0,hoverTimeState:!0,hoverLineColor:i,hoverTimeWidth:a,hoverTimeLeft:s})}},n.videoProgressTopMove=function(e){e.stopPropagation();var t=n.state.videoProgressWidth/100*n.videoProgress.current.clientWidth+"px",o=n.state.currentTime;n.setState({hoverLineState:!1,hoverTimeState:!0,hoverTimeLeft:t,hoverTime:o})},n.videoProgressLeave=function(e){n.setState({hoverLineState:!1,hoverTimeState:!1})},n.videoProgressClick=function(){var e=Object(l.a)(c.a.mark(function e(t){var o,r,i,a,s,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.persist(),t.stopPropagation(),e.next=4,n.setState({videoProgressTopClick:!1});case 4:return o=t.nativeEvent.offsetX/n.videoProgress.current.offsetWidth*n.state.oVideo.duration,n.state.oVideo.currentTime=o,r=Object(b.E)(o),e.next=9,n.setState({currentTime:"".concat(r.hour,":").concat(r.minute,":").concat(r.second)});case 9:i=Object(b.E)(n.state.totalSecond-n.state.oVideo.currentTime),a="".concat(i.hour,":").concat(i.minute,":").concat(i.second),s=o/n.state.oVideo.duration*100,l=n.state.playState,n.setState({residueTime:a,videoProgressWidth:s,delayState:l});case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.playOrPause=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.stopPropagation(),!n.state.playState){e.next=7;break}return n.state.oVideo.pause(),e.next=5,n.setState({delayState:!1});case 5:e.next=8;break;case 7:n.state.oVideo.play();case 8:n.setState({playState:!n.state.playState}),n.userMover();case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.userMover=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({controlState:!0});case 2:clearTimeout(n.state.timer),n.setState({timer:setTimeout(function(){n.setState({controlState:!1})},3e3)});case 4:case"end":return e.stop()}},e)})),n.userLeave=function(){clearTimeout(n.state.timer),n.setState({controlState:!1})},n.controlHover=function(e){e.stopPropagation(),clearTimeout(n.state.timer),n.setState({controlState:!0})},n.videoProgressMousedown=function(e){e.stopPropagation(),t.stx=e.clientX-e.target.offsetLeft,t.sty=e.clientY-e.target.offsetTop,n.setState({videoProgressTopClick:!0})},n.videoProgressMouseup=function(){var e=Object(l.a)(c.a.mark(function e(t){var o,r,i,a,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),!n.state.videoProgressTopClick){e.next=11;break}return e.next=4,n.setState({videoProgressTopClick:!1});case 4:n.state.oVideo.currentTime=n.state.videoProgressWidth/100*n.state.oVideo.duration,o=Object(b.E)(n.state.oVideo.currentTime),r="".concat(o.hour,":").concat(o.minute,":").concat(o.second),i=Object(b.E)(n.state.totalSecond-n.state.oVideo.currentTime),a="".concat(i.hour,":").concat(i.minute,":").concat(i.second),s=n.state.playState,n.setState({currentTime:r,residueTime:a,delayState:s});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.muteControl=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({muteState:!n.state.muteState});case 2:if(!n.state.muteState){e.next=8;break}return n.state.oVideo.volume=0,e.next=6,n.setState({voiceProgressWidth:0});case 6:e.next=11;break;case 8:return n.state.oVideo.volume=n.state.voiceVolume,e.next=11,n.setState({voiceProgressWidth:100*n.voiceVolume});case 11:case"end":return e.stop()}},e)})),n.settingSpeed=function(){var e=Object(l.a)(c.a.mark(function e(t){var o,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(o=n.state.speedList).forEach(function(e){e.select=!1}),o[t].select=!0,r=o[t].speed,n.state.oVideo.playbackRate=r,e.next=7,n.setState({speedList:o,defaultSpeed:r});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.fullscreenControl=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({fullscreen:!n.state.fullscreen});case 2:n.state.fullscreen?Object(b.H)(n.videoOutbox.current):Object(b.s)();case 3:case"end":return e.stop()}},e)})),n.videoOutbox=g.a.createRef(),n.voiceProgress=g.a.createRef(),n.videoProgress=g.a.createRef(),n.currentTime=g.a.createRef(),n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.loadingState,o=t.delayState,r=t.playState,i=t.controlState,s=(t.timer,t.voiceTimer,t.muteState),c=t.fullscreen,l=t.voiceAddReduce,d=(t.oVideo,t.totalSecond,t.totalTime,t.currentTime),u=t.residueTime,m=t.hoverTime,f=(t.bufferTime,t.videoProgressWidth),v=t.videoBufferWidth,p=t.voiceProgressWidth,b=t.errorPlay,x=(t.videoProgressTopClick,t.speedList),k=t.defaultSpeed,w=t.hoverTimeWidth,P=t.hoverLineColor,T=t.hoverLineState,E=t.hoverTimeState,_=t.hoverTimeLeft,O=this.props.src;return g.a.createElement("section",{ref:this.videoOutbox,id:"video_tool"},g.a.createElement("figure",{onMouseLeave:this.userLeave,onMouseMove:this.userMover},g.a.createElement("figcaption",{style:{color:"#fff"}},g.a.createElement("img",{src:y.a,alt:""})),g.a.createElement("div",{style:{display:n?"none":"block"},className:"weblink-video-box"},g.a.createElement("video",{onError:function(t){e.setState({errorPlay:!0})},onCanPlay:function(t){return e.canPlay(t)},src:O,onTimeUpdate:function(t){return e.timeUpdate(t)},onEnded:function(t){return e.videoEnded(t)}})),b?g.a.createElement("div",{className:"playError"},"\u89c6\u9891\u64ad\u653e\u9519\u8bef"):g.a.createElement("div",{style:{background:"#f7fcfe url(".concat(S.a,") no-repeat center"),display:n?"block":"none"},className:"loading"}),g.a.createElement(h.a,{in:o,timeout:300,unmountOnExit:!0,classNames:{enterActive:"animate__animated animate__fadeIn",exitActive:"animate__animated animate__fadeOut"}},g.a.createElement("div",{className:"video-delay"},g.a.createElement("i",{className:"weblink-uniE96B"}))),g.a.createElement(h.a,{in:l,timeout:300,unmountOnExit:!0,classNames:{enterActive:"animate__animated animate__fadeIn",exitActive:"animate__animated animate__fadeOut"}},g.a.createElement("div",{className:"voice-add-reduce"},s?g.a.createElement("i",{style:{fontSize:"30px"},className:"weblink-uniE96A"}):g.a.createElement("i",{style:{fontSize:"30px"},className:"weblink-16"}),g.a.createElement("span",{style:{display:n?"none":"block"}}," ",p,"%"))),g.a.createElement("div",{className:"control-box ".concat(i?"user-hover":""),onClick:this.playOrPause},r?g.a.createElement("div",{key:"pause",className:"playState"},g.a.createElement("i",{className:"weblink-18"})):g.a.createElement("div",{key:"play",className:"playState"},g.a.createElement("i",{className:"weblink-17"})),g.a.createElement("div",{onMouseEnter:function(t){return e.controlHover(t)},onClick:function(e){return e.stopPropagation()},className:"control"},g.a.createElement("div",{className:"voice",onClick:this.muteControl},g.a.createElement("div",{ref:this.voiceProgress,className:"progress",onClick:function(t){return e.voiceProgressClick(t)}},g.a.createElement("div",{style:{width:p+"%"}},g.a.createElement("span",{onClick:function(e){return e.stopPropagation()}}))),s?g.a.createElement("i",{title:"\u9759\u97f3",style:{fontSize:"20px"},className:"weblink-uniE96A"}):g.a.createElement("i",{title:"\u5f53\u524d\u97f3\u91cf ".concat(p,"'%'"),style:{fontSize:"20px"},className:"weblink-16"})),g.a.createElement("span",{className:"time"},d),g.a.createElement("div",{id:"videoProgress",className:"progress",ref:this.videoProgress,onClick:function(t){return e.videoProgressClick(t)},onMouseMove:function(t){return e.videoProgressMove(t)},onMouseLeave:function(t){return e.videoProgressLeave(t)}},g.a.createElement("div",{className:"time buffer-time",style:{width:v+"%"}}),g.a.createElement("div",{ref:this.currentTime,className:"time current-time",style:{width:f+"%"}},g.a.createElement("span",{onClick:function(e){return e.stopPropagation()},onMouseDown:function(t){return e.videoProgressMousedown(t)},onMouseMove:function(t){return e.videoProgressTopMove(t)},onMouseEnter:function(t){return e.videoProgressTopMove(t)}})),g.a.createElement(h.a,{in:E,timeout:300,unmountOnExit:!0,classNames:{enterActive:"animate__animated animate__fadeIn",exitActive:"animate__animated animate__fadeOut"}},g.a.createElement("div",{onClick:function(e){return e.stopPropagation()},onMouseMove:function(e){return e.stopPropagation()},className:"hover-time",style:{left:_}},g.a.createElement("span",null,m))),T&&g.a.createElement("div",{className:"hover-time-line ".concat(P?"white":"black"),style:{width:w+"%"}})),g.a.createElement("span",{className:"time"},"-",u),g.a.createElement("div",{className:"speed-box"},g.a.createElement("span",null,"x",k,"\u500d\u901f"),g.a.createElement("div",{className:"speed-list"},g.a.createElement("ul",null,x.map(function(t,n){return g.a.createElement("li",{key:n,className:"".concat(t.select?"select":""),onClick:function(){return e.settingSpeed(n)}},t.speed,"x")})))),g.a.createElement("div",{className:"client",onClick:this.fullscreenControl},c?g.a.createElement(a.a,{title:"\u9000\u51fa\u5168\u5c4f",style:{fontSize:"20px"},type:"fullscreen-exit"}):g.a.createElement(a.a,{title:"\u5168\u5c4f",style:{fontSize:"20px"},type:"fullscreen"}))))))}},{key:"componentDidMount",value:function(){this.userMover(),this.keyup(),this.isFullScreen(),this.mouseMove()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.videoProgressMouseup),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("keyup",this.onKeyUp),this.state.oVideo&&!this.state.oVideo.paused&&this.playOrPause()}}]),t}(p.Component),r.defaultProps={},o=i))||o;t.default=P},2075:function(e,t,n){var o=n(2076);"string"===typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(86)(o,r);o.locals&&(e.exports=o.locals)},2076:function(e,t,n){(e.exports=n(85)(!1)).push([e.i,'#video_tool {\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  overflow: hidden;\n}\n#video_tool > figure {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #000;\n}\n#video_tool > figure >.playError {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff0f6;\n  font-weight: bold;\n  z-index: 3;\n}\n#video_tool > figure > .loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  -webkit-background-size: 30rem;\n  background-size: 30rem;\n  z-index: 3;\n}\n#video_tool > figure > .video-delay {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -3rem;\n  margin-top: -3rem;\n  width: 6rem;\n  height: 6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 4rem;\n  animation: rotate 1s linear infinite;\n}\n#video_tool > figure > .voice-add-reduce {\n  position: absolute;\n  left: 8%;\n  top: 15%;\n  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  width: 9rem;\n  height: 6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 2.2rem;\n}\n#video_tool > figure > .control-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  background: -webkit-linear-gradient(top, rgba(255,255,255,0), rgba(0,0,0,0.5));\n  background: -o-linear-gradient(bottom, rgba(255,255,255,0), rgba(0,0,0,0.5));\n  background: -moz-linear-gradient(bottom, rgba(255,255,255,0), rgba(0,0,0,0.5));\n  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.5));\n  transform: translateY(3rem);\n  opacity: 0;\n  z-index: 2;\n  transition: all 0.5s;\n}\n#video_tool > figure > .control-box > .playState {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -3rem;\n  margin-top: -3rem;\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4rem;\n  color: #fff;\n  text-shadow: 0 0 0.2rem #fff;\n  background: rgba(0,0,0,0);\n}\n#video_tool > figure > .control-box > .control {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n}\n#video_tool > figure > .control-box > .control > .time {\n  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  padding: 0 1rem;\n}\n#video_tool > figure > .control-box > .control > .voice,\n#video_tool > figure > .control-box > .control > .client,\n#video_tool > figure > .control-box > .control >.speed-box {\n  padding: 1rem;\n}\n#video_tool > figure > .control-box > .control >.speed-box {\n  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  position: relative;\n}\n#video_tool > figure > .control-box > .control >.speed-box >.speed-list {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -4rem;\n  width: 8rem;\n  height: 0;\n  overflow: hidden;\n  border-radius: 0.6rem;\n  background: rgba(0,0,0,0.5);\n  opacity: 0;\n  transition: all 0.3s;\n}\n#video_tool > figure > .control-box > .control >.speed-box >.speed-list >ul {\n  position: relative;\n}\n#video_tool > figure > .control-box > .control >.speed-box >.speed-list >ul >li {\n  position: relative;\n  line-height: 2.6rem;\n  color: #fff;\n  text-align: center;\n  transition: all 0.3s;\n}\n#video_tool > figure > .control-box > .control >.speed-box >.speed-list >ul >li.select {\n  background: rgba(255,255,255,0.3);\n}\n#video_tool > figure > .control-box > .control >.speed-box >.speed-list >ul >li:hover {\n  background: rgba(255,255,255,0.3);\n}\n#video_tool > figure > .control-box > .control >.speed-box:hover>.speed-list {\n  height: 13rem;\n  opacity: 1;\n}\n#video_tool > figure > .control-box > .control > .voice {\n  position: relative;\n}\n#video_tool > figure > .control-box > .control > .voice > .progress {\n  position: absolute;\n  bottom: 3.8rem;\n  left: 50%;\n  margin-left: -0.2em;\n  width: 0;\n  height: 0.4rem;\n  border-radius: 0.2rem;\n  transform: rotate(-90deg);\n  transform-origin: left center;\n  background: rgba(204,204,204,0.6);\n  opacity: 0;\n  transition: all 0.1s;\n}\n#video_tool > figure > .control-box > .control > .voice > .progress > div {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 30%;\n  height: 100%;\n  background: #fff;\n  border-radius: 0.2rem;\n  transition: all 0.3s;\n}\n#video_tool > figure > .control-box > .control > .voice > .progress > div > span {\n  position: absolute;\n  right: -0.5rem;\n  top: 50%;\n  margin-top: -0.5rem;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n  transition: all 0.3s;\n}\n#video_tool > figure > .control-box > .control > .voice > .progress > div > span:hover {\n  transform: scale(1.2);\n}\n#video_tool > figure > .control-box > .control > .voice:hover > .progress {\n  width: 6rem;\n  opacity: 1;\n}\n#video_tool > figure > .control-box > .control > .progress {\n  position: relative;\n  width: 60%;\n  height: 1rem;\n  border-radius: 0.2rem;\n}\n#video_tool > figure > .control-box > .control > .progress > div.time {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -0.2rem;\n  height: 0.4rem;\n  background: rgba(204,204,204,0.6);\n  border-radius: 0.2rem;\n  transition: all 0.3s;\n}\n#video_tool > figure > .control-box > .control > .progress >div.hover-time {\n  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  position: absolute;\n  bottom: 150%;\n  left: 0;\n  transform: translateX(-50%);\n  transition: all 0.2s;\n}\n#video_tool > figure > .control-box > .control > .progress >div.hover-time-line {\n  position: absolute;\n  top: 50%;\n  margin-top: -0.2rem;\n  height: 0.4rem;\n  background: transparent;\n  z-index: 2;\n}\n#video_tool > figure > .control-box > .control > .progress >div.hover-time-line.black {\n  border-right: 0.15rem solid #000;\n}\n#video_tool > figure > .control-box > .control > .progress >div.hover-time-line.white {\n  border-right: 0.15rem solid #fff;\n}\n#video_tool > figure > .control-box > .control > .progress > div.buffer-time {\n  background: #b3b3b3;\n}\n#video_tool > figure > .control-box > .control > .progress > div.current-time {\n  background: #fff;\n}\n#video_tool > figure > .control-box > .control > .progress > div.current-time > span {\n  position: absolute;\n  right: -0.2rem;\n  top: 50%;\n  margin-top: -0.2rem;\n  width: 0.4rem;\n  height: 0.4rem;\n  background: #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n  transition: all 0.3s;\n  opacity: 0;\n  z-index: 3;\n}\n#video_tool > figure > .control-box > .control > .progress > div.current-time > span:hover {\n  transform: scale(1.2);\n}\n#video_tool > figure > .control-box > .control:hover > .progress > div > span {\n  opacity: 1;\n  right: -0.5rem;\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.5rem;\n}\n#video_tool > figure > .control-box.user-hover {\n  transform: translateY(0);\n  opacity: 1;\n}\n#video_tool > figure > figcaption {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  background: transparent;\n  font-size: 1.6rem;\n  color: #fff;\n  display: inline-block;\n  height: 3rem;\n  border-radius: 1.5rem;\n  padding: 0 1rem;\n  line-height: 3rem;\n  z-index: 1;\n}\n#video_tool > figure > figcaption >img {\n  width: 3rem;\n  height: 3rem;\n  object-fit: contain;\n}\n#video_tool > figure > .weblink-video-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  overflow: hidden;\n}\n#video_tool > figure > .weblink-video-box > video {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n/* \u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u8fdb\u5165\u548c\u79bb\u5f00\u52a8\u753b */\n/* \u8bbe\u7f6e\u6301\u7eed\u65f6\u95f4\u548c\u52a8\u753b\u51fd\u6570 */\n.slide-fade-enter-active {\n  transition: all 0.3s ease;\n}\n.slide-fade-leave-active {\n  transition: all 0.3s ease;\n}\n.slide-fade-enter,\n.slide-fade-leave-to {\n  transform: scale(1.2);\n  opacity: 0;\n}\nvideo::-webkit-media-controls,\nvideo::-moz-media-controls,\nvideo::-webkit-media-controls-enclosure {\n  display: none !important;\n}\nvideo::-webkit-media-controls-panel,\nvideo::-webkit-media-controls-panel-container,\nvideo::-webkit-media-controls-start-playback-button {\n  display: none !important;\n  -webkit-appearance: none;\n}\n@-moz-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n',""])},2077:function(e,t,n){e.exports=n.p+"static/media/loading2.58b75169.gif"}}]);