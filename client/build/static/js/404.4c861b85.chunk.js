(self.webpackChunkclient=self.webpackChunkclient||[]).push([[404],{1141:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(2791);var r=t(184),a=function(e){var n=e.id,t=e.type,a=e.text,s=e.onClick,i=e.variant,o=e.disabled;switch(i){case"primary":case"secondary":case"success":case"danger":case"warning":case"info":case"light":case"dark":return(0,r.jsx)("button",{className:"".concat(i),id:n,type:t,text:a,onClick:s,disabled:o,children:a})}};a.defaultProps={disabled:!0};var s=a},9183:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});t(2791),t(2144);var r=t(184),a=function(e){var n=e.error;return(0,r.jsx)("div",{className:" animate__animated animate__bounceInLeft",children:(0,r.jsx)("span",{className:"error-component",children:n})})}},7388:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(885),a=t(2791),s=t(2007),i=t.n(s),o=t(9135),c=t(184),l=function(e){var n=e.id,t=e.type,s=e.label,i=e.name,l=e.value,u=e.placeholder,d=e.error,p=e.className,m=e.onChange,f=(0,a.useRef)(null),h=(0,a.useState)(!1),v=(0,r.Z)(h,2),x=v[0],g=v[1],j=(0,a.useState)(!0),y=(0,r.Z)(j,2),b=y[0],Z=y[1];(0,a.useEffect)((function(){"name"===f.current.name&&f.current.focus(),"password"!==f.current.type&&Z(!1)}),[f]);return(0,c.jsxs)("div",{className:"input-field-wrapper",children:[(0,c.jsxs)("div",{className:"input-icon-wrapper",children:[s&&(0,c.jsx)("label",{htmlFor:"input-field",children:s}),b?(0,c.jsx)("div",{onClick:function(){"password"===f.current.type?(g((function(e){return!e})),f.current.type="text"):(g((function(e){return!e})),f.current.type="password")},title:x?"HIDE PASSWORD":"SHOW PASSWORD",children:x?(0,c.jsx)(o.tgn,{}):(0,c.jsx)(o.dSq,{})}):null]}),(0,c.jsx)("input",{id:n,ref:f,type:t,name:i,value:l,placeholder:u,error:d,className:p,onChange:m}),d&&(0,c.jsx)("p",{className:"validation-error",children:d})]})};l.defaultProps={type:i().oneOfType([i().string,i().number])};var u=l},2882:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t.p+"static/media/club-manager-logo.1f49db4d241fe31fcb20.png",a=t(184),s=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"logo-wrapper",children:[(0,a.jsx)("img",{src:r,alt:"logo",className:"logo-image"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"logo-main-text",children:"Anorthosis"}),(0,a.jsx)("div",{className:"logo-secondary-text",children:"Football Academy"})]})]})})}},4345:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(885),a=t(2791),s=t(2882),i=t(9135),o=t(184),c=function(e){var n=e.openButtonTitle,t=(e.closeButtonTitle,e.props),c=e.variant,l=(0,a.useState)(!1),u=(0,r.Z)(l,2),d=u[0],p=u[1];return(0,o.jsxs)(o.Fragment,{children:[d?(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{title:"Close",className:d?"modal-overlay":null,onClick:function(){return p(!1)}}),(0,o.jsxs)("div",{className:"modal-wrapper",children:[(0,o.jsxs)("div",{className:"modal-inner-wrapper",children:[(0,o.jsx)(s.Z,{}),(0,o.jsx)("span",{onClick:function(){return p(!1)},className:"confirmation",children:(0,o.jsx)(i.ZyS,{className:"ra-thumbs-down"})})]}),t]})]}):null,(0,o.jsx)("button",{type:"button",onClick:function(){p(!0)},className:"".concat(c," modal-btn"),children:(0,o.jsx)("span",{className:"modal-title",children:n})})]})}},9375:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2791),a=t(184),s=function(e){var n=e.type,t=e.placeholder,s=e.onChange,i=e.className,o=e.value,c=e.quantity,l=e.total,u=(0,r.useRef)(null);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"search-input-wrapper",children:[(0,a.jsx)("input",{ref:u,type:n,className:i,placeholder:t,onChange:s,value:o,multiple:!0,required:!0,onClick:function(){u.current.focus()}}),(0,a.jsx)("p",{children:u.current?"Your search found ".concat(c," out of ").concat(l):null})]})})};s.defaultProps={type:"search"};var i=s},5223:function(e,n,t){"use strict";t(2791);var r=t(184);n.Z=function(e){var n=e.value,t=e.keyword;return(0,r.jsx)("p",{children:function(e,n){return e.split(new RegExp("(".concat(n,")"),"gi")).map((function(e,t){return(0,r.jsx)("span",{children:e.toLowerCase()===n.toLowerCase()?(0,r.jsx)("b",{style:{backgroundColor:"rgba(245,245,245,1)",color:"rgba(51,51,51,1)",paddingLeft:n?"6px":"0"},children:e}):e},t)}))}(n,t)})}},2986:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(885),a=t(2791),s=(t(2144),t(184)),i=function(e){var n=e.message,t=(0,a.useState)(""),i=(0,r.Z)(t,2),o=i[0],c=i[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){c("clear")}),6e3);return function(){return clearInterval(e)}}),[o]),(0,s.jsx)("div",{className:"animate__animated animate__bounceInLeft",children:(0,s.jsx)("span",{className:"success-component ".concat(o),children:n})})}},8989:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(2007),a=t.n(r),s=t(184),i=function(e){var n=e.id,t=e.name,r=e.value,a=e.placeholder,i=e.onChange,o=e.label,c=e.error;return(0,s.jsxs)("div",{children:[o&&(0,s.jsx)("label",{htmlFor:"input-field",children:o}),(0,s.jsx)("textarea",{id:n,name:t,value:r,placeholder:a,onChange:i}),c&&(0,s.jsx)("p",{className:"validation-error",children:c})]})};i.defaultProps={type:a().string};var o=i},1366:function(e,n,t){"use strict";t.d(n,{SS:function(){return o},d0:function(){return l},kz:function(){return u},l:function(){return c}});var r=t(4165),a=t(5861),s=t(1044),i=t(2874),o=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:i.e0}),e.next=4,s.Z.get("".concat("https://club-manager.onrender.com/","api/public-notices"));case 4:a=e.sent,o=a.data,n({type:i.sm,payload:o}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:i.CT,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}()},c=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var c,l,u,d,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.TE}),c=a(),l=c.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,s.Z.post("".concat("https://club-manager.onrender.com/","api/admin/public-notice-create"),e,u);case 6:d=n.sent,p=d.data,t({type:i.Su,payload:p}),t(o()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),t({type:i.oX,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,t){return n.apply(this,arguments)}}()},l=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var c,l,u,d,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.cZ}),c=a(),l=c.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,s.Z.put("".concat("https://club-manager.onrender.com/","api/admin/public-notice-edit/").concat(e.id),e,u);case 6:d=n.sent,p=d.data,t({type:i.CV,payload:p}),t(o()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),t({type:i.Y_,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,t){return n.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,a){var c,l,u,d,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:i.Dv}),c=a(),l=c.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}},n.next=6,s.Z.delete("".concat("https://club-manager.onrender.com/","api/admin/public-notice-delete/").concat(e),u);case 6:d=n.sent,p=d.data,t({type:i.Zm,payload:p}),t(o()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),t({type:i.Nn,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,t){return n.apply(this,arguments)}}()}},4419:function(e,n,t){"use strict";t.d(n,{OG:function(){return i},TH:function(){return s},VD:function(){return a},cm:function(){return r},hi:function(){return o},tF:function(){return l},xn:function(){return c},yP:function(){return u}});var r=/[a-zA-Z]{4,}/,a=/[a-zA-Z]{3,}/,s=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,i=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,o=/^[0-9]$|^[1-9][0-9]$|^(100)$/,c=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,l=/[0-9a-zA-Z]{4,}/,u=/[0-9]{4,}/},1339:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(2791),a=t(885),s=t(1087),i=t(9434),o=t(9183),c=t(5386),l=t(9375),u=t(5223),d=t(4345),p=t(1141),m=t(4942),f=t(1413),h=t(7689),v=t(7388),x=t(2986),g=t(4419),j=t(8989),y=t(1366),b=t(184),Z=function(){var e=(0,i.I0)(),n=(0,h.s0)(),t=(0,i.v9)((function(e){return e.userLogin})).userInfo,s=(0,i.v9)((function(e){return e.googleUserLogin})).userInfo,c=(0,i.v9)((function(e){return e.userAdminDetails})).userAdmin,l=(0,r.useState)({name:"",heading:"",post:""}),u=(0,a.Z)(l,2),d=u[0],Z=u[1],N=d.name,w=d.heading,C=d.post,k=function(e){Z((function(n){return(0,f.Z)((0,f.Z)({},n),{},(0,m.Z)({},e.name,e.value))}))},A=(0,i.v9)((function(e){return e.adminCreatePublicNotice})),D=A.error,T=A.success;return(0,b.jsxs)(b.Fragment,{children:[D?(0,b.jsx)(o.Z,{error:D}):null,T?(0,b.jsx)(x.Z,{message:"Your profile was successfully created"}):null,(0,b.jsxs)("fieldset",{className:"fieldSet",children:[(0,b.jsx)("legend",{children:"Create Public Notice Post"}),(0,b.jsx)("div",{children:(0,b.jsxs)("form",{onSubmit:function(r){r.preventDefault(),t&&(s||null!==c&&void 0!==c&&c.isAdmin)?(e((0,y.l)(d)),Z({name:"",heading:"",post:""})):n("/login")},children:[(0,b.jsx)(v.Z,{label:"Name",value:N,type:"text",name:"name",required:!0,className:g.VD.test(N)?"entered":"invalid",error:g.VD.test(N)||0===N.length?null:"Name must contain at least 5 characters",onChange:function(e){return k(e.target)}}),(0,b.jsx)(v.Z,{label:"Heading",value:w,type:"text",name:"heading",required:!0,className:g.VD.test(w)?"entered":"invalid",error:g.VD.test(w)||0===(null===w||void 0===w?void 0:w.length)?null:"Please choose a number between 1 and 100",onChange:function(e){return k(e.target)}}),(0,b.jsx)(j.Z,{label:"Post",id:"post",name:"post",value:C,error:C.length<=15&&0!==(null===C||void 0===C?void 0:C.length)?"Description must contain at least 16 characters":null,onChange:function(e){return k(e.target)}}),(0,b.jsx)(p.Z,{type:"submit",text:!g.VD.test(N)||C.length<=15?"Disabled":"submit",variant:"primary",disabled:!g.VD.test(N)||C.length<=15})]})})]})]})};var N=function(e){var n=e.postId,t=(0,i.I0)(),s=(0,i.v9)((function(e){return e.getPublicNotice})).notices,c=null===s||void 0===s?void 0:s.filter((function(e){return e._id===n&&e})),l=(0,r.useState)({id:n,name:c[0].name,heading:c[0].heading,post:c[0].post}),u=(0,a.Z)(l,2),d=u[0],h=u[1],Z=d.name,N=d.heading,w=d.post,C=function(e){h((function(n){return(0,f.Z)((0,f.Z)({},n),{},(0,m.Z)({},e.name,e.value))}))},k=(0,i.v9)((function(e){return e.adminEditPublicNotice})),A=k.success,D=k.error;return(0,b.jsxs)(b.Fragment,{children:[D?(0,b.jsx)(o.Z,{error:D}):null,A?(0,b.jsx)(x.Z,{message:"Notice was successfully updated."}):null,(0,b.jsxs)("fieldset",{className:"fieldSet",children:[(0,b.jsx)("legend",{children:"Edit Public Notice"}),(0,b.jsx)("div",{children:(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,y.d0)(d)),h({name:"",heading:"",post:""})},children:[(0,b.jsx)(v.Z,{label:"Name",value:Z,type:"text",name:"name",required:!0,className:g.VD.test(Z)?"entered":"invalid",error:g.VD.test(Z)||0===Z.length?null:"Name must contain at least 5 characters",onChange:function(e){return C(e.target)}}),(0,b.jsx)(v.Z,{label:"Heading",value:N,type:"text",name:"heading",required:!0,className:g.VD.test(N)?"entered":"invalid",error:g.VD.test(N)||0===(null===N||void 0===N?void 0:N.length)?null:"Please choose a number between 1 and 100",onChange:function(e){return C(e.target)}}),(0,b.jsx)(j.Z,{label:"Post",id:"post",name:"post",value:w,error:w.length<=15&&0!==(null===w||void 0===w?void 0:w.length)?"Description must contain at least 16 characters":null,onChange:function(e){return C(e.target)}}),(0,b.jsx)(p.Z,{type:"submit",text:!g.VD.test(Z)||w.length<=15?"Disabled":"submit",variant:"primary",disabled:!g.VD.test(Z)||w.length<=15})]})})]})]})},w=t(2426),C=t.n(w),k=function(e){var n=e.noticeId,t=e.noticeTitle,r=(0,i.I0)(),a=(0,i.v9)((function(e){return e.adminDeletePublicNotice})),s=a.loading,l=a.error;return(0,b.jsxs)(b.Fragment,{children:[l?(0,b.jsx)(o.Z,{error:l}):null,s?(0,b.jsx)(c.Z,{}):(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(d.Z,{className:"create-btn",openButtonTitle:"Delete Notice",closeButtonTitle:"No thanks",variant:"danger",props:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:"Are you sure you want to delete notice titled?"})," ",(0,b.jsx)("h3",{children:t})]}),(0,b.jsx)(p.Z,{type:"submit",text:"Yes Delete",variant:"danger",disabled:!1,onClick:function(){r((0,y.kz)(n))}})]})})})]})},A=function(){var e=(0,i.v9)((function(e){return e.userAdminDetails})).userAdmin,n=(0,i.v9)((function(e){return e.getPublicNotice})),t=n.loading,m=n.error,f=n.success,h=n.notices,v=(0,r.useState)(""),x=(0,a.Z)(v,2),g=x[0],j=x[1],y=null===h||void 0===h?void 0:h.filter((function(e){return!(!e.heading.toLowerCase().includes(g.toLowerCase())&&!e.post.toLowerCase().includes(g.toLowerCase()))&&e}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{children:"Public Notices"}),(0,b.jsxs)("div",{className:"admin-get-player__top-wrapper",children:[null!==e&&void 0!==e&&e.isAdmin?(0,b.jsx)(d.Z,{className:"create-btn",openButtonTitle:"Create A NEW Notice",closeButtonTitle:"Close modal",variant:"success",props:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(Z,{})})}):null,(0,b.jsx)(l.Z,{placeholder:"SEARCH A Title",value:g,onChange:function(e){j(e.target.value)},quantity:null===y||void 0===y?void 0:y.length,total:null===h||void 0===h?void 0:h.length}),null!==e&&void 0!==e&&e.isAdmin?(0,b.jsx)(p.Z,{type:"button",text:(0,b.jsx)(s.OL,{className:function(e){return e.isActive?"active":""},to:"/admin-profile",children:"Go Back"}),variant:"info",disabled:!1}):null]}),t?(0,b.jsx)(c.Z,{}):f&&y?(0,b.jsx)("div",{className:"wrapper",children:y.map((function(e){return(0,b.jsx)("div",{className:"inner-content-wrapper",children:(0,b.jsxs)("fieldset",{className:"fieldSet",children:[(0,b.jsxs)("legend",{children:[" ",(0,b.jsx)(u.Z,{value:e.heading,keyword:g})]}),(0,b.jsx)(u.Z,{value:e.post,keyword:g}),(0,b.jsxs)("p",{className:"small-text",children:["BY: ",e.name]}),(0,b.jsxs)("div",{className:"button-wrapper",children:[(0,b.jsx)(d.Z,{className:"create-btn",openButtonTitle:"Edit Post",closeButtonTitle:"Close modal",variant:"warning",props:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(N,{postId:e._id})})}),(0,b.jsx)(k,{noticeId:e._id,noticeTitle:e.heading})]}),(0,b.jsxs)("div",{className:"dates-wrapper",children:[(0,b.jsxs)("p",{children:[" Created: ",C()(e.createdAt).fromNow()]}),(0,b.jsxs)("p",{children:[" Updated: ",C()(e.updatedAt).fromNow()]})]})]})},null===e||void 0===e?void 0:e._id)}))}):m?(0,b.jsx)(o.Z,{error:m}):null]})},D=function(){return(0,b.jsx)(A,{})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=404.4c861b85.chunk.js.map