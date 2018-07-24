(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    if (project.images && project.images.header) window.document.body.style['background-image'] = 'url(' + project.images.header + ')';

    return project;
};

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    components: {
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        },
        'c-plan-list': function cPlanList() {
            return __webpack_require__.e(/*! import() */ 60).then(__webpack_require__.bind(null, /*! @/ui/components/game-plans/list */ "./src/ui/components/game-plans/list.vue"));
        },
        'c-screen-gallery': function cScreenGallery() {
            return __webpack_require__.e(/*! import() */ 61).then(__webpack_require__.bind(null, /*! @/ui/components/screen-gallery/gallery */ "./src/ui/components/screen-gallery/gallery.vue"));
        },
        'c-tags-list': function cTagsList() {
            return __webpack_require__.e(/*! import() */ 62).then(__webpack_require__.bind(null, /*! @/ui/components/product-tags */ "./src/ui/components/product-tags/index.vue"));
        },
        'c-rating-block': function cRatingBlock() {
            return __webpack_require__.e(/*! import() */ 63).then(__webpack_require__.bind(null, /*! @/ui/components/rating-block */ "./src/ui/components/rating-block/index.vue"));
        },
        'c-frequently-traded-assets': function cFrequentlyTradedAssets() {
            return __webpack_require__.e(/*! import() */ 64).then(__webpack_require__.bind(null, /*! @/ui/components/frequently-traded-assets */ "./src/ui/components/frequently-traded-assets/index.vue"));
        },
        'c-community-spotlight': function cCommunitySpotlight() {
            return __webpack_require__.e(/*! import() */ 65).then(__webpack_require__.bind(null, /*! @/ui/components/community-spotlight */ "./src/ui/components/community-spotlight/index.vue"));
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
        window.document.body.style['background-image'] = 'url(/static/img/products/default.png)';
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=template&id=312013c1&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=template&id=312013c1&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"product-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[(!_vm.project)?_c('div',{staticClass:"col-12"},[_vm._v("\n                    Project not found\n                ")]):_vm._e(),_vm._v(" "),(_vm.project)?_c('div',{staticClass:"col-12"},[_c('h1',{staticClass:"title margin-top-10 margin-bottom-15"},[_vm._v(_vm._s(_vm.project.name))]),_vm._v(" "),_c('c-tags-list',{attrs:{"tags":_vm.project.author_tags}}),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":("/#/project/" + (_vm.project.id))}},[_vm._v("Overview")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/community")}},[_vm._v("Community")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/suggestions")}},[_vm._v("Suggestions")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/updates")}},[_vm._v("Updates")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/project/" + (_vm.project.id) + "/milestones")}},[_vm._v("Milestones")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-7"},[_c('c-screen-gallery'),_vm._v(" "),_c('div',{staticClass:"main-content",domProps:{"innerHTML":_vm._s(_vm.project.content)}},[_vm._v("\n                                "+_vm._s(_vm.project.content)+"\n                            ")])],1),_vm._v(" "),_c('div',{staticClass:"col-5"},[(_vm.project.funding)?_c('div',{staticClass:"card invert"},[_c('div',{staticClass:"card-body"},[_c('h2',{staticClass:"title"},[_vm._v("Crowndfunding campaign")]),_vm._v(" "),_c('div',{staticClass:"crowndfunding-campaign"},[_c('div',{staticClass:"crowndfunding-campaign__progress"},_vm._l((_vm.project.funding.stages),function(stage,index){return _c('div',{key:index,staticClass:"crowndfunding-campaign__progress-stage",class:stage.status},[(stage.status === 'done')?_c('i',{staticClass:"fas fa-check"}):_vm._e(),_vm._v(" "),(stage.status === 'in_progress')?_c('i',{staticClass:"fas fa-clock"}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"stage_line"}),_vm._v(" "),_c('span',{staticClass:"name"},[_vm._v(_vm._s(stage.text))])])})),_vm._v(" "),_c('div',{staticClass:"crowndfunding-campaign__info"},[_c('div',{staticClass:"funded"},[_c('div',{staticClass:"text"},[_vm._v("114% Funded")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.funded_amount)+" USD\n                                            ")]),_vm._v(" "),_c('div',{staticClass:"goal"},[_c('div',{staticClass:"text"},[_vm._v("Goal")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.goal_amount)+" USD\n                                            ")]),_vm._v(" "),_c('div',{staticClass:"spent"},[_c('div',{staticClass:"progress progress-bar-vertical"},[_c('div',{staticClass:"progress-bar bg-success",style:({ height: _vm.project.funding.spent_amount['percent'] + '%' }),attrs:{"role":"progressbar","aria-valuenow":_vm.project.funding.spent_amount['percent'],"aria-valuemin":"0","aria-valuemax":"100"}},[_c('span',{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.project.funding.spent_amount['percent'])+"% Complete")])])]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("Spent")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.spent_amount['amount'])+" USD\n                                            ")]),_vm._v(" "),_c('div',{staticClass:"locked"},[_c('div',{staticClass:"progress progress-bar-vertical"},[_c('div',{staticClass:"progress-bar bg-success",style:({ height: _vm.project.funding.locked_amount['percent'] + '%' }),attrs:{"role":"progressbar","aria-valuenow":_vm.project.funding.locked_amount['percent'],"aria-valuemin":"0","aria-valuemax":"100"}},[_c('span',{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.project.funding.locked_amount['percent'])+"% Complete")])])]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("Locked")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.locked_amount['amount'])+" USD\n                                            ")]),_vm._v(" "),_c('div',{staticClass:"overflow"},[_c('div',{staticClass:"progress progress-bar-vertical"},[_c('div',{staticClass:"progress-bar bg-success",style:({ height: _vm.project.funding.overflow_amount['percent'] + '%' }),attrs:{"role":"progressbar","aria-valuenow":_vm.project.funding.overflow_amount['percent'],"aria-valuemin":"0","aria-valuemax":"100"}},[_c('span',{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.project.funding.overflow_amount['percent'])+"% Complete")])])]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("Overflow")]),_vm._v("\n                                                "+_vm._s(_vm.project.funding.overflow_amount['amount'])+" USD\n                                            ")])]),_vm._v(" "),_c('div',{staticClass:"crowndfunding-campaign__action"},[_c('a',{staticClass:"follow_link",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n                                                Follow\n                                            ")]),_vm._v(" "),_c('a',{staticClass:"share_link",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-share"}),_vm._v("\n                                                Share\n                                            ")]),_vm._v(" "),_c('a',{staticClass:"support_link",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-life-ring"}),_vm._v("\n                                                Support\n                                            ")])])])])]):_vm._e(),_vm._v(" "),(_vm.project.milestones)?_c('div',{staticClass:"card invert milestones"},[_c('div',{staticClass:"card-body"},[_c('h2',{staticClass:"title"},[_vm._v("Milestones")]),_vm._v(" "),_c('ul',{staticClass:"milestones__list"},_vm._l((_vm.project.milestones),function(item,index){return _c('li',{key:index,class:{ done: item.status }},[(item.step_number)?_c('div',{staticClass:"step_number"},[_vm._v("\n                                                "+_vm._s(item.step_number)+"\n                                            ")]):_c('div',{staticClass:"status_done"},[_c('i',{staticClass:"fas fa-check"})]),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n                                                "+_vm._s(item.text)+"\n                                            ")])])}))])]):_vm._e(),_vm._v(" "),_c('c-rating-block',{attrs:{"items":_vm.project.rating,"parent_url":("/#/project/" + (_vm.project.id))}}),_vm._v(" "),_c('c-frequently-traded-assets',{attrs:{"items":_vm.project.frequently_traded_assets,"assets_url":("/#/project/" + (_vm.project.id))}}),_vm._v(" "),_c('c-community-spotlight',{attrs:{"discussions":_vm.project.community.discussions,"community_url":("/#/project/" + (_vm.project.id))}})],1)]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.project.name),expression:"project.name",modifiers:{"lazy":true}}],attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.project.name)},on:{"change":function($event){_vm.$set(_vm.project, "name", $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":function($event){_vm.save()}}},[_vm._v("Save")])],1):_vm._e()])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue":
/*!***************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_312013c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=312013c1&scoped=true */ "./src/ui/screens/project-overview/index.vue?vue&type=template&id=312013c1&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true */ "./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_312013c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_312013c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "312013c1",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=style&index=0&id=312013c1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_312013c1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/project-overview/index.vue?vue&type=template&id=312013c1&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/ui/screens/project-overview/index.vue?vue&type=template&id=312013c1&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_312013c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=312013c1&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/project-overview/index.vue?vue&type=template&id=312013c1&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_312013c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_312013c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=41.bcc4cf9a2255be3ce989.js.map