(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),m=a(6),u=a(5),o=function(){return l.a.createElement("h1",null,"Home")},i=(a(23),function(e){var t=e.tabs,a=e.match;return l.a.createElement("div",null,t.map(function(e){return e.id===a.params.id?e.content:""}))}),E=function(e){var t=e.tabs;return l.a.createElement(m.a,null,l.a.createElement("h1",null,"Tabs"),l.a.createElement("ul",null,t.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(m.b,{to:"/tabs/".concat(e.id)},e.title))})),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/tabs/:id",exact:!0,render:function(e){var a=e.match;return l.a.createElement(i,{tabs:t,match:a})}})))},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],s=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/tabs",exact:!0},"Tabs")))),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0,component:o}),l.a.createElement(u.a,{path:"/tabs/:id?",exact:!0,render:function(){return l.a.createElement(E,{tabs:b})}}))))};r.a.render(l.a.createElement(s,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e64a63f7.chunk.js.map