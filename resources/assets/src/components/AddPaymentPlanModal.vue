<template>
  <div>

    <!-- New Payment Plan Modal -->
    <b-modal  
      id="modals-top" 
      ref="addPaymentPlanModal"
      class="modal-top"
      title="Add New Payment Plan"
      :size="size" 
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant">

      <div slot="modal-title">
        Add New Payment Plan<br>
        <small class="text-muted">Follow the steps below to add a new payment plan</small>
      </div>

      <div slot="modal-footer" class="w-100 p-0"></div>

    </b-modal>

  </div>
</template>

<style src="@/vendor/libs/vuejs-datepicker/vuejs-datepicker.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-form-wizard/vue-form-wizard.scss" lang="scss"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
<style>
  .modal-header {
    padding: 1.25rem 2.5625rem 1.25rem 1.5625rem;
  }

  .modal-footer {
    display: none;
  }
</style>


<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import Multiselect from 'vue-multiselect'
import { FormWizard, TabContent, WizardStep } from 'vue-form-wizard'
import { required, minLength, maxLength, requiredIf } from 'vuelidate/lib/validators'

const debtTypeOptions = [
  'Mortgage', 'Student Loan', 'Auto Loan', 'Credit Card'
]

const paymentPeriodOptions = [
  { value: 'A', display: 'Annually' },
  { value: 'M', display: 'Monthly' },
  { value: 'W', display: 'Weekly' },
  { value: 'D', display: 'Daily' }
]

const interestTypeOptions = [
  { value: '0', display: 'Variable' },
  { value: '1', display: 'Fixed' }
]

const stateOptions = [
  { value: 'AL', display: 'Alabama' },
  { value: 'AK', display: 'Alaska' },
  { value: 'AZ', display: 'Arizona' },
  { value: 'AR', display: 'Arkansas' },
  { value: 'CA', display: 'California' },
  { value: 'CO', display: 'Colorado' },
  { value: 'CT', display: 'Connecticut' },
  { value: 'DE', display: 'Delaware' },
  { value: 'DC', display: 'District of Columbia' },
  { value: 'FL', display: 'Florida' },
  { value: 'GA', display: 'Georgia' },
  { value: 'HI', display: 'Hawaii' },
  { value: 'ID', display: 'Idaho' },
  { value: 'IL', display: 'Illinois' },
  { value: 'IN', display: 'Indiana' },
  { value: 'IA', display: 'Iowa' },
  { value: 'KS', display: 'Kansas' },
  { value: 'KY', display: 'Kentucky' },
  { value: 'LA', display: 'Louisiana' },
  { value: 'ME', display: 'Maine' },
  { value: 'MD', display: 'Maryland' },
  { value: 'MA', display: 'Massachusettes' },
  { value: 'MI', display: 'Michigan' },
  { value: 'MN', display: 'Minnesota' },
  { value: 'MS', display: 'Mississippi' },
  { value: 'MO', display: 'Missouri' },
  { value: 'MT', display: 'Montana' },
  { value: 'NE', display: 'Nebraska' },
  { value: 'NV', display: 'Nevada' },
  { value: 'NH', display: 'New Hampshire' },
  { value: 'NJ', display: 'New Jersey' },
  { value: 'NM', display: 'New Mexico' },
  { value: 'NY', display: 'New York' },
  { value: 'NC', display: 'North Carolina' },
  { value: 'ND', display: 'North Dakota' },
  { value: 'OH', display: 'Ohio' },
  { value: 'OK', display: 'Oklahoma' },
  { value: 'OR', display: 'Oregon' },
  { value: 'PA', display: 'pennsylvania' },
  { value: 'RI', display: 'Rhode Island' },
  { value: 'SC', display: 'South Caronlina' },
  { value: 'SD', display: 'South Dakota' },
  { value: 'TN', display: 'Tennessee' },
  { value: 'TX', display: 'Texas' },
  { value: 'UT', display: 'Utah' },
  { value: 'VT', display: 'Vermont' },
  { value: 'VA', display: 'Virginia' },
  { value: 'WA', display: 'Washington' },
  { value: 'WV', display: 'West Virginia' },
  { value: 'WI', display: 'Wisconsin' },
  { value: 'WY', display: 'Wyoming' }
]

