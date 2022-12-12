(self.webpackChunkclient=self.webpackChunkclient||[]).push([[141],{1141:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(2791);var r=t(184),a=function(e){var n=e.id,t=e.type,a=e.text,s=e.onClick,o=e.variant,i=e.disabled;switch(o){case"primary":case"secondary":case"success":case"danger":case"warning":case"info":case"light":case"dark":return(0,r.jsx)("button",{className:"".concat(o),id:n,type:t,text:a,onClick:s,disabled:i,children:a})}};a.defaultProps={disabled:!0};var s=a},9183:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});t(2791),t(2144);var r=t(184),a=function(e){var n=e.error;return(0,r.jsx)("div",{className:" animate__animated animate__bounceInLeft",children:(0,r.jsx)("span",{className:"error-component",children:n})})}},7388:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(885),a=t(2791),s=t(2007),o=t.n(s),i=t(9135),c=t(184),u=function(e){var n=e.id,t=e.type,s=e.label,o=e.name,u=e.value,l=e.placeholder,d=e.error,p=e.className,f=e.onChange,m=(0,a.useRef)(null),g=(0,a.useState)(!1),h=(0,r.Z)(g,2),v=h[0],y=h[1],x=(0,a.useState)(!0),Z=(0,r.Z)(x,2),j=Z[0],b=Z[1];(0,a.useEffect)((function(){"name"===m.current.name&&m.current.focus(),"password"!==m.current.type&&b(!1)}),[m]);return(0,c.jsxs)("div",{className:"input-field-wrapper",children:[(0,c.jsxs)("div",{className:"input-icon-wrapper",children:[s&&(0,c.jsx)("label",{htmlFor:"input-field",children:s}),j?(0,c.jsx)("div",{onClick:function(){"password"===m.current.type?(y((function(e){return!e})),m.current.type="text"):(y((function(e){return!e})),m.current.type="password")},title:v?"HIDE PASSWORD":"SHOW PASSWORD",children:v?(0,c.jsx)(i.tgn,{}):(0,c.jsx)(i.dSq,{})}):null]}),(0,c.jsx)("input",{id:n,ref:m,type:t,name:o,value:u,placeholder:l,error:d,className:p,onChange:f}),d&&(0,c.jsx)("p",{className:"validation-error",children:d})]})};u.defaultProps={type:o().oneOfType([o().string,o().number])};var l=u},2986:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(885),a=t(2791),s=(t(2144),t(184)),o=function(e){var n=e.message,t=(0,a.useState)(""),o=(0,r.Z)(t,2),i=o[0],c=o[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){c("clear")}),6e3);return function(){return clearInterval(e)}}),[i]),(0,s.jsx)("div",{className:"animate__animated animate__bounceInLeft",children:(0,s.jsx)("span",{className:"success-component ".concat(i),children:n})})}},4029:function(e,n,t){"use strict";t.d(n,{Ed:function(){return f},FV:function(){return c},_0:function(){return u},dY:function(){return p},g3:function(){return l},mZ:function(){return i},tN:function(){return m},uT:function(){return d}});var r=t(4165),a=t(5861),s=t(1044),o=t(8121),i=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,i,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.k1}),a={headers:{"Content-Type":"application/json"}},n.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/register"),e,a);case 5:i=n.sent,c=i.data,t({type:o.hk,payload:c}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:o.qz,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},c=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,i,c,u,l,d,p,f,m,g;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n({type:o.Ew}),!t().userLogin.userInfo){e.next=10;break}return a=t(),i=a.userLogin.userInfo,c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},e.next=7,s.Z.get("".concat("https://club-manager.onrender.com/","api/auth/user-admin-details"),c);case 7:u=e.sent,l=u.data,n({type:o.Np,payload:l});case 10:if(!t().googleUserLogin.userInfo){e.next=18;break}return d=t(),p=d.googleUserLogin.userInfo,f={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(p.token)}},e.next=15,s.Z.get("".concat("https://club-manager.onrender.com/","api/auth/user-admin-details"),f);case 15:m=e.sent,g=m.data,n({type:o.Np,payload:g});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),n({type:o.X7,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(n,t){return e.apply(this,arguments)}}()},u=function(e,n){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){var i,u,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:o.mA}),i={headers:{"Content-Type":"application/json"}},t.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/login"),{email:e,password:n},i);case 5:u=t.sent,l=u.data,a({type:o.wW,payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),a(c()),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:o.U3,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,i,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.re}),a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.credential)}},n.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/google-login"),a);case 5:i=n.sent,u=i.data,t({type:o._,payload:u}),localStorage.setItem("userInfo",JSON.stringify(u)),t(c()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),t({type:o.Wj,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},d=function(){return function(e){localStorage.removeItem("userInfo"),e({type:o.lK}),e({type:o.Mt})}},p=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,i,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.iL}),a={headers:{"Content-Type":"application/json"}},n.next=5,s.Z.post("".concat("https://club-manager.onrender.com/","api/auth/forgot-password"),{email:e},a);case 5:i=n.sent,c=i.data,t({type:o.Sr,payload:c}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:o.BA,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a,i,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:o.Cw}),a={headers:{"Content-Type":"application/json"}},n.next=5,s.Z.put("".concat("https://club-manager.onrender.com/","api/auth/resetpassword/").concat(e.resetPasswordToken),e,a);case 5:i=n.sent,c=i.data,t({type:o.hN,payload:c}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:o.eR,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var i,u,l,d,p,f,m,g,h,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t({type:o.ng}),!a().userLogin.userInfo){n.next=11;break}return i=a(),u=i.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.token)}},n.next=7,s.Z.put("".concat("https://club-manager.onrender.com/","api/auth/user/").concat(e.id),e,l);case 7:d=n.sent,p=d.data,t({type:o.Uu,payload:p}),t(c());case 11:if(!a().googleUserLogin.userInfo){n.next=20;break}return f=a(),m=f.googleUserLogin.userInfo,g={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m.token)}},n.next=16,s.Z.put("".concat("https://club-manager.onrender.com/","api/auth/user/").concat(e.id),e,g);case 16:h=n.sent,v=h.data,t({type:o.Uu,payload:v}),t(c());case 20:n.next=25;break;case 22:n.prev=22,n.t0=n.catch(0),t({type:o.un,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 25:case"end":return n.stop()}}),n,null,[[0,22]])})));return function(e,t){return n.apply(this,arguments)}}()}},4419:function(e,n,t){"use strict";t.d(n,{OG:function(){return o},TH:function(){return s},VD:function(){return a},cm:function(){return r},hi:function(){return i},tF:function(){return u},xn:function(){return c},yP:function(){return l}});var r=/[a-zA-Z]{4,}/,a=/[a-zA-Z]{3,}/,s=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,o=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,i=/^[0-9]$|^[1-9][0-9]$|^(100)$/,c=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,u=/[0-9a-zA-Z]{4,}/,l=/[0-9]{4,}/},5672:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(885),a=t(2791),s=t(9434),o=t(4942),i=t(1413),c=t(4029),u=t(7388),l=t(1141),d=t(5386),p=t(9183),f=t(2986),m=t(4419),g=t(184),h=function(){var e=(0,s.I0)(),n=(0,a.useState)({username:"",email:"",password:""}),t=(0,r.Z)(n,2),h=t[0],v=t[1],y=h.username,x=h.email,Z=h.password,j=(0,s.v9)((function(e){return e.userRegistration})),b=j.loading,w=j.error,k=j.success,A=function(e){v((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,o.Z)({},e.target.name,e.target.value))}))};return(0,g.jsxs)(g.Fragment,{children:[w?(0,g.jsx)(p.Z,{error:w}):null,k?(0,g.jsx)(f.Z,{message:"Registration has been successful"}):null,b?(0,g.jsx)(d.Z,{}):(0,g.jsxs)("fieldset",{className:"fieldSet",children:[(0,g.jsx)("legend",{children:"Registration Form"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:"Register by sending the form below."}),(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e((0,c.mZ)(h)),v({username:"",email:"",password:""})},children:[(0,g.jsx)(u.Z,{label:"User Name",value:y,type:"text",name:"username",required:!0,className:m.cm.test(y)?"entered":"invalid",error:m.cm.test(y)||0===y.length?null:"Username must contain at least 5 characters",onChange:A}),(0,g.jsx)(u.Z,{label:"EMAIL",value:x,type:"email",name:"email",required:!0,className:m.TH.test(x)?"entered":"invalid",error:m.TH.test(x)||0===x.length?null:"Invalid email address.",onChange:A}),(0,g.jsx)(u.Z,{label:"Password",value:Z,type:"password",name:"password",required:!0,className:Z.length<=5?"invalid":"entered",error:Z.length<=5&&0!==Z.length?"Password must contain at least 6 characters":null,onChange:A}),(0,g.jsx)(l.Z,{type:"submit",text:!m.TH.test(x)||!m.cm.test(y)||Z.length<=5?"Disabled":"Register",variant:"info",disabled:!m.TH.test(x)||!m.cm.test(y)||Z.length<=5})]})]})]})]})},v=t(4165),y=t(5861),x=(t(2144),t(1087)),Z=t(4925),j=["onSuccess","onError","useOneTap","promptMomentNotification","type","theme","size","text","shape","logo_alignment","width","locale"];var b=(0,a.createContext)(null);function w(e){var n=e.clientId,t=e.onScriptLoadSuccess,s=e.onScriptLoadError,o=e.children,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onScriptLoadSuccess,t=e.onScriptLoadError,s=(0,a.useState)(!1),o=(0,r.Z)(s,2),i=o[0],c=o[1],u=(0,a.useRef)(n);u.current=n;var l=(0,a.useRef)(t);return l.current=t,(0,a.useEffect)((function(){var e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=function(){var e;c(!0),null===(e=u.current)||void 0===e||e.call(u)},e.onerror=function(){var e;c(!1),null===(e=l.current)||void 0===e||e.call(l)},document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),i}({onScriptLoadSuccess:t,onScriptLoadError:s}),c=(0,a.useMemo)((function(){return{clientId:n,scriptLoadedSuccessfully:i}}),[n,i]);return a.createElement(b.Provider,{value:c},o)}function k(){var e=(0,a.useContext)(b);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function A(e){var n;return null!==(n=null===e||void 0===e?void 0:e.clientId)&&void 0!==n?n:null===e||void 0===e?void 0:e.client_id}var S={large:40,medium:32,small:20};function I(e){var n=e.onSuccess,t=e.onError,r=e.useOneTap,s=e.promptMomentNotification,o=e.type,c=void 0===o?"standard":o,u=e.theme,l=void 0===u?"outline":u,d=e.size,p=void 0===d?"large":d,f=e.text,m=e.shape,g=e.logo_alignment,h=e.width,v=e.locale,y=(0,Z.Z)(e,j),x=(0,a.useRef)(null),b=k(),w=b.clientId,I=b.scriptLoadedSuccessfully,N=(0,a.useRef)(n);N.current=n;var O=(0,a.useRef)(t);O.current=t;var z=(0,a.useRef)(s);return z.current=s,(0,a.useEffect)((function(){var e,n,t;if(I)return null===(e=window.google)||void 0===e||e.accounts.id.initialize((0,i.Z)({client_id:w,callback:function(e){var n;if(!(null===e||void 0===e?void 0:e.credential))return null===(n=O.current)||void 0===n?void 0:n.call(O);var t=e.credential,r=e.select_by;N.current({credential:t,clientId:A(e),select_by:r})}},y)),null===(n=window.google)||void 0===n||n.accounts.id.renderButton(x.current,{type:c,theme:l,size:p,text:f,shape:m,logo_alignment:g,width:h,locale:v}),r&&(null===(t=window.google)||void 0===t||t.accounts.id.prompt(z.current)),function(){var e;r&&(null===(e=window.google)||void 0===e||e.accounts.id.cancel())}}),[w,I,r,c,l,p,f,m,g,h,v]),a.createElement("div",{ref:x,style:{height:S[p]}})}var N=function(){var e=(0,s.I0)(),n=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,t=(0,s.v9)((function(e){return e.userLogin})),m=t.loading,h=t.error,Z=t.success,j=t.userInfo,b=(0,s.v9)((function(e){return e.userAdminDetails})).userAdmin,k=(0,a.useState)({email:"",password:""}),A=(0,r.Z)(k,2),S=A[0],N=A[1],O=S.email,z=S.password,C=function(e){N((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,o.Z)({},e.target.name,e.target.value))}))},_=(0,g.jsx)("p",{className:"animate__animated animate__bounceInLeft small-text",children:"NAVIGATE to YOUR PROFILE by clicking here."}),L=function(){var n=(0,y.Z)((0,v.Z)().mark((function n(t){return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((0,c.g3)(t));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),E=(0,s.v9)((function(e){return e.googleUserLogin})),T=E.loading,R=E.success,P=E.error,F=E.userInfo;return(0,g.jsxs)(g.Fragment,{children:[h?(0,g.jsx)(p.Z,{error:h}):null,Z?(0,g.jsx)(f.Z,{message:"You have successfully logged in!"}):null,P?(0,g.jsx)(p.Z,{error:h}):null,R?(0,g.jsx)(f.Z,{message:"You have successfully logged in through GOOGLE"}):null,!F||null!==b&&void 0!==b&&b.isAdmin||!R?null:(0,g.jsx)(l.Z,{type:"button",text:(0,g.jsxs)(x.OL,{className:function(e){return e.isActive?"active":""},to:"/user-admin",children:[null===F||void 0===F?void 0:F.username,", ",_]}),variant:"info",disabled:!1}),!j||null!==b&&void 0!==b&&b.isAdmin||!Z?null:(0,g.jsx)(l.Z,{type:"button",text:(0,g.jsxs)(x.OL,{className:function(e){return e.isActive?"active":""},to:"/user-admin",children:[null===j||void 0===j?void 0:j.username,", ",_]}),variant:"info",disabled:!1}),null!==b&&void 0!==b&&b.isAdmin&&Z?(0,g.jsx)(l.Z,{type:"button",text:(0,g.jsxs)(x.OL,{className:function(e){return e.isActive?"active":""},to:"/admin-profile",children:[null===j||void 0===j?void 0:j.username,", ",_]}),variant:"info",disabled:!1}):null,m?(0,g.jsx)(d.Z,{}):(0,g.jsxs)("fieldset",{className:"fieldSet",children:[(0,g.jsx)("legend",{children:"Login Form"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:"Welcome back, please login below"}),(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e((0,c._0)(O,z)),N({email:"",password:""})},children:[(0,g.jsx)(u.Z,{label:"EMAIL",value:O,type:"email",name:"email",required:!0,className:n.test(O)?"entered":"invalid",error:n.test(O)||0===O.length?null:"Invalid email address.",onChange:C}),(0,g.jsx)(u.Z,{label:"Password",value:z,type:"password",name:"password",required:!0,className:z.length<=5?"invalid":"entered",error:z.length<=5&&0!==z.length?"Password must contain at least 6 characters":null,onChange:C}),(0,g.jsxs)("div",{className:"login-button-wrapper",children:[(0,g.jsx)(l.Z,{type:"submit",text:!n.test(O)||z.length<=5?"Disabled":"login",variant:"info",disabled:!n.test(O)||z.length<=5}),T?(0,g.jsx)(d.Z,{}):(0,g.jsx)(w,{clientId:"508473669508-okvrq23k3it6qna41r8fp2e6ffruqmcf.apps.googleusercontent.com",children:(0,g.jsx)(I,{onSuccess:L,onError:function(e){console.log("Error, with google login",e)}})})]})]})]})]})]})},O=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.userForgotEmail})),t=n.loading,o=n.error,i=n.success,m=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,h=(0,a.useState)(""),v=(0,r.Z)(h,2),y=v[0],x=v[1];return(0,g.jsxs)(g.Fragment,{children:[o?(0,g.jsx)(p.Z,{error:o}):null,i?(0,g.jsx)(f.Z,{message:"Your request was successfully. Please check your email!"}):null,t?(0,g.jsx)(d.Z,{}):(0,g.jsxs)("fieldset",{className:"fieldSet",children:[(0,g.jsx)("legend",{children:"Forgot Password Form"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{children:"Simply send us your email address and we will send you an email with a reset link."}),(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e((0,c.dY)(y)),x("")},children:[(0,g.jsx)(u.Z,{label:"EMAIL",value:y,type:"email",name:"email",required:!0,className:m.test(y)?"entered":"invalid",error:m.test(y)||0===y.length?null:"Invalid email address.",onChange:function(e){x(e.target.value)}}),(0,g.jsx)(l.Z,{type:"submit",text:m.test(y)?"send email address":"Disabled",variant:"info",disabled:!m.test(y)})]})]})]})]})},z=function(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1];return(0,s.v9)((function(e){return e.userRegistration})).success?(0,g.jsx)(N,{}):(0,g.jsxs)(g.Fragment,{children:[u?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(O,{})}):t?(0,g.jsx)(h,{}):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(N,{})}),t?(0,g.jsx)("div",{onClick:function(){return o(!t)},children:(0,g.jsx)("span",{className:"link-effect",children:"Already Registered?"})}):(0,g.jsx)("div",{onClick:function(){return o(!t)},children:(0,g.jsx)("span",{className:"link-effect",children:"Not Registered?"})}),(0,g.jsx)("div",{onClick:function(){return l(!u)},children:(0,g.jsx)("span",{className:"link-effect",children:u?"Go Back?":"Forgotten your Password?"})})]})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,s,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4925:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=141.22fee61c.chunk.js.map