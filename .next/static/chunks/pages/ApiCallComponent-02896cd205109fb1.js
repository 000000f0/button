(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{9290:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ApiCallComponent",function(){return t(367)}])},367:function(n,e,t){"use strict";t.r(e);var r=t(4051),i=t.n(r),u=t(5893),o=t(7294),s=t(6154);function c(n,e,t,r,i,u,o){try{var s=n[u](o),c=s.value}catch(a){return void t(a)}s.done?e(c):Promise.resolve(c).then(r,i)}e.default=function(){var n=(0,o.useState)(""),e=n[0],t=n[1],r=(0,o.useState)(""),a=r[0],l=r[1],p=function(){var n,t=(n=i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Submitting "+e),n.prev=1,n.next=5,s.Z.post("http://54.77.216.40:5000",{clientmessage:e});case 5:t=n.sent,l(t.data),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.error("Error:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var u=n.apply(e,t);function o(n){c(u,r,i,o,s,"next",n)}function s(n){c(u,r,i,o,s,"throw",n)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,u.jsxs)("div",{children:[(0,u.jsxs)("label",{children:["Client Message:",(0,u.jsx)("input",{type:"text",value:e,onChange:function(n){t(n.target.value)}})]}),(0,u.jsx)("button",{onClick:p,children:"Submit"}),a&&(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Response:"}),(0,u.jsx)("pre",{children:a})]})]})}}},function(n){n.O(0,[154,774,888,179],(function(){return e=9290,n(n.s=e);var e}));var e=n.O();_N_E=e}]);