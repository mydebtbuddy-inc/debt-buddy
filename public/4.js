webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/DebtPaymentScheduleTable.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTables = __webpack_require__("./node_modules/vue-tables-2/compiled/index.js");

exports.default = {
  name: 'debt-payment-schedule-table',
  props: ['data'],
  data: function data() {
    return {
      tableData: [],
      columns: ['payment_date', 'debt_name', 'start_balance', 'min_payment', 'debtcelerator', 'total_payment', 'end_balance'],
      options: {
        pagination: { chunk: 5 },
        sortIcon: {
          is: 'fa-sort',
          base: 'fas',
          up: 'fa-sort-up',
          down: 'fa-sort-down'
        }
      }
    };
  },
  created: function created() {
    var _this = this;

    // Add IDs for child rows functionality
    this.tableData = this.data.map(function (item, index) {
      item['start_balance'] = '$' + _this.moneyFormat(item['start_balance']);
      item['end_balance'] = '$' + _this.moneyFormat(item['end_balance']);
      item['min_payment'] = '$' + _this.moneyFormat(item['min_payment']);
      item['debtcelerator'] = item['debtcelerator'] ? '$' + _this.moneyFormat(item['debtcelerator']) : '---';
      item['total_payment'] = '$' + _this.moneyFormat(item['total_payment']);
      item['id'] = index;
      return item;
    });
  },

  methods: {
    edit: function edit(row) {
      alert('Edit: ' + row.first_name + ' ' + row.last_name);
    },
    remove: function remove(row) {
      alert('Remove: ' + row.first_name + ' ' + row.last_name);
    },

    moneyFormat: function moneyFormat(value) {
      return parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/PaymentPlan.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DebtPaymentScheduleTable = __webpack_require__("./resources/assets/src/components/DebtPaymentScheduleTable.vue");

var _DebtPaymentScheduleTable2 = _interopRequireDefault(_DebtPaymentScheduleTable);

var _vuedraggable = __webpack_require__("./node_modules/vuedraggable/dist/vuedraggable.js");

var _vuedraggable2 = _interopRequireDefault(_vuedraggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Debt = function Debt(debt) {
  _classCallCheck(this, Debt);

  this.id = debt.id;
  this.name = debt.name;
  this.type = debt.type;
  this.balance = parseFloat(debt.current_balance);
  this.minPayment = parseFloat(debt.minimum_payment);
  this.interestRate = parseFloat(debt.interest_rates[0].rate);
  this.payPeriod = debt.payment_period;
  this.startDate = debt.start_date;
  this.lender = debt.lender.name;
  this.paymentSchedule = [];
};

exports.default = {
  name: 'payment-plan',
  metaInfo: {
    title: 'Payment Plan'
  },
  components: {
    draggable: _vuedraggable2.default,
    DebtPaymentScheduleTable: _DebtPaymentScheduleTable2.default
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      var plan = _this.$store.getters.plan;

      if (plan) {
        _this.plan.initialBalance = plan.payment_plan.combined.total_initial_debt_balance;
        _this.plan.currentBalance = plan.payment_plan.combined.total_current_debt_balance;
        _this.plan.debtSchedule = plan.payment_plan.combined.billing_dates;
        _this.plan.debtScheduleOriginal = plan.no_payment_plan.combined.billing_dates;
        _this.plan.debtCelerator = plan.payment_plan.combined.debtcelerator;
        _this.plan.startDate = plan.payment_plan.combined.start_date;
        _this.plan.estimatedEndDate = plan.payment_plan.combined.finish_date;
        _this.plan.interestSaved = plan.no_payment_plan.combined.total_interest_paid - plan.payment_plan.combined.total_interest_paid;
        _this.plan.debtCount = plan.payment_plan.combined.total_debts;
        _this.plan.totalDebtBalance = plan.payment_plan.combined.total_current_debt_balance;
        _this.page.showPaymentPlan = true;

        var today = new Date();

        _this.plan.remainingPayments = plan.payment_plan.combined.billing_dates.filter(function (dates) {
          return Date.parse(dates.payment_date) > today;
        }).length;
      }
    }, 500);
  },

  data: function data() {
    return {
      page: {
        loading: false,
        loadingHTML: '\n        <div class="sk-folding-cube sk-primary">\n          <div class="sk-cube1 sk-cube"></div>\n          <div class="sk-cube2 sk-cube"></div>\n          <div class="sk-cube4 sk-cube"></div>\n          <div class="sk-cube3 sk-cube"></div>\n        </div>\n        <h5 class="text-center mb-0">LOADING...</h5>',
        showPaymentPlan: false
      },
      plan: {
        description: '\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>\n      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra turpis non aliquet ornare. Duis euismod ultricies est sed auctor. Sed luctus accumsan enim ut efficitur.</p>\n      ',
        debtCount: 0,
        totalDebtBalance: 0.0,
        initialBalance: 0.0,
        currentBalance: 0.0,
        debtCelerator: null,
        dateCreated: "TBD",
        estimatedEndDate: "TBD",
        interestSaved: 0.0,
        debts: [],
        debtSchedule: [],
        debtScheduleOriginal: []
      },

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
        activities: [],
        activity: [{
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
    blockPage: function blockPage() {
      this.page.loading = true;
    },
    unblockPage: function unblockPage() {
      this.page.loading = false;
    },
    formatDate: function formatDate(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;

      var strTime = hours + ':' + minutes + ' ' + ampm;

      return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    },

    moneyFormat: function moneyFormat(value) {
      return parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    calculatePaymentPlan: function calculatePaymentPlan() {
      var _this2 = this;

      if (this.plan.debtCelerator === null || this.plan.debtCelerator === "") return;

      this.page.loading = true;

      this.$store.dispatch('calculatePaymentPlan', this.plan.debtCelerator).then(function (response) {
        _this2.plan.startDate = response.data.payment_plan.combined.start_date;
        _this2.plan.estimatedEndDate = response.data.payment_plan.combined.finish_date;
        _this2.plan.interestSaved = response.data.no_payment_plan.combined.total_interest_paid - response.data.payment_plan.combined.total_interest_paid;
        _this2.plan.debtCount = response.data.payment_plan.combined.total_debts;
        _this2.plan.totalDebtBalance = response.data.payment_plan.combined.total_debt_balance;
        _this2.plan.debtSchedule = response.data.payment_plan.combined.billing_dates;
        _this2.plan.debtScheduleOriginal = response.data.no_payment_plan.combined.billing_dates;
        _this2.page.showPaymentPlan = true;
        _this2.page.loading = false;
      }).catch(function (error) {
        console.log(error);
        _this2.page.loading = false;
      });
    },
    calculate: function calculate() {
      this.blockPage();

      if (this.debts === undefined || this.debts.length == 0 || this.debtcelerator === null || this.debtcelerator === "") {
        this.showPaymentPlan = false;
        this.unblockPage();
        return;
      }

      this.showPaymentPlan = true;

      this.unblockPage();
    },
    completedPercent: function completedPercent(total, paid) {
      return Math.round((total - paid) / total * 100);
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
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/spinkit/spinkit.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n *  Usage:\n *\n      <div class=\"sk-rotating-plane\"></div>\n *\n */\n.sk-rotating-plane {\n  width: 30px;\n  height: 30px;\n  background-color: #ccc;\n  margin: 40px auto;\n  -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\n          animation: sk-rotatePlane 1.2s infinite ease-in-out;\n}\n@-webkit-keyframes sk-rotatePlane {\n0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n}\n50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n}\n100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n}\n}\n@keyframes sk-rotatePlane {\n0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n}\n50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n}\n100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-double-bounce\">\n        <div class=\"sk-child sk-double-bounce1\"></div>\n        <div class=\"sk-child sk-double-bounce2\"></div>\n      </div>\n *\n */\n.sk-double-bounce {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  margin: 40px auto;\n}\n.sk-double-bounce .sk-child {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #ccc;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-doubleBounce 2.0s infinite ease-in-out;\n            animation: sk-doubleBounce 2.0s infinite ease-in-out;\n}\n.sk-double-bounce .sk-double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n            animation-delay: -1.0s;\n}\n@-webkit-keyframes sk-doubleBounce {\n0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes sk-doubleBounce {\n0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-wave\">\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n *\n */\n.sk-wave {\n  margin: 40px auto;\n  width: 37.5px;\n  height: 30px;\n  text-align: center;\n  font-size: 10px;\n}\n.sk-wave .sk-rect {\n    background-color: #ccc;\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n            animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n.sk-wave .sk-rect1 {\n    -webkit-animation-delay: -1.2s;\n            animation-delay: -1.2s;\n}\n.sk-wave .sk-rect2 {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s;\n}\n.sk-wave .sk-rect3 {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s;\n}\n.sk-wave .sk-rect4 {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s;\n}\n.sk-wave .sk-rect5 {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s;\n}\n@-webkit-keyframes sk-waveStretchDelay {\n0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4);\n}\n20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n}\n}\n@keyframes sk-waveStretchDelay {\n0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4);\n}\n20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-wandering-cubes\">\n        <div class=\"sk-cube sk-cube1\"></div>\n        <div class=\"sk-cube sk-cube2\"></div>\n      </div>\n *\n */\n.sk-wandering-cubes {\n  margin: 40px auto;\n  width: 30px;\n  height: 30px;\n  position: relative;\n}\n.sk-wandering-cubes .sk-cube {\n    background-color: #ccc;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n            animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n}\n.sk-wandering-cubes .sk-cube2 {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s;\n}\n@-webkit-keyframes sk-wanderingCube {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n            transform: translateX(30px) rotate(-90deg) scale(0.5);\n}\n50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n            transform: translateX(30px) translateY(30px) rotate(-179deg);\n}\n50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n            transform: translateX(30px) translateY(30px) rotate(-180deg);\n}\n75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n            transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n@keyframes sk-wanderingCube {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n            transform: translateX(30px) rotate(-90deg) scale(0.5);\n}\n50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n            transform: translateX(30px) translateY(30px) rotate(-179deg);\n}\n50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n            transform: translateX(30px) translateY(30px) rotate(-180deg);\n}\n75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n            transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-spinner sk-spinner-pulse\"></div>\n *\n */\n.sk-spinner-pulse {\n  width: 30px;\n  height: 30px;\n  margin: 40px auto;\n  background-color: #ccc;\n  border-radius: 100%;\n  -webkit-animation: sk-pulseScaleOut 1.0s infinite ease-in-out;\n          animation: sk-pulseScaleOut 1.0s infinite ease-in-out;\n}\n@-webkit-keyframes sk-pulseScaleOut {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0;\n}\n}\n@keyframes sk-pulseScaleOut {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0;\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-chasing-dots\">\n        <div class=\"sk-child sk-dot1\"></div>\n        <div class=\"sk-child sk-dot2\"></div>\n      </div>\n *\n */\n.sk-chasing-dots {\n  margin: 40px auto;\n  width: 30px;\n  height: 30px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n          animation: sk-chasingDotsRotate 2s infinite linear;\n}\n.sk-chasing-dots .sk-child {\n    width: 60%;\n    height: 60%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    background-color: #ccc;\n    border-radius: 100%;\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n            animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n.sk-chasing-dots .sk-dot2 {\n    top: auto;\n    bottom: 0;\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s;\n}\n@-webkit-keyframes sk-chasingDotsRotate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes sk-chasingDotsRotate {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes sk-chasingDotsBounce {\n0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes sk-chasingDotsBounce {\n0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-three-bounce\">\n        <div class=\"sk-child sk-bounce1\"></div>\n        <div class=\"sk-child sk-bounce2\"></div>\n        <div class=\"sk-child sk-bounce3\"></div>\n      </div>\n *\n */\n.sk-three-bounce {\n  margin: 40px auto;\n  width: 60px;\n  text-align: center;\n}\n.sk-three-bounce .sk-child {\n    width: 15px;\n    height: 15px;\n    background-color: #ccc;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n            animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n}\n.sk-three-bounce .sk-bounce1 {\n    -webkit-animation-delay: -0.32s;\n            animation-delay: -0.32s;\n}\n.sk-three-bounce .sk-bounce2 {\n    -webkit-animation-delay: -0.16s;\n            animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-three-bounce {\n0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes sk-three-bounce {\n0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-circle\">\n        <div class=\"sk-circle1 sk-child\"></div>\n        <div class=\"sk-circle2 sk-child\"></div>\n        <div class=\"sk-circle3 sk-child\"></div>\n        <div class=\"sk-circle4 sk-child\"></div>\n        <div class=\"sk-circle5 sk-child\"></div>\n        <div class=\"sk-circle6 sk-child\"></div>\n        <div class=\"sk-circle7 sk-child\"></div>\n        <div class=\"sk-circle8 sk-child\"></div>\n        <div class=\"sk-circle9 sk-child\"></div>\n        <div class=\"sk-circle10 sk-child\"></div>\n        <div class=\"sk-circle11 sk-child\"></div>\n        <div class=\"sk-circle12 sk-child\"></div>\n      </div>\n *\n */\n.sk-circle {\n  margin: 40px auto;\n  width: 30px;\n  height: 30px;\n  position: relative;\n}\n.sk-circle .sk-child {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.sk-circle .sk-child:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #ccc;\n    border-radius: 100%;\n    -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n            animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n.sk-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n}\n.sk-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n}\n.sk-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.sk-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg);\n}\n.sk-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n            transform: rotate(150deg);\n}\n.sk-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.sk-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n            transform: rotate(210deg);\n}\n.sk-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg);\n}\n.sk-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n}\n.sk-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg);\n}\n.sk-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n            transform: rotate(330deg);\n}\n.sk-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s;\n}\n.sk-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s;\n}\n.sk-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s;\n}\n.sk-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s;\n}\n.sk-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s;\n}\n.sk-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s;\n}\n.sk-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n}\n.sk-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s;\n}\n.sk-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n}\n.sk-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s;\n}\n.sk-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleBounceDelay {\n0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes sk-circleBounceDelay {\n0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-cube-grid\">\n        <div class=\"sk-cube sk-cube1\"></div>\n        <div class=\"sk-cube sk-cube2\"></div>\n        <div class=\"sk-cube sk-cube3\"></div>\n        <div class=\"sk-cube sk-cube4\"></div>\n        <div class=\"sk-cube sk-cube5\"></div>\n        <div class=\"sk-cube sk-cube6\"></div>\n        <div class=\"sk-cube sk-cube7\"></div>\n        <div class=\"sk-cube sk-cube8\"></div>\n        <div class=\"sk-cube sk-cube9\"></div>\n      </div>\n *\n */\n.sk-cube-grid {\n  width: 30px;\n  height: 30px;\n  margin: 40px auto;\n  /*\n   * Spinner positions\n   * 1 2 3\n   * 4 5 6\n   * 7 8 9\n   */\n}\n.sk-cube-grid .sk-cube {\n    width: 33.33%;\n    height: 33.33%;\n    background-color: #ccc;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid .sk-cube1 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube2 {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube3 {\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s;\n}\n.sk-cube-grid .sk-cube4 {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube5 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube6 {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube7 {\n    -webkit-animation-delay: 0.0s;\n            animation-delay: 0.0s;\n}\n.sk-cube-grid .sk-cube8 {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube9 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n}\n35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n}\n}\n@keyframes sk-cubeGridScaleDelay {\n0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n}\n35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-fading-circle\">\n        <div class=\"sk-circle1 sk-circle\"></div>\n        <div class=\"sk-circle2 sk-circle\"></div>\n        <div class=\"sk-circle3 sk-circle\"></div>\n        <div class=\"sk-circle4 sk-circle\"></div>\n        <div class=\"sk-circle5 sk-circle\"></div>\n        <div class=\"sk-circle6 sk-circle\"></div>\n        <div class=\"sk-circle7 sk-circle\"></div>\n        <div class=\"sk-circle8 sk-circle\"></div>\n        <div class=\"sk-circle9 sk-circle\"></div>\n        <div class=\"sk-circle10 sk-circle\"></div>\n        <div class=\"sk-circle11 sk-circle\"></div>\n        <div class=\"sk-circle12 sk-circle\"></div>\n      </div>\n *\n */\n.sk-fading-circle {\n  margin: 40px auto;\n  width: 30px;\n  height: 30px;\n  position: relative;\n}\n.sk-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.sk-fading-circle .sk-circle:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #ccc;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.sk-fading-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n}\n.sk-fading-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n}\n.sk-fading-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.sk-fading-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg);\n}\n.sk-fading-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n            transform: rotate(150deg);\n}\n.sk-fading-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.sk-fading-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n            transform: rotate(210deg);\n}\n.sk-fading-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg);\n}\n.sk-fading-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n}\n.sk-fading-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg);\n}\n.sk-fading-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n            transform: rotate(330deg);\n}\n.sk-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s;\n}\n.sk-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s;\n}\n.sk-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s;\n}\n.sk-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s;\n}\n.sk-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s;\n}\n.sk-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s;\n}\n.sk-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n}\n.sk-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s;\n}\n.sk-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n}\n.sk-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s;\n}\n.sk-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s;\n}\n@-webkit-keyframes sk-circleFadeDelay {\n0%, 39%, 100% {\n    opacity: 0;\n}\n40% {\n    opacity: 1;\n}\n}\n@keyframes sk-circleFadeDelay {\n0%, 39%, 100% {\n    opacity: 0;\n}\n40% {\n    opacity: 1;\n}\n}\n\n/*\n *  Usage:\n *\n      <div class=\"sk-folding-cube\">\n        <div class=\"sk-cube1 sk-cube\"></div>\n        <div class=\"sk-cube2 sk-cube\"></div>\n        <div class=\"sk-cube4 sk-cube\"></div>\n        <div class=\"sk-cube3 sk-cube\"></div>\n      </div>\n *\n */\n.sk-folding-cube {\n  margin: 40px auto;\n  width: 30px;\n  height: 30px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg);\n}\n.sk-folding-cube .sk-cube {\n    float: left;\n    width: 50%;\n    height: 50%;\n    position: relative;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n.sk-folding-cube .sk-cube:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ccc;\n    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n            animation: sk-foldCubeAngle 2.4s infinite linear both;\n    -webkit-transform-origin: 100% 100%;\n            transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\n    -webkit-transform: scale(1.1) rotateZ(90deg);\n            transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n            transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\n    -webkit-transform: scale(1.1) rotateZ(270deg);\n            transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s;\n}\n.sk-folding-cube .sk-cube4:before {\n    -webkit-animation-delay: 0.9s;\n            animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n}\n25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n}\n90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n}\n}\n@keyframes sk-foldCubeAngle {\n0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n}\n25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n}\n90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n}\n}\n.sk-wave {\n  width: 40px;\n  white-space: nowrap;\n}\n.sk-fading-circle .sk-circle {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.project-attachment {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.project-attachment > .media-body {\n    min-width: 0;\n}\n.project-attachment-file,\n.project-attachment-img {\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 4rem;\n  height: 4rem;\n}\n.project-attachment-file {\n  display: inline-block;\n  text-align: center;\n  line-height: 4rem;\n}\n.project-attachment-img {\n  background-color: transparent;\n  background-position: center center;\n  background-size: cover;\n}\n.project-attachment-filename {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.project-task-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.625rem 0;\n}\n.project-task-item .ui-todo-item {\n    margin: 0;\n}\n.default-style .project-task-item {\n  background: #fff;\n}\n.default-style .project-task-item + .project-task-item {\n    border-top: 1px solid rgba(24, 28, 33, 0.06);\n}\n.material-style .project-task-item {\n  background: #fff;\n}\n.material-style .project-task-item + .project-task-item {\n    border-top: 1px solid rgba(24, 28, 33, 0.06);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=2!./resources/assets/src/components/PaymentPlan.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading-container .loading-backdrop {\n  background: #fff !important;\n  opacity: .7 !important;\n}\n.loading-container .loading {\n  background: none !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.no-border {\n  border: 0px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48beca84\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/vue-data-tables/vue-data-tables.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.VueTables__child-row-toggler {\n  display: inline-block;\n  margin: auto;\n  width: 100%;\n  height: 16px;\n  text-align: center;\n  line-height: 16px;\n  cursor: pointer;\n}\n.VueTables__child-row-toggler--closed::before {\n  content: \"+\";\n}\n.VueTables__child-row-toggler--open::before {\n  content: \"-\";\n}\n.VueTables__sortable {\n  position: relative;\n}\n.VueTables__sort-icon {\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n[dir=rtl] .VueTables__sort-icon {\n    right: auto;\n    left: 6px;\n}\n.VuePagination nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n.VuePagination .pagination,\n.VuePagination__count {\n  -ms-flex-preferred-size: auto !important;\n      flex-basis: auto !important;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 0 1rem 0;\n  width: auto !important;\n}\n.VueTables__search label,\n.VueTables__limit label {\n  display: inline-block !important;\n  margin-right: .5em;\n}\n[dir=rtl] .VueTables__search label, [dir=rtl]\n  .VueTables__limit label {\n    margin-right: 0;\n    margin-left: .5em;\n}\n[dir=\"rtl\"] .pull-left {\n  float: right;\n}\n[dir=\"rtl\"] .pull-right {\n  float: left;\n}\n.default-style .VueTables__sort-icon {\n  color: #a3a4a6;\n  font-size: 0.75rem;\n}\n.default-style .VuePagination__pagination-item > a {\n  padding: 0.375rem 0.25rem;\n  min-width: calc(1.5rem + 2px);\n  text-align: center;\n  font-size: 0.75rem;\n  border-radius: 0.25rem;\n}\n.default-style .VuePagination__count {\n  color: #a3a4a6;\n  font-size: 0.75rem;\n}\n.material-style .VueTables__sort-icon {\n  color: #a3a4a6;\n  font-size: 0.75rem;\n}\n.material-style .VuePagination__pagination-item > a {\n  padding: 0.375rem 0.25rem;\n  min-width: calc(1.5rem + 0px);\n  text-align: center;\n  font-size: 0.75rem;\n  border-radius: 0.125rem;\n}\n.material-style .VuePagination__count {\n  color: #a3a4a6;\n  font-size: 0.75rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/sortablejs/Sortable.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,
		lastDownEl,

		scrollEl,
		scrollParentEl,
		scrollCustomFn,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		putSortable,

		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		R_SPACE = /\s+/g,
		R_FLOAT = /left|right|inline/,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,
		setTimeout = win.setTimeout,

		$ = win.jQuery || win.Zepto,
		Polymer = win.Polymer,

		captureMode = false,
		passiveMode = false,

		supportDraggable = ('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			// false when IE11
			if (!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)) {
				return false;
			}
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		min = Math.min,

		savedInputChecked = [],
		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var _this = rootEl[expando],
					el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy,

					scrollOffsetX,
					scrollOffsetY
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;
					scrollCustomFn = options.scrollFn;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							scrollOffsetY = vy ? vy * speed : 0;
							scrollOffsetX = vx ? vx * speed : 0;

							if ('function' === typeof(scrollCustomFn)) {
								return scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt);
							}

							if (el === win) {
								win.scrollTo(win.pageXOffset + scrollOffsetX, win.pageYOffset + scrollOffsetY);
							} else {
								el.scrollTop += scrollOffsetY;
								el.scrollLeft += scrollOffsetX;
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			function toFn(value, pull) {
				if (value === void 0 || value === true) {
					value = group.name;
				}

				if (typeof value === 'function') {
					return value;
				} else {
					return function (to, from) {
						var fromGroup = from.options.group.name;

						return pull
							? value
							: value && (value.join
								? value.indexOf(fromGroup) > -1
								: (fromGroup == value)
							);
					};
				}
			}

			var group = {};
			var originalGroup = options.group;

			if (!originalGroup || typeof originalGroup != 'object') {
				originalGroup = {name: originalGroup};
			}

			group.name = originalGroup.name;
			group.checkPull = toFn(originalGroup.pull, true);
			group.checkPut = toFn(originalGroup.put);
			group.revertClone = originalGroup.revertClone;

			options.group = group;
		}
	;

	// Detect support a passive mode
	try {
		window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get: function () {
				// `false`, because everything starts to work incorrectly and instead of d'n'd,
				// begins the page has scrolled.
				passiveMode = false;
				captureMode = {
					capture: false,
					passive: passiveMode
				};
			}
		}));
	} catch (err) {}

	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: {x: 0, y: 0},
			supportPointer: Sortable.supportPointer !== false
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);
		options.supportPointer && _on(el, 'pointerdown', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				preventOnFilter = options.preventOnFilter,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0]) || target,
				filter = options.filter,
				startIndex;

			_saveInputCheckedState(el);


			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = _this.nativeDraggable;

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);
				_on(ownerDocument, 'selectstart', _this);
				options.supportPointer && _on(ownerDocument, 'pointercancel', _this._onDrop);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}


			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
			_off(ownerDocument, 'pointermove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				var options = this.options;

				// Apply effect
				_toggleClass(dragEl, options.ghostClass, true);
				_toggleClass(dragEl, options.dragClass, false);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;
				var i = touchDragOverListeners.length;

				if (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				var	options = this.options,
					fallbackTolerance = options.fallbackTolerance,
					fallbackOffset = options.fallbackOffset,
					touch = evt.touches ? evt.touches[0] : evt,
					dx = (touch.clientX - tapEvt.clientX) + fallbackOffset.x,
					dy = (touch.clientY - tapEvt.clientY) + fallbackOffset.y,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					if (fallbackTolerance &&
						min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
					) {
						return;
					}

					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			_this._offUpEvents();

			if (activeGroup.checkPull(_this, _this, dragEl, evt)) {
				cloneEl = _clone(dragEl);

				cloneEl.draggable = false;
				cloneEl.style['will-change'] = '';

				_css(cloneEl, 'display', 'none');
				_toggleClass(cloneEl, _this.options.chosenClass, false);

				// #1143: IFrame support workaround
				_this._cloneId = _nextTick(function () {
					rootEl.insertBefore(cloneEl, dragEl);
					_dispatchEvent(_this, rootEl, 'clone', dragEl);
				});
			}

			_toggleClass(dragEl, options.dragClass, true);

			if (useFallback) {
				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', _this._onTouchMove);
					_on(document, 'touchend', _this._onDrop);
					_on(document, 'touchcancel', _this._onDrop);

					if (options.supportPointer) {
						_on(document, 'pointermove', _this._onTouchMove);
						_on(document, 'pointerup', _this._onDrop);
					}
				} else {
					// Old brwoser
					_on(document, 'mousemove', _this._onTouchMove);
					_on(document, 'mouseup', _this._onDrop);
				}

				_this._loopId = setInterval(_this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1143: Бывает элемент с IFrame внутри блокирует `drop`,
				// поэтому если вызвался `mouseover`, значит надо отменять весь d'n'd.
				// Breaking Chrome 62+
				// _on(document, 'mouseover', _this);

				_this._dragStartId = _nextTick(_this._dragStarted);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				targetRect,
				revert,
				options = this.options,
				group = options.group,
				activeSortable = Sortable.active,
				isOwner = (activeGroup === group),
				isMovingBetweenSortable = false,
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			if (dragEl.animated) {
				return;
			}

			moved = true;

			if (activeSortable && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: (
						putSortable === this ||
						(
							(activeSortable.lastPullMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
							group.checkPut(this, activeSortable, dragEl, evt)
						)
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (putSortable !== this) {
					putSortable = this;
					isMovingBetweenSortable = true;
				}

				if (revert) {
					_cloneHide(activeSortable, true);
					parentEl = rootEl; // actualization

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (_ghostIsLast(el, evt))
				) {
					//assign target only if condition is true
					if (el.children.length !== 0 && el.children[0] !== ghostEl && el === evt.target) {
						target = el.lastElementChild;
					}

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(activeSortable, isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}

					targetRect = target.getBoundingClientRect();

					var width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = R_FLOAT.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						after = false
					;

					if (floating) {
						var elTop = dragEl.offsetTop,
							tgTop = target.offsetTop;

						if (elTop === tgTop) {
							after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
						}
						else if (target.previousElementSibling === dragEl || dragEl.previousElementSibling === target) {
							after = (evt.clientY - targetRect.top) / height > 0.5;
						} else {
							after = tgTop > elTop;
						}
						} else if (!isMovingBetweenSortable) {
						after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
					}

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(activeSortable, isOwner);

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				if (prevRect.nodeType === 1) {
					prevRect = prevRect.getBoundingClientRect();
				}

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(ownerDocument, 'pointercancel', this._onDrop);
			_off(ownerDocument, 'selectstart', this);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mouseover', this);
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || Sortable.active.lastPullMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

			}

			this._nulling();
		},

		_nulling: function() {
			rootEl =
			dragEl =
			parentEl =
			ghostEl =
			nextEl =
			cloneEl =
			lastDownEl =

			scrollEl =
			scrollParentEl =

			tapEvt =
			touchEvt =

			moved =
			newIndex =

			lastEl =
			lastCSS =

			putSortable =
			activeGroup =
			Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});
			savedInputChecked.length = 0;
		},

		handleEvent: function (/**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragover':
				case 'dragenter':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'mouseover':
					this._onDrop(evt);
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(sortable, state) {
		if (sortable.lastPullMode !== 'clone') {
			state = true;
		}

		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');

			if (!state) {
				if (cloneEl.state) {
					if (sortable.options.group.revertClone) {
						rootEl.insertBefore(cloneEl, nextEl);
						sortable._animate(dragEl, cloneEl);
					} else {
						rootEl.insertBefore(cloneEl, dragEl);
					}
				}
			}

			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;

			do {
				if ((selector === '>*' && el.parentNode === ctx) || _matches(el, selector)) {
					return el;
				}
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}


	function _getParentOrHost(el) {
		var parent = el.host;

		return (parent && parent.nodeType) ? parent : el.parentNode;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex) {
		sortable = (sortable || rootEl[expando]);

		var evt = document.createEvent('Event'),
			options = sortable.options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();
		evt.willInsertAfter = willInsertAfter;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
			rect = lastEl.getBoundingClientRect();

		// 5 — min delta
		// abs — нельзя добавлять, а то глюки при наведении сверху
		return (evt.clientY - (rect.top + rect.height) > 5) ||
			(evt.clientX - (rect.left + rect.width) > 5);
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent for a selected set of
	 * elements
	 * @param  {HTMLElement} el
	 * @param  {selector} selector
	 * @return {number}
	 */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && (selector === '>*' || _matches(el, selector))) {
				index++;
			}
		}

		return index;
	}

	function _matches(/**HTMLElement*/el, /**String*/selector) {
		if (el) {
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			return (
				(tag === '' || el.nodeName.toUpperCase() == tag) &&
				(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
			);
		}

		return false;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		}
		else if ($) {
			return $(el).clone(true)[0];
		}
		else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}

	// Fixed #973:
	_on(document, 'touchmove', function (evt) {
		if (Sortable.active) {
			evt.preventDefault();
		}
	});

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.7.0';
	return Sortable;
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-442e8045\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/PaymentPlan.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.page.loading
        ? _c("BlockUI", { attrs: { message: "", html: _vm.page.loadingHTML } })
        : _vm._e(),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "border-right-0 border-left-0 ui-bordered container-m--x mb-4"
        },
        [
          _vm.page.showPaymentPlan
            ? _c(
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
                                        _vm.plan.initialBalance,
                                        _vm.plan.currentBalance
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
                                _vm._s(_vm.plan.remainingPayments) +
                                  " payments remaining"
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-progress", {
                          attrs: {
                            value: _vm.completedPercent(
                              _vm.plan.initialBalance,
                              _vm.plan.currentBalance
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
                          class:
                            "text-" + _vm.statuses[_vm.projectData.status].color
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.statuses[_vm.projectData.status].title)
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      !_vm.page.showPaymentPlan
        ? _c(
            "b-jumbotron",
            {
              staticClass: "col text-center",
              attrs: {
                header: "Debt Repayment Plan Not Started",
                lead: "Please enter a DebtCelerator amount below to get started"
              }
            },
            [
              _c(
                "div",
                { staticClass: "mb-4 col-md-2 offset-md-5" },
                [
                  _c(
                    "b-input-group",
                    { attrs: { prepend: "$" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          placeholder: "DebtCelerator Amount",
                          "lazy-formatter": ""
                        },
                        model: {
                          value: _vm.plan.debtCelerator,
                          callback: function($$v) {
                            _vm.$set(_vm.plan, "debtCelerator", $$v)
                          },
                          expression: "plan.debtCelerator"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  attrs: { variant: "primary" },
                  on: { click: _vm.calculatePaymentPlan }
                },
                [_vm._v("Calculate Payment Plan")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.page.showPaymentPlan
        ? _c("div", { staticClass: "row" }, [
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
                      domProps: { innerHTML: _vm._s(_vm.plan.description) }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tabs",
                  { staticClass: "nav-tabs-top mb-4" },
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "DebtBuddy Payment Plan" } },
                      [
                        _c(
                          "b-card-body",
                          [
                            _c("DebtPaymentScheduleTable", {
                              attrs: { data: _vm.plan.debtSchedule }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Original Payment Plan" } },
                      [
                        _c(
                          "b-card-body",
                          [
                            _c("DebtPaymentScheduleTable", {
                              attrs: { data: _vm.plan.debtScheduleOriginal }
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
                      _vm._v("Plan details")
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
                              _vm._v("DebtCelerator")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "b-input-group",
                                  { attrs: { prepend: "$" } },
                                  [
                                    _c("b-form-input", {
                                      staticClass: "no-border",
                                      staticStyle: { "font-weight": "bolder" },
                                      attrs: {
                                        placeholder: "DebtCelerator Amount",
                                        formatter: _vm.moneyFormat,
                                        "lazy-formatter": ""
                                      },
                                      model: {
                                        value: _vm.plan.debtCelerator,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.plan,
                                            "debtCelerator",
                                            $$v
                                          )
                                        },
                                        expression: "plan.debtCelerator"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
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
                              _vm._v("Total Debts")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("strong", [_vm._v(_vm._s(_vm.plan.debtCount))])
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
                              _vm._v("Current Debt Balance")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("strong", [
                                _vm._v(
                                  "$" +
                                    _vm._s(
                                      _vm.moneyFormat(_vm.plan.totalDebtBalance)
                                    )
                                )
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
                              _vm._v("Plan Start Date")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("strong", [_vm._v(_vm._s(_vm.plan.startDate))])
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
                              _vm._v("Estimated Plan End Date")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.plan.estimatedEndDate))
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
                              _vm._v("Estimated Interest Saved")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("strong", [
                                _vm._v(
                                  "$" +
                                    _vm._s(
                                      _vm.moneyFormat(_vm.plan.interestSaved)
                                    )
                                )
                              ])
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h4",
      {
        staticClass:
          "d-flex flex-wrap justify-content-between align-items-center w-100 font-weight-bold pt-2 mb-4"
      },
      [
        _c("div", { staticClass: "col-12 col-md px-0 pb-2" }, [
          _c("h2", { staticClass: "mb-0" }, [_vm._v("Payment Plan")])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-442e8045", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48beca84\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/DebtPaymentScheduleTable.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-client-table", {
        attrs: {
          data: _vm.tableData,
          columns: _vm.columns,
          options: _vm.options
        },
        scopedSlots: _vm._u([
          {
            key: "edit",
            fn: function(props) {
              return [
                _c(
                  "div",
                  [
                    _c(
                      "b-btn",
                      {
                        staticClass: "btn-xs",
                        attrs: {
                          variant: "outline-success borderless icon-btn"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.edit(props.row)
                          }
                        }
                      },
                      [_c("i", { staticClass: "ion ion-md-create" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        staticClass: "btn-xs",
                        attrs: {
                          variant: "outline-danger borderless icon-btn"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.remove(props.row)
                          }
                        }
                      },
                      [_c("i", { staticClass: "ion ion-md-close" })]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "child_row",
            fn: function(props) {
              return [
                props.row.interest_paid
                  ? _c("div", [
                      _c("b", [_vm._v("Interest Paid:")]),
                      _vm._v(
                        " $" + _vm._s(_vm.moneyFormat(props.row.interest_paid))
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                props.row.interest_paid
                  ? _c("div", [
                      _c("b", [_vm._v("Principal Paid:")]),
                      _vm._v(
                        " $" + _vm._s(_vm.moneyFormat(props.row.principal_paid))
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !props.row.interest_paid
                  ? _c("div", [_c("b", [_vm._v("No additional data")])])
                  : _vm._e()
              ]
            }
          }
        ])
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-48beca84", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/spinkit/spinkit.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/spinkit/spinkit.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c9384372", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./spinkit.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./spinkit.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0f746b92", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./projects.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./projects.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=2!./resources/assets/src/components/PaymentPlan.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=2!./resources/assets/src/components/PaymentPlan.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("8f1d3da8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./PaymentPlan.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./PaymentPlan.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48beca84\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/vue-data-tables/vue-data-tables.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48beca84\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/vue-data-tables/vue-data-tables.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4a61242b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48beca84\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./vue-data-tables.scss", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48beca84\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!./vue-data-tables.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vuedraggable/dist/vuedraggable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  "use strict";

  if (!Array.from) {
    Array.from = function (object) {
      return [].slice.call(object);
    };
  }

  function buildAttribute(object, propName, value) {
    if (value == undefined) {
      return object;
    }
    object = object == null ? {} : object;
    object[propName] = value;
    return object;
  }

  function buildDraggable(Sortable) {
    function removeNode(node) {
      node.parentElement.removeChild(node);
    }

    function insertNodeAt(fatherNode, node, position) {
      var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
      fatherNode.insertBefore(node, refNode);
    }

    function computeVmIndex(vnodes, element) {
      return vnodes.map(function (elt) {
        return elt.elm;
      }).indexOf(element);
    }

    function _computeIndexes(slots, children, isTransition) {
      if (!slots) {
        return [];
      }

      var elmFromNodes = slots.map(function (elt) {
        return elt.elm;
      });
      var rawIndexes = [].concat(_toConsumableArray(children)).map(function (elt) {
        return elmFromNodes.indexOf(elt);
      });
      return isTransition ? rawIndexes.filter(function (ind) {
        return ind !== -1;
      }) : rawIndexes;
    }

    function emit(evtName, evtData) {
      var _this = this;

      this.$nextTick(function () {
        return _this.$emit(evtName.toLowerCase(), evtData);
      });
    }

    function delegateAndEmit(evtName) {
      var _this2 = this;

      return function (evtData) {
        if (_this2.realList !== null) {
          _this2['onDrag' + evtName](evtData);
        }
        emit.call(_this2, evtName, evtData);
      };
    }

    var eventsListened = ['Start', 'Add', 'Remove', 'Update', 'End'];
    var eventsToEmit = ['Choose', 'Sort', 'Filter', 'Clone'];
    var readonlyProperties = ['Move'].concat(eventsListened, eventsToEmit).map(function (evt) {
      return 'on' + evt;
    });
    var draggingElement = null;

    var props = {
      options: Object,
      list: {
        type: Array,
        required: false,
        default: null
      },
      value: {
        type: Array,
        required: false,
        default: null
      },
      noTransitionOnDrag: {
        type: Boolean,
        default: false
      },
      clone: {
        type: Function,
        default: function _default(original) {
          return original;
        }
      },
      element: {
        type: String,
        default: 'div'
      },
      move: {
        type: Function,
        default: null
      },
      componentData: {
        type: Object,
        required: false,
        default: null
      }
    };

    var draggableComponent = {
      name: 'draggable',

      props: props,

      data: function data() {
        return {
          transitionMode: false,
          noneFunctionalComponentMode: false,
          init: false
        };
      },
      render: function render(h) {
        var slots = this.$slots.default;
        if (slots && slots.length === 1) {
          var child = slots[0];
          if (child.componentOptions && child.componentOptions.tag === "transition-group") {
            this.transitionMode = true;
          }
        }
        var children = slots;
        var footer = this.$slots.footer;

        if (footer) {
          children = slots ? [].concat(_toConsumableArray(slots), _toConsumableArray(footer)) : [].concat(_toConsumableArray(footer));
        }
        var attributes = null;
        var update = function update(name, value) {
          attributes = buildAttribute(attributes, name, value);
        };
        update('attrs', this.$attrs);
        if (this.componentData) {
          var _componentData = this.componentData,
              on = _componentData.on,
              _props = _componentData.props;

          update('on', on);
          update('props', _props);
        }
        return h(this.element, attributes, children);
      },
      mounted: function mounted() {
        var _this3 = this;

        this.noneFunctionalComponentMode = this.element.toLowerCase() !== this.$el.nodeName.toLowerCase();
        if (this.noneFunctionalComponentMode && this.transitionMode) {
          throw new Error('Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: ' + this.element);
        }
        var optionsAdded = {};
        eventsListened.forEach(function (elt) {
          optionsAdded['on' + elt] = delegateAndEmit.call(_this3, elt);
        });

        eventsToEmit.forEach(function (elt) {
          optionsAdded['on' + elt] = emit.bind(_this3, elt);
        });

        var options = _extends({}, this.options, optionsAdded, { onMove: function onMove(evt, originalEvent) {
            return _this3.onDragMove(evt, originalEvent);
          } });
        !('draggable' in options) && (options.draggable = '>*');
        this._sortable = new Sortable(this.rootContainer, options);
        this.computeIndexes();
      },
      beforeDestroy: function beforeDestroy() {
        this._sortable.destroy();
      },


      computed: {
        rootContainer: function rootContainer() {
          return this.transitionMode ? this.$el.children[0] : this.$el;
        },
        isCloning: function isCloning() {
          return !!this.options && !!this.options.group && this.options.group.pull === 'clone';
        },
        realList: function realList() {
          return !!this.list ? this.list : this.value;
        }
      },

      watch: {
        options: {
          handler: function handler(newOptionValue) {
            for (var property in newOptionValue) {
              if (readonlyProperties.indexOf(property) == -1) {
                this._sortable.option(property, newOptionValue[property]);
              }
            }
          },

          deep: true
        },

        realList: function realList() {
          this.computeIndexes();
        }
      },

      methods: {
        getChildrenNodes: function getChildrenNodes() {
          if (!this.init) {
            this.noneFunctionalComponentMode = this.noneFunctionalComponentMode && this.$children.length == 1;
            this.init = true;
          }

          if (this.noneFunctionalComponentMode) {
            return this.$children[0].$slots.default;
          }
          var rawNodes = this.$slots.default;
          return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
        },
        computeIndexes: function computeIndexes() {
          var _this4 = this;

          this.$nextTick(function () {
            _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode);
          });
        },
        getUnderlyingVm: function getUnderlyingVm(htmlElt) {
          var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);
          if (index === -1) {
            //Edge case during move callback: related element might be
            //an element different from collection
            return null;
          }
          var element = this.realList[index];
          return { index: index, element: element };
        },
        getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
          var __vue__ = _ref.__vue__;

          if (!__vue__ || !__vue__.$options || __vue__.$options._componentTag !== "transition-group") {
            return __vue__;
          }
          return __vue__.$parent;
        },
        emitChanges: function emitChanges(evt) {
          var _this5 = this;

          this.$nextTick(function () {
            _this5.$emit('change', evt);
          });
        },
        alterList: function alterList(onList) {
          if (!!this.list) {
            onList(this.list);
          } else {
            var newList = [].concat(_toConsumableArray(this.value));
            onList(newList);
            this.$emit('input', newList);
          }
        },
        spliceList: function spliceList() {
          var _arguments = arguments;

          var spliceList = function spliceList(list) {
            return list.splice.apply(list, _arguments);
          };
          this.alterList(spliceList);
        },
        updatePosition: function updatePosition(oldIndex, newIndex) {
          var updatePosition = function updatePosition(list) {
            return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
          };
          this.alterList(updatePosition);
        },
        getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
          var to = _ref2.to,
              related = _ref2.related;

          var component = this.getUnderlyingPotencialDraggableComponent(to);
          if (!component) {
            return { component: component };
          }
          var list = component.realList;
          var context = { list: list, component: component };
          if (to !== related && list && component.getUnderlyingVm) {
            var destination = component.getUnderlyingVm(related);
            if (destination) {
              return _extends(destination, context);
            }
          }

          return context;
        },
        getVmIndex: function getVmIndex(domIndex) {
          var indexes = this.visibleIndexes;
          var numberIndexes = indexes.length;
          return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
        },
        getComponent: function getComponent() {
          return this.$slots.default[0].componentInstance;
        },
        resetTransitionData: function resetTransitionData(index) {
          if (!this.noTransitionOnDrag || !this.transitionMode) {
            return;
          }
          var nodes = this.getChildrenNodes();
          nodes[index].data = null;
          var transitionContainer = this.getComponent();
          transitionContainer.children = [];
          transitionContainer.kept = undefined;
        },
        onDragStart: function onDragStart(evt) {
          this.context = this.getUnderlyingVm(evt.item);
          evt.item._underlying_vm_ = this.clone(this.context.element);
          draggingElement = evt.item;
        },
        onDragAdd: function onDragAdd(evt) {
          var element = evt.item._underlying_vm_;
          if (element === undefined) {
            return;
          }
          removeNode(evt.item);
          var newIndex = this.getVmIndex(evt.newIndex);
          this.spliceList(newIndex, 0, element);
          this.computeIndexes();
          var added = { element: element, newIndex: newIndex };
          this.emitChanges({ added: added });
        },
        onDragRemove: function onDragRemove(evt) {
          insertNodeAt(this.rootContainer, evt.item, evt.oldIndex);
          if (this.isCloning) {
            removeNode(evt.clone);
            return;
          }
          var oldIndex = this.context.index;
          this.spliceList(oldIndex, 1);
          var removed = { element: this.context.element, oldIndex: oldIndex };
          this.resetTransitionData(oldIndex);
          this.emitChanges({ removed: removed });
        },
        onDragUpdate: function onDragUpdate(evt) {
          removeNode(evt.item);
          insertNodeAt(evt.from, evt.item, evt.oldIndex);
          var oldIndex = this.context.index;
          var newIndex = this.getVmIndex(evt.newIndex);
          this.updatePosition(oldIndex, newIndex);
          var moved = { element: this.context.element, oldIndex: oldIndex, newIndex: newIndex };
          this.emitChanges({ moved: moved });
        },
        computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
          if (!relatedContext.element) {
            return 0;
          }
          var domChildren = [].concat(_toConsumableArray(evt.to.children)).filter(function (el) {
            return el.style['display'] !== 'none';
          });
          var currentDOMIndex = domChildren.indexOf(evt.related);
          var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
          var draggedInList = domChildren.indexOf(draggingElement) != -1;
          return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
        },
        onDragMove: function onDragMove(evt, originalEvent) {
          var onMove = this.move;
          if (!onMove || !this.realList) {
            return true;
          }

          var relatedContext = this.getRelatedContextFromMoveEvent(evt);
          var draggedContext = this.context;
          var futureIndex = this.computeFutureIndex(relatedContext, evt);
          _extends(draggedContext, { futureIndex: futureIndex });
          _extends(evt, { relatedContext: relatedContext, draggedContext: draggedContext });
          return onMove(evt, originalEvent);
        },
        onDragEnd: function onDragEnd(evt) {
          this.computeIndexes();
          draggingElement = null;
        }
      }
    };
    return draggableComponent;
  }

  if (true) {
    var Sortable = __webpack_require__("./node_modules/sortablejs/Sortable.js");
    module.exports = buildDraggable(Sortable);
  } else if (typeof define == "function" && define.amd) {
    define(['sortablejs'], function (Sortable) {
      return buildDraggable(Sortable);
    });
  } else if (window && window.Vue && window.Sortable) {
    var draggable = buildDraggable(window.Sortable);
    Vue.component('draggable', draggable);
  }
})();

/***/ }),

/***/ "./resources/assets/src/components/DebtPaymentScheduleTable.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-48beca84\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/vue-data-tables/vue-data-tables.scss")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/DebtPaymentScheduleTable.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48beca84\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/DebtPaymentScheduleTable.vue")
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
Component.options.__file = "resources/assets/src/components/DebtPaymentScheduleTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48beca84", Component.options)
  } else {
    hotAPI.reload("data-v-48beca84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/src/components/PaymentPlan.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/styles/pages/projects.scss")
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./resources/assets/src/vendor/libs/spinkit/spinkit.scss")
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-442e8045\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=2!./resources/assets/src/components/PaymentPlan.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/src/components/PaymentPlan.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-442e8045\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/src/components/PaymentPlan.vue")
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
Component.options.__file = "resources/assets/src/components/PaymentPlan.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-442e8045", Component.options)
  } else {
    hotAPI.reload("data-v-442e8045", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});