webpackJsonp([9],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/DebtDetail.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuedraggable = __webpack_require__("./node_modules/vuedraggable/dist/vuedraggable.js");

var _vuedraggable2 = _interopRequireDefault(_vuedraggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'pages-projects-item',
  metaInfo: {
    title: 'Project item - Pages'
  },
  components: {
    draggable: _vuedraggable2.default
  },
  data: function data() {
    return {
      projectPath: [{ text: 'Projects' }, { text: 'Website development', active: true }],

      statuses: {
        1: { title: 'Active', color: 'success' },
        2: { title: 'Pending', color: 'warning' }
      },

      // Tags
      taskTags: {
        clients: { title: 'Clients', color: 'success' },
        important: { title: 'Important', color: 'danger' },
        social: { title: 'Social', color: 'info' },
        other: { title: 'Other', color: 'warning' }
      },

      projectData: {
        title: 'Frontend Development',
        status: 1,
        priority: 1,
        tasks: 44,
        completedTasks: 29,

        description: '\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>\n      <p>Proin imperdiet purus et lectus luctus, rutrum fermentum lorem molestie. Nam urna felis, elementum elementum placerat id, fermentum ac urna. Etiam libero sem, porttitor ultrices efficitur condimentum, lobortis sit amet enim. Sed vitae orci nulla.</p>\n      <p>Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\n      <p>Aliquam ornare nisl semper nisl porttitor commodo vel vel libero. Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui. Vestibulum ac lacinia massa. Phasellus eget purus nisi. Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero. Aliquam mattis erat ut diam viverra, quis iaculis sem pulvinar. Vivamus ut mi vitae arcu finibus convallis. Nulla turpis lacus, tempor et sagittis non, egestas nec ante.</p>\n      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra turpis non aliquet ornare. Duis euismod ultricies est sed auctor. Sed luctus accumsan enim ut efficitur.</p>\n      ',

        created: '02/01/2018',
        lastUpdate: '02/18/2018',
        deadline: '03/12/2018',

        hourRate: 35,
        hours: 74,

        tags: ['Development', 'Frontend', 'Backend', 'Design'],

        createdBy: {
          name: 'Mae Gibson'
        },

        client: {
          name: 'Company Ltd.'
        },

        leaders: [{ avatar: '1-small.png', name: 'Mike Greene' }],

        team: [{ avatar: '2-small.png', name: 'Leon Wilson' }, { avatar: '3-small.png', name: 'Allie Rodriguez' }, { avatar: '4-small.png', name: 'Kenneth Frazier' }, { avatar: '5-small.png', name: 'Nellie Maxwell' }],

        attachments: [{ name: 'image_1.jpg', size: '527KB', path: 'img/bg/5.jpg' }, { name: 'image_2.jpg', size: '269KB', path: 'img/bg/6.jpg' }, { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' }, { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }],

        taskSections: [{
          title: 'Frontend',
          tasks: [{ text: 'Update User profile page', tags: ['other'], completed: false }, { text: 'Add images to the product gallery', completed: false }, { text: 'Create invoice template', completed: false }]
        }, {
          title: 'Backend',
          tasks: [{ text: 'New blog layout', tags: ['clients'], completed: false }, { text: 'Create UI design model', completed: false }, { text: 'Help Web devs with HTML integration', completed: false }, { text: 'New icons set for an iOS app', completed: false }, { text: 'Create ad campaign banners set', completed: false }, { text: 'Edit the draft for the icons', completed: false }, { text: 'Fix validation issues and commit', tags: ['important'], completed: false }, { text: 'Support tickets list doesn\'t support commas', completed: false }]
        }],

        discussion: [{
          text: 'Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui.',
          date: '2:33 am',
          user: { avatar: '1-small.png', name: 'Mike Greene' }
        }, {
          text: 'Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero.',
          date: '2:34 am',
          user: { avatar: '5-small.png', name: 'Nelle Maxwell' }
        }, {
          text: 'Cum ea graeci tractatos.',
          date: '2:38 am',
          user: { avatar: '1-small.png', name: 'Mike Greene' }
        }, {
          text: 'Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis.',
          date: '2:38 am',
          user: { avatar: '2-small.png', name: 'Leon Wilson' }
        }, {
          text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          date: '2:38 am',
          user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
        }, {
          text: 'Aliquam ornare nisl semper nisl porttitor commodo vel vel libero.',
          date: '2:38 am',
          user: { avatar: '5-small.png', name: 'Kenneth Frazier' }
        }],

        activities: [{
          type: 'new_task',
          date: '2 hours',
          user: { avatar: '1-small.png', name: 'Mike Greene' },
          data: { taskTitle: 'Create invoice template' }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '2-small.png', name: 'Leon Wilson' },
          data: { commitId: 950458 }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '3-small.png', name: 'Allie Rodriguez' },
          data: { commitId: 950457 }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '5-small.png', name: 'Nellie Maxwell' },
          data: { commitId: 950456 }
        }, {
          type: 'completed_task',
          date: '2 hours',
          user: { avatar: '4-small.png', name: 'Kenneth Frazier' },
          data: { taskTitle: 'Google AdWords campain graphics' }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '4-small.png', name: 'Kenneth Frazier' },
          data: { commitId: 950455 }
        }, {
          type: 'new_task',
          date: '2 hours',
          user: { avatar: '5-small.png', name: 'Nellie Maxwell' },
          data: { taskTitle: 'Edit the draft for the icons' }
        }, {
          type: 'new_participant',
          date: '2 hours',
          user: { avatar: '1-small.png', name: 'Mike Greene' },
          data: { userName: 'Nellie Maxwell' }
        }]
      },

      draggableOptions: {
        animation: 150,
        handle: '.project-task-handle',
        group: {
          name: 'project-task-list',
          put: true,
          pull: true
        }
      }
    };
  },
  methods: {
    completedPercent: function completedPercent(tasks, completed) {
      return Math.round(completed / tasks * 100);
    },
    isImage: function isImage(file) {
      return (/\.jpg$|\.png$|\.gif$/i.test(file.name)
      );
    },
    isFile: function isFile(file) {
      return !/\.jpg$|\.png$|\.gif$/i.test(file.name);
    },
    fileIcon: function fileIcon(file) {
      var icon = 'far fa-file';

      if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = 'far fa-file-archive';
      if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = 'far fa-file-audio';
      if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = 'far fa-file-video';
      if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = 'fab fa-js';
      if (/\.doc$|\.docx$/i.test(file.name)) icon = 'far fa-file-word';
      if (/\.htm$|\.html$/i.test(file.name)) icon = 'fab fa-html5';
      if (/\.pdf$/i.test(file.name)) icon = 'far fa-file-pdf';
      if (/\.txt$/i.test(file.name)) icon = 'far fa-file-alt';
      if (/\.css$/i.test(file.name)) icon = 'fab fa-css3';

      return icon;
    },
    priorityDropdownVariant: function priorityDropdownVariant(priority) {
      var variant = void 0;

      if (priority === 1) variant = 'danger';
      if (priority === 2) variant = 'success';
      if (priority === 3) variant = 'warning';

      return variant + ' btn-xs md-btn-flat';
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6462d684\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.project-attachment {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.project-attachment > .media-body {\n    min-width: 0;\n}\n.project-attachment-file,\n.project-attachment-img {\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 4rem;\n  height: 4rem;\n}\n.project-attachment-file {\n  display: inline-block;\n  text-align: center;\n  line-height: 4rem;\n}\n.project-attachment-img {\n  background-color: transparent;\n  background-position: center center;\n  background-size: cover;\n}\n.project-attachment-filename {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.project-task-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.625rem 0;\n}\n.project-task-item .ui-todo-item {\n    margin: 0;\n}\n.default-style .project-task-item {\n  background: #fff;\n}\n.default-style .project-task-item + .project-task-item {\n    border-top: 1px solid rgba(24, 28, 33, 0.06);\n}\n.material-style .project-task-item {\n  background: #fff;\n}\n.material-style .project-task-item + .project-task-item {\n    border-top: 1px solid rgba(24, 28, 33, 0.06);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6462d684\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/DebtDetail.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "h4",
      { staticClass: "py-3 mb-4" },
      [
        _c("b-breadcrumb", {
          staticClass: "font-weight-bold m-0",
          attrs: { items: _vm.projectPath }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "border-right-0 border-left-0 ui-bordered container-m--x mb-4"
      },
      [
        _c(
          "div",
          { staticClass: "row no-gutters row-bordered row-border-light" },
          [
            _c("div", { staticClass: "col-md-9" }, [
              _c(
                "div",
                { staticClass: "media-body container-p-x py-4" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center mb-1"
                    },
                    [
                      _c("div", [
                        _c(
                          "strong",
                          { staticClass: "text-primary text-large" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.completedPercent(
                                  _vm.projectData.tasks,
                                  _vm.projectData.completedTasks
                                )
                              ) + "%"
                            )
                          ]
                        ),
                        _vm._v(" completed")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-muted small" }, [
                        _vm._v(
                          _vm._s(
                            _vm.projectData.tasks -
                              _vm.projectData.completedTasks
                          ) +
                            " opened tasks, " +
                            _vm._s(_vm.projectData.completedTasks) +
                            " tasks completed"
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    attrs: {
                      value: _vm.completedPercent(
                        _vm.projectData.tasks,
                        _vm.projectData.completedTasks
                      ),
                      height: "4px"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "container-p-x py-4" }, [
                _c("div", { staticClass: "text-muted small" }, [
                  _vm._v("Status")
                ]),
                _vm._v(" "),
                _c(
                  "strong",
                  {
                    staticClass: "text-big",
                    class: "text-" + _vm.statuses[_vm.projectData.status].color
                  },
                  [_vm._v(_vm._s(_vm.statuses[_vm.projectData.status].title))]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col" },
        [
          _c(
            "b-card",
            {
              staticClass: "mb-4",
              attrs: { header: "Description", "header-tag": "h6" }
            },
            [
              _c("div", {
                domProps: { innerHTML: _vm._s(_vm.projectData.description) }
              })
            ]
          ),
          _vm._v(" "),
          _vm.projectData.attachments && _vm.projectData.attachments.length
            ? _c(
                "b-card",
                {
                  staticClass: "mb-4",
                  attrs: {
                    header: "Attached files",
                    "header-tag": "h6",
                    "body-class": "p-3"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row no-gutters" },
                    _vm._l(_vm.projectData.attachments, function(attachment) {
                      return _c(
                        "div",
                        {
                          key: attachment.path,
                          staticClass: "col-md-6 col-lg-12 col-xl-6 p-1"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "project-attachment ui-bordered p-2"
                            },
                            [
                              _vm.isImage(attachment)
                                ? _c("div", {
                                    staticClass: "project-attachment-img",
                                    style: {
                                      "background-image":
                                        "url(" +
                                        _vm.baseUrl +
                                        attachment.path +
                                        ")"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.isFile(attachment)
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "project-attachment-file display-4"
                                    },
                                    [
                                      _c("i", {
                                        class: _vm.fileIcon(attachment)
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "media-body ml-3" }, [
                                _c(
                                  "strong",
                                  {
                                    staticClass: "project-attachment-filename"
                                  },
                                  [_vm._v(_vm._s(attachment.name))]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-muted small" }, [
                                  _vm._v(_vm._s(attachment.size))
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm.isImage(attachment)
                                    ? _c("span", [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "javascript:void(0)"
                                            }
                                          },
                                          [_vm._v("View")]
                                        ),
                                        _vm._v("  ")
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    { attrs: { href: "javascript:void(0)" } },
                                    [_vm._v("Download")]
                                  )
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-tabs",
            { staticClass: "nav-tabs-top mb-4" },
            [
              _c(
                "b-tab",
                { attrs: { title: "Tasks", active: "" } },
                [
                  _vm._l(_vm.projectData.taskSections, function(
                    section,
                    index
                  ) {
                    return _c(
                      "div",
                      { key: section.title },
                      [
                        _c(
                          "b-card-body",
                          [
                            _c("p", { staticClass: "text-muted small" }, [
                              _vm._v(_vm._s(section.title))
                            ]),
                            _vm._v(" "),
                            _c(
                              "draggable",
                              {
                                staticClass:
                                  "project-task-list custom-controls-stacked",
                                attrs: { options: _vm.draggableOptions },
                                model: {
                                  value: section.tasks,
                                  callback: function($$v) {
                                    _vm.$set(section, "tasks", $$v)
                                  },
                                  expression: "section.tasks"
                                }
                              },
                              _vm._l(section.tasks, function(task) {
                                return _c(
                                  "div",
                                  {
                                    key: task.text,
                                    staticClass: "project-task-item"
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "ui-todo-item custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          staticClass: "custom-control-input",
                                          attrs: { type: "checkbox" },
                                          domProps: { checked: task.completed },
                                          on: {
                                            click: function($event) {
                                              task.completed = !task.completed
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "custom-control-label"
                                          },
                                          [_vm._v(_vm._s(task.text))]
                                        ),
                                        _vm._v(" "),
                                        task.tags && task.tags.length
                                          ? _c(
                                              "span",
                                              _vm._l(task.tags, function(tag) {
                                                return _c(
                                                  "span",
                                                  {
                                                    key: tag,
                                                    staticClass:
                                                      "badge font-weight-normal ml-2",
                                                    class:
                                                      "badge-" +
                                                      _vm.taskTags[tag].color
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.taskTags[tag].title
                                                      )
                                                    )
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        task.left
                                          ? _c(
                                              "b-badge",
                                              {
                                                staticClass:
                                                  "ui-todo-badge font-weight-normal ml-2",
                                                attrs: {
                                                  variant: "outline-default"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(task.left) + " left"
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center float-right"
                                      },
                                      [
                                        _c("div", {
                                          staticClass:
                                            "project-task-handle ion ion-ios-move text-lightest small mr-3"
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown",
                                          {
                                            staticClass: "task-list-actions",
                                            attrs: {
                                              variant:
                                                "default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow",
                                              right: !_vm.isRTL
                                            }
                                          },
                                          [
                                            _c(
                                              "template",
                                              { slot: "button-content" },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "ion ion-ios-more"
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-dropdown-item",
                                              {
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                }
                                              },
                                              [_vm._v("Edit")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-dropdown-item",
                                              {
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                }
                                              },
                                              [_vm._v("Remove")]
                                            )
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        index !== _vm.projectData.taskSections.length - 1
                          ? _c("hr", { staticClass: "m-0" })
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "b-card-footer",
                    { staticClass: "py-3" },
                    [
                      _c("b-btn", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "ion ion-md-add" }),
                        _vm._v("  Add task")
                      ]),
                      _vm._v(" \n            "),
                      _c(
                        "b-btn",
                        { attrs: { variant: "default md-btn-flat" } },
                        [
                          _c("i", { staticClass: "ion ion-md-close" }),
                          _vm._v("  Clear")
                        ]
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Discussion" } },
                [
                  _c(
                    "b-card-body",
                    _vm._l(_vm.projectData.discussion, function(message) {
                      return _c(
                        "div",
                        {
                          key: message.date + message.user.name,
                          staticClass: "media mb-3"
                        },
                        [
                          _c("div", [
                            _c("img", {
                              staticClass: "ui-w-40 rounded-circle",
                              attrs: {
                                src:
                                  _vm.baseUrl +
                                  "img/avatars/" +
                                  message.user.avatar,
                                alt: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "text-muted small text-nowrap mt-2"
                              },
                              [_vm._v(_vm._s(message.date))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "media-body bg-lighter rounded py-2 px-3 ml-3"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "font-weight-semibold mb-1" },
                                [_vm._v(_vm._s(message.user.name))]
                              ),
                              _vm._v(
                                "\n                " +
                                  _vm._s(message.text) +
                                  "\n              "
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card-footer",
                    [
                      _c(
                        "b-input-group",
                        [
                          _c("b-input", {
                            attrs: { placeholder: "Type your message" }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-btn",
                            {
                              attrs: { slot: "append", variant: "primary" },
                              slot: "append"
                            },
                            [_vm._v("Send")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Activity" } },
                [
                  _c(
                    "b-card-body",
                    _vm._l(_vm.projectData.activities, function(activity) {
                      return _c(
                        "div",
                        {
                          key:
                            activity.type + activity.date + activity.user.name,
                          staticClass: "media pb-1 mb-3"
                        },
                        [
                          _c("div", { staticClass: "ui-feed-icon-container" }, [
                            activity.type === "new_task"
                              ? _c("span", {
                                  staticClass:
                                    "ui-icon ui-feed-icon ion ion-md-add bg-primary text-white"
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            activity.type === "pushed_commit"
                              ? _c("span", {
                                  staticClass:
                                    "ui-icon ui-feed-icon ion ion-md-code bg-warning text-dark"
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            activity.type === "completed_task"
                              ? _c("span", {
                                  staticClass:
                                    "ui-icon ui-feed-icon ion ion-md-checkmark bg-success text-white"
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            activity.type === "new_participant"
                              ? _c("span", {
                                  staticClass:
                                    "ui-icon ui-feed-icon ion ion-md-contact bg-info text-white"
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "ui-w-40 rounded-circle",
                              attrs: {
                                src:
                                  _vm.baseUrl +
                                  "img/avatars/" +
                                  activity.user.avatar,
                                alt: ""
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "media-body align-self-center ml-3"
                            },
                            [
                              activity.type === "new_task"
                                ? _c("div", [
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v(_vm._s(activity.user.name))]
                                    ),
                                    _vm._v(" added new task "),
                                    _c("strong", [
                                      _vm._v(_vm._s(activity.data.taskTitle))
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              activity.type === "pushed_commit"
                                ? _c("div", [
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v(_vm._s(activity.user.name))]
                                    ),
                                    _vm._v(" pushed commit "),
                                    _c("strong", [
                                      _vm._v(
                                        "#" + _vm._s(activity.data.commitId)
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              activity.type === "completed_task"
                                ? _c("div", [
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v(_vm._s(activity.user.name))]
                                    ),
                                    _vm._v(" completed task "),
                                    _c("strong", [
                                      _vm._v(_vm._s(activity.data.taskTitle))
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              activity.type === "new_participant"
                                ? _c("div", [
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v(_vm._s(activity.user.name))]
                                    ),
                                    _vm._v(" assigned new participant "),
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [
                                        _c("strong", [
                                          _vm._v(_vm._s(activity.data.userName))
                                        ])
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-muted small" }, [
                                _vm._v(_vm._s(activity.date) + " ago")
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-4 col-xl-3" },
        [
          _c(
            "b-card",
            { staticClass: "mb-4", attrs: { "no-body": "" } },
            [
              _c("b-card-header", { attrs: { "header-tag": "h6" } }, [
                _vm._v("Project details")
              ]),
              _vm._v(" "),
              _c(
                "b-list-group",
                { attrs: { flush: true } },
                [
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Client")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("a", { attrs: { href: "javascript:void(0)" } }, [
                          _vm._v(_vm._s(_vm.projectData.client.name))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Created by")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("a", { attrs: { href: "javascript:void(0)" } }, [
                          _vm._v(_vm._s(_vm.projectData.createdBy.name))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Created at")
                      ]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.projectData.created))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Last update")
                      ]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.projectData.lastUpdate))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Deadline")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("strong", [_vm._v(_vm._s(_vm.projectData.deadline))])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Priority")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          attrs: {
                            variant: _vm.priorityDropdownVariant(
                              _vm.projectData.priority
                            ),
                            right: !_vm.isRTL
                          }
                        },
                        [
                          _c("template", { slot: "button-content" }, [
                            _vm.projectData.priority === 1
                              ? _c("span", [_vm._v("High")])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.projectData.priority === 2
                              ? _c("span", [_vm._v("Medium")])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.projectData.priority === 3
                              ? _c("span", [_vm._v("Low")])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: {
                                href: "javascript:void(0)",
                                active: _vm.projectData.priority === 1
                              }
                            },
                            [_vm._v("High")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: {
                                href: "javascript:void(0)",
                                active: _vm.projectData.priority === 2
                              }
                            },
                            [_vm._v("Medium")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: {
                                href: "javascript:void(0)",
                                active: _vm.projectData.priority === 3
                              }
                            },
                            [_vm._v("Low")]
                          )
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Hour rate")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v("$" + _vm._s(_vm.projectData.hourRate) + "/h")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Total hours")
                      ]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.projectData.hours))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c("div", { staticClass: "text-muted" }, [
                        _vm._v("Total cost")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("strong", [
                          _vm._v(
                            "$" +
                              _vm._s(
                                _vm.projectData.hourRate * _vm.projectData.hours
                              )
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.projectData.tags && _vm.projectData.tags.length
                    ? _c("b-list-group-item", [
                        _c("div", { staticClass: "text-muted small" }, [
                          _vm._v("Tags")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex flex-wrap" },
                          _vm._l(_vm.projectData.tags, function(tag) {
                            return _c(
                              "div",
                              {
                                key: tag,
                                staticClass: "badge badge-default mt-1 mr-1"
                              },
                              [_vm._v(_vm._s(tag))]
                            )
                          }),
                          0
                        )
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            { staticClass: "mb-4", attrs: { "no-body": "" } },
            [
              _c(
                "b-card-header",
                {
                  staticClass: "with-elements",
                  attrs: { "header-class": "h6" }
                },
                [
                  _c("span", { staticClass: "card-header-title" }, [
                    _vm._v("Leaders")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-header-elements ml-auto" },
                    [
                      _c(
                        "b-btn",
                        { attrs: { variant: "outline-primary btn-xs" } },
                        [
                          _c("i", { staticClass: "ion ion-md-add" }),
                          _vm._v(" Add")
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group",
                { attrs: { flush: true } },
                _vm._l(_vm.projectData.leaders, function(leader) {
                  return _c(
                    "div",
                    { key: leader.name, staticClass: "list-group-item" },
                    [
                      _c("div", { staticClass: "media align-items-center" }, [
                        _c("img", {
                          staticClass: "d-block ui-w-30 rounded-circle",
                          attrs: {
                            src: _vm.baseUrl + "img/avatars/" + leader.avatar,
                            alt: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body px-2" }, [
                          _c(
                            "a",
                            {
                              staticClass: "text-dark",
                              attrs: { href: "javascript:void(0)" }
                            },
                            [_vm._v(_vm._s(leader.name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "d-block text-light text-large font-weight-light",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [_vm._v("×")]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card",
            { staticClass: "mb-4", attrs: { "no-body": "" } },
            [
              _c(
                "b-card-header",
                {
                  staticClass: "with-elements",
                  attrs: { "header-class": "h6" }
                },
                [
                  _c("span", { staticClass: "card-header-title" }, [
                    _vm._v("Participants")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-header-elements ml-auto" },
                    [
                      _c(
                        "b-btn",
                        { attrs: { variant: "outline-primary btn-xs" } },
                        [
                          _c("i", { staticClass: "ion ion-md-add" }),
                          _vm._v(" Add")
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-list-group",
                { attrs: { flush: true } },
                _vm._l(_vm.projectData.team, function(member) {
                  return _c(
                    "li",
                    { key: member.name, staticClass: "list-group-item" },
                    [
                      _c("div", { staticClass: "media align-items-center" }, [
                        _c("img", {
                          staticClass: "d-block ui-w-30 rounded-circle",
                          attrs: {
                            src: _vm.baseUrl + "img/avatars/" + member.avatar,
                            alt: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body px-2" }, [
                          _c(
                            "a",
                            {
                              staticClass: "text-dark",
                              attrs: { href: "javascript:void(0)" }
                            },
                            [_vm._v(_vm._s(member.name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "d-block text-light text-large font-weight-light",
                            attrs: { href: "javascript:void(0)" }
                          },
                          [_vm._v("×")]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6462d684", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6462d684\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6462d684\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3d32e04a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6462d684\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./projects.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6462d684\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./projects.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vuedraggable/dist/vuedraggable.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/adriencaristan/Documents/Work/DebtBuddy/Sites/debtbuddy.com/v1/htdocs/node_modules/vuedraggable/dist/vuedraggable.js'");

/***/ }),

/***/ "./resources/assets/src/components/DebtDetail.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6462d684\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/DebtDetail.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6462d684\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/DebtDetail.vue")
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
Component.options.__file = "resources/assets/src/components/DebtDetail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6462d684", Component.options)
  } else {
    hotAPI.reload("data-v-6462d684", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});