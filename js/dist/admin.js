module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){e.exports=flarum.core.compat["common/app"]},function(e,t){e.exports=flarum.core.compat["admin/app"]},function(e,t){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(e,t){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["common/components/Tooltip"]},function(e,t){e.exports=flarum.core.compat["common/helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["common/components/Link"]},function(e,t){e.exports=flarum.core.compat["common/utils/extractText"]},function(e,t){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(e,t,n){"use strict";var r=n(2),s=n.n(r);function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=n(0),a=n.n(i),u=n(3),l=n.n(u),c=n(4),f=n.n(c),p=n(5),d=n.n(p),g=n(6),x=n.n(g),b=n(7),v=n.n(b),w=n(8),y=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var s=r.prototype;return s.className=function(){return"Afrux-OnlineUsersWidget"},s.icon=function(){return"fas fa-user-friends"},s.title=function(){return v()(a.a.translator.trans("afrux-online-users-widget.forum.widget.title"))},s.content=function(){if(this.attrs.state.isLoading)return m(l.a,null);var e=a.a.forum.onlineUsers()||[],t=a.a.forum.totalOnlineUsers()||0;return m("div",{className:"Afrux-OnlineUsersWidget-users"},m("div",{className:"Afrux-OnlineUsersWidget-users-message"},0===e.length?a.a.translator.trans("afrux-online-users-widget.forum.widget.empty"):null),m("div",{className:"Afrux-OnlineUsersWidget-users-list"},e.map((function(e){return m(x.a,{href:a.a.route("user",{username:e.slug()}),className:"Afrux-OnlineUsersWidget-users-item"},m(f.a,{text:e.displayName()},d()(e)))})),t>e.length?m("span",{className:"Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus"},m("span",{className:"Avatar"},"+"+(t-e.length))):null))},r}(n.n(w).a);t.a=function(e){(new s.a).add({key:"onlineUsers",component:y,isDisabled:function(){var t=e.forum.onlineUsers();return Boolean(!e.forum.attribute("canViewOnlineUsersWidget")||!t||!t.length)},isUnique:!0,placement:"end",position:1}).extend(e,"afrux-online-users-widget")}},,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),o=n(9);s.a.initializers.add("afrux/online-users-widget",(function(){Object(o.a)(s.a),s.a.extensionData.for("afrux-online-users-widget").registerSetting({setting:"afrux-online-users-widget.max_users",label:s.a.translator.trans("afrux-online-users-widget.admin.settings.max_users"),type:"number"}).registerSetting({setting:"afrux-online-users-widget.last_seen_interval",label:s.a.translator.trans("afrux-online-users-widget.admin.settings.last_seen_interval"),type:"number"}).registerSetting({setting:"afrux-online-users-widget.cache_ttl",label:s.a.translator.trans("afrux-online-users-widget.admin.settings.cache_ttl"),type:"number"}).registerPermission({icon:"fas fa-user-clock",label:s.a.translator.trans("afrux-online-users-widget.admin.permissions.view_online_users_widget"),permission:"viewOnlineUsersWidget",allowGuest:!0},"view")}))}]);
//# sourceMappingURL=admin.js.map