<template>
  <div class="debt-dashboard">

    <!-- New Debt Modal -->
    <AddDebtModal 
      size="lg"
      headerBgVariant="dark"
      headerTextVariant="light"
      bodyBgVariant="light"
      bodyTextVariant="dark">
    </AddDebtModal>
    <!-- / New Debt Modal -->

    <!-- Head block -->
    <h4 class="d-flex flex-wrap justify-content-between align-items-center w-100 font-weight-bold pt-2 mb-4">
      <div class="col-12 col-md px-0 pb-2">
        <h2>Debt Dashboard</h2>
        <b-btn size="sm" variant="outline-danger" v-b-modal.modals-top>Add Debt</b-btn>
        <b-btn size="sm" variant="outline-primary" @click="$router.push({path: '/payment-plan'})">View Debt Repayment Plan</b-btn>
      </div>
      <div class="col-12 col-md-3 px-0 pb-2">
        <b-input v-model="filters.name" placeholder="Search..." />
      </div>
    </h4>

    <ul class="nav-sorter nav bg-lighter container-p-x py-1 container-m--x mb-4">
      <li class="nav-item" v-for="(debtTypeFilter, type) in filters.types" :key="type">
        <a 
          class="nav-link pl-0" 
          :class="{ selected: debtTypeFilter.selected, 'text-muted': !debtTypeFilter.selected }" 
          href="javascript:void(0)" 
          @click="setFilterDebtType(type)">
            {{ type }}
          </a>
      </li>
    </ul>
    <!-- / Head block -->

    <!-- No debts jumbotron -->
    <b-jumbotron 
      class="col text-center"
      v-if="debtCount == 0" 
      header="Ah, To Be Debt Free!" 
      lead="You do not have any outstanding debts entered">
      <b-btn variant="danger" v-b-modal.modals-top>Click Here To Add A Debt</b-btn>
    </b-jumbotron>
    <!-- / No debts jumbotron -->

    <div class="row">

      <!-- Debts -->
      <div v-for="debt in filteredDebts" :key="debt.id" class="col-sm-6 col-xl-4">
        <b-card no-body class="mb-4">

          <b-card-body class="d-flex justify-content-between align-items-start pb-3">
            <div>
              <a href="javascript:void(0)" class="text-dark text-big font-weight-semibold">{{ debt.name }}</a>
              <div class="text-muted small mt-1">{{ debt.type }}</div>
            </div>
            
            <!--<b-check />-->

            <!--<b-dropdown variant="default icon-btn borderless btn-round md-btn-flat hide-arrow" size="sm" :right="!isRTL">
              <template slot="button-content">
                <i class="ion ion-ios-more"></i>
              </template>
              <b-dropdown-item href="javascript:void(0)">View</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
            </b-dropdown>-->
          </b-card-body>

          <b-progress :value="percentCompleted(debt)" height="3px" class="rounded-0" />
          <div class="card-body small pt-2 pb-0" v-if="paymentPlan">
            <strong>{{percentCompleted(debt)}}%</strong> completed
          </div>

          <b-card-body class="pb-3">
            <span v-if="!paymentPlan">No payment plan found</span>
            <span v-else>Paid on the {{formatBillDay(debt.payment_period)}} of every month</span>
          </b-card-body>

          <b-card-body class="pt-0">
            <div class="row">
              <div class="col">
                <div class="text-muted small">Start Balance</div>
                <div class="font-weight-bold">{{ formatMoney(debt.initial_balance) }}</div>
              </div>
              <div class="col">
                <div class="text-muted small">Interest Rate</div>
                <div class="font-weight-bold">{{ formatInterest(debt.interest_rates[0].rate) }}</div>
              </div>
              <div class="col">
                <div class="text-muted small">Current Balance</div>
                <div class="font-weight-bold">{{ formatMoney(debt.current_balance) }}</div>
              </div>
            </div>
          </b-card-body>
          <span v-if="paymentPlan">
            <hr class="m-0">

            <b-card no-body>
              <b-card-header class="text-center">
                <a class="d-flex justify-content-between text-dark" href="javascript:void(0)" v-b-toggle.accordion2-1>
                  Payment Plan Savings
                  <div class="collapse-icon"></div>
                </a>
              </b-card-header>
              <b-collapse id="accordion2-1" accordion="accordion2">
                <b-card-body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </b-card-body>
              </b-collapse>
            </b-card>
          </span>
        </b-card>
      </div>
      <!-- / Debts -->
      
    </div>

  </div>
