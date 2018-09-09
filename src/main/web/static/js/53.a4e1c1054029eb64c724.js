(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js ***!
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
//
//
//
//
//
//
//
//
//
//

var updateProduct = function updateProduct() {
    var product = null;

    if (this.id === 'new') {
        product = this.$store.state.marketplace.default_product;
    }

    if (this.$store.state.marketplace.products && this.$store.state.marketplace.products[this.id]) {
        product = this.$store.state.marketplace.products[this.id];
    }

    if (product && product.images && product.images.header) {
        window.document.getElementById('header-bg').style['background-image'] = 'url(' + product.images.header + ')';
    }

    if (!product.community) product.community = {
        discussions: []
    };

    return product;
};

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    components: {
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        },
        'c-game-plan': function cGamePlan() {
            return __webpack_require__.e(/*! import() */ 83).then(__webpack_require__.bind(null, /*! @/ui/components/game-plans/plan */ "./src/ui/components/game-plans/plan.vue"));
        },
        'c-screen-gallery': function cScreenGallery() {
            return __webpack_require__.e(/*! import() */ 85).then(__webpack_require__.bind(null, /*! @/ui/components/screen-gallery/gallery */ "./src/ui/components/screen-gallery/gallery.vue"));
        },
        'c-sale-box': function cSaleBox() {
            return __webpack_require__.e(/*! import() */ 104).then(__webpack_require__.bind(null, /*! @/ui/components/sale-box/box */ "./src/ui/components/sale-box/box.vue"));
        },
        'c-tags-list': function cTagsList() {
            return __webpack_require__.e(/*! import() */ 79).then(__webpack_require__.bind(null, /*! @/ui/components/tags */ "./src/ui/components/tags/index.vue"));
        },
        'c-rating-block': function cRatingBlock() {
            return __webpack_require__.e(/*! import() */ 86).then(__webpack_require__.bind(null, /*! @/ui/components/rating-block */ "./src/ui/components/rating-block/index.vue"));
        },
        'c-frequently-traded-assets': function cFrequentlyTradedAssets() {
            return __webpack_require__.e(/*! import() */ 87).then(__webpack_require__.bind(null, /*! @/ui/components/frequently-traded-assets */ "./src/ui/components/frequently-traded-assets/index.vue"));
        },
        'c-community-spotlight': function cCommunitySpotlight() {
            return __webpack_require__.e(/*! import() */ 88).then(__webpack_require__.bind(null, /*! @/ui/components/community-spotlight */ "./src/ui/components/community-spotlight/index.vue"));
        },
        'c-heading-bar': function cHeadingBar() {
            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue"));
        },
        'c-review': function cReview() {
            return __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.bind(null, /*! @/ui/components/review */ "./src/ui/components/review/index.vue"));
        }
    },
    data: function data() {
        var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.';
        var title = 'Good game with very nice graphics made by very smart people.';
        var setup = { system: 'Windows 10', gpu: 'GTX 1080', cpu: 'Core i7 7980x', ram: '8 GB', storage: 'HyperX 1TB SSD' };
        var author = { name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png' };
        return {
            activeElement: {
                name: false,
                background_image: false,
                tags: false
            },
            author_tag_options: ['rpg', 'adventure', 'racing', 'action'],
            reviews: {
                helpful: [{ author: author, title: title, text: text, date: '2018-08-19T04:09:00.000Z', rating: 4.5, minutes_played: 1938, setup: setup }, { author: author, title: title, text: text, date: '2018-08-16T04:09:00.000Z', rating: 1.5, minutes_played: 414, setup: setup }, { author: author, title: title, text: text, date: '2018-08-18T04:09:00.000Z', rating: 3.5, minutes_played: 71, setup: setup }],
                recent: [{ author: author, title: title, text: text, date: '2018-08-20T04:09:00.000Z', rating: 1.5, minutes_played: 13, setup: setup }, { author: author, title: title, text: text, date: '2018-03-21T04:09:00.000Z', rating: 5, minutes_played: 241, setup: setup }, { author: author, title: title, text: text, date: '2018-08-11T04:09:00.000Z', rating: 3, minutes_played: 2941, setup: setup }]
            }
        };
    },

    methods: {
        deactivateElement: function deactivateElement(key) {
            this.activeElement[key] = false;
        },
        activateElement: function activateElement(key) {
            var _this = this;

            for (var _key in this.activeElement) {
                this.activeElement[_key] = false;
            }

            this.activeElement[key] = true;

            setTimeout(function () {
                if (_this.$refs[key]) _this.$refs[key].focus();
            }, 10);
        },
        save: function save() {
            if (this.id === 'new') {
                this.$store.commit('marketplace/createProduct', this.product);
            } else {
                this.$store.dispatch('marketplace/updateProduct', this.product);
            }
        }
    },
    computed: {
        product: updateProduct,
        editing: function editing() {
            if (!this.$store.state.marketplace.editor_mode) {
                for (var key in this.activeElement) {
                    this.activeElement[key] = false;
                }
            }

            return this.$store.state.marketplace.editor_mode === 'editing';
        }
    },
    mounted: updateProduct,
    created: updateProduct,
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    },
    updated: function updated() {
        var _this2 = this;

        $('#tag-editor').select2().on('select2:select', function (e) {
            var data = e.params.data;

            if (!_this2.product.author_tags.includes(data.text)) {
                _this2.product.author_tags.push(data.text);
            }

            Vue.set(_this2.product, 'author_tags', _this2.product.author_tags);
        }).on('select2:unselect', function (e) {
            var data = e.params.data;

            _this2.product.author_tags = _this2.product.author_tags.filter(function (e) {
                return e !== data.text;
            });

            Vue.set(_this2.product, 'author_tags', _this2.product.author_tags);
        });

        $('#summernote').summernote({
            placeholder: 'Type in your text',
            tabsize: 2,
            height: 300,
            callbacks: {
                onBlur: function onBlur() {
                    Vue.set(_this2.product, 'content', $('#summernote').summernote('code'));
                }
            }
        });
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=template&id=75dfde9c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=template&id=75dfde9c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"product-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[(!_vm.product)?_c('div',{staticClass:"col-12"},[_vm._v("\n                    Product not found\n                ")]):_vm._e(),_vm._v(" "),(_vm.product)?_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-8"},[_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['name'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('name')}}},[_vm._v("Change Product Name "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['name'])?_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.name),expression:"product.name"}],ref:"name",staticClass:"form-control",attrs:{"name":"name","type":"text","placeholder":"Product name..."},domProps:{"value":(_vm.product.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product, "name", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('name')}}})])])]):_vm._e()]):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"title margin-top-10 margin-bottom-15"},[_vm._v(_vm._s(_vm.product.name))])]),_vm._v(" "),_c('div',{staticClass:"editor-container"},[(_vm.editing)?_c('div',{},[_c('div',{staticClass:"form-group"},[_c('select',{staticClass:"form-control",attrs:{"id":"tag-editor","multiple":"multiple"}},_vm._l((_vm.author_tag_options),function(tag,index){return _c('option',{key:index,domProps:{"selected":_vm.product.author_tags.includes(tag)}},[_vm._v(_vm._s(tag))])}))])]):_vm._e(),_vm._v(" "),(!_vm.editing)?_c('c-tags-list',{attrs:{"tags":_vm.product.author_tags}}):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"col-4"},[(_vm.editing)?_c('div',{staticClass:"editor"},[(!_vm.activeElement['background_image'])?_c('button',{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{"click":function($event){_vm.activateElement('background_image')}}},[_vm._v("Change Background Image "),_c('span',{staticClass:"fa fa-edit"})]):_vm._e(),_vm._v(" "),(_vm.activeElement['background_image'])?_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"form-control-element form-control-element--right"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.product.images.header),expression:"product.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{"name":"background_image","type":"text","placeholder":"Background image URL..."},domProps:{"value":(_vm.product.images.header)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.product.images, "header", $event.target.value)}}}),_vm._v(" "),_c('div',{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[_c('span',{staticClass:"fa fa-check",on:{"click":function($event){_vm.deactivateElement('background_image')}}})])])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('label',[_vm._v("RECOMMENDED SIZE: 1120 x 524px")])]):_vm._e()])]),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link active",attrs:{"href":("/#/product/" + (_vm.product.id))}},[_vm._v("Overview")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/product/" + (_vm.product.id) + "/community")}},[_vm._v("Community")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/product/" + (_vm.product.id) + "/projects")}},[_vm._v("Projects")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":("/#/product/" + (_vm.product.id) + "/assets")}},[_vm._v("Assets")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-7"},[_c('c-screen-gallery',{attrs:{"main":_vm.product.images.medium_tile,"items":_vm.product.images.preview}}),_vm._v(" "),(_vm.product.sale_box)?_c('c-sale-box',{attrs:{"sale_box":_vm.product.sale_box}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"overflow-hidden"},_vm._l((_vm.product.plans),function(plan,index){return _c('c-game-plan',{key:index,attrs:{"plan":plan}})})),_vm._v(" "),(!_vm.editing)?_c('div',{staticClass:"main-content",domProps:{"innerHTML":_vm._s(_vm.product.content)}},[_vm._v("\n                                "+_vm._s(_vm.product.content)+"\n                            ")]):_vm._e(),_vm._v(" "),(_vm.editing)?_c('div',{staticClass:"content-editor"},[_c('div',{attrs:{"id":"summernote"},domProps:{"innerHTML":_vm._s(_vm.product.content)}},[_vm._v(_vm._s(_vm.product.content))])]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('c-rating-block',{attrs:{"items":_vm.product.rating,"parent_url":("/#/product/" + (_vm.product.id))}}),_vm._v(" "),_c('c-frequently-traded-assets',{attrs:{"items":_vm.product.frequently_traded_assets,"assets_url":("/#/product/" + (_vm.product.id) + "/assets")}}),_vm._v(" "),_c('c-community-spotlight',{attrs:{"discussions":_vm.product.community.discussions,"community_url":("/#/product/" + (_vm.product.id) + "/community")}}),_vm._v(" "),(_vm.product.system_requirements)?_c('div',{staticClass:"card invert system-requirements"},[_c('div',{staticClass:"card-body"},[_c('h2',{staticClass:"title"},[_vm._v("System Requirements "),_c('i',{staticClass:"fas fa-laptop title-icon"})]),_vm._v(" "),_vm._l((_vm.product.system_requirements),function(item,index){return _c('div',{key:index,staticClass:"system-requirements__item"},[_c('h6',[_vm._v(_vm._s(item.system)+" "),_c('i',{class:item.icon})]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.requirements))])])})],2)]):_vm._e(),_vm._v(" "),(_vm.product.language_support)?_c('div',{staticClass:"card transparent languages-blk"},[_c('div',{staticClass:"card-body"},[_c('h2',{staticClass:"title"},[_vm._v("Languages "),_c('i',{staticClass:"fas fa-laptop title-icon"})]),_vm._v(" "),_c('ul',{staticClass:"languages-list"},_vm._l((_vm.product.language_support),function(item,index){return _c('li',{key:index,staticClass:"languages-list__item"},[_c('span',{staticClass:"languages-list__name"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticClass:"languages-list__icon"},[(item.closed_captioning)?_c('i',{staticClass:"fas fa-closed-captioning"}):_vm._e(),_vm._v(" "),(item.audio_description)?_c('i',{staticClass:"fas fa-audio-description"}):_vm._e()])])}))])]):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row"},[_c('c-heading-bar',{attrs:{"name":"Reviews","showArrows":true,"showBackground":false}})],1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6 col-12"},[_c('h3',{staticClass:"margin-vertical-20"},[_vm._v("Most helpful")]),_vm._v(" "),_vm._l((_vm.reviews.helpful),function(review,index){return _c('c-review',{key:index,attrs:{"review":review}})})],2),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-12"},[_c('h3',{staticClass:"margin-vertical-20"},[_vm._v("Most recent")]),_vm._v(" "),_vm._l((_vm.reviews.recent),function(review,index){return _c('c-review',{key:index,attrs:{"review":review}})})],2)])])]):_vm._e()])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue":
/*!***************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_75dfde9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=75dfde9c&scoped=true */ "./src/ui/screens/product-overview/index.vue?vue&type=template&id=75dfde9c&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss */ "./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true */ "./src/ui/screens/product-overview/index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_75dfde9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_75dfde9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75dfde9c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=style&index=1&id=75dfde9c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_75dfde9c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/product-overview/index.vue?vue&type=template&id=75dfde9c&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/ui/screens/product-overview/index.vue?vue&type=template&id=75dfde9c&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75dfde9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=75dfde9c&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/product-overview/index.vue?vue&type=template&id=75dfde9c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75dfde9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75dfde9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=53.a4e1c1054029eb64c724.js.map