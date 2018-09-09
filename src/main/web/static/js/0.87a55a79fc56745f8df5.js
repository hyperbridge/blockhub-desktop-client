(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['navigationKey'],
    components: {
        'c-header': function cHeader() {
            return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @/ui/components/headers/basic */ "./src/ui/components/headers/basic.vue"));
        },
        'c-wallet-navigation': function cWalletNavigation() {
            return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/wallet */ "./src/ui/components/navigation/wallet.vue"));
        },
        'c-account-navigation': function cAccountNavigation() {
            return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/account */ "./src/ui/components/navigation/account.vue"));
        },
        'c-settings-navigation': function cSettingsNavigation() {
            return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/settings */ "./src/ui/components/navigation/settings.vue"));
        },
        'c-help-navigation': function cHelpNavigation() {
            return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/help */ "./src/ui/components/navigation/help.vue"));
        },
        'c-funding-navigation': function cFundingNavigation() {
            return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/funding */ "./src/ui/components/navigation/funding.vue"));
        },
        'c-store-navigation': function cStoreNavigation() {
            return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/store */ "./src/ui/components/navigation/store.vue"));
        },
        'c-asset-navigation': function cAssetNavigation() {
            return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/asset */ "./src/ui/components/navigation/asset.vue"));
        },
        'c-product-navigation': function cProductNavigation() {
            return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/product */ "./src/ui/components/navigation/product.vue"));
        },
        'c-project-navigation': function cProjectNavigation() {
            return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/project */ "./src/ui/components/navigation/project.vue"));
        },
        'c-notification': function cNotification() {
            return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @/ui/components/notification */ "./src/ui/components/notification/index.vue"));
        }
    },
    computed: {
        is_connected: function is_connected() {
            return this.$store.state.network.connection.datasource;
        },
        connection_status: function connection_status() {
            return this.$store.state.network.connection.status;
        },
        user_submitted_connection_message: function user_submitted_connection_message() {
            return this.$store.state.network.user_submitted_connection_messages[0];
        }
    },
    data: function data() {
        return {
            ntf_messages: [{
                type: 'info',
                title: 'Info message',
                text: 'Something is changed in our policy, please view this notification.Click to view full',
                actionOnClose: false,
                actionOnTextClick: true
            }, {
                type: 'warning',
                title: 'Warning message',
                text: 'Something is changed in our policy, please view this notification.Click to view full',
                actionOnClose: '',
                actionOnTextClick: ''
            }, {
                type: 'danger',
                title: 'Danger message',
                text: 'Something is changed in our policy, please view this notification.Click to view full',
                actionOnClose: '',
                actionOnTextClick: ''
            }, {
                type: 'success',
                title: 'Success message',
                text: 'Something is changed in our policy, please view this notification.Click to view full',
                actionOnClose: '',
                actionOnTextClick: ''
            }, {
                type: '',
                title: 'Other message',
                text: 'Something is changed in our policy, please view this notification.Click to view full',
                actionOnClose: '',
                actionOnTextClick: ''
            }],
            navigationComponent: this.navigationKey || false
        };
    },
    updated: function updated() {

        //$('.owl-controls').insertBefore('')
    },

    methods: {
        installOwlCarousel: function installOwlCarousel() {
            window.owlcarousel();

            var owl = $('.owl-carousel').owlCarousel();

            owl.trigger('to.owl.carousel', [3]);

            $('.js-go-notifications').click(function () {
                owl.trigger('to.owl.carousel', [0]);
            });

            $('.js-go-messages').click(function () {
                owl.trigger('to.owl.carousel', [1]);
            });

            $('.js-go-updates').click(function () {
                owl.trigger('to.owl.carousel', [2]);
            });

            $('.js-go-lists').click(function () {
                owl.trigger('to.owl.carousel', [3]);
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.installOwlCarousel();
        });
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=0&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=template&id=b3eeff24&scoped=true":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=template&id=b3eeff24&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page page--w-header page--w-container"},[_c('c-header'),_vm._v(" "),_c('div',{staticClass:"page__content page__content-invert invert",attrs:{"id":"page-content"}},[(!_vm.is_connected)?_c('div',{staticClass:"loading loading--w-spinner"},[_c('div',[_c('div',[_c('div',{staticClass:"loading-spinner"}),_vm._v(" "),_c('p',{staticClass:"loading__message"},[_vm._v(_vm._s(_vm.user_submitted_connection_message.message))]),_vm._v(" "),_c('p',{staticClass:"loading__user"},[_vm._v("Submitted by "),_c('a',{attrs:{"href":("/#/identity/" + (_vm.user_submitted_connection_message.user.id))}},[_vm._v("@"+_vm._s(_vm.user_submitted_connection_message.user.name))])])]),_vm._v(" "),(_vm.connection_status.code)?_c('h1',{staticClass:"loading__status-code"},[_vm._v("ERROR "+_vm._s(_vm.connection_status.code))]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"loading__status-message"},[_vm._v(_vm._s(_vm.connection_status.message))]),_vm._v(" "),_vm._m(0)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"page-aside invert",attrs:{"id":"page-aside"}},[(_vm.navigationComponent)?_c(("c-" + _vm.navigationComponent),{tag:"component"}):_vm._e()],1),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('div',{staticClass:"page-sidepanel invert",attrs:{"id":"page-sidepanel"}},[_c('div',{staticClass:"page-sidepanel__content"},[_c('div',{staticClass:"owl-carousel",attrs:{"data-nav-dots":"true","data-nav-arrow":"true","data-items":"1","data-sm-items":"1","data-lg-items":"1","data-md-items":"1","data-autoplay":"false"}},[_c('div',{staticClass:"item"},[_c('h3',[_vm._v("NOTIFICATIONS")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"navigation"},_vm._l((_vm.ntf_messages),function(notif,index){return _c('c-notification',{key:index,attrs:{"notification":notif}})}))]),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4)])]),_vm._v(" "),_vm._m(5)]),_vm._v(" "),_c('div',{staticClass:"status-bar",attrs:{"hidden":""}},[_vm._v("\n            "+_vm._s(_vm.connection_status.message)+"\n        ")])],2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading__links"},[_c('p',[_vm._v("Connection problems? Let us know!")]),_vm._v(" "),_c('a',{attrs:{"href":"https://twitter.com/hyperbridge"}},[_c('span',{staticClass:"fab fa-twitter"}),_vm._v(" Tweet Us")]),_vm._v(" "),_c('a',{attrs:{"href":"https://hyperbridge.org/status"}},[_c('span',{staticClass:"fas fa-globe-americas"}),_vm._v(" Server Status")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-chooser"},[_c('button',{staticClass:"btn active js-go-notifications"},[_c('span',{staticClass:"icon fa fa-bell"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-messages"},[_c('span',{staticClass:"icon fa fa-envelope"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-updates"},[_c('span',{staticClass:"icon fa fa-star"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-lists"},[_c('span',{staticClass:"icon fa fa-trophy"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("MESSAGES")]),_vm._v(" "),_c('div',{staticClass:"slide-chooser"},[_c('button',{staticClass:"btn js-go-notifications"},[_c('span',{staticClass:"icon fa fa-bell"})]),_vm._v(" "),_c('button',{staticClass:"btn active js-go-messages"},[_c('span',{staticClass:"icon fa fa-envelope"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-updates"},[_c('span',{staticClass:"icon fa fa-star"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-lists"},[_c('span',{staticClass:"icon fa fa-trophy"})])]),_vm._v(" "),_c('div',{staticClass:"navigation"},[_c('div',{staticClass:"messages-action"},[_c('a',{staticClass:"btn",attrs:{"href":"#3"}},[_vm._v("Quick Send")]),_vm._v(" "),_c('a',{staticClass:"btn",attrs:{"href":"#3"}},[_vm._v("Go to Messages")])]),_vm._v(" "),_c('ul',{staticClass:"message-list"},[_c('li',{staticClass:"message-list__item"},[_c('i',{staticClass:"fas fa-reply"}),_vm._v(" "),_c('h5',[_vm._v("Username, 2 days ago:")]),_vm._v(" "),_c('p',[_vm._v("Maybe I ought to crank Morley Safer's poutine,\n                                        eh, that should to start them up.")])]),_vm._v(" "),_c('li',{staticClass:"message-list__item"},[_c('i',{staticClass:"fas fa-reply"}),_vm._v(" "),_c('h5',[_vm._v("Username, 2 days ago:")]),_vm._v(" "),_c('p',[_vm._v("Maybe I ought to crank Morley Safer's poutine,\n                                        eh, that should to start them up.")])]),_vm._v(" "),_c('li',{staticClass:"message-list__item"},[_c('i',{staticClass:"fas fa-reply"}),_vm._v(" "),_c('h5',[_vm._v("Username, 2 days ago:")]),_vm._v(" "),_c('p',[_vm._v("Maybe I ought to crank Morley Safer's poutine,\n                                        eh, that should to start them up.")])]),_vm._v(" "),_c('li',{staticClass:"message-list__item"},[_c('i',{staticClass:"fas fa-reply"}),_vm._v(" "),_c('h5',[_vm._v("Username, 2 days ago:")]),_vm._v(" "),_c('p',[_vm._v("Maybe I ought to crank Morley Safer's poutine,\n                                        eh, that should to start them up.")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("UPDATES")]),_vm._v(" "),_c('div',{staticClass:"slide-chooser"},[_c('button',{staticClass:"btn js-go-notifications"},[_c('span',{staticClass:"icon fa fa-bell"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-messages"},[_c('span',{staticClass:"icon fa fa-envelope"})]),_vm._v(" "),_c('button',{staticClass:"btn active js-go-updates"},[_c('span',{staticClass:"icon fa fa-star"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-lists"},[_c('span',{staticClass:"icon fa fa-trophy"})])]),_vm._v(" "),_c('div',{staticClass:"navigation"},[_c('ul',[_c('li',{staticClass:"title"},[_vm._v("TOP 5")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("BlockHub v1.0.15")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("With the last update, we bring lorem ipsum dolor sit amet and check the changelog.")])])]),_vm._v(" "),_c('li',[_c('br'),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-info btn-sm",staticStyle:{"color":"#fff","border":"2px solid #fff"}},[_c('span',{staticClass:"icon fa fa-sync"}),_vm._v(" Relaunch")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("TOP LISTS")]),_vm._v(" "),_c('div',{staticClass:"slide-chooser"},[_c('button',{staticClass:"btn js-go-notifications"},[_c('span',{staticClass:"icon fa fa-bell"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-messages"},[_c('span',{staticClass:"icon fa fa-envelope"})]),_vm._v(" "),_c('button',{staticClass:"btn js-go-updates"},[_c('span',{staticClass:"icon fa fa-star"})]),_vm._v(" "),_c('button',{staticClass:"btn active js-go-lists"},[_c('span',{staticClass:"icon fa fa-trophy"})])]),_vm._v(" "),_c('div',{staticClass:"navigation"},[_c('ul',[_c('li',{staticClass:"title"},[_vm._v("TOP 5")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("Joe's Adventure")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("The Mission")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("Gym with Tim")])])]),_vm._v(" "),_c('li',{staticClass:"more"},[_c('a',{attrs:{"href":"/#/"}},[_c('span',{staticClass:"text"},[_vm._v("MORE...")])])])])]),_vm._v(" "),_c('div',{staticClass:"navigation"},[_c('ul',[_c('li',{staticClass:"title"},[_vm._v("TOP FREE")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("Joe's Adventure")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("The Mission")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("Gym with Tim")])])]),_vm._v(" "),_c('li',{staticClass:"more"},[_c('a',{attrs:{"href":"/#/"}},[_c('span',{staticClass:"text"},[_vm._v("MORE...")])])])])]),_vm._v(" "),_c('div',{staticClass:"navigation"},[_c('ul',[_c('li',{staticClass:"title"},[_vm._v("MOST RENTABLE")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("Joe's Adventure")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("The Mission")])])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/product/1"}},[_c('span',{staticClass:"text"},[_vm._v("Gym with Tim")])])]),_vm._v(" "),_c('li',{staticClass:"more"},[_c('a',{attrs:{"href":"/#/"}},[_c('span',{staticClass:"text"},[_vm._v("MORE...")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-sidepanel__button page-sidepanel__button--lower",attrs:{"data-action":"sidepanel-hide"}},[_c('div')])}]



/***/ }),

/***/ "./src/ui/layouts/default/index.vue":
/*!******************************************!*\
  !*** ./src/ui/layouts/default/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b3eeff24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b3eeff24&scoped=true */ "./src/ui/layouts/default/index.vue?vue&type=template&id=b3eeff24&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/layouts/default/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss */ "./src/ui/layouts/default/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true */ "./src/ui/layouts/default/index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b3eeff24_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b3eeff24_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b3eeff24",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/layouts/default/index.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/ui/layouts/default/index.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/layouts/default/index.vue?vue&type=style&index=0&lang=scss":
/*!***************************************************************************!*\
  !*** ./src/ui/layouts/default/index.vue?vue&type=style&index=0&lang=scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/layouts/default/index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/ui/layouts/default/index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=1&id=b3eeff24&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_b3eeff24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/layouts/default/index.vue?vue&type=template&id=b3eeff24&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/ui/layouts/default/index.vue?vue&type=template&id=b3eeff24&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b3eeff24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b3eeff24&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=template&id=b3eeff24&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b3eeff24_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b3eeff24_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=0.87a55a79fc56745f8df5.js.map