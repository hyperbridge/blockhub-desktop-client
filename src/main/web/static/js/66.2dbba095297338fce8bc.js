(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************/
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

var updateProject = function updateProject() {
    if (!this.$store.state.funding.projects) return;

    var project = this.$store.state.funding.projects[this.id];

    if (!project) return;

    if (project.images && project.images.header) window.document.getElementById('header-bg').style['background-image'] = 'url(' + project.images.header + ')';

    return project;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    data: function data() {
        return {
            "bounties": [{
                "title": "Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
                "submited": "2851",
                "approved": "408",
                "prize": "30000",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",
                "explain_text": "",
                "file_src": ""

            }]
        };
    },
    components: {
        'c-tags-list': function cTagsList() {
            return __webpack_require__.e(/*! import() */ 79).then(__webpack_require__.bind(null, /*! @/ui/components/tags */ "./src/ui/components/tags/index.vue"));
        },
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        }
    },
    methods: {
        save: function save() {
            this.$store.dispatch('funding/updateProject', this.product);
        }
    },
    computed: {
        project: updateProject
    },
    mounted: updateProject,
    created: updateProject,
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=template&id=66f23138&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=template&id=66f23138&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"project-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[(!_vm.project)?_c('div',{staticClass:"col-12"},[_vm._v("\n                    Project not found\n                ")]):_vm._e(),_vm._v(" "),(_vm.project)?_c('div',{staticClass:"col-12"},[_c('h1',{staticClass:"title margin-top-10 margin-bottom-15"},[_vm._v(_vm._s(_vm.project.name))]),_vm._v(" "),_c('c-tags-list',{attrs:{"tags":_vm.project.author_tags}}),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id))}},[_vm._v("Overview")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/community")}},[_vm._v("Community")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":("/#/project/" + (_vm.project.id) + "/bounties")}},[_vm._v("Bounties")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/updates")}},[_vm._v("Updates")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/milestones")}},[_vm._v("Milestones")])])]),_vm._v(" "),_vm._l((_vm.bounties),function(item,index){return _c('div',{key:index,staticClass:"bounties_item"},[_c('div',{staticClass:"head d-flex justify-content-between align-items-center margin-bottom-15"},[_c('div',{staticClass:"col-md-6"},[_c('h4',[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('div',{staticClass:"col-auto info"},[_c('h4',[_vm._v("Submited")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.submited))])]),_vm._v(" "),_c('div',{staticClass:"col-auto info"},[_c('h4',[_vm._v("Approved")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.approved))])]),_vm._v(" "),_c('div',{staticClass:"col-auto info"},[_c('h4',[_vm._v("Prize")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.prize)+" hbx")])])]),_vm._v(" "),_c('div',{staticClass:"text padding-left-15 padding-right-15"},[_c('p',[_vm._v(_vm._s(item.text))])]),_vm._v(" "),_c('div',{staticClass:"bottom padding-left-15 padding-right-15 margin-top-30"},[_c('div',{staticClass:"file_upload"},[_c('i',{staticClass:"fas fa-download"}),_vm._v("\n                                    Select a Dossier File\n                                ")]),_vm._v(" "),_c('span',[_vm._v("or")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.explain_text),expression:"item.explain_text"}],staticClass:"explain_input",attrs:{"type":"text","placeholder":"Explain your findings"},domProps:{"value":(item.explain_text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "explain_text", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"btn btn-sm btn-success"},[_vm._v("submit "),_c('i',{staticClass:"fas fa-arrow-right"})])])])})],2):_vm._e()])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/project-bounties/index.vue":
/*!***************************************************!*\
  !*** ./src/ui/screens/project-bounties/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_66f23138_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=66f23138&scoped=true */ "./src/ui/screens/project-bounties/index.vue?vue&type=template&id=66f23138&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/project-bounties/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true */ "./src/ui/screens/project-bounties/index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_66f23138_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_66f23138_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66f23138",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/project-bounties/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/ui/screens/project-bounties/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/project-bounties/index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/ui/screens/project-bounties/index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=style&index=0&id=66f23138&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_66f23138_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/project-bounties/index.vue?vue&type=template&id=66f23138&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/ui/screens/project-bounties/index.vue?vue&type=template&id=66f23138&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66f23138_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=66f23138&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-bounties/index.vue?vue&type=template&id=66f23138&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66f23138_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_66f23138_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=66.2dbba095297338fce8bc.js.map