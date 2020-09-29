(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),l=t.n(r),o=(t(28),t(22)),s=t(15),c=t(21),p=t(7),m=t(1),d=function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"logo"},i.a.createElement("svg",{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},i.a.createElement("path",{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),i.a.createElement("path",{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"}))),i.a.createElement(m.a.div,{className:"title",initial:{y:-250},animate:{y:-10},transition:{delay:.5,type:"spring",stiffness:120}},i.a.createElement("h1",null,"Pizza Joint")))},u=t(6),v={hover:{scale:[1,1.1,1,1.1,1,1.1,1],textShadow:"0 0 8px #fff",boxShadow:"0 0 8px #fff"}},f=function(){return i.a.createElement(m.a.div,{className:"home container",initial:{opacity:0},animate:{opacity:1,scale:1.5},transition:{delay:1,duration:1.5}},i.a.createElement("h2",null,"Welcome to Pizza Joint"),i.a.createElement(u.b,{to:"/base"},i.a.createElement(m.a.button,{variants:v,whileHover:"hover"},"Create Your Pizza")))},h={hidden:{x:"100vw",opacity:0},visible:{x:0,opacity:1,transition:{delay:.5,type:"spring"}}},E={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},b=function(e){var a=e.addBase,t=e.pizza;return i.a.createElement(m.a.div,{className:"base container",variants:h,initial:"hidden",animate:"visible"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=t.base===e?"active":"";return i.a.createElement(m.a.li,{key:e,onClick:function(){return a(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),t.base&&i.a.createElement(m.a.div,{className:"next",variants:E},i.a.createElement(u.b,{to:"/toppings"},i.a.createElement(m.a.button,{whileHover:{scale:1.1,textShadow:"0 0 8px #fff",boxShadow:"0 0 8px #fff"}},"Next"))))},g={hidden:{x:"100vw",opacity:0},visible:{x:0,opacity:1,transition:{delay:.5,type:"spring"}}},y=function(e){var a=e.addTopping,t=e.pizza;return i.a.createElement(m.a.div,{className:"toppings container",variants:g,initial:"hidden",animate:"visible"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=t.toppings.includes(e)?"active":"";return i.a.createElement(m.a.li,{key:e,onClick:function(){return a(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(u.b,{to:"/order"},i.a.createElement(m.a.button,{whileHover:{scale:1.1,textShadow:"0 0 8px #fff",boxShadow:"0 0 8px #fff"}},"Order")))},x={hidden:{x:"100vw",opacity:0},visible:{x:0,opacity:1,transition:{type:"spring",mass:.4,when:"beforeChildren",damping:8,staggersChildren:.4}}},w={hidden:{opacity:0},visible:{opacity:1}},z=function(e){var a=e.pizza;return i.a.createElement(m.a.div,{className:"container order",variants:x,initial:"hidden",animate:"visible"},i.a.createElement("h2",null,"Thank you for your order :)"),i.a.createElement(m.a.p,{variants:w},"You ordered a ",a.base," pizza with:"),i.a.createElement(m.a.div,{variants:w},a.toppings.map((function(e){return i.a.createElement(m.a.div,{key:e},e)}))))};var C=function(){var e=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(e,2),t=a[0],r=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/base"},i.a.createElement(b,{addBase:function(e){r(Object(s.a)({},t,{base:e}))},pizza:t})),i.a.createElement(p.a,{path:"/toppings"},i.a.createElement(y,{addTopping:function(e){var a;a=t.toppings.includes(e)?t.toppings.filter((function(a){return a!==e})):[].concat(Object(o.a)(t.toppings),[e]),r(Object(s.a)({},t,{toppings:a}))},pizza:t})),i.a.createElement(p.a,{path:"/order"},i.a.createElement(z,{pizza:t})),i.a.createElement(p.a,{path:"/"},i.a.createElement(f,null))))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,null,i.a.createElement(C,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.1a25b555.chunk.js.map