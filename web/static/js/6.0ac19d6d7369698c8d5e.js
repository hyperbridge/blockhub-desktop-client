(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        },
        'c-tags': function cTags() {
            return __webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! @/ui/components/product-tags */ "./src/ui/components/product-tags/index.vue"));
        }
    },
    computed: {
        products: function products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products) return this.$store.state.cache.screens['/store'].products;

            return this.$store.state.marketplace.products;
        },
        new_products: function new_products() {
            return this.$store.state.marketplace.new_products;
        },
        sale_products: function sale_products() {
            return this.$store.state.marketplace.sale_products;
        },
        frontpage_product: function frontpage_product() {
            return this.$store.state.marketplace.frontpage_product;
        }
    },
    methods: {
        filterTag: function filterTag(tagName) {
            alert(tagName);
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=template&id=13bf20c8&scoped=true":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=template&id=13bf20c8&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"store-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[(_vm.frontpage_product)?_c('div',{staticClass:"row justify-content-center frontpage-product"},[(_vm.frontpage_product.images)?_c('div',{staticClass:"col-12 col-lg-6 frontpage-product__slider"},[_c('img',{attrs:{"src":_vm.frontpage_product.images.medium_tile}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 frontpage-product__info"},[_c('h2',[_c('a',{attrs:{"href":("/#/product/" + (_vm.frontpage_product.id))}},[_vm._v(_vm._s(_vm.frontpage_product.name))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.frontpage_product.short_description))]),_vm._v(" "),_c('c-tags',{attrs:{"tags":_vm.frontpage_product.author_tags}}),_vm._v(" "),_c('div',{staticClass:"frontpage-product__footer"},[_c('div',{staticClass:"price-list"},[(_vm.frontpage_product.old_price)?_c('div',{staticClass:"price old_price"},[_vm._v("\n                                "+_vm._s(_vm.frontpage_product.old_price)+"\n                                "),_c('span',[_vm._v("usd")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"price"},[_vm._v("\n                                "+_vm._s(_vm.frontpage_product.price)+"\n                                "),_c('span',[_vm._v("usd")])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-success",attrs:{"href":"#"}},[_c('i',{staticClass:"fas fa-cart-plus"}),_vm._v(" add to cart")])])],1)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row product-grid"},[_c('div',{staticClass:"col-12"},[_c('h3',[_vm._v("New Releases")]),_vm._v(" "),_c('div',{staticClass:"sl_nav"},[_c('a',{staticClass:"nav-prev",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-arrow-left"})]),_vm._v(" "),_c('a',{staticClass:"nav-next",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-arrow-right"})])]),_vm._v(" "),_c('div',{staticClass:"line"})]),_vm._v(" "),_vm._l((_vm.new_products),function(item,index){return _c('div',{key:index,staticClass:"col-12 col-lg-4"},[_c('div',{staticClass:"card invert product-grid__item"},[(_vm.frontpage_product.images)?_c('div',{staticClass:"card-body padding-0"},[_c('a',{attrs:{"href":("/#/product/" + (item.id))}},[_c('img',{staticClass:"card-img-top",attrs:{"src":item.images.medium_tile}})]),_vm._v(" "),_c('h4',[_c('a',{attrs:{"href":("/#/product/" + (item.id))}},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('p',{staticClass:"card-text",attrs:{"hidden":""}},[_vm._v(_vm._s(item.short_description)+" ")]),_vm._v(" "),_c('c-tags',{attrs:{"tags":item.author_tags}})],1):_vm._e()])])})],2),_vm._v(" "),_c('div',{staticClass:"row product-grid"},[_c('div',{staticClass:"col-12"},[_c('h3',{staticClass:"with_bg"},[_vm._v("Summer Sale")]),_vm._v(" "),_c('div',{staticClass:"sl_nav"},[_c('a',{staticClass:"nav-prev",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-arrow-left"})]),_vm._v(" "),_c('a',{staticClass:"nav-next",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-arrow-right"})])]),_vm._v(" "),_c('div',{staticClass:"line"})]),_vm._v(" "),_vm._l((_vm.sale_products),function(item,index){return _c('div',{key:index,staticClass:"col-12 col-lg-4"},[_c('div',{staticClass:"card invert product-grid__item"},[(_vm.frontpage_product.images)?_c('div',{staticClass:"card-body padding-0"},[_c('a',{attrs:{"href":("#/product/" + (item.id))}},[_c('img',{staticClass:"card-img-top",attrs:{"src":item.images.medium_tile}})]),_vm._v(" "),_c('h4',[_c('a',{attrs:{"href":("/#/product/" + (item.id))}},[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('p',{staticClass:"card-text",attrs:{"hidden":""}},[_vm._v(_vm._s(item.short_description)+" ")]),_vm._v(" "),_c('c-tags',{attrs:{"tags":item.author_tags}})],1):_vm._e()])])})],2)])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/store/index.vue":
/*!****************************************!*\
  !*** ./src/ui/screens/store/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_13bf20c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=13bf20c8&scoped=true */ "./src/ui/screens/store/index.vue?vue&type=template&id=13bf20c8&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/store/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true */ "./src/ui/screens/store/index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_13bf20c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_13bf20c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "13bf20c8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/store/index.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/ui/screens/store/index.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/store/index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/ui/screens/store/index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=style&index=0&id=13bf20c8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13bf20c8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/store/index.vue?vue&type=template&id=13bf20c8&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/ui/screens/store/index.vue?vue&type=template&id=13bf20c8&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_13bf20c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=13bf20c8&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=template&id=13bf20c8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_13bf20c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_13bf20c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=6.0ac19d6d7369698c8d5e.js.map