(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return O}));var r=n(2),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),s=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/Filter")},76:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var r,c,a=n(0),u=n.n(a),s=n(24),o=n.n(s),i=n(8),b=n(27),j=n(2),l=n(43),O=n.n(l),d=n(3),f=n(6),h=n(10),g=Object(j.c)([],(r={},Object(d.a)(r,h.i,(function(t,e){return e.payload})),Object(d.a)(r,h.c,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?alert("".concat(n.name," is already in contacts.")):[n].concat(Object(b.a)(t))})),Object(d.a)(r,h.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),p=Object(j.c)(!1,(c={},Object(d.a)(c,h.h,(function(){return!0})),Object(d.a)(c,h.i,(function(){return!1})),Object(d.a)(c,h.g,(function(){return!1})),Object(d.a)(c,h.b,(function(){return!0})),Object(d.a)(c,h.c,(function(){return!1})),Object(d.a)(c,h.a,(function(){return!1})),Object(d.a)(c,h.e,(function(){return!0})),Object(d.a)(c,h.f,(function(){return!1})),Object(d.a)(c,h.d,(function(){return!1})),c)),v=Object(j.c)("",Object(d.a)({},h.j,(function(t,e){return e.payload}))),x=Object(j.c)(null,{}),m=Object(f.b)({items:g,filter:v,loading:p,error:x}),C=n(9),k=n(18),S=n(44),E=n.n(S),_=[].concat(Object(b.a)(Object(j.d)({serializableCheck:{ignoredActions:[k.a,k.f,k.b,k.c,k.d,k.e]}})),[O.a]),w={key:"auth",storage:E.a,whitelist:["token"]},y=Object(j.a)({reducer:{auth:Object(k.g)(w,C.b),contacts:m},middleware:_}),N={store:y,persistor:Object(k.h)(y)},R=n(15),U=n(45),A=n(5),q={HomeView:"/",RegisterView:"/register",LoginView:"/login",ContactsView:"/contacts"},T=(n(76),n(1));function I(){var t=Object(i.c)(C.c.getIsAuthenticated);return Object(T.jsxs)("nav",{children:[Object(T.jsx)(R.b,{className:"navigation__link",activeClassName:"navigation__activeLink",to:q.HomeView,exact:!0,children:"HOME"}),t&&Object(T.jsx)(R.b,{className:"navigation__link",activeClassName:"navigation__activeLink",to:q.ContactsView,exact:!0,children:"CONTACTS"})]})}n(81);function L(){var t=Object(i.b)(),e=Object(i.c)(C.c.getUsermail),n=Object(a.useCallback)((function(){return t(C.a.logOut())}),[t]);return Object(T.jsxs)("div",{className:"userMenu__container",children:[Object(T.jsx)("p",{className:"userMenu__email",children:e}),Object(T.jsx)("button",{className:"userMenu__button",type:"button",onClick:n,children:"Logout"})]})}n(82);var V=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(R.b,{className:"authNav__link",activeClassName:"authNav__activeLink",to:q.RegisterView,exact:!0,children:"REGISTRATION"}),Object(T.jsx)(R.b,{className:"authNav__link",activeClassName:"authNav__activeLink",to:q.LoginView,exact:!0,children:"LOGIN"})]})};n(83);function z(){var t=Object(i.c)(C.c.getIsAuthenticated);return Object(T.jsxs)("header",{className:"appBar__header",children:[Object(T.jsx)(I,{}),t?Object(T.jsx)(L,{}):Object(T.jsx)(V,{})]})}n(84);var M=function(t){var e=t.children;return Object(T.jsx)("div",{className:"container",children:e})},B=n(16),H=n(26),G=["isAuthenticated","redirectTo","children"];function J(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,r=Object(H.a)(t,G),c=Object(i.c)(C.c.getIsAuthenticated);return Object(T.jsxs)(A.b,Object(B.a)(Object(B.a)({},r),{},{children:["r",c?n:Object(T.jsx)(A.a,{to:e})]}))}var F=["isAuthenticated","redirectTo","children"];function D(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,r=Object(H.a)(t,F),c=Object(i.c)(C.c.getIsAuthenticated);return Object(T.jsx)(A.b,Object(B.a)(Object(B.a)({},r),{},{children:c&&r.restricted?Object(T.jsx)(A.a,{to:e}):n}))}n(85);var K=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,105))})),P=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,106))})),Q=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,107))})),W=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,108))}));function X(){var t=Object(i.b)();return Object(a.useEffect)((function(){t(C.a.getCurrentUser())}),[t]),Object(T.jsxs)(M,{children:[Object(T.jsx)(z,{}),Object(T.jsx)(a.Suspense,{fallback:Object(T.jsx)("p",{children:"Loading..."}),children:Object(T.jsxs)(A.d,{children:[Object(T.jsx)(D,{exact:!0,path:"/",children:Object(T.jsx)(K,{})}),Object(T.jsx)(D,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(T.jsx)(P,{})}),Object(T.jsx)(D,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(T.jsx)(Q,{})}),Object(T.jsx)(J,{path:"/contacts",redirectTo:"/login",children:Object(T.jsx)(W,{})})]})})]})}o.a.render(Object(T.jsx)(u.a.StrictMode,{children:Object(T.jsx)(i.a,{store:N.store,children:Object(T.jsx)(U.a,{loading:null,persistor:N.persistor,children:Object(T.jsx)(R.a,{children:Object(T.jsx)(X,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return U})),n.d(e,"c",(function(){return A}));var r,c,a,u,s=n(2),o=Object(s.b)("auth/registerRequest"),i=Object(s.b)("auth/registerSuccess"),b=Object(s.b)("auth/registerError"),j=Object(s.b)("auth/loginRequest"),l=Object(s.b)("auth/loginSuccess"),O=Object(s.b)("auth/loginError"),d={registerRequest:o,registerSuccess:i,registerError:b,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:j,loginSuccess:l,loginError:O,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},f=n(3),h=n(6),g={name:null,email:null},p=Object(s.c)(g,(r={},Object(f.a)(r,d.registerSuccess,(function(t,e){return e.payload.user})),Object(f.a)(r,d.loginSuccess,(function(t,e){return e.payload.user})),Object(f.a)(r,d.logoutSuccess,(function(){return g})),Object(f.a)(r,d.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),v=Object(s.c)(null,(c={},Object(f.a)(c,d.registerSuccess,(function(t,e){return e.payload.token})),Object(f.a)(c,d.loginSuccess,(function(t,e){return e.payload.token})),Object(f.a)(c,d.logoutSuccess,(function(){return null})),c)),x=function(t,e){return e.payload},m=Object(s.c)(null,(a={},Object(f.a)(a,d.registerError,x),Object(f.a)(a,d.loginError,x),Object(f.a)(a,d.logoutError,x),Object(f.a)(a,d.getCurrentUserError,x),a)),C=Object(s.c)(!1,(u={},Object(f.a)(u,d.registerSuccess,(function(){return!0})),Object(f.a)(u,d.loginSuccess,(function(){return!0})),Object(f.a)(u,d.getCurrentUserSuccess,(function(){return!0})),Object(f.a)(u,d.registerError,(function(){return!1})),Object(f.a)(u,d.loginError,(function(){return!1})),Object(f.a)(u,d.getCurrentUserError,(function(){return!1})),Object(f.a)(u,d.logoutSuccess,(function(){return!1})),u)),k=Object(h.b)({user:p,isAuthenticated:C,token:v,error:m}),S=n(17),E=n.n(S),_=n(23),w=n(19),y=n.n(w);y.a.defaults.baseURL="https://connections-api.herokuapp.com";var N=function(t){y.a.defaults.headers.common.Authorization="Bearer ".concat(t)},R=function(){y.a.defaults.headers.common.Authorization=""},U={register:function(t){return function(){var e=Object(_.a)(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(d.registerRequest()),e.prev=1,e.next=4,y.a.post("/users/signup",t);case 4:r=e.sent,N(r.data.token),n(d.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(d.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(_.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d.logoutRequest()),t.prev=1,t.next=4,y.a.post("/users/logout");case 4:R(),e(d.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(d.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(_.a)(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(d.loginRequest()),e.prev=1,e.next=4,y.a.post("/users/login",t);case 4:r=e.sent,N(r.data.token),n(d.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(d.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(_.a)(E.a.mark((function t(e,n){var r,c,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return N(c),e(d.getCurrentUserRequest()),t.prev=5,t.next=8,y.a.get("/users/current");case 8:a=t.sent,e(d.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(d.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},A={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsermail:function(t){return t.auth.user.email}}}},[[86,1,2]]]);
//# sourceMappingURL=main.98889e6c.chunk.js.map