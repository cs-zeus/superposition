(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7322:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r=n(7820),i=n(9008),a=n(2809),o=n(7776),c=n(8589),s=n(7294);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n(5893);var h="simulation-pane",f=(0,r.Z)("div",{target:"e1a7nsyz0"})({name:"kau2wg",styles:"background-color:#303a52;width:100%"}),y=function(t){var e=t.charges,n=t.testCharge,r=t.onChargePositionUpdate,i=t.appConfig;return function(t,e,n,r){var i,a,d=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],l=64,h=[],f=function(t){var e="Test Charge"===t.name,n=t.q>0,o=i.control(t.position.x,t.position.y);o.stroke="none",e&&(a=o);var s=i.circle(0,0,20);e&&s.classList.add("test-charge"),s.addDependency(o),s.update=function(){this.cx=o.x,this.cy=o.y,r(u(u({},t),{},{position:(0,c.Zu)(o.x,o.y)}))};var d=i.text(0,0,n?"+":"-");d.addDependency(o),d.update=function(){n?(this.x=o.x-11.5,this.y=o.y+13.5):(this.x=o.x-5,this.y=o.y+12)},n?(s.classList.add("positive"),d.classList.add("positive")):(s.classList.add("negative"),d.classList.add("negative"));var l=i.text(150,150,t.name);l.classList.add("charge-name"),l.addDependency(o),l.update=function(){this.x=e?o.x-42:o.x-30,this.y=o.y+40};var f=i.text(150,150,"");if(f.addDependency(o),f.update=function(){this.x=o.x-35,this.y=o.y+60,this.contents="".concat(t.q,"n - <").concat(o.x/50,",").concat(-o.y/50,">")},!e){var y=i.line(o.x,o.y,a.x,a.y);y.addDependency(a),y.addDependency(o),y.update=function(){this.x1=o.x,this.y1=o.y,this.x2=a.x,this.y2=a.y};var p=i.text((y.x1+y.x2)/2,(y.y1+y.y2)/2,"r");p.addDependency(y),p.update=function(){this.x=(y.x1+y.x2)/2+10,this.y=(y.y1+y.y2)/2};var x=i.text((y.x1+y.x2)/2,(y.y1+y.y2)/2,"".concat(t.name.split(" ")[1],"T"));x.addDependency(y),x.classList.add("subscript"),x.update=function(){this.x=(y.x1+y.x2)/2+14,this.y=(y.y1+y.y2)/2+7};var g=i.path("");g.classList.add("arrow"),g.addDependency(a),g.addDependency(o),g.update=function(){var t=Math.atan2(a.y-o.y,a.x-o.x);this.d="M ".concat(a.x+10.4*Math.cos(t)," ").concat(a.y+10.4*Math.sin(t)+0,"\n    L ").concat(a.x+8*Math.cos(t-2*Math.PI/3)," ").concat(a.y+8*Math.sin(t-2*Math.PI/3)+0,"\n    L ").concat(a.x+8*Math.cos(t+2*Math.PI/3)," ").concat(a.y+8*Math.sin(t+2*Math.PI/3)+0,"\n              Z")}}h.push({pointCharge:o,position:t.position})},y=function(t){var e=50,n=50,r=Math.floor((i.width-2*l)/e/2),a=Math.floor((i.height-2*l)/n/2),o=i.line(-r*e,0,r*e,0),c=i.line(0,-a*n,0,a*n);i.rectangle(o.x1,c.y1,o.x2-o.x1,c.y2-c.y1);var s=i.marker(10,5,10,10);s.path("M 0 0 L 10 5 L 0 10 z"),s.setAttribute("orient","auto-start-reverse"),o.setAttribute("marker-end","url(#".concat(s.id,")")),o.setAttribute("marker-start","url(#".concat(s.id,")")),c.setAttribute("marker-end","url(#".concat(s.id,")")),c.setAttribute("marker-start","url(#".concat(s.id,")")),i.text(o.x2+16,o.y2,"x").setAttribute("alignment-baseline","middle"),i.text(c.x1,c.y1-16,"y").setAttribute("text-anchor","middle");for(var u=-r;u<=r;u++){var f=u*e,y=i.text(f,a*n+l/2,u.toString());y.style.textAnchor="middle",y.style.alignmentBaseline="middle",d&&(i.line(f,-a*n,f,a*n).style.strokeOpacity=".2")}for(var p=-a;p<=a;p++){var x=p*n,g=i.text(-r*n-l/2,x,(-1*p).toString());g.style.textAnchor="middle",g.style.alignmentBaseline="middle",d&&(i.line(-r*e,x,r*e,x).style.strokeOpacity=".2")}t.forEach((function(t){return t()})),h.forEach((function(t){t.pointCharge.constrainWithinBox(o.x1,c.y1,o.x2,c.y2);var r=t.pointCharge.constrain;t.pointCharge.constrain=function(t,i){var a=e*Math.round(i.x/e),o=n*Math.round(i.y/n),c=r({x:a,y:o},{x:a,y:o});return{x:c.x,y:c.y}},t.pointCharge.translate(t.position.x*e,t.position.y*n)}))};(0,s.useEffect)((function(){var r,a=document.getElementById(t);void 0!==i&&i.clear(),(i=new o.vj(t)).width=((null===a||void 0===a||null===(r=a.parentElement)||void 0===r?void 0:r.clientWidth)||1280)-2*l,i.height=(window.innerHeight||720)-2*l,i.originX=i.width/2+l,i.originY=i.height/2+l,i.width+=2*l,i.height+=2*l,i.style.overflow="visible",y([function(){return f(n)}]),y(e.map((function(t){return function(){return f(t)}})))}),[])}(h,e,n,r,i.hasGridLineEnabled),(0,l.jsx)(f,{id:h})};function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=n(1508);var v=(0,r.Z)("div",{target:"eyiv6d22"})({name:"11w03fx",styles:"display:flex;height:100vh;position:fixed;width:100%"}),m=(0,r.Z)("div",{target:"eyiv6d21"})({name:"137lc6a",styles:"flex:75"}),b=(0,r.Z)("div",{target:"eyiv6d20"})({name:"14qyhas",styles:"flex:25;overflow:auto"}),O=function(){var t=function(){var t=(0,s.useState)({hasGridLineEnabled:!0,isShowModal:!1}),e=t[0],n=t[1];return{appConfig:e,toggleGridLineHandler:function(){n((function(t){return x(x({},t),{},{hasGridLineEnabled:!t.hasGridLineEnabled})}))},openModalHandler:function(){n((function(t){return x(x({},t),{},{isShowModal:!0})}))},closeModalHandler:function(){n((function(t){return x(x({},t),{},{isShowModal:!1})}))}}}(),e=t.appConfig,n=(t.toggleGridLineHandler,t.openModalHandler,t.closeModalHandler,function(){var t=(0,s.useState)([{name:"Test Charge",position:{x:0,y:0},q:1},{name:"Charge 1",position:{x:1,y:1},q:-1},{name:"Charge 2",position:{x:1,y:2},q:1}]),e=t[0],n=t[1];return{pointCharges:e,addPointChargeHandler:function(t){n((function(e){return[].concat((0,g.Z)(e),[{name:"Charge ".concat(e.length+1),position:{x:0,y:0},q:t}])}))},editChargeHandler:function(t){n((function(e){return[].concat((0,g.Z)(e.filter((function(e){return e.name!==t.name}))),[t])}))},editPositionHandler:function(t){n((function(e){return[].concat((0,g.Z)(e.filter((function(e){return e.name!==t.name}))),[t])}))},removePointChargeHandler:function(t){n((function(e){return e.filter((function(e){return e.name!==t}))}))}}}()),r=n.pointCharges,a=(n.addPointChargeHandler,n.editChargeHandler,n.editPositionHandler);n.removePointChargeHandler;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.default,{children:[(0,l.jsx)("title",{children:"Superposition"}),(0,l.jsx)("meta",{name:"description",content:"A simulation for superposition principle in electric field and electric force."}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)(v,{children:[(0,l.jsx)(m,{children:(0,l.jsx)(y,{appConfig:e,charges:r.filter((function(t){return"Test Charge"!==t.name})),testCharge:r.filter((function(t){return"Test Charge"===t.name}))[0],onChargePositionUpdate:a})}),(0,l.jsx)(b,{children:"ConfigurationPane"})]})]})}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7322)}])}},function(t){t.O(0,[466,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);