export default {
  name: 'debt-modal',
  props: [
    'size',
    'headerBgVariant',
    'headerTextVariant',
    'bodyBgVariant',
    'bodyTextVariant',
  ],
  components: {
    Datepicker,
    FormWizard,
    TabContent,
    WizardStep,
    Multiselect
  },
  validations: {
    form: {
      debt: {
        name: {
          required,
          maxLength: maxLength(128)
        },
        type: { required },
        balance: { required },
        minPayment: { required },
        startDate: { required },
        payPeriodPrimary: { required },
        payPeriodSecondary: {
          required: requiredIf(function() {
            return this.form.debt.payPeriodPrimary
          })
        },
        payPeriodTertiary: {
          required: requiredIf(function() {
            return this.form.debt.payPeriodPrimary
          })
        }
      },
      interest: {
        rate: { required },
        fixed: { required }
      },
      lender: {
        name: { required },
        account: { required },
        phone: { required },
        address1: { required },
        city: { required },
        state: { required },
        zip: { required }
      }
    }
  },
  data: () => ({
    modalSize: 'lg',
    multiselect: {
      debtTypes: debtTypeOptions,
      paymentPeriods: paymentPeriodOptions,
      interestTypes: interestTypeOptions,
      states: stateOptions
    },
    activeFormTab: 'debt',
    form: {
      debt: {
        name: null,
        type: null,
        balance: null, 
        minPayment: null, 
        startDate: moment().toDate(),
        payPeriod: null,
        payPeriodPrimary: null,
        payPeriodSecondary: null,
        payPeriodTertiary: null
      },
      interest: {
        rate: null,
        fixed: null
      },
      lender: {
        id: null,
        name: null,
        account: null,
        phone: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null
      }
    },
    formValidation: {
      debt: {
        enabled: false,
        messages: {
          name: '',
          type: '',
          balance: '',
          minPayment: '',
          startDate: '',
          payPeriodPrimary: '',
          payPeriodSecondary: '',
          payPeriodTertiary: ''
        }
      },
      interest: {
        enabled: false,
        messages: {
          rate: '',
          fixed: ''
        }
      },
      lender: {
        enabled: false,
        messages: {
          name: '',
          account: '',
          phone: '',
          address1: '',
          city: '',
          state: '',
          zip: ''
        }
      }
    },
    statuses: {
      1: { title: 'Active', color: 'success' },
      2: { title: 'Pending', color: 'warning' }
    }
  }),
  methods: {
    addDebt: function(event) {
      var form = this.clone(this.form)

      form['debt']['balance'] = parseFloat(form['debt']['balance'].replace(/[^0-9.]/g, '')).toFixed(2)
      form['debt']['minPayment'] = parseFloat(form['debt']['minPayment'].replace(/[^0-9.]/g, '')).toFixed(2)
      form['debt']['startDate'] = this.formattedDate(form['debt']['startDate'])
      form['debt']['payPeriod'] = this.formattedPaymentPeriod()
      
      form['interest']['rate'] = parseFloat(form['interest']['rate'] / 100).toFixed(6)
      form['interest']['fixed'] = form['interest']['fixed'].value

      form['lender']['phone'] = form['lender']['phone'].replace(/[^0-9]/g, '')
      form['lender']['zip'] = form['lender']['zip'].replace(/[^0-9-]/g, '')
      form['lender']['state'] = form['lender']['state'].value

      this.$store.dispatch('addDebt', form)
        .then(response => {
          this.$refs.addDebtModal.hide()
        })
        .catch(error => {
          console.log(error)
        })
    },
    clone: function (obj) {
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    },
    beforeTabSwitch: function() {
      switch(this.activeFormTab) {
        case 'debt':
          this.setValidationMessages('debt')
          this.formValidation.debt.enabled = true

          if (this.$v.form.debt.$invalid || this.$v.form.debt.$error) break

          this.activeFormTab = 'interest'
          return true;
        case 'interest':
          this.setValidationMessages('interest')
          this.formValidation.interest.enabled = true
          
          if (this.$v.form.interest.$invalid || this.$v.form.interest.$error) break

          this.activeFormTab = 'lender'
          return true
        case 'lender':
          this.setValidationMessages('lender')
          this.formValidation.lender.enabled = true
          return !(this.$v.form.lender.$invalid || this.$v.form.lender.$error)
        default:
          console.log('Unknown active form tab')
          break;
      }

      return false
    },
    setValidationMessages: function(tabName) {
      var section = this.$v.form[tabName];
      var sectionFields = Object.keys(section.$params);
      
      sectionFields.forEach((field) => {
        var sectionField = section[field]

        Object.keys(sectionField.$params).some((param) => {
          if (!sectionField[param]) {
            switch(param) {
              case 'required':
                this.formValidation[tabName].messages[field] = 'Field required'
                return true
              case 'minLength':
                this.formValidation[tabName].messages[field] = 'Field must contain at least ' + 
                  this.$v.form[tabName][field].$params.minLength.min +
                  ' characters'
                return true
              case 'maxLength':
                this.formValidation[tabName].messages[field] = 'Field must contain fewer than ' + 
                  this.$v.form[tabName][field].$params.maxLength.max +
                  ' characters'
                return true
            }
          }
        })
      })
    },
    moneyFormat: function(value, event) {
      return parseFloat(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    formattedPaymentPeriod: function () {
      if (this.form.debt.payPeriodPrimary === null) return ''

      if (['A', 'D'].includes(this.form.debt.payPeriodPrimary.value)) {
        return this.form.debt.payPeriodPrimary.value
      }
      
      return this.form.debt.payPeriodPrimary.value + 
        this.form.debt.payPeriodSecondary.value + 
        this.form.debt.payPeriodTertiary.value
    },
    formattedDate: function (date) {
      if (date === null) return null;

      var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
  },
  computed: {
    showExtraPeriodOptions: function () {
      return this.form.debt.payPeriodPrimary ? 
        ['W', 'M'].includes(this.form.debt.payPeriodPrimary.value) :
        false
    },
    secondaryPeriodLabel: function () {
      if (this.form.debt.payPeriodPrimary === null) return ''

      switch (this.form.debt.payPeriodPrimary.value) {
        case 'M':
          return 'Monthly Frequency';
        case 'W':
          return 'Weekly Frequency';
        default:
          return '';
      }
    },
    tertiaryPeriodLabel: function () {
      if (this.form.debt.payPeriodPrimary === null) return ''

      switch (this.form.debt.payPeriodPrimary.value) {
        case 'M':
          return 'Day of Month';
        case 'W':
          return 'Day of Week';
        default:
          return '';
      }
    },
    payPeriodOpt2: function () {
      if (this.form.debt.payPeriodPrimary === null) return []

      switch (this.form.debt.payPeriodPrimary.value) {
        case 'M':
          return [
            { value: '1M', display: '1 Month' },
            { value: '2M', display: '2 Months' },
            { value: '3M', display: '3 Months' },
            { value: '4M', display: '4 Months' },
            { value: '5M', display: '5 Months' },
            { value: '6M', display: '6 Months' },
          ];
        case 'W':
          return [
            { value: '1W', display: '1 Week' },
            { value: '2W', display: '2 Weeks' },
            { value: '3W', display: '3 Weeks' },
          ];
        default:
          return [];
      }
    },
    payPeriodOpt3: function () {
      if (this.form.debt.payPeriodPrimary === null) return []

      switch (this.form.debt.payPeriodPrimary.value) {
        case 'M':
          return [
            { value: '1', display: '1st' },
            { value: '2', display: '2nd' },
            { value: '3', display: '3rd' },
            { value: '4', display: '4th' },
            { value: '5', display: '5th' },
            { value: '6', display: '6th' },
            { value: '7', display: '7th' },
            { value: '8', display: '8th' },
            { value: '9', display: '9th' },
            { value: '10', display: '10th' },
            { value: '11', display: '11th' },
            { value: '12', display: '12th' },
            { value: '13', display: '13th' },
            { value: '14', display: '14th' },
            { value: '15', display: '15th' },
            { value: '16', display: '16th' },
            { value: '17', display: '17th' },
            { value: '18', display: '18th' },
            { value: '19', display: '19th' },
            { value: '20', display: '20th' },
            { value: '21', display: '21st' },
            { value: '22', display: '22nd' },
            { value: '23', display: '23rd' },
            { value: '24', display: '24th' },
            { value: '25', display: '25th' },
            { value: '26', display: '26th' },
            { value: '27', display: '27th' },
            { value: '28', display: '28th' },
            { value: '29', display: '29th' },
            { value: '30', display: '30th' },
            { value: '31', display: '31st' },
          ];
        case 'W':
          return [
            { value: 'M', display: 'Monday' },
            { value: 'T', display: 'Tuesday' },
            { value: 'W', display: 'Wednesday' },
            { value: 'H', display: 'Thursday' },
            { value: 'F', display: 'Friday' },
            { value: 'S', display: 'Saturday' },
            { value: 'U', display: 'Sunday' },
          ];
        default:
          return [];
      }
    }
  }
}
</script>
