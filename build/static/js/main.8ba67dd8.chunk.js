(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(17),s=n.n(c),u=n(7),i=n(2),o=n.n(i),l=n(4),b=n(3),j=n(0),d=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),r=Object(b.a)(n,2),c=r[0],s=r[1],u={display:c?"none":""},i={display:c?"":"none"},o=function(){s(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:o}})),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:u,children:Object(j.jsx)("button",{onClick:o,children:e.buttonLabel})}),Object(j.jsx)("div",{className:"hiddenByDefault",style:c?{display:""}:{display:"none"},children:Object(j.jsxs)("div",{style:i,className:"togglableContent",children:[e.children,Object(j.jsx)("button",{onClick:o,children:e.cancelButtonLabel})]})})]})}));d.displayName="Togglable";var h=d,p=function(e){var t=e.blog,n=e.blogUpdate,a=e.blogRemove;return Object(j.jsxs)("div",{className:"blog-container",children:[Object(j.jsxs)("div",{className:"blogTitle",children:[Object(j.jsxs)("strong",{children:[t.title," "]}),"by",Object(j.jsxs)("strong",{children:[" ",t.author]})]}),Object(j.jsxs)(h,{buttonLabel:"View",cancelButtonLabel:"Hide",children:[Object(j.jsxs)("p",{children:["Url: ",t.url]}),Object(j.jsxs)("p",{className:"likeContainer",children:[1===t.likes?"".concat(t.likes," like"):"".concat(t.likes," likes"),Object(j.jsx)("button",{className:"likeButton",onClick:function(){var e=Object(u.a)(Object(u.a)({},t),{},{likes:t.likes+1});n(t.id,e)},children:"Like"})]}),Object(j.jsxs)("p",{children:["User: ",t.user.username]}),Object(j.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(t.title," by ").concat(t.author,"?"))&&a(t.id)},children:"Remove"})]})]})},f=function(e){var t=e.book,n=e.bookRemove;return Object(j.jsxs)("div",{className:"blog-container",children:[Object(j.jsxs)("div",{className:"blogTitle",children:[Object(j.jsxs)("strong",{children:[t.title," "]}),"by",Object(j.jsxs)("strong",{children:[" ",t.author]})]}),Object(j.jsxs)(h,{buttonLabel:"View",cancelButtonLabel:"Hide",children:[Object(j.jsx)("img",{src:t.picture}),Object(j.jsxs)("p",{children:["Url: ",t.url]}),Object(j.jsxs)("p",{children:["Stars: ",t.stars]}),Object(j.jsxs)("p",{children:["Date: ","".concat(t.day,".").concat(t.month,".").concat(t.year)]}),Object(j.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(t.title," by ").concat(t.author,"?"))&&n(t.id)},children:"Remove"})]})]})},O=function(e){return null===e?null:Object(j.jsx)("div",{className:e.style,children:e.text})},v=n(5),g=n.n(v),x="/api/blogs",m=null,w={getAll:function(){return g.a.get(x).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},e.next=3,g.a.post(x,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat(x,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){m="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:m}};return g.a.delete("".concat(x,"/").concat(e),t).then((function(e){return e.data}))}},k={login:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y="/api/books",C=null,S={getAll:function(){return g.a.get(y).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:C}},e.next=3,g.a.post(y,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat(y,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){C="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:C}};return g.a.delete("".concat(y,"/").concat(e),t).then((function(e){return e.data}))}},N={register:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,r=e.username,c=e.password;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{children:["Username:",Object(j.jsx)("input",{id:"username",value:r,onChange:n})]}),Object(j.jsxs)("div",{children:["Password:",Object(j.jsx)("input",{id:"password",type:"password",value:c,onChange:a})]}),Object(j.jsx)("button",{id:"login-button",type:"submit",children:"Log in"})]})]})},B=function(e){var t=e.createBlog,n=Object(a.useState)(""),r=Object(b.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),i=Object(b.a)(u,2),o=i[0],l=i[1],d=Object(a.useState)(""),h=Object(b.a)(d,2),p=h[0],f=h[1];return Object(j.jsxs)("div",{className:"formDiv",children:[Object(j.jsx)("h2",{children:"Add a new blog"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:o,url:p}),s(""),l(""),f("")},children:[Object(j.jsxs)("p",{children:["Title:"," ",Object(j.jsx)("input",{id:"titleInput",value:c,onChange:function(e){console.log(e.target.value),s(e.target.value)},className:"titleInput"})]}),Object(j.jsxs)("p",{children:["Author:"," ",Object(j.jsx)("input",{id:"authorInput",value:o,onChange:function(e){console.log(e.target.value),l(e.target.value)},className:"authorInput"})]}),Object(j.jsxs)("p",{children:["Url:"," ",Object(j.jsx)("input",{id:"urlInput",value:p,onChange:function(e){console.log(e.target.value),f(e.target.value)},className:"urlInput"})]}),Object(j.jsx)("button",{id:"newBlogButton",type:"submit",children:"Add"})]})]})},L=function(e){var t=e.createBook,n=Object(a.useState)(""),r=Object(b.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),i=Object(b.a)(u,2),o=i[0],l=i[1],d=Object(a.useState)(""),h=Object(b.a)(d,2),p=h[0],f=h[1],O=Object(a.useState)(""),v=Object(b.a)(O,2),g=v[0],x=v[1],m=Object(a.useState)(""),w=Object(b.a)(m,2),k=w[0],y=w[1],C=Object(a.useState)(""),S=Object(b.a)(C,2),N=S[0],I=S[1],B=Object(a.useState)(""),L=Object(b.a)(B,2),T=L[0],U=L[1],A=Object(a.useState)(""),R=Object(b.a)(A,2),D=R[0],P=R[1];return Object(j.jsxs)("div",{className:"formDiv",children:[Object(j.jsx)("h2",{children:"Add a new book"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:o,url:p,stars:g,picture:k,year:N,month:T,day:D}),s(""),l(""),f(""),x(""),y(""),I(""),U(""),P("")},children:[Object(j.jsxs)("p",{children:["Title:"," ",Object(j.jsx)("input",{id:"titleInput",value:c,onChange:function(e){return s(e.target.value)},className:"titleInput"})]}),Object(j.jsxs)("p",{children:["Author:"," ",Object(j.jsx)("input",{id:"authorInput",value:o,onChange:function(e){return l(e.target.value)},className:"authorInput"})]}),Object(j.jsxs)("p",{children:["Url:"," ",Object(j.jsx)("input",{id:"urlInput",value:p,onChange:function(e){return f(e.target.value)},className:"urlInput"})]}),Object(j.jsxs)("p",{children:["Stars:"," ",Object(j.jsx)("input",{id:"starsInput",value:g,onChange:function(e){return x(e.target.value)},className:"starsInput"})]}),Object(j.jsxs)("p",{children:["Picture:"," ",Object(j.jsx)("input",{id:"pictureInput",value:k,onChange:function(e){return y(e.target.value)},className:"pictureInput"})]}),Object(j.jsxs)("p",{children:["Year:"," ",Object(j.jsx)("input",{id:"dateInput",value:N,onChange:function(e){return I(e.target.value)},className:"dateInput"})]}),Object(j.jsxs)("p",{children:["Month:"," ",Object(j.jsx)("input",{id:"dateInput",value:T,onChange:function(e){return U(e.target.value)},className:"dateInput"})]}),Object(j.jsxs)("p",{children:["Day:"," ",Object(j.jsx)("input",{id:"dateInput",value:D,onChange:function(e){return P(e.target.value)},className:"dateInput"})]}),Object(j.jsx)("button",{id:"newBookButton",type:"submit",children:"Add"})]})]})},T=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,r=e.handleNameChange,c=e.username,s=e.password,u=e.name;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Registration"}),Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{children:["Name:",Object(j.jsx)("input",{id:"name",value:u,onChange:r})]}),Object(j.jsxs)("div",{children:["Login:",Object(j.jsx)("input",{id:"username",value:c,onChange:n})]}),Object(j.jsxs)("div",{children:["Password:",Object(j.jsx)("input",{id:"password",type:"password",value:s,onChange:a})]}),Object(j.jsx)("button",{id:"register-button",type:"submit",children:"Register"})]})]})},U=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(b.a)(c,2),i=s[0],d=s[1],v=Object(a.useState)(""),g=Object(b.a)(v,2),x=g[0],m=g[1],y=Object(a.useState)(""),C=Object(b.a)(y,2),U=C[0],A=C[1],R=Object(a.useState)(""),D=Object(b.a)(R,2),P=D[0],V=D[1],z=Object(a.useState)(null),E=Object(b.a)(z,2),J=E[0],H=E[1],Y=Object(a.useState)(!1),F=Object(b.a)(Y,2),M=F[0],W=F[1],q=Object(a.useState)(""),G=Object(b.a)(q,2),K=G[0],Q=G[1],X=Object(a.useState)("notification"),Z=Object(b.a)(X,2),$=Z[0],_=Z[1],ee=Object(a.useRef)(),te=Object(a.useRef)();Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogUser");if(e){var t=JSON.parse(e);H(t),w.setToken(t.token),S.setToken(t.token)}}),[]);var ne=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee.current.toggleVisibility(),""===t.title||""===t.author||""===t.url){e.next=12;break}return e.next=4,w.create(t);case 4:a=e.sent,r(n.concat(a)),_("notification"),Q("A new blog ".concat(t.title," by ").concat(t.author," added")),W(!M),setTimeout((function(){W(!1)}),5e3),e.next=16;break;case 12:_("warning"),Q("You must fill all fields in order to add a blog"),W(!M),setTimeout((function(){W(!1)}),5e3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te.current.toggleVisibility(),""===t.title||""===t.author||""===t.url){e.next=12;break}return e.next=4,S.create(t);case 4:n=e.sent,d(i.concat(n)),_("notification"),Q("A new book ".concat(t.title," by ").concat(t.author," added")),W(!M),setTimeout((function(){W(!1)}),5e3),e.next=16;break;case 12:_("warning"),Q("You must fill all fields in order to add a book"),W(!M),setTimeout((function(){W(!1)}),5e3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.update(t,a);case 2:c=Object(u.a)(Object(u.a)({},a),{},{blogId:t}),r(n.map((function(e){return e.id===c.id?c:e})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.remove(t);case 2:r(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.remove(t);case 2:d(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.login({username:x,password:U});case 4:n=e.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(n)),w.setToken(n.token),H(n),m(""),A(""),_("notification"),Q("User ".concat(n.username," is logged in")),W(!M),setTimeout((function(){W(!1)}),5e3),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(1),_("warning"),Q("Wrong username or password"),W(!M),setTimeout((function(){W(!1)}),5e3);case 22:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N.register({name:P,username:x,password:U});case 3:n=e.sent,_("notification"),Q("User ".concat(n.username," was succesfully registered. Now you can log in.")),W(!M),setTimeout((function(){W(!1)}),1e4);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Blogs"}),J&&Object(j.jsxs)("div",{className:"log",children:[J.name," is logged in",Object(j.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogUser"),document.location.reload()},children:"Logout"})]}),M&&Object(j.jsx)(O,{text:K,style:$}),!J&&Object(j.jsx)(h,{buttonLabel:"Register",cancelButtonLabel:"Cancel",children:Object(j.jsx)(T,{name:P,username:x,password:U,handleNameChange:function(e){var t=e.target;return V(t.value)},handleUsernameChange:function(e){var t=e.target;return m(t.value)},handlePasswordChange:function(e){var t=e.target;return A(t.value)},handleSubmit:ie})}),null===J?Object(j.jsx)(h,{buttonLabel:"Log in",cancelButtonLabel:"Cancel",children:Object(j.jsx)(I,{username:x,password:U,handleUsernameChange:function(e){var t=e.target;return m(t.value)},handlePasswordChange:function(e){var t=e.target;return A(t.value)},handleSubmit:ue})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{buttonLabel:"New blog",cancelButtonLabel:"Cancel",ref:ee,children:Object(j.jsx)(B,{createBlog:ne})}),Object(j.jsx)("div",{children:n.sort((function(e,t){return t.likes-e.likes})).filter((function(e){return e.user.username===J.username})).map((function(e){return Object(j.jsx)(p,{blog:e,blogUpdate:re,blogRemove:ce},e.id)}))}),Object(j.jsx)(h,{buttonLabel:"New book",cancelButtonLabel:"Cancel",ref:te,children:Object(j.jsx)(L,{createBook:ae})}),Object(j.jsx)("h1",{children:"Books"}),Object(j.jsxs)("div",{children:[i.sort((function(e,t){return t.year-e.year})).filter((function(e){return e.user.username===J.username})).map((function(e){return Object(j.jsx)(f,{book:e,bookRemove:se},e.id)})),console.log(i)]})]})]})};n(42);s.a.render(Object(j.jsx)(U,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8ba67dd8.chunk.js.map