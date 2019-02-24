<template>
  <div>

    <BlockUI message="" :html="page.loadingHTML" v-if="page.loading" />

    <!-- Head block -->
    <h4 class="d-flex flex-wrap justify-content-between align-items-center w-100 font-weight-bold pt-2 mb-4">
      <div class="col-12 col-md px-0 pb-2">
        <h2 class="mb-0">Payment Plan</h2>
      </div>
    </h4>

    <div class="border-right-0 border-left-0 ui-bordered container-m--x mb-4">
      <div class="row no-gutters row-bordered row-border-light" v-if="page.showPaymentPlan">
        <div class="col-md-9">
          <div class="media-body container-p-x py-4">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <div><strong class="text-primary text-large">{{ completedPercent(plan.initialBalance, plan.currentBalance) }}%</strong> completed</div>
              <div class="text-muted small">{{ plan.remainingPayments }} payments remaining</div>
            </div>
            <b-progress :value="completedPercent(plan.initialBalance, plan.currentBalance)" height="4px" />
          </div>
        </div>
        <div class="col-md-3">
          <div class="container-p-x py-4">
            <div class="text-muted small">Status</div>
            <strong class="text-big" :class="`text-${statuses[projectData.status].color}`">{{statuses[projectData.status].title}}</strong>
          </div>
        </div>
      </div>
    </div>
    <!-- / Head block -->

    <b-jumbotron 
      class="col text-center"
      v-if="!page.showPaymentPlan" 
      header="Debt Repayment Plan Not Started" 
      lead="Please enter a DebtCelerator amount below to get started">
      <div class="mb-4 col-md-2 offset-md-5">
        <b-input-group prepend="$">
          <b-form-input 
            placeholder="DebtCelerator Amount"
            lazy-formatter 
            v-model="plan.debtCelerator" />
        </b-input-group>
      </div>
      <b-btn variant="primary" @click="calculatePaymentPlan">Calculate Payment Plan</b-btn>
    </b-jumbotron>

    <div class="row" v-if="page.showPaymentPlan">
      <div class="col">

        <!-- Description -->
        <b-card header="Description" header-tag="h6" class="mb-4">
          <div v-html="plan.description"></div>
        </b-card>
        <!-- / Description -->

        <!-- Attached files -->
        <!--]<b-card v-if="projectData.attachments && projectData.attachments.length" header="Attached files" header-tag="h6" body-class="p-3" class="mb-4">
          <div class="row no-gutters">
            <div v-for="attachment in projectData.attachments" :key="attachment.path" class="col-md-6 col-lg-12 col-xl-6 p-1">

              <div class="project-attachment ui-bordered p-2">
                <div v-if="isImage(attachment)" :style="{'background-image': `url(${baseUrl}${attachment.path})`}" class="project-attachment-img"></div>
                <div v-if="isFile(attachment)" class="project-attachment-file display-4"><i :class="fileIcon(attachment)"></i></div>

                <div class="media-body ml-3">
                  <strong class="project-attachment-filename">{{attachment.name}}</strong>
                  <div class="text-muted small">{{attachment.size}}</div>
                  <div>
                    <span v-if="isImage(attachment)"><a href="javascript:void(0)">View</a> &nbsp;</span>
                    <a href="javascript:void(0)">Download</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </b-card>-->
        <!-- / Attached files -->

        <!-- Tabs -->
        <b-tabs class="nav-tabs-top mb-4">
          <!--<b-tab title="Tasks" active>

            <div v-for="(section, index) in projectData.taskSections" :key="section.title">
              <b-card-body>
                <p class="text-muted small">{{section.title}}</p>
                <draggable v-model="section.tasks" :options="draggableOptions" class="project-task-list custom-controls-stacked">

                  <div v-for="task in section.tasks" :key="task.text" class="project-task-item">

                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" :checked="task.completed" @click="task.completed = !task.completed">
                      <span class="custom-control-label">{{task.text}}</span>
                      <span v-if="task.tags && task.tags.length">
                        <span v-for="tag in task.tags" :key="tag" :class="`badge-${taskTags[tag].color}`" class="badge font-weight-normal ml-2">{{taskTags[tag].title}}</span>
                      </span>
                      <b-badge v-if="task.left" variant="outline-default" class="ui-todo-badge font-weight-normal ml-2">{{task.left}} left</b-badge>
                    </label>

                    <div class="d-flex align-items-center float-right">
                      <div class="project-task-handle ion ion-ios-move text-lightest small mr-3"></div>

                      <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="task-list-actions" :right="!isRTL">
                        <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                        <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                        <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
                      </b-dropdown>
                    </div>

                  </div>

                </draggable>
              </b-card-body>
              <hr class="m-0" v-if="index !== (projectData.taskSections.length - 1)">
            </div>

            <b-card-footer class="py-3">
              <b-btn variant="primary"><i class="ion ion-md-add"></i>&nbsp; Add task</b-btn>&nbsp;
              <b-btn variant="default md-btn-flat"><i class="ion ion-md-close"></i>&nbsp; Clear</b-btn>
            </b-card-footer>

          </b-tab>-->
          <b-tab title="DebtBuddy Payment Plan">
            <b-card-body>

              <DebtPaymentScheduleTable :data="plan.debtSchedule"></DebtPaymentScheduleTable>

            </b-card-body>
          </b-tab>
          <b-tab title="Original Payment Plan">
            <b-card-body>

              <DebtPaymentScheduleTable :data="plan.debtScheduleOriginal"></DebtPaymentScheduleTable>

            </b-card-body>
          </b-tab>
          <!--<b-tab title="Activity">
            <b-card-body>

              <div v-for="activity in projectData.activities" :key="activity.type + activity.date + activity.user.name" class="media pb-1 mb-3">
                <div class="ui-feed-icon-container">
                  <span v-if="activity.type === 'new_task'" class="ui-icon ui-feed-icon ion ion-md-add bg-primary text-white"></span>
                  <span v-if="activity.type === 'pushed_commit'" class="ui-icon ui-feed-icon ion ion-md-code bg-warning text-dark"></span>
                  <span v-if="activity.type === 'completed_task'" class="ui-icon ui-feed-icon ion ion-md-checkmark bg-success text-white"></span>
                  <span v-if="activity.type === 'new_participant'" class="ui-icon ui-feed-icon ion ion-md-contact bg-info text-white"></span>

                  <img :src="`${baseUrl}img/avatars/${activity.user.avatar}`" class="ui-w-40 rounded-circle" alt>
                </div>
                <div class="media-body align-self-center ml-3">
                  <div v-if="activity.type === 'new_task'"><a href="javascript:void(0)">{{activity.user.name}}</a> added new task <strong>{{activity.data.taskTitle}}</strong></div>
                  <div v-if="activity.type === 'pushed_commit'"><a href="javascript:void(0)">{{activity.user.name}}</a> pushed commit <strong>#{{activity.data.commitId}}</strong></div>
                  <div v-if="activity.type === 'completed_task'"><a href="javascript:void(0)">{{activity.user.name}}</a> completed task <strong>{{activity.data.taskTitle}}</strong></div>
                  <div v-if="activity.type === 'new_participant'"><a href="javascript:void(0)">{{activity.user.name}}</a> assigned new participant <a href="javascript:void(0)"><strong>{{activity.data.userName}}</strong></a></div>

                  <div class="text-muted small">{{activity.date}} ago</div>
                </div>
              </div>

            </b-card-body>
          </b-tab>-->
        </b-tabs>
        <!-- / Tabs -->

      </div>
      <div class="col-md-4 col-xl-3">

        <!-- Project details -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Plan details</b-card-header>
          <b-list-group :flush="true">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">DebtCelerator</div>
              <div>
                <b-input-group prepend="$">
                  <b-form-input 
                    class="no-border"
                    style="font-weight: bolder"
                    placeholder="DebtCelerator Amount"
                    :formatter="moneyFormat"
                    lazy-formatter 
                    v-model="plan.debtCelerator" />
                </b-input-group>
              </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Total Debts</div>
              <div><strong>{{ plan.debtCount }}</strong></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Current Debt Balance</div>
              <div><strong>${{ moneyFormat(plan.totalDebtBalance) }}</strong></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Plan Start Date</div>
              <div><strong>{{ plan.startDate }}</strong></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Estimated Plan End Date</div>
              <div><strong>{{ plan.estimatedEndDate }}</strong></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Estimated Interest Saved</div>
              <div><strong>${{ moneyFormat(plan.interestSaved) }}</strong></div>
            </b-list-group-item>
          </b-list-group>
        </b-card>
        <!-- / Project details -->

        <!-- Leaders -->
        <!--<b-card no-body class="mb-4">
          <b-card-header header-class="h6" class="with-elements">
            <span class="card-header-title">Leaders</span>
            <div class="card-header-elements ml-auto">
              <b-btn variant="outline-primary btn-xs"><i class="ion ion-md-add"></i> Add</b-btn>
            </div>
          </b-card-header>
          <b-list-group :flush="true">
            <div v-for="leader in projectData.leaders" :key="leader.name" class="list-group-item">
              <div class="media align-items-center">
                <img :src="`${baseUrl}img/avatars/${leader.avatar}`" class="d-block ui-w-30 rounded-circle" alt="">
                <div class="media-body px-2">
                  <a href="javascript:void(0)" class="text-dark">{{leader.name}}</a>
                </div>
                <a href="javascript:void(0)" class="d-block text-light text-large font-weight-light">&times;</a>
              </div>
            </div>
          </b-list-group>
        </b-card>-->
        <!-- / Leaders -->

        <!-- Participants -->
        <!--<b-card no-body class="mb-4">
          <b-card-header header-class="h6" class="with-elements">
            <span class="card-header-title">Participants</span>
            <div class="card-header-elements ml-auto">
              <b-btn variant="outline-primary btn-xs"><i class="ion ion-md-add"></i> Add</b-btn>
            </div>
          </b-card-header>
          <b-list-group :flush="true">
            <li v-for="member in projectData.team" :key="member.name" class="list-group-item">
              <div class="media align-items-center">
                <img :src="`${baseUrl}img/avatars/${member.avatar}`" class="d-block ui-w-30 rounded-circle" alt="">
                <div class="media-body px-2">
                  <a href="javascript:void(0)" class="text-dark">{{member.name}}</a>
                </div>
                <a href="javascript:void(0)" class="d-block text-light text-large font-weight-light">&times;</a>
              </div>
            </li>
          </b-list-group>
        </b-card>-->
        <!-- / Participants -->

      </div>
    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/projects.scss" lang="scss"></style>
