(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(8),a=n.n(s),i=n(3),r=n(7),o=n(1),l=(n(13),n(5)),u=n.n(l),b=n(17),j=n(0);!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var d=[].concat(["Dumplings","CsectedValuesot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]).map((function(t){return{name:t,id:Object(b.a)()}})),h=new Array(10);h=Object(r.a)(h).map((function(t,e){return e+1}));var m=function(){var t=Object(o.useState)(c.NONE),e=Object(i.a)(t,2),n=e[0],s=e[1],a=Object(o.useState)(!1),l=Object(i.a)(a,2),b=l[0],m=l[1],O=Object(o.useState)(!1),N=Object(i.a)(O,2),p=N[0],f=N[1],g=Object(o.useState)(1),k=Object(i.a)(g,2),v=k[0],E=k[1],x=function(t,e,n,s){var a=Object(r.a)(t).filter((function(t){return t.name.length>=s}));switch(e){case c.ALPHABET:a.sort((function(t,e){return t.name.localeCompare(e.name)}));break;case c.LENGTH:a.sort((function(t,e){return t.name.length-e.name.length}));case c.NONE:}return n&&a.reverse(),a}(d,n,p,v);return Object(j.jsxs)("div",{className:"App",children:[!b&&Object(j.jsx)("button",{type:"button",className:"button is-link is-outlined is-large start",onClick:function(){return m(!0)},children:"Start"}),b&&Object(j.jsxs)("div",{className:"box has-background-link-light contant",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:u()("button is-link btn",{"is-inverted":n===c.ALPHABET}),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:u()("button is-link btn",{"is-inverted":n===c.LENGTH}),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",onClick:function(){return f(!p)},className:u()("button is-link  btn",{"is-inverted":!0===p}),children:"Reverse"}),Object(j.jsx)("div",{className:"select is-link salaction",children:Object(j.jsx)("select",{className:"has-background-link-light is-warning",value:v,onChange:function(t){return E(+t.currentTarget.value)},children:h.map((function(t){return Object(j.jsx)("option",{value:t,children:t},t)}))})}),Object(j.jsx)("button",{type:"button",onClick:function(){f(!1),s(c.NONE),E(1)},className:"button is-danger btn",children:"Reset"})]}),Object(j.jsx)("ul",{className:"Goods",children:x.map((function(t){return Object(j.jsx)("li",{className:"Goods__item",children:t.name},t.id)}))})]})]})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.08424004.chunk.js.map