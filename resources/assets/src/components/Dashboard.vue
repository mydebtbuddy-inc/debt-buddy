<template>
  <div>
    <h4 class="media align-items-center font-weight-bold py-3 mb-4">
      <img :src="`${baseUrl}img/avatars/adrien.png`" alt="" class="ui-w-50 rounded-circle">
      <div class="media-body ml-3">
        Welcome back, {{ userName }}!
        <div class="text-muted text-tiny mt-1"><small class="font-weight-normal">Today is {{ date }}</small></div>
      </div>
    </h4>

    <hr class="container-m--x mt-0 mb-4">

    <div class="row">
      <div class="d-flex col-xl-6 align-items-stretch">

        <!-- Stats + Links -->
        <b-card no-body class="d-flex w-100 mb-4">
          <div class="row no-gutters row-bordered row-border-light h-100">
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-chart-bars display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big font-weight-bolder">$1,000.00</span><br>
                  <small class="text-muted">Outstanding debt</small>
                </span>
              </a>

            </div>
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-hourglass display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big"><span class="font-weight-bolder">10</span> Months</span><br>
                  <small class="text-muted">Remain to reach your goal</small>
                </span>
              </a>

            </div>
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-checkmark-circle display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big"><span class="font-weight-bolder">1</span> Payment</span><br>
                  <small class="text-muted">Due this month</small>
                </span>
              </a>

            </div>
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-license display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big"><span class="font-weight-bolder">0</span> Payments</span><br>
                  <small class="text-muted">Missed overall</small>
                </span>
              </a>

            </div>
          </div>
        </b-card>
        <!-- / Stats + Links -->

      </div>
      <div class="d-flex col-xl-6 align-items-stretch">

        <!-- Daily progress chart -->
        <b-card no-body class="w-100 mb-4">
          <b-card-body>
            <b-btn variant="outline-primary" size="sm" class="icon-btn float-right"><i class="ion ion-md-sync"></i></b-btn>
            <div class="text-muted small">Progress</div>
            <div class="text-big">Monthly</div>
          </b-card-body>
          <div class="px-2 mt-4">
            <dashboard2-chart1 class="w-100" :height="120" />
          </div>
        </b-card>
        <!-- / Daily progress chart -->

      </div>

    </div>

    <hr class="container-m--x mt-0 mb-4">

    <h6 class="font-weight-semibold mb-4">Current Debts</h6>

    <!-- Project progress -->

    <b-card no-body class="pb-4 mb-2" v-for="debt in debts" :key="debt.id">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">{{debt.name}}</a><br>
          <small class="text-muted">{{debt.type}}</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>Status</strong> <br> {{debt.status}}
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          15 July 2018
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">{{percentCompleted(debt)}}%</div>
          <b-progress :value="percentCompleted(debt)" height="6px" />
        </div>
      </div>
    </b-card>

    <!--<b-card no-body class="pb-4 mb-2">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">Design and development</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>In Progress</strong> <br> Coding
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          19 Jan 2018 <br> 8:44
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">84%</div>
          <b-progress :value="84" height="6px" />
        </div>
      </div>
    </b-card>

    <b-card no-body class="pb-4 mb-2">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">Create the concept</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>Done</strong>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          1 Feb 2018
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">100%</div>
          <b-progress :value="100" height="6px" />
        </div>
      </div>
    </b-card>

    <b-card no-body class="pb-4 mb-4">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">SEO enchantsment</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>In Progress</strong> <br> Optimizing markup
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          12 Jan 2018 <br> 10:21
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">23%</div>
          <b-progress :value="23" height="6px" />
        </div>
      </div>
    </b-card>-->

  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('dashboard2-chart1', {
  extends: VueChartJs.Bar,
  mounted () {
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
    })
  }
})

Vue.component('dashboard2-chart2', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
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
    })
  }
})

Vue.component('dashboard2-chart3', {
  extends: VueChartJs.Doughnut,
  mounted () {
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
    })
  }
})

export default {
  name: 'dashboard',
  metaInfo: {
    title: 'Dashboard'
  },
  computed: {
    debts() {
      return this.$store.getters.debts
    },
    userName () {
      return this.$store.getters.user.name
    },
    date () {
      var date = new Date()
      
      var day = [
        'Sunday', 'Monday', 'Tuesday', 
        'Wednesday', 'Thursday', 'Friday', 'Saturday',
      ];

      var months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      return day[date.getDay()] + ', ' + date.getDate() + ' ' + 
        months[date.getMonth()] + ' ' + date.getFullYear()
    }
  },
  mounted () {
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-2', resizeCharts)
  },
  methods: {
    percentCompleted (debt) {
      var amountPaid = debt.initial_balance - debt.current_balance
      return Math.round((amountPaid / debt.initial_balance) * 100)
    },
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-2')
  }
}
</script>
