(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{100:function(t,e,n){"use strict";var r=n(91),c=n(101),a=n(102);t.exports=function(t){for(var e,n=0,s="";!e;)s+=a(c,r.get(),1),e=t<Math.pow(16,n+1),n++;return s}},101:function(t,e,n){"use strict";var r,c="object"===typeof window&&(window.crypto||window.msCrypto);r=c&&c.getRandomValues?function(t){return c.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},102:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,c=-~(1.6*r*n/e.length),a="";;)for(var s=t(c),o=c;o--;)if((a+=e[s[o]&r]||"").length===+n)return a}},103:function(t,e,n){"use strict";var r=n(91);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},104:function(t,e,n){"use strict";t.exports=0},105:function(t,e,n){},106:function(t,e,n){},107:function(t,e,n){},108:function(t,e,n){},112:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return I}));var r=n(0),c=n(8),a=n(3),s=n(42),o=n(43),u=n(45),i=n(44),l=n(96),f=n.n(l),h=n(17),b=n.n(h),p=n(23),d=n(19),m=n.n(d),j=n(10),x={addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(p.a)(b.a.mark((function t(r){var c,a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={name:e,number:n},r(j.b),t.prev=2,t.next=5,m.a.post("/contacts",c);case 5:a=t.sent,s=a.data,r(Object(j.c)(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r(Object(j.a)(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(p.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(j.e)()),e.prev=1,e.next=4,m.a.delete("/contacts/".concat(t));case 4:n(Object(j.f)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(j.d)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var t=Object(p.a)(b.a.mark((function t(e){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(j.h)()),t.prev=1,t.next=4,m.a.get("/contacts");case 4:n=t.sent,r=n.data,e(Object(j.i)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(j.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},v=(n(105),n(1)),O=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=f.a.generate(),t.numberInputId=f.a.generate(),t.handleInput=function(e){var n=e.currentTarget,r=n.name,c=n.value;t.setState(Object(a.a)({},r,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{className:"",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{className:"contacts__form-item",htmlFor:this.nameInputId,children:["Name",Object(v.jsx)("input",{className:"contacts__form-text",type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInput,id:this.nameInputId})]}),Object(v.jsxs)("label",{className:"contacts__form-item",htmlFor:this.numberInputId,children:["Number",Object(v.jsx)("input",{className:"contacts__form-text",type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInput,id:this.numberInputId})]}),Object(v.jsx)("button",{className:"contacts__form-button",type:"submit",children:"Add contact"})]})}}]),n}(r.Component),g=Object(c.b)(null,(function(t){return{onSubmit:function(e){var n=e.name,r=e.number;return t(x.addContact({name:n,number:r}))}}}))(O),w=n(25),_=function(t){return t.contacts.loading},C=function(t){return t.contacts.filter},N=Object(w.a)([function(t){return t.contacts.items},C],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}));n(106);function k(){var t=Object(c.c)(),e=Object(c.d)(N),n=Object(r.useCallback)((function(e){return t(x.deleteContact(e))}),[t]);return Object(v.jsx)("ul",{className:"contacts__list",children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(v.jsxs)("li",{className:"contacts__list-item",children:[Object(v.jsxs)("p",{children:[r,": ",c]}),Object(v.jsx)("button",{className:"contacts__list-button",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}n(107);function y(){var t=Object(c.c)(),e=Object(c.d)(C),n=Object(r.useCallback)((function(e){return t(Object(j.j)(e.target.value))}),[t]);return Object(v.jsx)("div",{children:Object(v.jsxs)("label",{className:"filter",children:["Find contacts by name",Object(v.jsx)("input",{className:"",type:"text",value:e,onChange:n})]})})}n(108);function I(){var t=Object(c.c)(),e=Object(c.d)(_);return Object(r.useEffect)((function(){t(x.fetchContacts())}),[t]),Object(v.jsxs)("div",{className:"contactsView__container",children:[Object(v.jsx)("h1",{className:"contactsView__title",children:"Phonebook"}),Object(v.jsx)(g,{}),Object(v.jsx)("h2",{className:"contactsView__title",children:"Contacts"}),Object(v.jsx)(y,{}),e&&Object(v.jsx)("h1",{className:"contactsView__loading-title",children:"Loading..."}),Object(v.jsx)(k,{})]})}},91:function(t,e,n){"use strict";var r,c,a,s=n(98),o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){a=!1}function i(t){if(t){if(t!==r){if(t.length!==o.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,u()}}else r!==o&&(r=o,u())}function l(){return a||(a=function(){r||i(o);for(var t,e=r.split(""),n=[],c=s.nextValue();e.length>0;)c=s.nextValue(),t=Math.floor(c*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||o},characters:function(t){return i(t),r},seed:function(t){s.seed(t),c!==t&&(u(),c=t)},lookup:function(t){return l()[t]},shuffled:l}},96:function(t,e,n){"use strict";t.exports=n(97)},97:function(t,e,n){"use strict";var r=n(91),c=n(99),a=n(103),s=n(104)||0;function o(){return c(s)}t.exports=o,t.exports.generate=o,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return s=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=a},98:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},99:function(t,e,n){"use strict";var r,c,a=n(100);n(91);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===c?r++:(r=0,c=n),e+=a(7),e+=a(t),r>0&&(e+=a(r)),e+=a(n)}}}]);
//# sourceMappingURL=3.6399bb58.chunk.js.map