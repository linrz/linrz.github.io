(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{255:function(t,e,n){},397:function(t,e,n){"use strict";var o=n(255);n.n(o).a},398:function(t,e,n){"use strict";n.r(e);var o=n(25),a=n(1);const s={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:function(){return{rawPopupConfig:{message:"[object Linrz] 发布了新内容啦 🤓",buttonText:"刷新"},updateEvent:null}},created:function(){o.a.$on("sw-updated",this.onSWUpdated),!0==={message:"[object Linrz] 发布了新内容啦 🤓",buttonText:"刷新"}&&(this.rawPopupConfig=s)},computed:{popupConfig:function(){return Object(a.f)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||s["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||s["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(397),n(39)),p=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"6f10a460",null);e.default=p.exports}}]);