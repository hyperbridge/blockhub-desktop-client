(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        },
        'c-block-1': function cBlock1() {
            return __webpack_require__.e(/*! import() */ 84).then(__webpack_require__.bind(null, /*! @/ui/components/block */ "./src/ui/components/block/index.vue"));
        }
    },
    data: function data() {
        return {
            renderTime: 0
        };
    },

    methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['updateSettings']), {
        autoUpdateSettings: function autoUpdateSettings() {
            var _this = this;

            var grade = this.perfResults.grade;
            var settings = this.settings;


            var perfProps = ['autoplay', 'animations'];
            var enableAll = function enableAll(boolean) {
                return perfProps.forEach(function (prop) {
                    if (settings[prop] != boolean) _this.updateSettings(prop);
                });
            };

            if (grade == 'good') {
                enableAll(true);
            } else if (grade == 'avg') {
                if (!settings.autoplay) this.updateSettings('autoplay');
                if (settings.animations) this.updateSettings('animations');
            } else {
                enableAll(false);
            }
        },
        clearDatabase: function clearDatabase() {
            debugger;
            var DBDeleteRequest = window.indexedDB.deleteDatabase("LokiCatalog");

            DBDeleteRequest.onerror = function (event) {
                console.log("Error deleting database.");
            };

            DBDeleteRequest.onsuccess = function (event) {
                console.log("Database deleted successfully.");

                console.log(event.result); // should be undefined
            };
        }
    }),
    computed: {
        settings: function settings() {
            return this.$store.state.user.settings;
        },
        perfResults: function perfResults() {
            var renderTime = this.renderTime;

            var results = {
                text: renderTime < 200 ? 'There is no need to lower your settings' : 'Click on button below to update your settings for higher performance'
            };

            if (renderTime > 100 && renderTime < 200) {
                results.grade = 'avg';
            } else if (renderTime > 200) {
                results.grade = 'bad';
            } else {
                results.grade = 'good';
            }

            return results;
        }
    },
    created: function created() {
        this.renderTime = performance.now();
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            _this2.renderTime = Math.floor(performance.now() - _this2.renderTime);
        });
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=45f17aa8&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=45f17aa8&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"settings-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('c-block-1',{attrs:{"title":"Client Settings"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Open BlockHub on system startup")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want the application to load automatically\n                            when you turn on your computer")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Show system warnings")]),_vm._v(" "),_c('p',[_vm._v("Queues for games that mickey nex to Ogopogo in freezie Serviette, eh?")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable Ethereum connection")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want the application to enable Ethereum connection")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"value":_vm.settings.pagination},on:{"change":function($event){_vm.updateSettings('pagination')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Pagination Mode")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to switch between "),_c('i',[_vm._v("pagination")]),_vm._v(" or "),_c('i',[_vm._v("load more")]),_vm._v(" navigation mode")])])],1)])])]),_vm._v(" "),_c('c-block-1',{attrs:{"title":"Performance Settings"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"value":_vm.settings.animations},on:{"change":function($event){_vm.updateSettings('animations')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable animations")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to enable animations and transitions")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"value":_vm.settings.autoplay},on:{"change":function($event){_vm.updateSettings('autoplay')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable autoplay")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to play videos automatically")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 benchmark"},[_c('p',[_vm._v("Page was rendered in "),_c('b',{class:_vm.perfResults.grade},[_vm._v(_vm._s(_vm.renderTime))]),_vm._v(" ms.")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.perfResults.text))]),_vm._v(" "),_c('c-button',{on:{"click":_vm.autoUpdateSettings}},[_vm._v("UPDATE SETTINGS AUTOMATICALLY")])],1)])]),_vm._v(" "),_c('c-block-1',{attrs:{"title":"Advanced"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 benchmark"},[_c('p',[_vm._v("Advanced settings can be managed here. These are primarily for developers @BlockHub.\n                        "),_c('br'),_c('strong',[_vm._v("Warning:")]),_vm._v(" Only use these if you know what you're doing.")]),_vm._v(" "),_c('c-button',{on:{"click":_vm.clearDatabase}},[_vm._v("DELETE DATABASE")])],1)])])],1)])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/settings/index.vue":
/*!*******************************************!*\
  !*** ./src/ui/screens/settings/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45f17aa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45f17aa8&scoped=true */ "./src/ui/screens/settings/index.vue?vue&type=template&id=45f17aa8&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/settings/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true */ "./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45f17aa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45f17aa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45f17aa8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=45f17aa8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45f17aa8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=template&id=45f17aa8&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=template&id=45f17aa8&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45f17aa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45f17aa8&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=45f17aa8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45f17aa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45f17aa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=47.da0fddafc835951b9119.js.map