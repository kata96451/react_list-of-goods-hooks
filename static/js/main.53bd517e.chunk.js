(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),i=n.n(s),o=n(3),a=n(7),l=n(1),r=(n(12),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(l.useState)(c.NONE),e=Object(o.a)(t,2),n=e[0],s=e[1],i=Object(l.useState)(!1),b=Object(o.a)(i,2),j=b[0],d=b[1],h=Object(l.useState)(!1),O=Object(o.a)(h,2),p=O[0],N=O[1],x=Object(l.useState)(1),v=Object(o.a)(x,2),m=v[0],g=v[1],k=function(t,e,n,s){var i=Object(a.a)(t);switch(i=i.filter((function(t){return t.length>=s})),e){case c.ALPHABET:i.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:i.sort((function(t,e){return t.length-e.length}));case c.NONE:}return n&&i.reverse(),i}(u,n,p,m);return Object(r.jsxs)("div",{className:"App",children:[!j&&Object(r.jsx)("button",{type:"button",className:"button is-link is-outlined is-large start",onClick:function(){return d(!0)},children:"Start"}),j&&Object(r.jsxs)("div",{className:"box has-background-link-light contant",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:"button is-link btn",onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:"button is-link btn",onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(r.jsx)("div",{className:"select is-link salaction",children:Object(r.jsxs)("select",{className:"has-background-link-light is-warning",onClick:function(t){return g(+t.currentTarget.value)},children:[Object(r.jsx)("option",{value:"1",children:"1"}),Object(r.jsx)("option",{value:"2",children:"2"}),Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"4",children:"4"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"6",children:"6"}),Object(r.jsx)("option",{value:"7",children:"7"}),Object(r.jsx)("option",{value:"8",children:"8"}),Object(r.jsx)("option",{value:"9",children:"9"}),Object(r.jsx)("option",{value:"10",children:"10"})]})}),Object(r.jsx)("button",{type:"button",onClick:function(){return N(!p)},className:"button is-warning btn",children:"Reverse"}),Object(r.jsx)("button",{type:"button",onClick:function(){N(!1),s(c.NONE),g(1)},className:"button is-danger btn",children:"Reset"})]}),Object(r.jsx)("ul",{className:"Goods",children:k.map((function(t){return Object(r.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};i.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.53bd517e.chunk.js.map