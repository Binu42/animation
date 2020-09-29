(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),s=(a(28),a(22)),l=a(16),c=a(11),d=a(7),p=a(1),m=a(3),u={hidden:{rotate:-180},visible:{rotate:0,transition:{duration:1}}},v={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}}},h=function(){return i.a.createElement("header",null,i.a.createElement(m.b,{to:"/"},i.a.createElement("div",{className:"logo"},i.a.createElement(p.b.svg,{drag:!0,className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",variants:u,initial:"hidden",animate:"visible"},i.a.createElement(p.b.path,{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z",variants:v}),i.a.createElement(p.b.path,{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z",variants:v})))),i.a.createElement(p.b.div,{className:"title",initial:{y:-250},animate:{y:-10},drag:!0,dragElastic:2,dragConstraints:{left:0,right:0,top:0,bottom:0},transition:{delay:.5,type:"spring",stiffness:120}},i.a.createElement("h1",null,"Pizza Joint")))},b={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}},animationTwo:{y:[0,-40],x:0,transition:{y:{yoyo:1/0,duration:.25,ease:"easeOut"}}}},E=function(){var e=Object(p.c)("animationOne","animationTwo"),t=Object(c.a)(e,2),a=t[0],n=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.b.div,{className:"loader",variants:b,animate:a}),i.a.createElement("div",{onClick:function(e){return n()}},"click to change"))},f={hover:{scale:1.1,textShadow:"0 0 8px #fff",boxShadow:"0 0 8px #fff",transition:{yoyo:1/0,duration:.3}}},y={hidden:{opacity:0},visible:{opacity:1,transition:{delay:1.5,duration:1.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},x=function(){return i.a.createElement(p.b.div,{className:"home container",variants:y,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Welcome to Pizza Joint"),i.a.createElement(m.b,{to:"/base"},i.a.createElement(p.b.button,{variants:f,whileHover:"hover"},"Create Your Pizza")),i.a.createElement(E,null))},g={hidden:{x:"100vw",opacity:0},visible:{x:0,opacity:1,transition:{delay:.5,type:"spring"}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},w={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},z={hover:{scale:1.1,textShadow:"0 0 8px #fff",boxShadow:"0 0 8px #fff",transition:{yoyo:1/0,duration:.3}}},O=function(e){var t=e.addBase,a=e.pizza;return i.a.createElement(p.b.div,{className:"base container",variants:g,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=a.base===e?"active":"";return i.a.createElement(p.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),a.base&&i.a.createElement(p.b.div,{className:"next",variants:w},i.a.createElement(m.b,{to:"/toppings"},i.a.createElement(p.b.button,{variants:z,whileHover:"hover"},"Next"))))},C={hidden:{x:"100vw",opacity:0},visible:{x:0,opacity:1,transition:{delay:.5,type:"spring"}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},S={hover:{scale:1.1,textShadow:"0 0 8px #fff",boxShadow:"0 0 8px #fff",transition:{yoyo:1/0,duration:.3}}},j=function(e){var t=e.addTopping,a=e.pizza;return i.a.createElement(p.b.div,{className:"toppings container",variants:C,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=a.toppings.includes(e)?"active":"";return i.a.createElement(p.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(m.b,{to:"/order"},i.a.createElement(p.b.button,{variants:S,whileHover:"hover"},"Order")))},k={hidden:{x:"100vw",opacity:0},visible:{x:0,opacity:1,transition:{type:"spring",mass:.4,when:"beforeChildren",damping:8,staggersChildren:.4}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},N={hidden:{opacity:0},visible:{opacity:1}},M=function(e){var t=e.pizza,a=e.setShowModal;return Object(n.useEffect)((function(){setTimeout((function(){a(!0)}),5e3)}),[a]),i.a.createElement(p.b.div,{className:"container order",variants:k,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Thank you for your order :)"),i.a.createElement(p.b.p,{variants:N},"You ordered a ",t.base," pizza with:"),i.a.createElement(p.b.div,{variants:N},t.toppings.map((function(e){return i.a.createElement(p.b.div,{key:e},e)}))))},T={visible:{opacity:1},hidden:{opacity:0}},B={hidden:{y:"-100vh",opacity:0},visible:{y:"200px",opacity:1,transition:{delay:.5}}},I=function(e){var t=e.showModal;e.setShowModal;return i.a.createElement(p.a,{exitBeforeEnter:!0},t&&i.a.createElement(p.b.div,{className:"backdrop",variants:T,initial:"hidden",animate:"visible",exit:"hidden"},i.a.createElement(p.b.div,{className:"modal",variants:B},i.a.createElement("p",null,"Want to make another pizza?"),i.a.createElement(m.b,{to:"/"},i.a.createElement("button",null,"Start Again")))))};var H=function(){var e=Object(d.f)(),t=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(!1),u=Object(c.a)(m,2),v=u[0],b=u[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement(I,{showModal:v,setShowModal:b}),i.a.createElement(p.a,{exitBeforeEnter:!0,onExitComplete:function(){return b(!1)}},i.a.createElement(d.c,{location:e,key:e.key},i.a.createElement(d.a,{path:"/base"},i.a.createElement(O,{addBase:function(e){o(Object(l.a)({},r,{base:e}))},pizza:r})),i.a.createElement(d.a,{path:"/toppings"},i.a.createElement(j,{addTopping:function(e){var t;t=r.toppings.includes(e)?r.toppings.filter((function(t){return t!==e})):[].concat(Object(s.a)(r.toppings),[e]),o(Object(l.a)({},r,{toppings:t}))},pizza:r})),i.a.createElement(d.a,{path:"/order"},i.a.createElement(M,{pizza:r,setShowModal:b})),i.a.createElement(d.a,{path:"/"},i.a.createElement(x,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m.a,null,i.a.createElement(H,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3cf9b585.chunk.js.map