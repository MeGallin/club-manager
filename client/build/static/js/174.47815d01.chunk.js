(self.webpackChunkclient=self.webpackChunkclient||[]).push([[174],{1141:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});r(2791);var t=r(184),a=function(e){var n=e.id,r=e.type,a=e.text,s=e.onClick,c=e.variant,i=e.disabled;switch(c){case"primary":case"secondary":case"success":case"danger":case"warning":case"info":case"light":case"dark":return(0,t.jsx)("button",{className:"".concat(c),id:n,type:r,text:a,onClick:s,disabled:i,children:a})}};a.defaultProps={disabled:!0};var s=a},9183:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});r(2791),r(2144);var t=r(184),a=function(e){var n=e.error;return(0,t.jsx)("div",{className:" animate__animated animate__bounceInLeft",children:(0,t.jsx)("span",{className:"error-component",children:n})})}},7388:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(885),a=r(2791),s=r(2007),c=r.n(s),i=r(9135),o=r(184),u=function(e){var n=e.id,r=e.type,s=e.label,c=e.name,u=e.value,l=e.placeholder,d=e.error,p=e.className,f=e.onChange,m=(0,a.useRef)(null),h=(0,a.useState)(!1),v=(0,t.Z)(h,2),x=v[0],j=v[1],y=(0,a.useState)(!0),g=(0,t.Z)(y,2),b=g[0],N=g[1];(0,a.useEffect)((function(){"name"===m.current.name&&m.current.focus(),"password"!==m.current.type&&N(!1)}),[m]);return(0,o.jsxs)("div",{className:"input-field-wrapper",children:[(0,o.jsxs)("div",{className:"input-icon-wrapper",children:[s&&(0,o.jsx)("label",{htmlFor:"input-field",children:s}),b?(0,o.jsx)("div",{onClick:function(){"password"===m.current.type?(j((function(e){return!e})),m.current.type="text"):(j((function(e){return!e})),m.current.type="password")},title:x?"HIDE PASSWORD":"SHOW PASSWORD",children:x?(0,o.jsx)(i.tgn,{}):(0,o.jsx)(i.dSq,{})}):null]}),(0,o.jsx)("input",{id:n,ref:m,type:r,name:c,value:u,placeholder:l,error:d,className:p,onChange:f}),d&&(0,o.jsx)("p",{className:"validation-error",children:d})]})};u.defaultProps={type:c().oneOfType([c().string,c().number])};var l=u},2882:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r.p+"static/media/club-manager-logo.1f49db4d241fe31fcb20.png",a=r(184),s=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"logo-wrapper",children:[(0,a.jsx)("img",{src:t,alt:"logo",className:"logo-image"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"logo-main-text",children:"Anorthosis"}),(0,a.jsx)("div",{className:"logo-secondary-text",children:"Football Academy"})]})]})})}},4345:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(885),a=r(2791),s=r(2882),c=r(9135),i=r(184),o=function(e){var n=e.openButtonTitle,r=(e.closeButtonTitle,e.props),o=e.variant,u=(0,a.useState)(!1),l=(0,t.Z)(u,2),d=l[0],p=l[1];return(0,i.jsxs)(i.Fragment,{children:[d?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{title:"Close",className:d?"modal-overlay":null,onClick:function(){return p(!1)}}),(0,i.jsxs)("div",{className:"modal-wrapper",children:[(0,i.jsxs)("div",{className:"modal-inner-wrapper",children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)("span",{onClick:function(){return p(!1)},className:"confirmation",children:(0,i.jsx)(c.ZyS,{className:"ra-thumbs-down"})})]}),r]})]}):null,(0,i.jsx)("button",{type:"button",onClick:function(){p(!0)},className:"".concat(o," modal-btn"),children:(0,i.jsx)("span",{className:"modal-title",children:n})})]})}},9375:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(2791),a=r(184),s=function(e){var n=e.type,r=e.placeholder,s=e.onChange,c=e.className,i=e.value,o=e.quantity,u=e.total,l=(0,t.useRef)(null);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"search-input-wrapper",children:[(0,a.jsx)("input",{ref:l,type:n,className:c,placeholder:r,onChange:s,value:i,multiple:!0,required:!0,onClick:function(){l.current.focus()}}),(0,a.jsx)("p",{children:l.current?"Your search found ".concat(o," out of ").concat(u):null})]})})};s.defaultProps={type:"search"};var c=s},5223:function(e,n,r){"use strict";r(2791);var t=r(184);n.Z=function(e){var n=e.value,r=e.keyword;return(0,t.jsx)("p",{children:function(e,n){return e.split(new RegExp("(".concat(n,")"),"gi")).map((function(e,r){return(0,t.jsx)("span",{children:e.toLowerCase()===n.toLowerCase()?(0,t.jsx)("b",{style:{backgroundColor:"rgba(245,245,245,1)",color:"rgba(51,51,51,1)",paddingLeft:n?"6px":"0"},children:e}):e},r)}))}(n,r)})}},2986:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(885),a=r(2791),s=(r(2144),r(184)),c=function(e){var n=e.message,r=(0,a.useState)(""),c=(0,t.Z)(r,2),i=c[0],o=c[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){o("clear")}),6e3);return function(){return clearInterval(e)}}),[i]),(0,s.jsx)("div",{className:"animate__animated animate__bounceInLeft",children:(0,s.jsx)("span",{className:"success-component ".concat(i),children:n})})}},8989:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(2007),a=r.n(t),s=r(184),c=function(e){var n=e.id,r=e.name,t=e.value,a=e.placeholder,c=e.onChange,i=e.label,o=e.error;return(0,s.jsxs)("div",{children:[i&&(0,s.jsx)("label",{htmlFor:"input-field",children:i}),(0,s.jsx)("textarea",{id:n,name:r,value:t,placeholder:a,onChange:c}),o&&(0,s.jsx)("p",{className:"validation-error",children:o})]})};c.defaultProps={type:a().string};var i=c},4419:function(e,n,r){"use strict";r.d(n,{OG:function(){return c},TH:function(){return s},VD:function(){return a},cm:function(){return t},hi:function(){return i},tF:function(){return u},xn:function(){return o},yP:function(){return l}});var t=/[a-zA-Z]{4,}/,a=/[a-zA-Z]{3,}/,s=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,c=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,i=/^[0-9]$|^[1-9][0-9]$|^(100)$/,o=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,u=/[0-9a-zA-Z]{4,}/,l=/[0-9]{4,}/},1028:function(e,n,r){"use strict";r.r(n);var t=r(2200),a=r(184);n.default=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.Z,{})})}},888:function(e,n,r){"use strict";var t=r(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,n,r,a,s,c){if(c!==t){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(e,n,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=174.47815d01.chunk.js.map