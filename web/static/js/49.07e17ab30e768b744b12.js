(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['navigationKey'],
    components: {
        'c-header': function cHeader() {
            return __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(null, /*! @/ui/components/headers/basic */ "./src/ui/components/headers/basic.vue"));
        },
        'c-wallet-navigation': function cWalletNavigation() {
            return __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/wallet */ "./src/ui/components/navigation/wallet.vue"));
        },
        'c-account-navigation': function cAccountNavigation() {
            return __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/account */ "./src/ui/components/navigation/account.vue"));
        },
        'c-settings-navigation': function cSettingsNavigation() {
            return __webpack_require__.e(/*! import() */ 53).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/settings */ "./src/ui/components/navigation/settings.vue"));
        },
        'c-help-navigation': function cHelpNavigation() {
            return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/help */ "./src/ui/components/navigation/help.vue"));
        },
        'c-funding-navigation': function cFundingNavigation() {
            return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/funding */ "./src/ui/components/navigation/funding.vue"));
        },
        'c-store-navigation': function cStoreNavigation() {
            return __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/store */ "./src/ui/components/navigation/store.vue"));
        },
        'c-asset-navigation': function cAssetNavigation() {
            return __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/asset */ "./src/ui/components/navigation/asset.vue"));
        },
        'c-product-navigation': function cProductNavigation() {
            return __webpack_require__.e(/*! import() */ 58).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/product */ "./src/ui/components/navigation/product.vue"));
        },
        'c-project-navigation': function cProjectNavigation() {
            return __webpack_require__.e(/*! import() */ 59).then(__webpack_require__.bind(null, /*! @/ui/components/navigation/project */ "./src/ui/components/navigation/project.vue"));
        }
    },
    computed: {
        is_connected: function is_connected() {
            return this.$store.state.network.connection.internet;
        },
        connection_message: function connection_message() {
            return this.$store.state.network.connection_message;
        }
    },
    data: function data() {
        return {
            navigationComponent: this.navigationKey || false
        };
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=template&id=53ebcd97&scoped=true":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=template&id=53ebcd97&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page page--w-header page--w-container"},[_c('c-header'),_vm._v(" "),_c('div',{staticClass:"page__container invert"}),_vm._v(" "),_c('div',{staticClass:"page__content page__content-invert invert page-aside--hidden",attrs:{"id":"page-content"}},[_c('div',{staticClass:"page-aside invert",attrs:{"id":"page-aside"}},[(_vm.navigationComponent)?_c(("c-" + _vm.navigationComponent),{tag:"component"}):_vm._e()],1),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm._m(0),_vm._v(" "),(!_vm.is_connected)?_c('div',{staticClass:"status-bar"},[_vm._v("\n            "+_vm._s(_vm.connection_message)+"\n        ")]):_vm._e()],2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-sidepanel invert",attrs:{"id":"page-sidepanel"}},[_c('div',{staticClass:"page-sidepanel__content"}),_vm._v(" "),_c('div',{staticClass:"page-sidepanel__button page-sidepanel__button--lower",attrs:{"data-action":"sidepanel-hide"}},[_c('div')])])}]



/***/ }),

/***/ "./src/ui/layouts/default/index.vue":
/*!******************************************!*\
  !*** ./src/ui/layouts/default/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_53ebcd97_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=53ebcd97&scoped=true */ "./src/ui/layouts/default/index.vue?vue&type=template&id=53ebcd97&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/layouts/default/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true */ "./src/ui/layouts/default/index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_53ebcd97_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_53ebcd97_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53ebcd97",
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

/***/ "./src/ui/layouts/default/index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/ui/layouts/default/index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=style&index=0&id=53ebcd97&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_53ebcd97_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/layouts/default/index.vue?vue&type=template&id=53ebcd97&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/ui/layouts/default/index.vue?vue&type=template&id=53ebcd97&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_53ebcd97_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=53ebcd97&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/layouts/default/index.vue?vue&type=template&id=53ebcd97&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_53ebcd97_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_53ebcd97_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=49.07e17ab30e768b744b12.js.map