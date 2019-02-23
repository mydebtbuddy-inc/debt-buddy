webpackJsonp([10],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/auth/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'register',
  metaInfo: {
    title: 'Registration - DebtBuddy'
  },
  data: function data() {
    return {
      registrant: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      this.$store.dispatch('register', {
        name: this.registrant.name,
        surname: this.registrant.surname,
        email: this.registrant.email,
        password: this.registrant.password
      }).then(function (response) {
        _this.$router.push({ name: 'login' });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00af4060\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.authentication-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n}\n.authentication-wrapper .authentication-inner {\n    width: 100%;\n}\n.authentication-wrapper.authentication-1, .authentication-wrapper.authentication-2, .authentication-wrapper.authentication-4 {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.authentication-wrapper.authentication-1 .authentication-inner {\n    max-width: 300px;\n}\n.authentication-wrapper.authentication-2 .authentication-inner {\n    max-width: 380px;\n}\n.authentication-wrapper.authentication-3 {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-box-pack: stretch;\n        -ms-flex-pack: stretch;\n            justify-content: stretch;\n}\n.authentication-wrapper.authentication-3 .authentication-inner {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: stretch;\n          -ms-flex-pack: stretch;\n              justify-content: stretch;\n}\n.authentication-wrapper.authentication-4 .authentication-inner {\n    max-width: 800px;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n.authentication-wrapper:after {\n    content: '';\n    display: block;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    min-height: inherit;\n    width: 0;\n    font-size: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00af4060\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/auth/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "authentication-wrapper authentication-3" }, [
    _c("div", { staticClass: "authentication-inner" }, [
      _c(
        "div",
        {
          staticClass:
            "d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5",
          style: "background-image: url('" + _vm.baseUrl + "img/bg/17.jpg');"
        },
        [
          _c("div", { staticClass: "ui-bg-overlay bg-dark opacity-50" }),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex col-lg-4 align-items-center bg-white p-5" },
        [
          _c(
            "div",
            {
              staticClass:
                "d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto"
            },
            [
              _c("div", { staticClass: "w-100" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-center align-items-center"
                  },
                  [
                    _c("div", { staticClass: "ui-w-60" }, [
                      _c(
                        "div",
                        {
                          staticClass: "w-100 position-relative",
                          staticStyle: { "padding-bottom": "54%" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "w-100 h-100 position-absolute",
                              attrs: {
                                viewBox: "0 0 148 80",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink"
                              }
                            },
                            [
                              _c(
                                "defs",
                                [
                                  _c(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "a",
                                        x1: "46.49",
                                        x2: "62.46",
                                        y1: "53.39",
                                        y2: "48.2",
                                        gradientUnits: "userSpaceOnUse"
                                      }
                                    },
                                    [
                                      _c("stop", {
                                        attrs: {
                                          "stop-opacity": ".25",
                                          offset: "0"
                                        }
                                      }),
                                      _c("stop", {
                                        attrs: {
                                          "stop-opacity": ".1",
                                          offset: ".3"
                                        }
                                      }),
                                      _c("stop", {
                                        attrs: {
                                          "stop-opacity": "0",
                                          offset: ".9"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("linearGradient", {
                                    attrs: {
                                      id: "e",
                                      x1: "76.9",
                                      x2: "92.64",
                                      y1: "26.38",
                                      y2: "31.49",
                                      "xlink:href": "#a"
                                    }
                                  }),
                                  _c("linearGradient", {
                                    attrs: {
                                      id: "d",
                                      x1: "107.12",
                                      x2: "122.74",
                                      y1: "53.41",
                                      y2: "48.33",
                                      "xlink:href": "#a"
                                    }
                                  })
                                ],
                                1
                              ),
                              _c("path", {
                                staticClass: "fill-primary",
                                attrs: {
                                  transform: "translate(-.1)",
                                  d:
                                    "M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"
                                }
                              }),
                              _c("path", {
                                attrs: {
                                  transform: "translate(-.1)",
                                  d:
                                    "M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z",
                                  fill: "url(#a)"
                                }
                              }),
                              _c("path", {
                                attrs: {
                                  transform: "translate(-.1)",
                                  d:
                                    "M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z",
                                  fill: "url(#e)"
                                }
                              }),
                              _c("path", {
                                attrs: {
                                  transform: "translate(-.1)",
                                  d:
                                    "M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z",
                                  fill: "url(#d)"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-center text-lighter font-weight-normal mt-5 mb-0"
                  },
                  [_vm._v("Register an Account")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "my-5",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.register($event)
                      }
                    }
                  },
                  [
                    _c(
                      "b-form-group",
                      { attrs: { label: "First Name" } },
                      [
                        _c("b-input", {
                          model: {
                            value: _vm.registrant.name,
                            callback: function($$v) {
                              _vm.$set(_vm.registrant, "name", $$v)
                            },
                            expression: "registrant.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      { attrs: { label: "Last Name" } },
                      [
                        _c("b-input", {
                          model: {
                            value: _vm.registrant.surname,
                            callback: function($$v) {
                              _vm.$set(_vm.registrant, "surname", $$v)
                            },
                            expression: "registrant.surname"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      { attrs: { label: "Email" } },
                      [
                        _c("b-input", {
                          model: {
                            value: _vm.registrant.email,
                            callback: function($$v) {
                              _vm.$set(_vm.registrant, "email", $$v)
                            },
                            expression: "registrant.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      { attrs: { label: "Password" } },
                      [
                        _c("b-input", {
                          attrs: { type: "password" },
                          model: {
                            value: _vm.registrant.password,
                            callback: function($$v) {
                              _vm.$set(_vm.registrant, "password", $$v)
                            },
                            expression: "registrant.password"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        staticClass: "mt-4",
                        attrs: {
                          variant: "primary",
                          block: true,
                          type: "submit"
                        }
                      },
                      [_vm._v("Register")]
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center text-muted" },
                  [
                    _vm._v("\n            Already have an account? "),
                    _c("router-link", { attrs: { to: { name: "login" } } }, [
                      _vm._v("Login")
                    ])
                  ],
                  1
                )
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-100 text-white px-5" }, [
      _c("h1", { staticClass: "display-2 font-weight-bolder mb-4" }, [
        _vm._v("JOIN OUR"),
        _c("br"),
        _vm._v("COMMUNITY")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-large font-weight-light" }, [
        _vm._v(
          "\n          Start saving today with MyDebtBuddy and be on your way to a debt-free life. After registering you will be able to choose whether you want to have a free tier membership or paid tier.\n        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-light small mt-4" }, [
      _vm._v(
        '\n              By clicking "Register", you agree to our\n              '
      ),
      _c("a", { attrs: { href: "javascript:void(0)" } }, [
        _vm._v("terms of service and privacy policy")
      ]),
      _vm._v(
        ". We’ll occasionally send you account-related emails.\n            "
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00af4060", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00af4060\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00af4060\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("223479a8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00af4060\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./authentication.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00af4060\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./authentication.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/src/components/auth/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00af4060\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/authentication.scss")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/auth/Register.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00af4060\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/auth/Register.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/src/components/auth/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00af4060", Component.options)
  } else {
    hotAPI.reload("data-v-00af4060", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});