(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'screen-gallery',
    props: {
        main: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        'c-modal-light': function cModalLight() {
            return __webpack_require__.e(/*! import() */ 91).then(__webpack_require__.bind(null, /*! @/ui/components/modal-light */ "./src/ui/components/modal-light/index.vue"));
        },
        'c-images-explorer': function cImagesExplorer() {
            return __webpack_require__.e(/*! import() */ 92).then(__webpack_require__.bind(null, /*! @/ui/components/images-explorer */ "./src/ui/components/images-explorer/index.vue"));
        }
    },
    data: function data() {
        return {
            active_item: 0,
            show_modal: false,
            interval: null,
            run_slideshow: true
        };
    },

    methods: {
        slideshow: function slideshow() {
            var _this = this;

            this.interval = setInterval(function () {
                _this.active_item < _this.images.length - 1 ? _this.active_item++ : _this.active_item = 0;
            }, 4000);
        },
        enableSlideshow: function enableSlideshow(status) {
            clearInterval(this.interval);
            this.run_slideshow = status;
            if (status) this.slideshow();
        }
    },
    computed: {
        images: function images() {
            return [this.main].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.items));
        }
    },
    mounted: function mounted() {
        if (this.images) {
            this.slideshow();
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.enableSlideshow(false);
    }
});

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=129e128a&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=129e128a&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"screen-gallery",on:{"mouseover":function($event){_vm.enableSlideshow(false)},"mouseout":function($event){_vm.enableSlideshow(true)}}},[_c('div',{staticClass:"screen-gallery__main-img"},[_c('i',{staticClass:"fas fa-expand"}),_vm._v(" "),_c('img',{attrs:{"src":_vm.images[_vm.active_item]},on:{"click":function($event){_vm.show_modal = true}}}),_vm._v(" "),(_vm.run_slideshow)?_c('div',{staticClass:"screen-gallery__progress-bar"}):_vm._e()]),_vm._v(" "),_c('ul',{staticClass:"screen-gallery__thumb-nav"},_vm._l((_vm.images),function(url,index){return _c('li',{key:index},[_c('img',{class:{ 'inactive-item': index !== _vm.active_item },attrs:{"src":url},on:{"click":function($event){_vm.active_item = index}}})])})),_vm._v(" "),(_vm.show_modal)?_c('c-modal-light',{on:{"close":function($event){_vm.show_modal=false}}},[_c('c-images-explorer',{attrs:{"images":_vm.images,"start_from":_vm.active_item}})],1):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue":
/*!******************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_vue_vue_type_template_id_129e128a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=129e128a&scoped=true */ "./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=129e128a&scoped=true");
/* harmony import */ var _gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js */ "./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true */ "./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _gallery_vue_vue_type_template_id_129e128a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _gallery_vue_vue_type_template_id_129e128a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "129e128a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=style&index=0&id=129e128a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_style_index_0_id_129e128a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=129e128a&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=129e128a&scoped=true ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_129e128a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gallery.vue?vue&type=template&id=129e128a&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/screen-gallery/gallery.vue?vue&type=template&id=129e128a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_129e128a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gallery_vue_vue_type_template_id_129e128a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=85.477725a0f51c1a593653.js.map