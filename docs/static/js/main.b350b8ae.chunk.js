(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(17),i=n.n(r),s=n(8),j=n(22),o=n(12),u=n(23),d=n(18),l=n(19),b=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],b=r[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(j.a)(e))})),b(""))},children:[Object(c.jsxs)("h1",{children:[" ",i," "]}),Object(c.jsxs)(o.a,{className:"mb-3",children:[Object(c.jsx)(o.a.Prepend,{children:Object(c.jsx)(o.a.Text,{id:"basic-addon1",children:Object(c.jsx)(d.a,{icon:l.a})})}),Object(c.jsx)(u.a,{placeholder:"Busca un GIF",type:"text",value:i,onChange:function(e){b(e.target.value)}})]})]})},h=n(24),O=n(10),p=function(e){e.id;var t=e.title,n=e.url;return console.log(n),Object(c.jsxs)(O.a,{className:"animate__animated animate__fadeIn",style:{width:"18rem"},children:[Object(c.jsx)(O.a.Img,{variant:"top",src:n,alt:t}),Object(c.jsx)(O.a.Body,{children:Object(c.jsx)(O.a.Title,{children:t})})]})},x=n(21),f=n(16),m=n.n(f),g=n(20),v=function(){var e=Object(g.a)(m.a.mark((function e(t){var n,c,a,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=5&api_key=nZy6UI9XQ6X0IhIH7PS0sjI22RXzCBnd"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,r=a.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){v(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),r=n.data,i=n.loading;return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h3",{children:t}),i&&Object(c.jsx)("p",{children:"Cargando..."}),Object(c.jsx)(x.a,{children:r.map((function(e){return Object(c.jsx)(p,Object(h.a)({},e),e.id)}))}),Object(c.jsx)("hr",{})]})},I=function(){var e=Object(a.useState)(["Mario"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(b,{setCategories:r}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(e){return Object(c.jsx)(y,{category:e},e)}))})]})};n(39),n(40);i.a.render(Object(c.jsx)(I,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b350b8ae.chunk.js.map