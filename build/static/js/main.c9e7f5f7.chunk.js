(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(17),s=n.n(c),o=n(7),i=n(2),u=n.n(i),l=n(5),b=n(3),d=n(0),j=a.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),a=Object(b.a)(n,2),c=a[0],s=a[1],o={display:c?"none":""},i={display:c?"":"none"},u=function(){s(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:o,children:Object(d.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(d.jsx)("div",{className:"hiddenByDefault",style:c?{display:""}:{display:"none"},children:Object(d.jsxs)("div",{style:i,className:"togglableContent",children:[e.children,Object(d.jsx)("button",{onClick:u,children:e.cancelButtonLabel})]})})]})}));j.displayName="Togglable";var f=j,h=function(e){var t=e.blog,n=e.blogUpdate,r=e.blogRemove;return Object(d.jsxs)("div",{className:"blog-container",children:[Object(d.jsxs)("div",{className:"blogTitle",children:[Object(d.jsxs)("strong",{children:[t.title," "]}),"by",Object(d.jsxs)("strong",{children:[" ",t.author]})]}),Object(d.jsxs)(f,{buttonLabel:"View",cancelButtonLabel:"Hide",children:[Object(d.jsxs)("p",{children:["Url: ",t.url]}),Object(d.jsxs)("p",{className:"likeContainer",children:[1===t.likes?"".concat(t.likes," like"):"".concat(t.likes," likes"),Object(d.jsx)("button",{className:"likeButton",onClick:function(){var e=Object(o.a)(Object(o.a)({},t),{},{likes:t.likes+1});n(t.id,e)},children:"Like"})]}),Object(d.jsxs)("p",{children:["User: ",t.user.username]}),Object(d.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(t.title," by ").concat(t.author,"?"))&&r(t.id)},children:"Remove"})]})]})},p=function(e){return null===e?null:Object(d.jsx)("div",{className:e.style,children:e.text})},O=n(6),g=n.n(O),v="/api/blogs",x=null,m={getAll:function(){return g.a.get(v).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,g.a.post(v,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat(v,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){x="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:x}};return g.a.delete("".concat(v,"/").concat(e),t).then((function(e){return e.data}))}},w={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,a=e.username,c=e.password;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsxs)("div",{children:["Username:",Object(d.jsx)("input",{id:"username",value:a,onChange:n})]}),Object(d.jsxs)("div",{children:["Password:",Object(d.jsx)("input",{id:"password",type:"password",value:c,onChange:r})]}),Object(d.jsx)("button",{id:"login-button",type:"submit",children:"Log in"})]})]})},y=function(e){var t=e.createBlog,n=Object(r.useState)(""),a=Object(b.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(""),f=Object(b.a)(j,2),h=f[0],p=f[1];return Object(d.jsxs)("div",{className:"formDiv",children:[Object(d.jsx)("h2",{children:"Add a new blog"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:u,url:h}),s(""),l(""),p("")},children:[Object(d.jsxs)("p",{children:["Title:"," ",Object(d.jsx)("input",{id:"titleInput",value:c,onChange:function(e){console.log(e.target.value),s(e.target.value)},className:"titleInput"})]}),Object(d.jsxs)("p",{children:["Author:"," ",Object(d.jsx)("input",{id:"authorInput",value:u,onChange:function(e){console.log(e.target.value),l(e.target.value)},className:"authorInput"})]}),Object(d.jsxs)("p",{children:["Url:"," ",Object(d.jsx)("input",{id:"urlInput",value:h,onChange:function(e){console.log(e.target.value),p(e.target.value)},className:"urlInput"})]}),Object(d.jsx)("button",{id:"newBlogButton",type:"submit",children:"Add"})]})]})},S=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),i=s[0],j=s[1],O=Object(r.useState)(""),g=Object(b.a)(O,2),v=g[0],x=g[1],S=Object(r.useState)(null),C=Object(b.a)(S,2),N=C[0],B=C[1],L=Object(r.useState)(!1),I=Object(b.a)(L,2),U=I[0],T=I[1],A=Object(r.useState)(""),D=Object(b.a)(A,2),R=D[0],J=D[1],E=Object(r.useState)("notification"),P=Object(b.a)(E,2),V=P[0],z=P[1],H=Object(r.useRef)();Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAll();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogUser");if(e){var t=JSON.parse(e);B(t),m.setToken(t.token)}}),[]);var F=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H.current.toggleVisibility(),""===t.title||""===t.author||""===t.url){e.next=12;break}return e.next=4,m.create(t);case 4:r=e.sent,a(n.concat(r)),z("notification"),J("A new blog ".concat(t.title," by ").concat(t.author," added")),T(!U),setTimeout((function(){T(!1)}),5e3),e.next=16;break;case 12:z("warning"),J("You must fill all fields in order to add a blog"),T(!U),setTimeout((function(){T(!1)}),5e3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(u.a.mark((function e(t,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.update(t,r);case 2:c=Object(o.a)(Object(o.a)({},r),{},{blogId:t}),a(n.map((function(e){return e.id===c.id?c:e})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.remove(t);case 2:a(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.login({username:i,password:v});case 4:n=e.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(n)),m.setToken(n.token),B(n),j(""),x(""),z("notification"),J("User ".concat(n.username," is logged in")),T(!U),setTimeout((function(){T(!1)}),5e3),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(1),z("warning"),J("Wrong username or password"),T(!U),setTimeout((function(){T(!1)}),5e3);case 22:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Blogs"}),N&&Object(d.jsxs)("div",{className:"log",children:[N.name," is logged in",Object(d.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogUser"),document.location.reload()},children:"Logout"})]}),U&&Object(d.jsx)(p,{text:R,style:V}),null===N?Object(d.jsx)(f,{buttonLabel:"Log in",cancelButtonLabel:"Cancel",children:Object(d.jsx)(k,{username:i,password:v,handleUsernameChange:function(e){var t=e.target;return j(t.value)},handlePasswordChange:function(e){var t=e.target;return x(t.value)},handleSubmit:q})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{buttonLabel:"New blog",cancelButtonLabel:"Cancel",ref:H,children:Object(d.jsx)(y,{createBlog:F})}),Object(d.jsx)("div",{children:n.sort((function(e,t){return t.likes-e.likes})).filter((function(e){return e.user.username===N.username})).map((function(e){return Object(d.jsx)(h,{blog:e,blogUpdate:W,blogRemove:Y},e.id)}))})]})]})};n(42);s.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c9e7f5f7.chunk.js.map