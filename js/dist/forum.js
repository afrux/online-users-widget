module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n){e.exports=flarum.core.compat["common/app"]},,function(e,n){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(e,n){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,n){e.exports=flarum.core.compat["common/components/Tooltip"]},function(e,n){e.exports=flarum.core.compat["common/helpers/avatar"]},function(e,n){e.exports=flarum.core.compat["common/components/Link"]},function(e,n){e.exports=flarum.core.compat["common/utils/extractText"]},function(e,n){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(e,n,t){"use strict";var r=t(2),o=t.n(r);function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=t(0),a=t.n(u),i=t(3),c=t.n(i),l=t(4),f=t.n(l),p=t(5),d=t.n(p),x=t(6),g=t.n(x),y=t(7),O=t.n(y),v=t(8),b=function(e){var n,t;function r(){return e.apply(this,arguments)||this}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,s(n,t);var o=r.prototype;return o.className=function(){return"Afrux-OnlineUsersWidget"},o.icon=function(){return"fas fa-user-friends"},o.title=function(){return O()(a.a.translator.trans("afrux-online-users-widget.forum.widget.title"))},o.content=function(){if(this.attrs.state.isLoading)return m(c.a,null);var e=a.a.forum.onlineUsers()||[],n=a.a.forum.totalOnlineUsers()||0;return m("div",{className:"Afrux-OnlineUsersWidget-users"},m("div",{className:"Afrux-OnlineUsersWidget-users-message"},0===e.length?a.a.translator.trans("afrux-online-users-widget.forum.widget.empty"):null),m("div",{className:"Afrux-OnlineUsersWidget-users-list"},e.map((function(e){return m(g.a,{href:a.a.route("user",{username:e.slug()}),className:"Afrux-OnlineUsersWidget-users-item"},m(f.a,{text:e.displayName()},d()(e)))})),n>e.length?m("span",{className:"Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus"},m("span",{className:"Avatar"},"+"+(n-e.length))):null))},r}(t.n(v).a);n.a=function(e){(new o.a).add({key:"onlineUsers",component:b,isDisabled:function(){var n=e.forum.onlineUsers();return Boolean(!e.forum.attribute("canViewOnlineUsersWidget")||!n||!n.length)},isUnique:!0,placement:"end",position:1}).extend(e,"afrux-online-users-widget")}},function(e,n){e.exports=flarum.core.compat["forum/app"]},function(e,n){e.exports=flarum.core.compat["common/extenders"]},function(e,n){e.exports=flarum.core.compat["common/models/Forum"]},function(e,n,t){"use strict";t.r(n),t.d(n,"extend",(function(){return l}));var r=t(10),o=t.n(r),s=t(9),u=t(11),a=t.n(u),i=t(12),c=t.n(i),l=[new a.a.Model(c.a).attribute("totalOnlineUsers").hasMany("onlineUsers")];o.a.initializers.add("afrux/online-users-widget",(function(){Object(s.a)(o.a)}))}]);
//# sourceMappingURL=forum.js.map