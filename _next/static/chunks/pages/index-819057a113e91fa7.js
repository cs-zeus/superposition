(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4584:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ee}});var n=r(4194),a=r(9008),i=r(760);var o=(0,n.Z)("p",{target:"e1of2zql0"})({name:"ocavzr",styles:"color:var(--text-color);font-size:1rem"});var c=(0,n.Z)("button",{target:"e4swu5k0"})({name:"1j5gxu9",styles:"font-weight:bold;margin:16px;padding:4px 36px;border-radius:16px;background:var(--accent-color);color:var(--white);border:0"});var s=(0,n.Z)("h1",{target:"e1c21ojw0"})({name:"15oeogc",styles:"font-size:1.75rem;color:var(--white);font-weight:bold;margin-bottom:16px"});var l=(0,n.Z)("input",{target:"e1exwdxz0"})({name:"1y4mven",styles:"width:36px;border-radius:16px;font-size:1rem;color:var(--background);border:0;text-align:center"}),h=r(7294),d=r(5893);var g=(0,n.Z)("div",{target:"e1uzusa94"})({name:"q60ipl",styles:"padding:1rem 1rem 1rem 2rem;background-color:var(--primary-color)"}),u=(0,n.Z)(o,{target:"e1uzusa93"})({name:"1u6jald",styles:"margin-top:0.25rem;color:var(--white)"}),p=(0,n.Z)("span",{target:"e1uzusa92"})({name:"ol9ofu",styles:"font-size:0.875rem"}),f=(0,n.Z)(c,{target:"e1uzusa91"})({name:"10z2iww",styles:"margin:0;margin-top:1rem;border:1px solid var(--accent-color);&:hover{background-color:transparent;color:var(--white);border-color:var(--accent-color);}&:disabled{background-color:var(--off-white);border-color:var(--off-white);}"}),x=((0,n.Z)("p",{target:"e1uzusa90"})({name:"1ymr1vs",styles:"color:var(--primary-color)"}),function(e){var t=e.onAddCharge,r=(0,h.useState)(0),n=r[0],a=r[1];return(0,d.jsxs)(g,{children:[(0,d.jsx)(s,{children:"Add Charge"}),(0,d.jsxs)(u,{children:["Electric charge:"," ",(0,d.jsx)(l,{type:"number",value:n,onChange:function(e){var t=parseInt(e.target.value);isNaN(t)||a((function(e){return t}))}})," ",(0,d.jsx)(p,{children:"e Coulomb"})]}),(0,d.jsx)(u,{children:(0,d.jsx)(p,{children:(0,d.jsx)(i.Z,{children:"$(e = 1.6 \\times 10^{-19})$"})})}),(0,d.jsx)(f,{disabled:0===n||isNaN(n),onClick:function(){t(n),a(0)},children:"Add"})]})}),m=r(7460),v=function(e){return 0!=e.x&&e.x||0!=e.y&&e.y?"\\begin{bmatrix}\n  ".concat(e.x.toFixed(2)," \\\\\n  ").concat(e.y.toFixed(2),"\n\\end{bmatrix}"):""},y=function e(t,r,n){return 0==t||isNaN(t)?"0":isFinite(t)?t>=10?e(t/10,r+1,n):t<1?e(10*t,r-1,n):"".concat(t.toFixed(2)).concat(n," \\times ",10,"^{").concat(r,"}"):"value\\ is\\ too\\ big"},b=r(8589);var j=(0,n.Z)("div",{target:"e1j1r6uv1"})({name:"13nei9b",styles:"background-color:var(--primary-color);width:100%;padding:1rem 1rem 1rem 2rem"}),C=(0,n.Z)("p",{target:"e1j1r6uv0"})({name:"12gd6ru",styles:"font-size:24px;color:var(--white)"}),w=function(e){var t=e.charges,r=e.testCharge,n=(0,m.wr)(t,r),a=(0,m.qd)(t,r),o=v((0,b.getUnitVector)(n)),c=v((0,b.getUnitVector)(a)),l="".concat(y((0,b.getVectorSize)(n),0,"")).concat(o),h="".concat(y((0,b.getVectorSize)(a),0,"")).concat(c),g=t.reduce((function(e,t){return e+"\\vec{E}_{".concat(t.name.replace("Charge",""),"t} + ")}),""),u=t.reduce((function(e,t,n,a){var i=(0,m.wr)([t],r),o=(0,b.getUnitVector)(i),c=v(o);return e+"".concat(y((0,b.getVectorSize)((0,m.wr)([t],r)),0,"")).concat(c," ").concat((n+1)%2==0?"$$ \n $$ ".concat(n+1!=a.length?"\\hspace{1.1cm}":""):""," + ")}),""),p="$$\\vec{E}_{total} = ".concat(g.substr(0,g.length-2),"$$\n $$\\hspace{0.88cm} = ").concat(u.substr(0,u.length-2),"$$\n  $$\\hspace{0.88cm}= ").concat(l,"\\ \\frac{N}{C}$$"),f="$$\\vec{F}_{total} = ".concat("Q_{t} \\times \\vec{E}_{total}"," = (").concat(r.q," \\times e) \\times ").concat(l,"$$ \n $$\\hspace{0.86cm} = ").concat(h,"\\ N$$");return(0,d.jsxs)(j,{children:[(0,d.jsx)(s,{children:"Calculation"}),t.map((function(e){var t=(0,b.subtractVector)(e.position,r.position),n=(0,b.getUnitVector)(t),a=v(n),o=(0,m.wr)([e],r),c=(0,b.getUnitVector)(o),s=v(c),l=e.name.replace("Charge",""),h="$$\\vec{E}_{".concat(l,"T} = \\frac{kQ}{(r_{").concat(l,"T})^2}\\widehat{r}_{").concat(l,"T} = \\frac{(9.0 \\times 10^{9}) \\times (").concat(e.q," \\times e)}{(").concat((0,b.getVectorDistance)(e.position,r.position).toFixed(2),")^2}").concat(a,"$$\n $$\\hspace{2.55cm}= ").concat(y((0,b.getVectorSize)(o),0,"")).concat(s,"\\ \\frac{N}{C}$$");return(0,d.jsx)(C,{children:(0,d.jsx)(i.Z,{children:h})},"electric-field-from-".concat(e.name))})),(0,d.jsx)(C,{children:(0,d.jsx)(i.Z,{children:p})},"E-total"),(0,d.jsx)(C,{children:(0,d.jsx)(i.Z,{children:f})},"F-total")]})},O=(0,n.Z)("div",{target:"e180t8n51"})("width:48px;height:24px;border-radius:16px;outline:none;background-color:var(--off-white);transition:all 0.25s cubic-bezier(0.65, 0, 0.35, 1);",(function(e){return e.isOn?"background-color:var(--accent-color)":""}),";"),T=(0,n.Z)("div",{target:"e180t8n50"})("width:24px;height:24px;border-radius:50%;outline:none;background-color:var(--white);transition:all 0.25s cubic-bezier(0.65, 0, 0.35, 1);transform:translateX(0%);",(function(e){return e.isOn?"transform: translateX(100%);":""}),";"),k=function(e){var t=e.onToggle,r=e.isOn;return(0,d.jsx)("div",{children:(0,d.jsx)(O,{onClick:t,isOn:r,children:(0,d.jsx)(T,{isOn:r})})})};var Z=(0,n.Z)("div",{target:"e1mfy3cv2"})({name:"q60ipl",styles:"padding:1rem 1rem 1rem 2rem;background-color:var(--primary-color)"}),P=(0,n.Z)("div",{target:"e1mfy3cv1"})({name:"n644ya",styles:"display:flex;margin-top:1rem;justify-content:space-between;width:55%;@media only screen and (min-width: 1441px){width:30%;}"}),S=(0,n.Z)(o,{target:"e1mfy3cv0"})({name:"1u6jald",styles:"margin-top:0.25rem;color:var(--white)"}),E=function(e){var t=e.isGridOn,r=e.onToggleGrid,n=(0,h.useState)(t),a=n[0],i=n[1];return(0,d.jsxs)(Z,{children:[(0,d.jsx)(s,{children:"Configuration"}),(0,d.jsxs)(P,{children:[(0,d.jsx)(S,{children:"Grid"}),(0,d.jsx)(k,{onToggle:function(){i((function(e){return!e})),r(a)},isOn:a})]})]})},L=r(4942),$=r(6455),z=r.n($),D=r(833),M=r(7630),q=r.n(M);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=q()(z()),G=(0,n.Z)("div",{target:"e124idfo3"})({name:"1f51lr",styles:"background-color:var(--primary-color);width:100%;padding:1rem 1rem 1rem 2rem;color:var(--white)"}),A=(0,n.Z)(o,{target:"e124idfo2"})({name:"1ed19yc",styles:"margin-top:0.5rem;color:var(--white)"}),V=(0,n.Z)(D.Z,{target:"e124idfo1"})({name:"tntieq",styles:"margin-left:8px;vertical-align:bottom;&.hide{display:none;}"}),I=(0,n.Z)("p",{target:"e124idfo0"})({name:"1ymr1vs",styles:"color:var(--primary-color)"}),U=function(e){var t=e.charges,r=e.onDeleteCharge,n=e.onEditCharge;return(0,d.jsxs)(G,{children:[(0,d.jsx)(s,{children:"Manage Charges"}),t.map((function(e){var a="$".concat(e.name.split(" ").join("\\ "),":\\ q = \\ $");return(0,d.jsxs)(A,{children:[(0,d.jsx)(i.Z,{children:a}),(0,d.jsx)(l,{type:"number",value:e.q,onChange:function(t){var r=parseInt(t.target.value);(0===r||isNaN(r))&&H.fire({title:(0,d.jsx)(I,{children:"Warning"}),html:(0,d.jsx)("p",{children:'charge value should not be "0" or " "'})});var a=_(_({},e),{},{q:parseInt(t.target.value)});n(a)}}),(0,d.jsx)(V,{onClick:function(){r(e.name)},className:t.length>1?"":"hide"})]},"edit-delete-charges-"+e.name)}))]})},B=r(6782),F=r(6702),W=function(e){var t,r=e.onClickLink,a=e.iconName,i=void 0===a?"none":a,o=e.children,c=(0,n.Z)("span",{target:"eio67ek1"})("none"!==i&&"margin-left: 8px;"," text-decoration:underline;"),s=(0,n.Z)("p",{target:"eio67ek0"})("display:flex;align-items:center;font-size:1.125rem;color:var(--white);&:hover{cursor:pointer;}&:hover ",c,"{text-decoration:none;}");switch(i){case"help":t=(0,d.jsx)(B.Z,{size:16});break;case"github":t=(0,d.jsx)(F.Z,{size:16});break;default:t=null}return(0,d.jsxs)(s,{onClick:r,children:[t,(0,d.jsx)(c,{children:o})]})};var X=(0,n.Z)("div",{target:"eaf6m975"})({name:"zjptus",styles:"background-color:var(--primary-color);width:100%;padding:0 16px 16px 32px;color:var(--white)"}),Q=(0,n.Z)("hr",{target:"eaf6m974"})({name:"zee95q",styles:"margin-left:-32px;margin-top:16px"}),R=(0,n.Z)("h3",{target:"eaf6m973"})({name:"10nff9s",styles:"font-size:1.125rem;line-height:1.5"}),Y=(0,n.Z)("p",{target:"eaf6m972"})({name:"16ye8me",styles:"font-size:1rem;line-height:1.5"}),J=(0,n.Z)("ul",{target:"eaf6m971"})({name:"1q3hfjj",styles:"list-style-type:circle;margin-left:32px"}),K=(0,n.Z)("li",{target:"eaf6m970"})({name:"19ssjo4",styles:"margin-top:8px;text-transform:capitalize;&:first-of-type{margin-top:16px;}"}),ee=function(e){var t=e.onClickExplanationLink;return(0,d.jsxs)(X,{children:[(0,d.jsx)(W,{onClickLink:t,iconName:"help",children:"Explanation"}),(0,d.jsx)(Q,{}),(0,d.jsx)(R,{children:"As a part of CSC289 (1/2021)"}),(0,d.jsxs)(J,{children:[(0,d.jsx)(K,{children:"61130500220 Pittawat Taveekitworachai"}),(0,d.jsx)(K,{children:"61130500245 Wicharn Rueangkhajorn"}),(0,d.jsx)(K,{children:"61130500252 Michal Zielinski"}),(0,d.jsx)(K,{children:"61130500256 Natnarong Trewittayatorn"})]}),(0,d.jsx)(Q,{}),(0,d.jsx)(R,{children:"Source Code"}),(0,d.jsx)(Y,{children:(0,d.jsx)(W,{onClickLink:function(){window.open("https://github.com/cs-zeus")},iconName:"github",children:"GitHub"})}),(0,d.jsx)(Q,{}),(0,d.jsx)(Y,{children:"Made with \u2764\ufe0f and \u2615\ufe0f by Zeus \u26a1\ufe0f"})]})};var te=(0,n.Z)("label",{target:"e1jmtmp00"})({name:"vcrtvu",styles:"color:var(--white);font-size:1rem"});function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae=q()(z()),ie=(0,n.Z)("div",{target:"e15b4saj1"})({name:"q60ipl",styles:"padding:1rem 1rem 1rem 2rem;background-color:var(--primary-color)"}),oe=(0,n.Z)("p",{target:"e15b4saj0"})({name:"1ymr1vs",styles:"color:var(--primary-color)"}),ce=function(e){var t=e.testCharge,r=e.onEditCharge,n=(0,h.useState)(1),a=n[0],o=n[1];return(0,d.jsxs)(ie,{children:[(0,d.jsx)(s,{children:"Test Charges"}),(0,d.jsx)(te,{children:"Electric Charge: "}),(0,d.jsx)(l,{type:"number",value:a,onChange:function(e){var n=parseInt(e.target.value);(0===n||isNaN(n))&&ae.fire({title:(0,d.jsx)(oe,{children:"Warning"}),html:(0,d.jsx)("p",{children:'charge value should not be "0" or " "'})}),o((function(e){return n}));var a=ne(ne({},t),{},{q:parseInt(e.target.value)});r(a)}}),(0,d.jsx)(te,{children:" e Coulomb"}),(0,d.jsx)("p",{children:(0,d.jsx)(i.Z,{children:"$(e = 1.6 \\times 10^{-19})$"})})]})};var se=(0,n.Z)(s,{target:"ehh75uy1"})({name:"1lshfo3",styles:"padding:2rem 2rem 1rem 2rem"}),le=(0,n.Z)("div",{target:"ehh75uy0"})({name:"t0sd1o",styles:"box-sizing:border-box;width:100%;min-height:100vh;background-color:var(--primary-color);overflow-x:hidden"}),he=function(e){var t=e.appConfig,r=e.charges,n=e.testCharge,a=e.onAddCharge,i=e.onEditCharge,o=e.onDeleteCharge,c=e.onClickExplanationLink,s=e.onToggleGrid;return(0,d.jsxs)(le,{children:[(0,d.jsx)(se,{children:"Superposition Principle"}),(0,d.jsx)(E,{isGridOn:t.hasGridLineEnabled,onToggleGrid:s}),(0,d.jsx)(x,{onAddCharge:a}),(0,d.jsx)(ce,{testCharge:n,onEditCharge:i}),(0,d.jsx)(U,{charges:r,onEditCharge:i,onDeleteCharge:o}),(0,d.jsx)(w,{charges:r,testCharge:n}),(0,d.jsx)(ee,{onClickExplanationLink:c})]})},de=r(9799),ge=r(6390);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fe,xe,me=50,ve=50,ye=64,be=[],je=[];var Ce="simulation-pane",we=(0,n.Z)("div",{target:"e1a7nsyz0"})({name:"kau2wg",styles:"background-color:#303a52;width:100%"}),Oe=function(e){var t=e.charges,r=e.testCharge,n=e.onChargePositionUpdate,a=e.appConfig,i=function(e,t,r,n){var a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=function(e){var t="Test Charge"===e.name,r=e.q>0,a=xe.control(e.position.x,e.position.y);a.stroke="none",t&&(fe=a);var i=xe.circle(0,0,20);t&&i.classList.add("test-charge"),i.addDependency(a),i.update=function(){this.cx=a.x,this.cy=a.y,n(pe(pe({},e),{},{position:(0,b.getVector)(a.x/me,a.y/ve)}))};var o=xe.text(0,0,r?"+":"-");o.addDependency(a),o.update=function(){r?(this.x=a.x-12,this.y=a.y+11):(this.x=a.x-7,this.y=a.y+12)},r?(i.classList.add("positive"),o.classList.add("positive")):(i.classList.add("negative"),o.classList.add("negative"));var c=xe.text(150,150,e.name);c.classList.add("charge-name"),c.addDependency(a),c.update=function(){this.x=t?a.x-42:a.x-30,this.y=a.y+40};var s=xe.text(150,150,"");if(s.addDependency(a),s.update=function(){this.x=a.x-35,this.y=a.y+60,this.contents="".concat(e.q,"e - <").concat(a.x/me,",").concat(-a.y/ve,">")},t)return be.push({chargeControl:a,chargeSignText:o,chargeNameText:c,chargePositionText:s,chargeCircle:i,charge:e}),{chargeControl:a,chargeSignText:o,chargeNameText:c,chargePositionText:s,chargeCircle:i,charge:e};var l=xe.line(a.x,a.y,fe.x,fe.y);l.addDependency(fe),l.addDependency(a),l.update=function(){this.x1=a.x,this.y1=a.y,this.x2=fe.x,this.y2=fe.y};var h=xe.text((l.x1+l.x2)/2,(l.y1+l.y2)/2,"r");h.addDependency(l),h.update=function(){this.x=(l.x1+l.x2)/2+10,this.y=(l.y1+l.y2)/2};var d=xe.text((l.x1+l.x2)/2,(l.y1+l.y2)/2,"".concat(e.name.split(" ")[1],"T"));d.addDependency(l),d.classList.add("subscript"),d.update=function(){this.x=(l.x1+l.x2)/2+14,this.y=(l.y1+l.y2)/2+7};var g=xe.path("");return g.classList.add("arrow"),g.addDependency(fe),g.addDependency(a),g.update=function(){var e=Math.atan2(fe.y-a.y,fe.x-a.x);this.d="M ".concat(fe.x+10.4*Math.cos(e)," ").concat(fe.y+10.4*Math.sin(e)+0,"\n    L ").concat(fe.x+8*Math.cos(e-2*Math.PI/3)," ").concat(fe.y+8*Math.sin(e-2*Math.PI/3)+0,"\n    L ").concat(fe.x+8*Math.cos(e+2*Math.PI/3)," ").concat(fe.y+8*Math.sin(e+2*Math.PI/3)+0,"\n              Z")},be.push({chargeControl:a,chargeSignText:o,chargeNameText:c,chargePositionText:s,chargeCircle:i,charge:e,arrow:{arrowHead:g,arrowBody:l,arrowText:h,arrowTextSubscript:d}}),{chargeControl:a,chargeSignText:o,chargeNameText:c,chargePositionText:s,chargeCircle:i,charge:e,arrow:{arrowHead:g,arrowBody:l,arrowText:h,arrowTextSubscript:d}}},o=function(e){var t=Math.floor((xe.width-128)/me/2),r=Math.floor((xe.height-128)/ve/2),n=xe.line(-t*me,0,t*me,0),i=xe.line(0,-r*ve,0,r*ve);xe.rectangle(n.x1,i.y1,n.x2-n.x1,i.y2-i.y1);var o=xe.marker(10,5,10,10);o.path("M 0 0 L 10 5 L 0 10 z"),o.setAttribute("orient","auto-start-reverse"),n.setAttribute("marker-end","url(#".concat(o.id,")")),n.setAttribute("marker-start","url(#".concat(o.id,")")),i.setAttribute("marker-end","url(#".concat(o.id,")")),i.setAttribute("marker-start","url(#".concat(o.id,")")),xe.text(n.x2+16,n.y2,"x").setAttribute("alignment-baseline","middle"),xe.text(i.x1,i.y1-16,"y").setAttribute("text-anchor","middle");for(var c=-t;c<=t;c++){var s=c*me,l=xe.text(s,r*ve+32,c.toString());if(l.style.textAnchor="middle",l.style.alignmentBaseline="middle",a){var h=xe.line(s,-r*ve,s,r*ve);h.style.strokeOpacity=".2",je.push(h)}}for(var d=-r;d<=r;d++){var g=d*ve,u=xe.text(-t*ve-32,g,(-1*d).toString());if(u.style.textAnchor="middle",u.style.alignmentBaseline="middle",a){var p=xe.line(-t*me,g,t*me,g);p.style.strokeOpacity=".2",je.push(p)}}e.forEach((function(e){return e()})),be.forEach((function(e){e.chargeControl.constrainWithinBox(n.x1,i.y1,n.x2,i.y2);var t=e.chargeControl.constrain;e.chargeControl.constrain=function(e,r){var n=me*Math.round(r.x/me),a=ve*Math.round(r.y/ve),i=t({x:n,y:a},{x:n,y:a});return{x:i.x,y:i.y}},e.chargeControl.translate(e.charge.position.x*me,e.charge.position.y*ve)}))};return(0,h.useEffect)((function(){var n,a=document.getElementById(e);void 0!==xe&&xe.clear(),(xe=new ge.vj(e)).width=((null===a||void 0===a||null===(n=a.parentElement)||void 0===n?void 0:n.clientWidth)||1280)-128,xe.height=(window.innerHeight||720)-128,xe.originX=xe.width/2+ye,xe.originY=xe.height/2+ye,xe.width+=128,xe.height+=128,xe.style.overflow="visible",o([function(){return i(r)}].concat((0,de.Z)(t.map((function(e){return function(){return i(e)}})))))}),[]),{updateTestCharge:function(e){var t=be.find((function(t){return t.charge.name===e.name}));if(t){t.chargeCircle.update=function(){this.cx=t.chargeControl.x,this.cy=t.chargeControl.y,n(pe(pe({},r),{},{position:(0,b.getVector)(t.chargeControl.x/me,t.chargeControl.y/ve)}))};var a=e.q>0;t.chargePositionText.contents="".concat(e.q,"e - <").concat(e.position.x,",").concat(-e.position.y,">"),t.charge=e,(t.chargeCircle.classList.contains("negative")&&a||t.chargeCircle.classList.contains("positive")&&!a)&&(t.chargeSignText.contents=a?"+":"-",a?(t.chargeSignText.x=t.chargeControl.x-12,t.chargeSignText.y=t.chargeControl.y+11,t.chargeCircle.classList.remove("negative"),t.chargeSignText.classList.remove("negative"),t.chargeCircle.classList.add("positive"),t.chargeSignText.classList.add("positive")):(t.chargeSignText.x=t.chargeControl.x-7,t.chargeSignText.y=t.chargeControl.y+12,t.chargeCircle.classList.remove("positive"),t.chargeSignText.classList.remove("positive"),t.chargeCircle.classList.add("negative"),t.chargeSignText.classList.add("negative")))}},updateCharges:function(e){if(0!==e.length){var t=e.filter((function(e){var t,r,n;return e.q!==(null!==(t=null===(r=be.map((function(e){return e.charge})))||void 0===r||null===(n=r.find((function(t){return t.name===e.name})))||void 0===n?void 0:n.q)&&void 0!==t?t:e.q)})),r=be.filter((function(e){return"Test Charge"!==e.charge.name})).filter((function(t){return!e.find((function(e){return e.name===t.charge.name}))})),a=e.filter((function(e){return!be.find((function(t){return t.charge.name===e.name}))})),o=Math.floor((xe.width-128)/me/2),c=Math.floor((xe.height-128)/ve/2);a.forEach((function(e){var t=i(e);t.chargeControl.constrainWithinBox(-o*me,-c*ve,o*me,c*ve);var r=t.chargeControl.constrain;t.chargeControl.constrain=function(e,t){var n=me*Math.round(t.x/me),a=ve*Math.round(t.y/ve),i=r({x:n,y:a},{x:n,y:a});return{x:i.x,y:i.y}}})),r.forEach((function(e){var t,r,n,a;e.chargeSignText.remove(),e.chargeNameText.remove(),e.chargePositionText.remove(),e.chargeCircle.remove(),null===(t=e.arrow)||void 0===t||t.arrowHead.remove(),null===(r=e.arrow)||void 0===r||r.arrowBody.remove(),null===(n=e.arrow)||void 0===n||n.arrowText.remove(),null===(a=e.arrow)||void 0===a||a.arrowTextSubscript.remove(),e.chargeControl.remove(),be.splice(be.indexOf(e),1)})),t.forEach((function(e){var t=be.find((function(t){return t.charge.name===e.name}));if(t){var r=t.charge.q>0,a=e.q>0;t.chargePositionText.contents="".concat(e.q,"e - <").concat(e.position.x,",").concat(-e.position.y,">"),t.charge.q=e.q,t.chargeCircle.update=function(){this.cx=t.chargeControl.x,this.cy=t.chargeControl.y,n(pe(pe({},e),{},{position:(0,b.getVector)(t.chargeControl.x/me,t.chargeControl.y/ve)}))},!r&&!a||r&&a||(t.chargeSignText.contents=a?"+":"-",a?(t.chargeSignText.x=t.chargeControl.x-12,t.chargeSignText.y=t.chargeControl.y+11,t.chargeCircle.classList.remove("negative"),t.chargeSignText.classList.remove("negative"),t.chargeCircle.classList.add("positive"),t.chargeSignText.classList.add("positive")):(t.chargeSignText.x=t.chargeControl.x-7,t.chargeSignText.y=t.chargeControl.y+12,t.chargeCircle.classList.remove("positive"),t.chargeSignText.classList.remove("positive"),t.chargeCircle.classList.add("negative"),t.chargeSignText.classList.add("negative")))}}))}},updateGridLine:function(e){je.forEach((function(t){t.style.display=e?"block":"none"}))}}}(Ce,t,r,n,a.hasGridLineEnabled),o=i.updateCharges,c=i.updateTestCharge,s=i.updateGridLine;return(0,h.useEffect)((function(){s(a.hasGridLineEnabled)}),[a,s]),(0,h.useEffect)((function(){o(t)}),[t,o]),(0,h.useEffect)((function(){c(r)}),[r,c]),(0,d.jsx)(we,{id:Ce})};function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){(0,L.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=(0,n.Z)("div",{target:"eyiv6d22"})({name:"11w03fx",styles:"display:flex;height:100vh;position:fixed;width:100%"}),Pe=(0,n.Z)("div",{target:"eyiv6d21"})({name:"137lc6a",styles:"flex:75"}),Se=(0,n.Z)("div",{target:"eyiv6d20"})({name:"1heryi6",styles:"flex:25;max-width:480px;overflow:auto"}),Ee=function(){var e=function(){var e=(0,h.useState)({hasGridLineEnabled:!0,isShowModal:!1}),t=e[0],r=e[1];return{appConfig:t,toggleGridLineHandler:function(){r((function(e){return ke(ke({},e),{},{hasGridLineEnabled:!e.hasGridLineEnabled})}))},openModalHandler:function(){r((function(e){return ke(ke({},e),{},{isShowModal:!0})}))},closeModalHandler:function(){r((function(e){return ke(ke({},e),{},{isShowModal:!1})}))}}}(),t=e.appConfig,r=e.toggleGridLineHandler,n=e.openModalHandler,i=(e.closeModalHandler,function(){var e=(0,h.useState)([{name:"Test Charge",position:{x:0,y:0},q:1},{name:"Charge 1",position:{x:1,y:1},q:-1},{name:"Charge 2",position:{x:1,y:2},q:1}]),t=e[0],r=e[1];return{pointCharges:t,addPointChargeHandler:function(e){r((function(t){return[].concat((0,de.Z)(t),[{name:"Charge ".concat(parseInt(t.filter((function(e){return"Test Charge"!==e.name})).slice(-1)[0].name.split(" ")[1])+1),position:{x:0,y:0},q:e}])}))},editChargeHandler:function(e){r((function(t){return[].concat((0,de.Z)(t.filter((function(t){return t.name!==e.name}))),[e]).sort((function(e,t){var r=e.name.toUpperCase(),n=t.name.toUpperCase();return r<n?-1:r>n?1:0}))}))},editPositionHandler:function(e){r((function(t){return[].concat((0,de.Z)(t.filter((function(t){return t.name!==e.name}))),[e]).sort((function(e,t){var r=e.name.toUpperCase(),n=t.name.toUpperCase();return r<n?-1:r>n?1:0}))}))},removePointChargeHandler:function(e){r((function(t){return t.filter((function(t){return t.name!==e}))}))}}}()),o=i.pointCharges,c=i.addPointChargeHandler,s=i.editChargeHandler,l=i.editPositionHandler,g=i.removePointChargeHandler;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.default,{children:[(0,d.jsx)("title",{children:"Superposition"}),(0,d.jsx)("meta",{name:"description",content:"A simulation for superposition principle in electric field and electric force."}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)(Ze,{children:[(0,d.jsx)(Pe,{children:(0,d.jsx)(Oe,{appConfig:t,charges:o.filter((function(e){return"Test Charge"!==e.name})),testCharge:o.find((function(e){return"Test Charge"===e.name})),onChargePositionUpdate:l})}),(0,d.jsx)(Se,{children:(0,d.jsx)(he,{appConfig:t,charges:o.filter((function(e){return"Test Charge"!==e.name})),testCharge:o.find((function(e){return"Test Charge"===e.name})),onAddCharge:c,onEditCharge:s,onDeleteCharge:g,onClickExplanationLink:n,onToggleGrid:r})})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4584)}])}},function(e){e.O(0,[774,153,520,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);