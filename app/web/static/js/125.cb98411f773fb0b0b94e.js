(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{253:function(t,i){},701:function(t,i,n){"use strict";var c=n(253);n.n(c).a},779:function(t,i,n){"use strict";n.r(i);var c={name:"notification",props:{notification:{type:Object,required:!0}},data:function(){return{show:!0}},methods:{actionOnClose:function(){this.show=!1}},computed:{notif_icon:function(){switch(this.notification.type){case"info":return"info-circle";case"success":return"check-circle";case"warning":return"exclamation-triangle";case"danger":return"times-circle";default:return"cog"}}}},s=(n(701),n(0)),e=Object(s.a)(c,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","leave-active-class":"animated bounceOutRight"}},[t.show?n("div",{staticClass:"notif",class:t.notification.type},[n("div",{staticClass:"title"},[n("h5",{staticClass:"text-left",on:{click:function(i){if(i.target!==i.currentTarget)return null;t.$emit("showPopup")}}},[t.icon?n("c-img",{attrs:{src:t.icon}}):n("i",{class:"fas fa-"+t.notif_icon}),t._v("\n                "+t._s(t.notification.title)+"\n                "),n("div",{staticClass:"close",on:{click:function(i){t.actionOnClose()}}},[n("i",{staticClass:"fas fa-times"})])],1)]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n            "+t._s(t.notification.text)+"\n        ")])]):t._e()])},[],!1,null,"60cd6ac5",null);i.default=e.exports}}]);