</template>

<style scoped>
ul.nav-sorter {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.nav-sorter li {
  display: inline-block;
}

.custom-checkbox.custom-control-inline {
  margin: 0px;
}

.selected {
  color: #4E5155 !important;
  font-weight: 700 !important
}
</style>

<script>
import AddDebtModal from './AddDebtModal'

export default {
  name: 'debt-dashboard',
  metaInfo: {
    title: 'Debt Dashboard'
  },
  components: {
    AddDebtModal
  },
  data: () => ({
    filters: {
      name: '',
      type: 'All',
      types: {
        'All': {
          selected: true
        },
        'Mortgages': {
          selected: false
        },
        'Student Loans': {
          selected: false
        },
        'Auto Loans': {
          selected: false
        },
        'Credit Cards': {
          selected: false
        }
      }
    },
  }),
  computed: {
    paymentPlan() {
      return this.$store.getters.plan !== null
    },
    debtCount() {
      return this.$store.getters.debts.length
    },
    filteredDebts() {
      return this.$store.getters.debts.filter(debt => {
        if (this.filters.type.includes("All")) {
          return true
        }

        return this.filters.type.includes(debt.type)
      }).filter(typeFilteredDebt => {
        return typeFilteredDebt.name.toLowerCase().includes(this.filters.name.toLowerCase())
      })
    }
  },
  methods: {
    percentCompleted (debt) {
      if (debt.payment_plan) {
        var amountPaid = debt.initial_balance - debt.current_balance
        return Math.round((amountPaid / debt.initial_balance) * 100)
      }

      return 0
    },
    setFilterDebtType(type) {
      Object.keys(this.filters.types).forEach(debtTypeFilter => {
        if (type.includes(debtTypeFilter)) {
          this.filters.types[debtTypeFilter].selected = true
          this.filters.type = debtTypeFilter
        } else {
          this.filters.types[debtTypeFilter].selected = false
        }
      });
    },
    formatMoney(amount) {
      return '$' + String(amount.toFixed(2)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
    formatDate(date) {
      if (date) {
        var date = new Date(date)
        return date.toLocaleDateString('en-US');
      }

      return 'TBD'
    },
    formatInterest(rate) {
      return (parseFloat(rate, 2) * 100).toFixed(2) + '%'
    },
    formatBillDay(payPeriod) {
      switch(payPeriod.substring(3)) {
        case '1': return '1st'
        case '2': return '2nd'
        case '3': return '3rd'
        case '4': return '4th'
        case '5': return '5th'
        case '6': return '6th'
        case '7': return '7th'
        case '8': return '8th'
        case '9': return '9th'
        case '10': return '10th'
        case '11': return '11th'
        case '12': return '12th'
        case '13': return '13th'
        case '14': return '14th'
        case '15': return '15th'
        case '16': return '16th'
        case '17': return '17th'
        case '18': return '18th'
        case '19': return '19th'
        case '20': return '20th'
        case '21': return '21st'
        case '22': return '22nd'
        case '23': return '23rd'
        case '24': return '24th'
        case '25': return '25th'
        case '26': return '26th'
        case '27': return '27th'
        case '28': return '28th'
        case '29': return '29th'
        case '30': return '30th'
        case '31': return '31st'
      }
    }
  }
}
</script>
