(self.webpackChunkclient=self.webpackChunkclient||[]).push([[256],{1141:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(2791);var r=n(184),a=function(e){var t=e.id,n=e.type,a=e.text,s=e.onClick,o=e.variant,c=e.disabled;switch(o){case"primary":case"secondary":case"success":case"danger":case"warning":case"info":case"light":case"dark":return(0,r.jsx)("button",{className:"".concat(o),id:t,type:n,text:a,onClick:s,disabled:c,children:a})}};a.defaultProps={disabled:!0};var s=a},9183:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(2791),n(2144);var r=n(184),a=function(e){var t=e.error;return(0,r.jsx)("div",{className:" animate__animated animate__bounceInLeft",children:(0,r.jsx)("span",{className:"error-component",children:t})})}},7388:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(885),a=n(2791),s=n(2007),o=n.n(s),c=n(9135),u=n(184),i=function(e){var t=e.id,n=e.type,s=e.label,o=e.name,i=e.value,p=e.placeholder,l=e.error,d=e.className,f=e.onChange,m=(0,a.useRef)(null),h=(0,a.useState)(!1),y=(0,r.Z)(h,2),g=y[0],v=y[1],x=(0,a.useState)(!0),b=(0,r.Z)(x,2),w=b[0],Z=b[1];(0,a.useEffect)((function(){"name"===m.current.name&&m.current.focus(),"password"!==m.current.type&&Z(!1)}),[m]);return(0,u.jsxs)("div",{className:"input-field-wrapper",children:[(0,u.jsxs)("div",{className:"input-icon-wrapper",children:[s&&(0,u.jsx)("label",{htmlFor:"input-field",children:s}),w?(0,u.jsx)("div",{onClick:function(){"password"===m.current.type?(v((function(e){return!e})),m.current.type="text"):(v((function(e){return!e})),m.current.type="password")},title:g?"HIDE PASSWORD":"SHOW PASSWORD",children:g?(0,u.jsx)(c.tgn,{}):(0,u.jsx)(c.dSq,{})}):null]}),(0,u.jsx)("input",{id:t,ref:m,type:n,name:o,value:i,placeholder:p,error:l,className:d,onChange:f}),l&&(0,u.jsx)("p",{className:"validation-error",children:l})]})};i.defaultProps={type:o().oneOfType([o().string,o().number])};var p=i},2986:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(885),a=n(2791),s=(n(2144),n(184)),o=function(e){var t=e.message,n=(0,a.useState)(""),o=(0,r.Z)(n,2),c=o[0],u=o[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){u("clear")}),6e3);return function(){return clearInterval(e)}}),[c]),(0,s.jsx)("div",{className:"animate__animated animate__bounceInLeft",children:(0,s.jsx)("span",{className:"success-component ".concat(c),children:t})})}},4029:function(e,t,n){"use strict";n.d(t,{Ed:function(){return f},FV:function(){return u},_0:function(){return i},dY:function(){return d},g3:function(){return p},mZ:function(){return c},tN:function(){return m},uT:function(){return l}});var r=n(4165),a=n(5861),s=n(1044),o=n(8121),c=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.k1}),a={headers:{"Content-Type":"application/json"}},t.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/register"),e,a);case 5:c=t.sent,u=c.data,n({type:o.hk,payload:u}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:o.qz,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,c,u,i,p,l,d,f,m,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t({type:o.Ew}),!n().userLogin.userInfo){e.next=10;break}return a=n(),c=a.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=7,s.Z.get("".concat("https://club-manager.onrender.com/","api/auth/user-admin-details"),u);case 7:i=e.sent,p=i.data,t({type:o.Np,payload:p});case 10:if(!n().googleUserLogin.userInfo){e.next=18;break}return l=n(),d=l.googleUserLogin.userInfo,f={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},e.next=15,s.Z.get("".concat("https://club-manager.onrender.com/","api/auth/user-admin-details"),f);case 15:m=e.sent,h=m.data,t({type:o.Np,payload:h});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),t({type:o.X7,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,n){return e.apply(this,arguments)}}()},i=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var c,i,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:o.mA}),c={headers:{"Content-Type":"application/json"}},n.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/login"),{email:e,password:t},c);case 5:i=n.sent,p=i.data,a({type:o.wW,payload:p}),localStorage.setItem("userInfo",JSON.stringify(p)),a(u()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:o.U3,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.re}),a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.credential)}},t.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/google-login"),a);case 5:c=t.sent,i=c.data,n({type:o._,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),n(u()),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:o.Wj,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(e){localStorage.removeItem("userInfo"),e({type:o.lK}),e({type:o.Mt})}},d=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.iL}),a={headers:{"Content-Type":"application/json"}},t.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/forgot-password"),{email:e},a);case 5:c=t.sent,u=c.data,n({type:o.Sr,payload:u}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:o.BA,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a,c,u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:o.Cw}),a={headers:{"Content-Type":"application/json"}},t.next=5,s.Z.put("".concat("https://club-manager.onrender.com/","api/auth/resetpassword/").concat(e.resetPasswordToken),e,a);case 5:c=t.sent,u=c.data,n({type:o.hN,payload:u}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:o.eR,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){var c,i,p,l,d,f,m,h,y,g;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n({type:o.ng}),!a().userLogin.userInfo){t.next=11;break}return c=a(),i=c.userLogin.userInfo,p={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=7,s.Z.put("".concat("https://club-manager.onrender.com/","api/auth/user/").concat(e.id),e,p);case 7:l=t.sent,d=l.data,n({type:o.Uu,payload:d}),n(u());case 11:if(!a().googleUserLogin.userInfo){t.next=20;break}return f=a(),m=f.googleUserLogin.userInfo,h={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m.token)}},t.next=16,s.Z.put("".concat("https://club-manager.onrender.com/","api/auth/user/").concat(e.id),e,h);case 16:y=t.sent,g=y.data,n({type:o.Uu,payload:g}),n(u());case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),n({type:o.un,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(e,n){return t.apply(this,arguments)}}()}},7256:function(e,t,n){"use strict";n.r(t);var r=n(885),a=n(2791),s=n(9434),o=n(7689),c=n(4029),u=n(7388),i=n(1141),p=n(5386),l=n(9183),d=n(2986),f=n(184);t.default=function(){var e=(0,s.I0)(),t=(0,o.s0)(),n=(0,o.UO)(),m=(0,a.useState)(""),h=(0,r.Z)(m,2),y=h[0],g=h[1],v=(0,s.v9)((function(e){return e.userResetPassword})),x=v.loading,b=v.error,w=v.success;return(0,f.jsxs)(f.Fragment,{children:[b?(0,f.jsx)(l.Z,{error:b}):null,w?(0,f.jsx)(d.Z,{message:"Password was successfully changed. You will be routed shortly"}):null,x?(0,f.jsx)(p.Z,{}):(0,f.jsxs)("fieldset",{className:"fieldSet",children:[(0,f.jsx)("legend",{children:"Reset Password"}),(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(r){r.preventDefault(),e((0,c.Ed)({password:y,resetPasswordToken:n.token})),g(""),setTimeout((function(){t("/login")}),6e3)},children:[(0,f.jsx)(u.Z,{label:"New Password",value:y,type:"password",name:"password",required:!0,className:y.length<=5?"invalid":"entered",error:y.length<=5&&0!==y.length?"Password must contain at least 6 characters":null,onChange:function(e){g(e.target.value)}}),(0,f.jsx)(i.Z,{type:"submit",text:"submit",variant:"primary",disabled:y.length<=5})]})})]})]})}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,s,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=256.5b53c4fc.chunk.js.map