<style src="@/vendor/libs/spinkit/spinkit.scss" lang="scss"></style>

<style>
  .loading-container .loading-backdrop {
    background: #fff !important;
    opacity: .7 !important;
  }
  .loading-container .loading {
    background: none !important;
    box-shadow: none !important;
  }

  .no-border {
    border: 0px !important;
  }
</style>

<script>
import DebtPaymentScheduleTable from './DebtPaymentScheduleTable'
import draggable from 'vuedraggable'

class Debt {
  constructor(debt) {
    this.id = debt.id
    this.name = debt.name
    this.type = debt.type
    this.balance = parseFloat(debt.current_balance)
    this.minPayment = parseFloat(debt.minimum_payment)
    this.interestRate = parseFloat(debt.interest_rates[0].rate)
    this.payPeriod = debt.payment_period
    this.startDate = debt.start_date
    this.lender = debt.lender.name
    this.paymentSchedule = []
  }
}

export default {
  name: 'payment-plan',
  metaInfo: {
    title: 'Payment Plan'
  },
  components: {
    draggable,
    DebtPaymentScheduleTable
  },
  mounted() {
    setTimeout(() => { 
      var plan = this.$store.getters.plan
      
      if (plan) {
        this.plan.initialBalance = plan.payment_plan.combined.total_initial_debt_balance
        this.plan.currentBalance = plan.payment_plan.combined.total_current_debt_balance
        this.plan.debtSchedule = plan.payment_plan.combined.billing_dates
        this.plan.debtScheduleOriginal = plan.no_payment_plan.combined.billing_dates
        this.plan.debtCelerator = plan.payment_plan.combined.debtcelerator;
        this.plan.startDate = plan.payment_plan.combined.start_date;
        this.plan.estimatedEndDate = plan.payment_plan.combined.finish_date;
        this.plan.interestSaved = plan.no_payment_plan.combined.total_interest_paid - plan.payment_plan.combined.total_interest_paid;
        this.plan.debtCount = plan.payment_plan.combined.total_debts;
        this.plan.totalDebtBalance = plan.payment_plan.combined.total_current_debt_balance;
        this.page.showPaymentPlan = true

        const today = new Date()

        this.plan.remainingPayments = plan.payment_plan.combined.billing_dates.filter((dates) => {
            return Date.parse(dates.payment_date) > today;
        }).length;
      }
    }, 500);
  },
  data: () => ({
    page: {
      loading: false,
      loadingHTML: `
        <div class="sk-folding-cube sk-primary">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
        <h5 class="text-center mb-0">LOADING...</h5>`,
      showPaymentPlan: false,
    },
    plan: {
      description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra turpis non aliquet ornare. Duis euismod ultricies est sed auctor. Sed luctus accumsan enim ut efficitur.</p>
      `,
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

      description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>
      <p>Proin imperdiet purus et lectus luctus, rutrum fermentum lorem molestie. Nam urna felis, elementum elementum placerat id, fermentum ac urna. Etiam libero sem, porttitor ultrices efficitur condimentum, lobortis sit amet enim. Sed vitae orci nulla.</p>
      <p>Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p>Aliquam ornare nisl semper nisl porttitor commodo vel vel libero. Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui. Vestibulum ac lacinia massa. Phasellus eget purus nisi. Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero. Aliquam mattis erat ut diam viverra, quis iaculis sem pulvinar. Vivamus ut mi vitae arcu finibus convallis. Nulla turpis lacus, tempor et sagittis non, egestas nec ante.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra turpis non aliquet ornare. Duis euismod ultricies est sed auctor. Sed luctus accumsan enim ut efficitur.</p>
      `,

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

      leaders: [
        { avatar: '1-small.png', name: 'Mike Greene' }
      ],

      team: [
        { avatar: '2-small.png', name: 'Leon Wilson' },
        { avatar: '3-small.png', name: 'Allie Rodriguez' },
        { avatar: '4-small.png', name: 'Kenneth Frazier' },
        { avatar: '5-small.png', name: 'Nellie Maxwell' }
      ],

      attachments: [
        { name: 'image_1.jpg', size: '527KB', path: 'img/bg/5.jpg' },
        { name: 'image_2.jpg', size: '269KB', path: 'img/bg/6.jpg' },
        { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
        { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
      ],

      taskSections: [{
        title: 'Frontend',
        tasks: [
          { text: 'Update User profile page', tags: ['other'], completed: false },
          { text: 'Add images to the product gallery', completed: false },
          { text: 'Create invoice template', completed: false }
        ]
      }, {
        title: 'Backend',
        tasks: [
          { text: 'New blog layout', tags: ['clients'], completed: false },
          { text: 'Create UI design model', completed: false },
          { text: 'Help Web devs with HTML integration', completed: false },
          { text: 'New icons set for an iOS app', completed: false },
          { text: 'Create ad campaign banners set', completed: false },
          { text: 'Edit the draft for the icons', completed: false },
          { text: 'Fix validation issues and commit', tags: ['important'], completed: false },
          { text: 'Support tickets list doesn\'t support commas', completed: false }
        ]
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
  }),
  methods: {
    blockPage () {
      this.page.loading = true
    },
    unblockPage () {
      this.page.loading = false
    },
    formatDate (date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;

      var strTime = hours + ':' + minutes + ' ' + ampm;

      return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    },
    moneyFormat: function(value) {
      return parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    calculatePaymentPlan() {
      if (this.plan.debtCelerator === null || this.plan.debtCelerator === "") return

      this.page.loading = true

      this.$store.dispatch('calculatePaymentPlan', this.plan.debtCelerator)
        .then(response => {
          this.plan.startDate = response.data.payment_plan.combined.start_date;
          this.plan.estimatedEndDate = response.data.payment_plan.combined.finish_date;
          this.plan.interestSaved = response.data.no_payment_plan.combined.total_interest_paid - response.data.payment_plan.combined.total_interest_paid;
          this.plan.debtCount = response.data.payment_plan.combined.total_debts;
          this.plan.totalDebtBalance = response.data.payment_plan.combined.total_debt_balance;
          this.plan.debtSchedule = response.data.payment_plan.combined.billing_dates;
          this.plan.debtScheduleOriginal = response.data.no_payment_plan.combined.billing_dates;
          this.page.showPaymentPlan = true;
          this.page.loading = false
        })
        .catch(error => {
          console.log(error)
          this.page.loading = false
        })
    },
    calculate () {
      this.blockPage()

      if (this.debts === undefined || this.debts.length == 0 || this.debtcelerator === null || this.debtcelerator === "") {
        this.showPaymentPlan = false
        this.unblockPage()
        return
      }

      this.showPaymentPlan = true

      this.unblockPage()
    },
    completedPercent (total, paid) {
      return Math.round(((total - paid) / total) * 100)
    },
    isImage (file) {
      return /\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    isFile (file) {
      return !/\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    fileIcon (file) {
      let icon = 'far fa-file'

      if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = 'far fa-file-archive'
      if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = 'far fa-file-audio'
      if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = 'far fa-file-video'
      if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = 'fab fa-js'
      if (/\.doc$|\.docx$/i.test(file.name)) icon = 'far fa-file-word'
      if (/\.htm$|\.html$/i.test(file.name)) icon = 'fab fa-html5'
      if (/\.pdf$/i.test(file.name)) icon = 'far fa-file-pdf'
      if (/\.txt$/i.test(file.name)) icon = 'far fa-file-alt'
      if (/\.css$/i.test(file.name)) icon = 'fab fa-css3'

      return icon
    },
    priorityDropdownVariant (priority) {
      let variant

      if (priority === 1) variant = 'danger'
      if (priority === 2) variant = 'success'
      if (priority === 3) variant = 'warning'

      return `${variant} btn-xs md-btn-flat`
    }
  }
}
</script>
