(window.webpackJsonpjianghu=window.webpackJsonpjianghu||[]).push([[12],{1207:function(e,n,t){"use strict";t.r(n);t(111);var i=t(4),a=t(28),o=t(29),l=t(31),r=t(30),s=t(32),c=t(0),d=t.n(c),p=(t(2073),t(890)),f=function(e){function n(){var e,t;Object(a.a)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(o)))).state={display:"none"},t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this,n=this.state.display,t=this.props,a=t.visible,o=(t.onOk,t.onCancel),l=t.title;return d.a.createElement("div",{style:{display:n}},d.a.createElement(p.a,{in:a,timeout:500,classNames:{enterActive:"animate__animated animate__fadeIn",exitActive:"animate__animated animate__fadeOut"},onEnter:function(){e.setState({display:"block"})},onExited:function(){e.setState({display:"none"})}},d.a.createElement("section",{id:"file_prev_box"},d.a.createElement("div",{className:"title"},d.a.createElement("div",{onClick:function(){return o()},className:"close"},d.a.createElement(i.a,{style:{fontSize:"2rem"},type:"close"})),d.a.createElement("div",{className:"info ellipsis"},l)),d.a.createElement("section",{className:"middle"},this.props.children),d.a.createElement("div",{className:"bottom"}))))}}]),n}(c.Component);f.defaultProps={},n.default=f},2073:function(e,n,t){var i=t(2074);"string"===typeof i&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};t(86)(i,a);i.locals&&(e.exports=i.locals)},2074:function(e,n,t){(e.exports=t(85)(!1)).push([e.i,"#file_prev_box {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255,255,255,0.7);\n  backdrop-filter: saturate(150%) blur(0.8rem);\n  z-index: 1002;\n  overflow: hidden;\n}\n#file_prev_box >.title {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 6rem;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#file_prev_box >.title >div {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-weight: bold;\n}\n#file_prev_box >.title >div.close {\n  position: absolute;\n  right: 2rem;\n  top: 0;\n  cursor: pointer;\n}\n#file_prev_box >.middle {\n  position: absolute;\n  top: 6rem;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 12rem);\n  padding: 2rem 14rem;\n  overflow: auto;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n}\n#file_prev_box >.bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 6rem;\n}\n",""])}}]);