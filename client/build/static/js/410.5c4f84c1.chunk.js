"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[410],{1443:function(e,n,a){a.d(n,{Gl:function(){return m},PV:function(){return h},SI:function(){return u},be:function(){return d},cZ:function(){return o},h9:function(){return p},yY:function(){return l},yZ:function(){return c},zh:function(){return v}});var t=a(4165),r=a(5861),s=a(1044),i=a(7895),o=function(){return function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,a){var r,o,l,u,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:i.lI}),r=a(),o=r.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},e.next=6,s.Z.get("".concat("https://club-manager.onrender.com/","api/admin/users"),l);case 6:u=e.sent,c=u.data,n({type:i.ew,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n({type:i.cQ,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,a){return e.apply(this,arguments)}}()},l=function(e,n){return function(){var a=(0,r.Z)((0,t.Z)().mark((function a(r,l){var u,c,d,m,p;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:i.nC}),u=l(),c=u.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/user-is-admin/").concat(e),{isAdmin:n},d);case 6:m=a.sent,p=m.data,r({type:i.K4,payload:p}),r(o()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:i.MM,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,n){return a.apply(this,arguments)}}()},u=function(e,n){return function(){var a=(0,r.Z)((0,t.Z)().mark((function a(r,l){var u,c,d,m,p;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:i.vI}),u=l(),c=u.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/user-is-suspended/").concat(e),{isSuspended:n},d);case 6:m=a.sent,p=m.data,r({type:i.$K,payload:p}),r(o()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:i.SA,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,n){return a.apply(this,arguments)}}()},c=function(e,n){return function(){var a=(0,r.Z)((0,t.Z)().mark((function a(r,l){var u,c,d,m,p;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:i.es}),u=l(),c=u.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/user-is-coach/").concat(e),{isCoach:n},d);case 6:m=a.sent,p=m.data,r({type:i.fL,payload:p}),r(o()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:i.zL,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,n){return a.apply(this,arguments)}}()},d=function(e,n){return function(){var a=(0,r.Z)((0,t.Z)().mark((function a(r,l){var u,c,d,m,p;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:i.PS}),u=l(),c=u.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/user-is-parent/").concat(e),{isParent:n},d);case 6:m=a.sent,p=m.data,r({type:i.fR,payload:p}),r(o()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:i.Vt,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,n){return a.apply(this,arguments)}}()},m=function(e,n){return function(){var a=(0,r.Z)((0,t.Z)().mark((function a(r,l){var u,c,d,m,p;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:i.FE}),u=l(),c=u.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/user-is-player/").concat(e),{isPlayer:n},d);case 6:m=a.sent,p=m.data,r({type:i.UG,payload:p}),r(o()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:i.nJ,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,n){return a.apply(this,arguments)}}()},p=function(e){return function(){var n=(0,r.Z)((0,t.Z)().mark((function n(a,r){var o,l,u,c,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:i.rP}),o=r(),l=o.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,s.Z.post("".concat("https://club-manager.onrender.com/","api/admin/profile-create"),e,u);case 6:c=n.sent,d=c.data,a({type:i.kw,payload:d}),a(v()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:i.lV,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,a){return n.apply(this,arguments)}}()},v=function(e){return function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,a){var r,o,l,u,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:i.cB}),r=a(),o=r.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},e.next=6,s.Z.get("".concat("https://club-manager.onrender.com/","api/admin/profiles"),l);case 6:u=e.sent,c=u.data,n({type:i.C8,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n({type:i.UP,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,a){return e.apply(this,arguments)}}()},h=function(e){return function(){var n=(0,r.Z)((0,t.Z)().mark((function n(a,r){var o,l,u,c,d;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:i.Ib}),o=r(),l=o.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/profile-edit/").concat(e.id),e,u);case 6:c=n.sent,d=c.data,a({type:i.Vm,payload:d}),a(v()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:i.Aw,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,a){return n.apply(this,arguments)}}()}},7410:function(e,n,a){a.r(n),a.d(n,{default:function(){return F}});var t=a(885),r=a(2791),s=a(9434),i=a(7689),o=a(1087),l=a(9135),u=a(1443),c=a(1141),d=a(9183),m=a(5386),p=a(9375),v=a(5223),h=a(4345),x=a(2426),f=a.n(x),g=a(4942),j=a(1413),y=a(8587),b=a(7388),Z=a(2986),w=a(8989),k=a(4419),C=a(184),N=function(e){var n=e.userId,a=(0,s.I0)(),o=(0,i.s0)(),l=(0,s.v9)((function(e){return e.userLogin})).userInfo,u=(0,s.v9)((function(e){return e.googleUserLogin})).userInfo,p=(0,s.v9)((function(e){return e.userAdminDetails})).userAdmin,v=(0,r.useState)({title:"",message:"",from:""}),h=(0,t.Z)(v,2),x=h[0],f=h[1],N=x.title,F=x.message,I=x.from,A=function(e){f((function(n){return(0,j.Z)((0,j.Z)({},n),{},(0,g.Z)({},e.name,e.value))}))},L=(0,s.v9)((function(e){return e.adminCreatePrivateMessage})),P=L.loading,G=L.error,S=L.success;return(0,C.jsxs)(C.Fragment,{children:[G?(0,C.jsx)(d.Z,{error:G}):null,S?(0,C.jsx)(Z.Z,{message:"Your profile was successfully created"}):null,P?(0,C.jsx)(m.Z,{}):(0,C.jsxs)("fieldset",{className:"fieldSet",children:[(0,C.jsx)("legend",{children:"Send a Private message"}),(0,C.jsx)("div",{children:(0,C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l&&(u||null!==p&&void 0!==p&&p.isAdmin)?(a((0,y.Hy)(x,n)),f({title:"",message:"",from:""})):o("/login")},children:[(0,C.jsx)(b.Z,{label:"TITLE",value:N,type:"text",name:"title",required:!0,className:k.VD.test(N)?"entered":"invalid",error:k.VD.test(N)||0===N.length?null:"Name must contain at least 5 characters",onChange:function(e){return A(e.target)}}),(0,C.jsx)(w.Z,{label:"Message",id:"message",name:"message",value:F,error:F.length<=15&&0!==(null===F||void 0===F?void 0:F.length)?"Description must contain at least 16 characters":null,onChange:function(e){return A(e.target)}}),(0,C.jsx)(b.Z,{label:"From",value:I,type:"text",name:"from",required:!0,className:k.VD.test(I)?"entered":"invalid",error:k.VD.test(I)||0===(null===I||void 0===I?void 0:I.length)?null:"Please choose a number between 1 and 100",onChange:function(e){return A(e.target)}}),(0,C.jsx)(c.Z,{type:"submit",text:!k.VD.test(I)||F.length<=15?"Disabled":"submit",variant:"primary",disabled:!k.VD.test(I)||F.length<=15})]})})]})]})},F=function(){var e=(0,s.I0)(),n=(0,i.s0)(),a=(0,s.v9)((function(e){return e.userLogin})).userInfo;(0,r.useEffect)((function(){var t=!1;return a?t||e((0,u.cZ)()):n("/login"),function(){return t=!0}}),[a,n,e]);var x=(0,s.v9)((function(e){return e.adminUsersDetails})),g=x.loading,j=x.error,y=x.users,b=function(n,a){e((0,u.yY)(n,a))},Z=function(n,a){e((0,u.SI)(n,a))},w=function(n,a){e((0,u.yZ)(n,a))},k=function(n,a){e((0,u.be)(n,a))},F=function(n,a){e((0,u.Gl)(n,a))},I=(0,r.useState)(""),A=(0,t.Z)(I,2),L=A[0],P=A[1],G=null===y||void 0===y?void 0:y.filter((function(e){return void 0!==e.username&&e.username.toLowerCase().includes(L.toLowerCase())}));return(0,C.jsxs)(C.Fragment,{children:[j?(0,C.jsx)(d.Z,{error:j}):null,g?(0,C.jsx)(m.Z,{}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h2",{children:"Manage Users"}),(0,C.jsxs)("div",{className:"admin-get-player__top-wrapper",children:[(0,C.jsx)(p.Z,{placeholder:"search username",value:L,onChange:function(e){P(e.target.value)},quantity:null===G||void 0===G?void 0:G.length,total:null===y||void 0===y?void 0:y.length}),(0,C.jsx)(c.Z,{type:"button",text:(0,C.jsx)(o.OL,{className:function(e){return e.isActive?"active":""},to:"/admin-profile",children:"Go Back"}),variant:"info",disabled:!1})]}),(0,C.jsx)("div",{className:"wrapper",children:null===G||void 0===G?void 0:G.map((function(e){return(0,C.jsx)("div",{children:(0,C.jsxs)("fieldset",{className:"fieldSet",children:[(0,C.jsx)("legend",{children:(0,C.jsx)(v.Z,{value:e.username,keyword:L})}),(0,C.jsx)(h.Z,{className:"create-btn",openButtonTitle:"Send Private Message",closeButtonTitle:"Close",variant:"success",props:(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(N,{userId:e._id})})}),(0,C.jsxs)("div",{className:"toggle-wrapper",children:[(0,C.jsx)("div",{children:"EMAIL"}),(0,C.jsx)("p",{children:(0,C.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})})]}),(0,C.jsxs)("div",{className:"toggle-wrapper ".concat(!1===(null===e||void 0===e?void 0:e.registeredWithGoogle)?"is-not-google":"is-google"),children:["REGISTERED WITH GOOGLE:"," ",!1===(null===e||void 0===e?void 0:e.registeredWithGoogle)?(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"}):(0,C.jsx)(l.spm,{className:"ra-thumbs-up"})]}),(0,C.jsxs)("div",{className:"toggle-wrapper",children:[(0,C.jsx)("div",{children:"CONFIRMED"}),e.isConfirmed?(0,C.jsx)(l.spm,{className:"ra-thumbs-up"}):(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"})]}),g?(0,C.jsx)(m.Z,{}):(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("p",{className:"admin-warning",children:"You can't remove yourself as administrator"})}):(0,C.jsx)("div",{className:"toggle-wrapper",children:null!==e&&void 0!==e&&e.isCoach?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Coach"}),(0,C.jsx)(c.Z,{type:"button",text:"Remove Coach ?",variant:"danger",onClick:function(){return w(null===e||void 0===e?void 0:e._id,!1)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Coach"}),(0,C.jsx)(c.Z,{type:"button",text:"Confirm?",variant:"info",onClick:function(){return w(null===e||void 0===e?void 0:e._id,!0)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.spm,{className:"ra-thumbs-up"})]})})}),g?(0,C.jsx)(m.Z,{}):(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("p",{className:"admin-warning",children:"You can't remove yourself as administrator"})}):(0,C.jsx)("div",{className:"toggle-wrapper",children:null!==e&&void 0!==e&&e.isPlayer?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Player"}),(0,C.jsx)(c.Z,{type:"button",text:"Remove Player ?",variant:"danger",onClick:function(){return F(null===e||void 0===e?void 0:e._id,!1)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Player"}),(0,C.jsx)(c.Z,{type:"button",text:"Confirm?",variant:"info",onClick:function(){return F(null===e||void 0===e?void 0:e._id,!0)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.spm,{className:"ra-thumbs-up"})]})})}),g?(0,C.jsx)(m.Z,{}):(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("p",{className:"admin-warning",children:"You can't remove yourself as administrator"})}):(0,C.jsx)("div",{className:"toggle-wrapper",children:null!==e&&void 0!==e&&e.isParent?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Parent"}),(0,C.jsx)(c.Z,{type:"button",text:"Remove Parent ?",variant:"danger",onClick:function(){return k(null===e||void 0===e?void 0:e._id,!1)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Parent"}),(0,C.jsx)(c.Z,{type:"button",text:"Confirm?",variant:"info",onClick:function(){return k(null===e||void 0===e?void 0:e._id,!0)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.spm,{className:"ra-thumbs-up"})]})})}),g?(0,C.jsx)(m.Z,{}):(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("p",{className:"admin-warning",children:"You can't remove yourself as administrator"})}):(0,C.jsx)("div",{className:"toggle-wrapper",children:null!==e&&void 0!==e&&e.isAdmin?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Admin"}),(0,C.jsx)(c.Z,{type:"button",text:"Remove?",variant:"danger",onClick:function(){return b(null===e||void 0===e?void 0:e._id,!1)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Admin"}),null!==e&&void 0!==e&&e.registeredWithGoogle?(0,C.jsx)("p",{className:"admin-warning",children:"Please note: Google registered user can not be made admin."}):(0,C.jsx)(c.Z,{type:"button",text:"Make?",variant:"info",onClick:function(){return b(null===e||void 0===e?void 0:e._id,!0)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.spm,{className:"ra-thumbs-up"})]})})}),g?(0,C.jsx)(m.Z,{}):(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("p",{className:"admin-warning",children:"You can't suspended yourself."})}):(0,C.jsx)("div",{className:"toggle-wrapper",children:null!==e&&void 0!==e&&e.isSuspended?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Un-Suspend"}),(0,C.jsx)(c.Z,{type:"button",text:"Unsuspend?",variant:"info",onClick:function(){return Z(null===e||void 0===e?void 0:e._id,!1)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.spm,{className:"ra-thumbs-up"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:"Suspend"}),(0,C.jsx)(c.Z,{type:"button",text:"Suspend?",variant:"danger",onClick:function(){return Z(null===e||void 0===e?void 0:e._id,!0)},disabled:(null===e||void 0===e?void 0:e.username)===(null===a||void 0===a?void 0:a.username)||"admin@mail.com"===e.email})]}),(0,C.jsx)(l.bGJ,{className:"ra-thumbs-down"})]})})}),(0,C.jsxs)("div",{className:"dates-wrapper",children:[(0,C.jsxs)("p",{children:[" Created: ",f()(e.createdAt).fromNow()]}),(0,C.jsxs)("p",{children:["Updated: ",f()(e.updatedAt).fromNow()]})]})]})},e._id)}))})]})]})}}}]);
//# sourceMappingURL=410.5c4f84c1.chunk.js.map