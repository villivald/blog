(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(17),s=n.n(c),o=n(7),i=n(2),u=n.n(i),l=n(3),d=n(4),b=n(0),j=a.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),a=Object(d.a)(n,2),c=a[0],s=a[1],o={display:c?"none":""},i={display:c?"":"none"},u=function(){s(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:o,children:Object(b.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(b.jsx)("div",{className:"hiddenByDefault",style:c?{display:""}:{display:"none"},children:Object(b.jsxs)("div",{style:i,className:"togglableContent",children:[e.children,Object(b.jsx)("button",{onClick:u,children:e.cancelButtonLabel})]})})]})}));j.displayName="Togglable";var h=j,f=function(e){var t=e.blog,n=e.blogUpdate,r=e.blogRemove;return Object(b.jsxs)("div",{className:"blog-container",children:[Object(b.jsxs)("div",{className:"blogTitle",children:[Object(b.jsxs)("strong",{children:[t.title," "]}),"by",Object(b.jsxs)("strong",{children:[" ",t.author]})]}),Object(b.jsxs)(h,{buttonLabel:"View",cancelButtonLabel:"Hide",children:[Object(b.jsxs)("p",{children:["Url: ",t.url]}),Object(b.jsxs)("p",{className:"likeContainer",children:[1===t.likes?"".concat(t.likes," like"):"".concat(t.likes," likes"),Object(b.jsx)("button",{className:"likeButton",onClick:function(){var e=Object(o.a)(Object(o.a)({},t),{},{likes:t.likes+1});n(t.id,e)},children:"Like"})]}),Object(b.jsxs)("p",{children:["User: ",t.user.username]}),Object(b.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(t.title," by ").concat(t.author,"?"))&&r(t.id)},children:"Remove"})]})]})},p=function(e){var t=e.book,n=e.blogRemove;return Object(b.jsxs)("div",{className:"blog-container",children:[Object(b.jsxs)("div",{className:"blogTitle",children:[Object(b.jsxs)("strong",{children:[t.title," "]}),"by",Object(b.jsxs)("strong",{children:[" ",t.author]})]}),Object(b.jsxs)(h,{buttonLabel:"View",cancelButtonLabel:"Hide",children:[Object(b.jsxs)("p",{children:["Url: ",t.url]}),Object(b.jsxs)("p",{children:["User: ",t.user.username]}),Object(b.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(t.title," by ").concat(t.author,"?"))&&n(t.id)},children:"Remove"})]})]})},O=function(e){return null===e?null:Object(b.jsx)("div",{className:e.style,children:e.text})},g=n(5),v=n.n(g),m="/api/blogs",x=null,w={getAll:function(){return v.a.get(m).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,v.a.post(m,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return v.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){x="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:x}};return v.a.delete("".concat(m,"/").concat(e),t).then((function(e){return e.data}))}},k={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y="/api/books",C=null,S={getAll:function(){return v.a.get(y).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:C}},e.next=3,v.a.post(y,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return v.a.put("".concat(y,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){C="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:C}};return v.a.delete("".concat(y,"/").concat(e),t).then((function(e){return e.data}))}},N={register:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,a=e.username,c=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:["Username:",Object(b.jsx)("input",{id:"username",value:a,onChange:n})]}),Object(b.jsxs)("div",{children:["Password:",Object(b.jsx)("input",{id:"password",type:"password",value:c,onChange:r})]}),Object(b.jsx)("button",{id:"login-button",type:"submit",children:"Log in"})]})]})},L=function(e){var t=e.createBlog,n=Object(r.useState)(""),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(""),h=Object(d.a)(j,2),f=h[0],p=h[1];return Object(b.jsxs)("div",{className:"formDiv",children:[Object(b.jsx)("h2",{children:"Add a new blog"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:u,url:f}),s(""),l(""),p("")},children:[Object(b.jsxs)("p",{children:["Title:"," ",Object(b.jsx)("input",{id:"titleInput",value:c,onChange:function(e){console.log(e.target.value),s(e.target.value)},className:"titleInput"})]}),Object(b.jsxs)("p",{children:["Author:"," ",Object(b.jsx)("input",{id:"authorInput",value:u,onChange:function(e){console.log(e.target.value),l(e.target.value)},className:"authorInput"})]}),Object(b.jsxs)("p",{children:["Url:"," ",Object(b.jsx)("input",{id:"urlInput",value:f,onChange:function(e){console.log(e.target.value),p(e.target.value)},className:"urlInput"})]}),Object(b.jsx)("button",{id:"newBlogButton",type:"submit",children:"Add"})]})]})},U=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,a=e.handleNameChange,c=e.username,s=e.password,o=e.name;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Registration"}),Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:["Name:",Object(b.jsx)("input",{id:"name",value:o,onChange:a})]}),Object(b.jsxs)("div",{children:["Login:",Object(b.jsx)("input",{id:"username",value:c,onChange:n})]}),Object(b.jsxs)("div",{children:["Password:",Object(b.jsx)("input",{id:"password",type:"password",value:s,onChange:r})]}),Object(b.jsx)("button",{id:"register-button",type:"submit",children:"Register"})]})]})},T=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(d.a)(c,2),i=s[0],j=s[1],g=Object(r.useState)(""),v=Object(d.a)(g,2),m=v[0],x=v[1],y=Object(r.useState)(""),C=Object(d.a)(y,2),T=C[0],A=C[1],I=Object(r.useState)(""),R=Object(d.a)(I,2),D=R[0],P=R[1],z=Object(r.useState)(null),E=Object(d.a)(z,2),J=E[0],V=E[1],H=Object(r.useState)(!1),F=Object(d.a)(H,2),W=F[0],Y=F[1],q=Object(r.useState)(""),G=Object(d.a)(q,2),K=G[0],M=G[1],Q=Object(r.useState)("notification"),X=Object(d.a)(Q,2),Z=X[0],$=X[1],_=Object(r.useRef)();Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogUser");if(e){var t=JSON.parse(e);V(t),w.setToken(t.token)}}),[]);var ee=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.current.toggleVisibility(),""===t.title||""===t.author||""===t.url){e.next=12;break}return e.next=4,w.create(t);case 4:r=e.sent,a(n.concat(r)),$("notification"),M("A new blog ".concat(t.title," by ").concat(t.author," added")),Y(!W),setTimeout((function(){Y(!1)}),5e3),e.next=16;break;case 12:$("warning"),M("You must fill all fields in order to add a blog"),Y(!W),setTimeout((function(){Y(!1)}),5e3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(l.a)(u.a.mark((function e(t,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.update(t,r);case 2:c=Object(o.a)(Object(o.a)({},r),{},{blogId:t}),a(n.map((function(e){return e.id===c.id?c:e})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.remove(t);case 2:a(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.login({username:m,password:T});case 4:n=e.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(n)),w.setToken(n.token),V(n),x(""),A(""),$("notification"),M("User ".concat(n.username," is logged in")),Y(!W),setTimeout((function(){Y(!1)}),5e3),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(1),$("warning"),M("Wrong username or password"),Y(!W),setTimeout((function(){Y(!1)}),5e3);case 22:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.register({name:D,username:m,password:T});case 3:n=e.sent,$("notification"),M("User ".concat(n.username," was succesfully registered. Now you can log in.")),Y(!W),setTimeout((function(){Y(!1)}),1e4);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Blogs"}),J&&Object(b.jsxs)("div",{className:"log",children:[J.name," is logged in",Object(b.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogUser"),document.location.reload()},children:"Logout"})]}),W&&Object(b.jsx)(O,{text:K,style:Z}),!J&&Object(b.jsx)(h,{buttonLabel:"Register",cancelButtonLabel:"Cancel",children:Object(b.jsx)(U,{name:D,username:m,password:T,handleNameChange:function(e){var t=e.target;return P(t.value)},handleUsernameChange:function(e){var t=e.target;return x(t.value)},handlePasswordChange:function(e){var t=e.target;return A(t.value)},handleSubmit:ae})}),null===J?Object(b.jsx)(h,{buttonLabel:"Log in",cancelButtonLabel:"Cancel",children:Object(b.jsx)(B,{username:m,password:T,handleUsernameChange:function(e){var t=e.target;return x(t.value)},handlePasswordChange:function(e){var t=e.target;return A(t.value)},handleSubmit:re})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{buttonLabel:"New blog",cancelButtonLabel:"Cancel",ref:_,children:Object(b.jsx)(L,{createBlog:ee})}),Object(b.jsx)("div",{children:n.sort((function(e,t){return t.likes-e.likes})).filter((function(e){return e.user.username===J.username})).map((function(e){return Object(b.jsx)(f,{blog:e,blogUpdate:te,blogRemove:ne},e.id)}))}),Object(b.jsx)("h1",{children:"Books"}),Object(b.jsx)("div",{children:i.filter((function(e){return e.user.username===J.username})).map((function(e){return Object(b.jsx)(p,{blog:e,blogUpdate:te,blogRemove:ne},e.id)}))})]})]})};n(42);s.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.560fb73f.chunk.js.map