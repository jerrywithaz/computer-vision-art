(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{305:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),i=n.n(r),c=n(25),o=n.n(c),u=n(67),l=n.n(u),s=n(30),f=n(161),b=n(83),h=n(60),d=n(27),j=n(28),g=n(314);function O(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"]);return O=function(){return e},e}function v(){var e=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n"]);return v=function(){return e},e}var m=g.a.Content,x=Object(j.b)(g.a)(v());Object(j.b)(m)(O());function p(){var e=Object(d.a)(["\n    html, \n    body,\n    #root {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n    }\n    body {\n        margin: 0px;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"]);return p=function(){return e},e}var y=Object(j.a)(p()),w=n(110),C=n.n(w);var k=function(){var e=Object(r.useRef)(!1),t=Object(r.useCallback)((function(){return e.current}),[]);return Object(r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t};var L=function(){var e=k();return function(t){return new Promise((function(n,a){t.then((function(t){e()&&n(t)})).catch((function(t){e()&&a(t)}))}))}};var E=function(){var e=L();return Object(r.useCallback)(function(){var t=Object(b.a)(l.a.mark((function t(n){var a,r,i,c,o,u,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(C.a.post("https://bxjc2f8yt0.execute-api.us-east-2.amazonaws.com/calculate_canny_edges",n));case 3:return a=t.sent,r=a.data,i=r.url,c=r.width,o=r.height,t.next=10,e(C.a.get(i));case 10:return u=t.sent,s=u.data.points,t.abrupt("return",{points:s,width:c,height:o});case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",{points:[],width:0,height:0});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),[e])};var S=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},R=n(315),I=n(111),T=n(99),F=n(162),U=n(154),V=n.n(U),D=n(36);var z=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),r=new Uint8Array(a),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new Blob([a],{type:n})};var A=function(e,t){var n=z(e),a=document.createElement("a");a.download=t,a.href=URL.createObjectURL(n),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href)},G=i.a.createContext(void 0);function M(){var e=Object(r.useContext)(G);if(void 0===e)throw new Error("");return e}var Y=function(e){var t=e.children,n=Object(r.useState)(null),i=Object(D.a)(n,2),c=i[0],o=i[1],u=Object(r.useState)(null),l=Object(D.a)(u,2),s=l[0],f=l[1],b=Object(r.useState)({width:0,height:0}),h=Object(D.a)(b,2),d=h[0],j=h[1],g=Object(r.useState)(null),O=Object(D.a)(g,2),v=O[0],m=O[1],x=d.width,p=d.height,y={setURI:o,setStageRef:m,uri:c,setDimensions:j,downloadImage:function(){if(v&&c&&x&&p){var e=v.clone(),t=e.find("Group").toArray()[0];e.width(x),e.height(p),t.scale({x:1,y:1}),t.x(0),t.y(0);var n=e.toDataURL({x:0,y:0,width:x,height:p,mimeType:"image/png",quality:1});A(n,"image.png")}},width:x,height:p,removeImage:function(){o(null),j({width:0,height:0})},image:s};return Object(r.useEffect)((function(){if(c){var e=new Image;e.onload=function(){f(e)},e.src=c}}),[c]),Object(a.jsx)(G.Provider,{value:y,children:t})},P=n(311),W=n(308);function B(){var e=Object(d.a)(["\n    width: 100%;\n"]);return B=function(){return e},e}function H(){var e=Object(d.a)(["\n    && {\n        color: #ffffff;\n        margin: 0px;\n        font-size: 24px;\n    }\n"]);return H=function(){return e},e}function X(){var e=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return X=function(){return e},e}var q=g.a.Header,J=Object(j.b)(q)(X()),Z=Object(j.b)(P.a.Title)(H()),_=Object(j.b)(W.a)(B()),N=function(){var e=V()(),t=1===Object.entries(e).filter((function(e){return!0===e[1]&&"xs"===e[0]})).length,n=M(),r=n.downloadImage,i=n.removeImage,c=n.uri;return Object(a.jsx)(J,{children:Object(a.jsxs)(_,{align:"middle",justify:"space-between",children:[Object(a.jsx)(Z,{level:1,children:"JerryWithaZ"}),Object(a.jsxs)(R.b,{size:[8,0],children:[c&&Object(a.jsx)(I.a,{type:"default",onClick:i,icon:t?Object(a.jsx)(T.a,{color:"#ffffff"}):void 0,children:t?null:"Remove Image"}),Object(a.jsx)(I.a,{type:"primary",onClick:r,icon:t?Object(a.jsx)(F.a,{color:"#ffffff"}):void 0,children:t?null:"Download Image"})]})]})})},K=n(82),Q=n(159),$=n(310),ee=n(317);var te=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e})),t.current};var ne=function(e,t){var n=te(e);Object(r.useEffect)((function(){void 0!==n&&n!==e&&t(n,e)}),[e,n,t])};var ae=function(e,t,n,a){var r=Math.min(n/e,a/t);return{ratio:r,width:e*r,height:t*r}};var re=function(){var e=Object(r.useRef)(null),t=Object(r.useState)({x:0,y:0,scale:1,width:0,height:0,scaleFactor:1.25,mouse:{x:0,y:0,dragging:!1}}),n=Object(D.a)(t,2),a=n[0],i=n[1],c=Object(r.useCallback)((function(e){var t=a.mouse,n=a.x,r=a.y,c=e.clientX-t.x+n,o=e.clientY-t.y+r;e.preventDefault(),i(Object(s.a)(Object(s.a)({},a),{},{mouse:{dragging:!0,x:e.clientX,y:e.clientY},x:c,y:o}))}),[a]),o=Object(r.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.scale,r=a.scaleFactor,c=n;t?c=1:e?c*=r:c>.1&&(c/=r),i(Object(s.a)(Object(s.a)({},a),{},{scale:c}))}),[a]),u=Object(r.useCallback)((function(e){i(Object(s.a)(Object(s.a)({},a),{},{mouse:{x:e.clientX,y:e.clientY,dragging:!0}}))}),[a]),l=Object(r.useCallback)((function(e){requestAnimationFrame((function(){var t=a.mouse.dragging,n=1===e.buttons;t&&n&&c(e)}))}),[c,a.mouse.dragging]),f=Object(r.useCallback)((function(e){i(Object(s.a)(Object(s.a)({},a),{},{mouse:{x:0,y:0,dragging:!1}}))}),[a]),b=Object(r.useCallback)((function(t){requestAnimationFrame((function(){if(e.current&&e.current.parentElement){var n=a.scale,r=a.x,c=a.y,o=a.scaleFactor,u=t.pageX-e.current.parentElement.offsetLeft,l=t.pageY-e.current.parentElement.offsetTop,f={x:u/n-r/n,y:l/n-c/n},b=t.deltaY>0?n*o:n/o,h={x:-(f.x-u/b)*b,y:-(f.y-l/b)*b};i(Object(s.a)(Object(s.a)({},a),{},{x:h.x,y:h.y,scale:b}))}}))}),[a]),h=Object(r.useCallback)((function(){e.current&&(e.current.addEventListener("wheel",b),e.current.addEventListener("mousedown",u),e.current.addEventListener("mousemove",l),e.current.addEventListener("mouseup",f))}),[u,l,f,b]),d=Object(r.useCallback)((function(){e.current&&(e.current.removeEventListener("wheel",b),e.current.removeEventListener("mousedown",u),e.current.removeEventListener("mousemove",l),e.current.removeEventListener("mouseup",f))}),[u,l,f,b]),j=Object(r.useCallback)((function(t){t&&(e.current=t,h())}),[h]);return Object(r.useEffect)((function(){return function(){d()}}),[d]),Object(s.a)({setZoomRef:j,zoom:o,pan:c,fitToContainer:function(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(e.current){var u=void 0!==c?c:e.current.clientWidth,l=void 0!==o?o:e.current.clientHeight,f=ae(u,l,t,n),b=f.width,h=f.height,d=b/u,j=d>1?1:d,g=d>1?u:b,O=d>1?l:h,v=r?(t-g)/2:0,m=r?(n-O)/2:0;i(Object(s.a)(Object(s.a)({},a),{},{scale:j,width:g,height:O,x:v,y:m}))}}},a)};function ie(){var e=Object(d.a)(["\n    width: 100%;\n    flex: 1;\n"]);return ie=function(){return e},e}var ce=j.b.div(ie()),oe=function(e){var t=e.children,n=e.width,i=e.height,c=Object(r.useState)(0),o=Object(D.a)(c,2),u=o[0],l=o[1],s=Object(r.useState)(0),f=Object(D.a)(s,2),b=f[0],d=f[1],j=M(),g=j.setStageRef,O=j.image,v=re(),m=v.scale,x=v.x,p=v.y,y=v.setZoomRef,w=v.fitToContainer,C=Object(r.useCallback)((function(e){e&&(l(e.clientWidth),d(e.clientHeight),y(e))}),[y]);return ne(O,(function(e,t){t&&w(u,b,!0,t.naturalWidth,t.naturalHeight)})),Object(a.jsx)(ce,{ref:C,children:Object(a.jsx)(h.e,{height:b,width:u,ref:g,children:Object(a.jsx)(h.b,{children:Object(a.jsxs)(h.a,{height:i*m,width:n*m,scale:{x:m,y:m},x:x,y:p,children:[Object(a.jsx)(h.d,{x:0,y:0,width:n,height:i,fillLinearGradientStartPoint:{x:0,y:i/2},fillLinearGradientEndPoint:{x:n,y:i/2},fillLinearGradientColorStops:[0,"#1D2951",1,"#000000"]}),t]})})})})};function ue(){var e=Object(d.a)(["\n    padding: 32px;\n"]);return ue=function(){return e},e}function le(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n"]);return le=function(){return e},e}function se(){var e=Object(d.a)(["\n    height: 100%;\n"]);return se=function(){return e},e}var fe=Object(j.b)(g.a)(se()),be=Object(j.b)(g.a.Content)(le()),he=j.b.div(ue());function de(){var e=Object(d.a)(["\n    padding: 32px 32px;\n    &.ant-layout-sider-collapsed {\n        padding: 0px;\n    }\n    .ant-layout-sider-zero-width-trigger {\n        top: 0px;\n    }\n"]);return de=function(){return e},e}var je=g.a.Sider,ge=Object(j.b)(je)(de()),Oe=n(312),ve=n(316);function me(){var e=Object(d.a)(["\n    display: flex;\n    align-items: center;\n"]);return me=function(){return e},e}var xe=j.b.div(me()),pe=function(e){var t=e.initialValue,n=e.value,r=e.onChange,i=e.name;return Object(a.jsx)(xe,{as:Oe.a.Item,label:i,children:Object(a.jsx)(ve.a,{defaultChecked:t,checked:n,onChange:r})})},ye=n(94),we=n.n(ye),Ce=n(313),ke=function(e){var t=e.name,n=e.initialValue,i=e.onChange,c=e.min,o=e.max,u=Object(r.useState)(n),l=Object(D.a)(u,2),s=l[0],f=l[1];return Object(a.jsx)(Oe.a.Item,{label:"".concat(t," (").concat(s,"/").concat(o,")"),labelCol:{span:24},children:Object(a.jsx)(Ce.a,{defaultValue:n,value:s,onChange:f,onAfterChange:we()(i,500),min:c,max:o})})},Le=function(e){var t=e.tools,n=e.onToolChange,r=e.values;return Object(a.jsx)(ge,{width:300,theme:"light",breakpoint:"md",collapsedWidth:"0",children:t.map((function(e){return"toggle"===e.type?Object(a.jsx)(pe,{initialValue:e.initialValue,onChange:function(t){return n(e.key,t)},value:r[e.key],name:e.name},e.key):"range"===e.type?Object(a.jsx)(ke,{initialValue:e.initialValue,onChange:function(t){return n(e.key,t)},value:r[e.key],name:e.name,max:e.max,min:e.min},e.key):null}))})},Ee=n(309);function Se(){var e=Object(d.a)(["\n    position: absolute;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background: #f0f2f5;\n"]);return Se=function(){return e},e}var Re=j.b.div(Se()),Ie=function(){return Object(a.jsxs)(Re,{children:[Object(a.jsx)(Ee.a,{size:"large"}),Object(a.jsx)(P.a.Text,{children:"Generating your image.."})]})};var Te=function(e){var t=e.tools,n=e.createImage,i=M(),c=i.setURI,o=i.setDimensions,u=i.width,l=i.height,f=i.uri,b=Object(r.useState)(!1),h=Object(D.a)(b,2),d=h[0],j=h[1],g=Object(r.useState)({}),O=Object(D.a)(g,2),v=O[0],m=O[1],x=Object(r.useState)(null),p=Object(D.a)(x,2),y=p[0],w=p[1],C=Object(r.useCallback)((function(e,t){m(Object(s.a)(Object(s.a)({},v),{},Object(K.a)({},e,t)))}),[v]),k=Object(r.useCallback)((function(e){j(!0),n(Object(s.a)(Object(s.a)({},v),{},{url:e})).then((function(e){var t=e.width,n=e.height,a=e.image;o({width:t,height:n}),w(a),j(!1)})).catch((function(){Q.b.error("There was an error creating your image"),j(!1)}))}),[n,o,v]);return Object(r.useEffect)((function(){f&&k(f)}),[f,v,k]),Object(a.jsxs)(fe,{children:[Object(a.jsx)(Le,{tools:t,onToolChange:C,values:v}),Object(a.jsxs)(be,{children:[f?Object(a.jsx)(oe,{width:u,height:l,children:y}):Object(a.jsx)(he,{children:Object(a.jsx)($.a,{accept:"image/*",onChange:function(e){e.file.originFileObj instanceof File?function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}(e.file.originFileObj,(function(e){"string"===typeof e?c(e):Q.b.error("You can only upload images.")})):Q.b.error("You can only upload images.")},children:Object(a.jsx)(I.a,{icon:Object(a.jsx)(ee.a,{}),children:"Click to Upload an Image"})})}),d&&Object(a.jsx)(Ie,{})]})]})};var Fe=function(){var e=E(),t=Object(r.useCallback)(function(){var t=Object(b.a)(l.a.mark((function t(n){var r,i,c,o,u,b,d,j,g,O,v,m,x;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.url,i=Object(f.a)(n,["url"]),t.next=3,e(Object(s.a)({url:r,minThreshold:50,maxThreshold:100,useL2Gradient:!0,useRigidLines:!0},i));case 3:for(c=t.sent,o=c.points,u=c.width,b=c.height,d=[],j=0;j<o.length;++j)g=o[j],O=S(0,255),v=S(0,255),m=S(0,255),x="rgb(".concat(O,", ").concat(v,", ").concat(m,")"),d.push(Object(a.jsx)(h.c,{points:g,stroke:x,strokeWidth:2},j));return t.abrupt("return",{width:u,height:b,image:d});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(a.jsxs)(x,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(N,{}),Object(a.jsx)(Te,{tools:[{name:"Min Threshold",type:"range",key:"minThreshold",initialValue:50,min:0,max:100},{name:"Max Threshold",type:"range",key:"maxThreshold",initialValue:100,min:0,max:200},{name:"Use L2 Gradient",type:"toggle",key:"useL2Gradient",initialValue:!0},{name:"Use Rigid Lines",type:"toggle",key:"useRigidLines",initialValue:!0}],createImage:t})]})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};n(304);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Y,{children:Object(a.jsx)(Fe,{})})}),document.getElementById("root")),Ue()}},[[305,1,2]]]);
//# sourceMappingURL=main.2311ef27.chunk.js.map