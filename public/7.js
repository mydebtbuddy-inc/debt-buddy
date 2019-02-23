webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vueChartjs = __webpack_require__("./node_modules/vue-chartjs/es/index.js");

var _vueChartjs2 = _interopRequireDefault(_vueChartjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_vue2.default.component('dashboard2-chart1', {
  extends: _vueChartjs2.default.Bar,
  mounted: function mounted() {
    this.renderChart({
      datasets: [{
        data: [1770, 1660, 1550, 1440, 1330, 1220, 1110, 1000, 890, 780, 670, 560, 450, 340, 230, 120, 10, 0],
        borderWidth: 0,
        backgroundColor: 'rgba(87, 181, 255, 1)'
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    });
  }
});

_vue2.default.component('dashboard2-chart2', {
  extends: _vueChartjs2.default.Line,
  mounted: function mounted() {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61, 38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18],
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#009688',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1,
        lineTension: 0
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    });
  }
});

_vue2.default.component('dashboard2-chart3', {
  extends: _vueChartjs2.default.Doughnut,
  mounted: function mounted() {
    this.renderChart({
      datasets: [{
        data: [54, 46],
        backgroundColor: ['#673AB7', '#f9f9f9'],
        hoverBackgroundColor: ['#673AB7', '#f9f9f9'],
        borderWidth: 0
      }]
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 94,
      responsive: false,
      maintainAspectRatio: false
    });
  }
});

exports.default = {
  name: 'dashboard',
  metaInfo: {
    title: 'Dashboard'
  },
  computed: {
    userName: function userName() {
      return this.$store.getters.user.name;
    },
    date: function date() {
      var date = new Date();

      var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      return day[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('fetchUserData');
    this.$store.dispatch('fetchUserDebts');

    var charts = this.$children.filter(function (component) {
      return (/-chart\d+$/.test(component.$options._componentTag)
      );
    });

    var resizeCharts = function resizeCharts() {
      return charts.forEach(function (chart) {
        return chart._data._chart.resize();
      });
    };

    // Initial resize
    resizeCharts();

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-2', resizeCharts);
  },
  beforeDestroy: function beforeDestroy() {
    this.layoutHelpers.off('resize.dashboard-2');
  }
};

/***/ }),

/***/ "./node_modules/vue-chartjs/es/index.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/adriencaristan/Documents/Work/DebtBuddy/Sites/debtbuddy.com/v1/htdocs/node_modules/vue-chartjs/es/index.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a8b7bcec\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h4",
        { staticClass: "media align-items-center font-weight-bold py-3 mb-4" },
        [
          _c("img", {
            staticClass: "ui-w-50 rounded-circle",
            attrs: { src: _vm.baseUrl + "img/avatars/adrien.png", alt: "" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "media-body ml-3" }, [
            _vm._v(
              "\n      Welcome back, " + _vm._s(_vm.userName) + "!\n      "
            ),
            _c("div", { staticClass: "text-muted text-tiny mt-1" }, [
              _c("small", { staticClass: "font-weight-normal" }, [
                _vm._v("Today is " + _vm._s(_vm.date))
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "container-m--x mt-0 mb-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "d-flex col-xl-6 align-items-stretch" },
          [
            _c(
              "b-card",
              { staticClass: "d-flex w-100 mb-4", attrs: { "no-body": "" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "row no-gutters row-bordered row-border-light h-100"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "card-body media align-items-center text-dark",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "lnr lnr-chart-bars display-4 d-block text-primary"
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "media-body d-block ml-3" },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass: "text-big font-weight-bolder"
                                  },
                                  [_vm._v("$1,000.00")]
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v("Outstanding debt")
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "card-body media align-items-center text-dark",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "lnr lnr-hourglass display-4 d-block text-primary"
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "media-body d-block ml-3" },
                              [
                                _c("span", { staticClass: "text-big" }, [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v("10")]
                                  ),
                                  _vm._v(" Months")
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v("Remain to reach your goal")
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "card-body media align-items-center text-dark",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "lnr lnr-checkmark-circle display-4 d-block text-primary"
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "media-body d-block ml-3" },
                              [
                                _c("span", { staticClass: "text-big" }, [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v("1")]
                                  ),
                                  _vm._v(" Payment")
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v("Due this month")
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "card-body media align-items-center text-dark",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "lnr lnr-license display-4 d-block text-primary"
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "media-body d-block ml-3" },
                              [
                                _c("span", { staticClass: "text-big" }, [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bolder" },
                                    [_vm._v("0")]
                                  ),
                                  _vm._v(" Payments")
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-muted" }, [
                                  _vm._v("Missed overall")
                                ])
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex col-xl-6 align-items-stretch" },
          [
            _c(
              "b-card",
              { staticClass: "w-100 mb-4", attrs: { "no-body": "" } },
              [
                _c(
                  "b-card-body",
                  [
                    _c(
                      "b-btn",
                      {
                        staticClass: "icon-btn float-right",
                        attrs: { variant: "outline-primary", size: "sm" }
                      },
                      [_c("i", { staticClass: "ion ion-md-sync" })]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-muted small" }, [
                      _vm._v("Progress")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-big" }, [_vm._v("Monthly")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "px-2 mt-4" },
                  [
                    _c("dashboard2-chart1", {
                      staticClass: "w-100",
                      attrs: { height: 120 }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "container-m--x mt-0 mb-4" }),
      _vm._v(" "),
      _c("h6", { staticClass: "font-weight-semibold mb-4" }, [
        _vm._v("Current Debts")
      ]),
      _vm._v(" "),
      _c("b-card", { staticClass: "pb-4 mb-2", attrs: { "no-body": "" } }, [
        _c("div", { staticClass: "row no-gutters align-items-center" }, [
          _c("div", { staticClass: "col-12 col-md-5 px-4 pt-4" }, [
            _c(
              "a",
              {
                staticClass: "text-dark font-weight-semibold",
                attrs: { href: "javascript:void(0)" }
              },
              [_vm._v("Test Debt")]
            ),
            _c("br"),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [
              _vm._v("Test debt entered for testing purposes")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-4 col-md-2 text-muted small px-4 pt-4" },
            [
              _c("strong", [_vm._v("Status")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" In Progress, Current\n      ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-4 col-md-2 text-muted small px-4 pt-4" },
            [_vm._v("\n        15 July 2018\n      ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-4 col-md-3 px-4 pt-4" },
            [
              _c("div", { staticClass: "text-right text-muted small" }, [
                _vm._v("41%")
              ]),
              _vm._v(" "),
              _c("b-progress", { attrs: { value: 41, height: "6px" } })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a8b7bcec", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/src/components/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/Dashboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a8b7bcec\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/Dashboard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/src/components/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8b7bcec", Component.options)
  } else {
    hotAPI.reload("data-v-a8b7bcec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});