<template>
  <div>

    <!-- New Debt Modal -->
    <b-modal  
      id="modals-top" 
      ref="addDebtModal"
      class="modal-top"
      title="Add New Debt"
      :size="size" 
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant">

      <div slot="modal-title">
        Add New Debt<br>
        <small class="text-muted">Follow the steps below to add a new debt.</small>
      </div>

      <form-wizard class="form-wizard-boxed-steps">
        <!-- Allow html in tab title (this template required for the proper styling) -->
        <template slot="step" slot-scope="props">
          <wizard-step 
            :tab="props.tab" 
            @click.native="props.navigateToTab(props.index)" 
            @keyup.enter.native="props.navigateToTab(props.index)" 
            :transition="props.transition" 
            :index="props.index">

            <span 
              slot="title" 
              :class="{'text-danger'
              :props.tab.validationError}" 
              v-html="props.tab.title">
            </span>
            
          </wizard-step>
        </template>
        <!-- / -->

        <tab-content title="<div class='small text-muted'>FIRST STEP</div>Debt Information" :before-change="beforeTabSwitch">
          <b-card class="mb-3">
            <b-form-row>
              <b-form-group label="Debt Name" class="col-md-6 mb-3" :feedback="formValidation.debt.messages.name">
                <b-input  
                  placeholder="Name of debt" 
                  v-model.trim="form.debt.name" 
                  :state="(formValidation.debt.enabled && $v.form.debt.name.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
              <b-form-group 
                label="Account Type" 
                class="col-md-6 mb-3" 
                :feedback="formValidation.debt.messages.type"
                :state="(formValidation.debt.enabled && $v.form.debt.type.$invalid) ? 'invalid' : 'null'">
                <multiselect
                  v-model.trim="form.debt.type" 
                  :options="multiselect.debtTypes"
                  :searchable="false"
                  :show-labels="false" 
                  :class="(formValidation.debt.enabled && $v.form.debt.type.$invalid) ? 'is-invalid' : 'null'" />
              </b-form-group>
            </b-form-row>
            <b-form-row>
              <b-form-group 
                label="Starting Balance" 
                class="col-md-4 mb-3" 
                :feedback="formValidation.debt.messages.startBalance" 
                :state="(formValidation.debt.enabled && $v.form.debt.startBalance.$invalid) ? 'invalid' : 'null'">
                <b-input-group prepend="$">
                  <b-form-input 
                    placeholder="Starting debt balance"
                    v-model.trim="form.debt.startBalance" 
                    :formatter="moneyFormat"
                    lazy-formatter 
                    :state="(formValidation.debt.enabled && $v.form.debt.startBalance.$invalid) ? 'invalid' : 'null'" />
                </b-input-group>
              </b-form-group>
              <b-form-group 
                label="Current Balance" 
                class="col-md-4 mb-3" 
                :feedback="formValidation.debt.messages.currentBalance" 
                :state="(formValidation.debt.enabled && $v.form.debt.currentBalance.$invalid) ? 'invalid' : 'null'">
                <b-input-group prepend="$">
                  <b-form-input 
                    placeholder="Current debt balance"
                    v-model.trim="form.debt.currentBalance" 
                    :formatter="moneyFormat"
                    lazy-formatter 
                    :state="(formValidation.debt.enabled && $v.form.debt.currentBalance.$invalid) ? 'invalid' : 'null'" />
                </b-input-group>
              </b-form-group>
              <b-form-group 
                label="Minimum Payment Amount" 
                class="col-md-4 mb-3" 
                :feedback="formValidation.debt.messages.minPayment"
                :state="(formValidation.debt.enabled && $v.form.debt.minPayment.$invalid) ? 'invalid' : 'null'">
                <b-input-group prepend="$">
                  <b-form-input 
                    placeholder="Minimum payment amount"
                    v-model.trim="form.debt.minPayment" 
                    :formatter="moneyFormat"
                    lazy-formatter  
                    :state="(formValidation.debt.enabled && $v.form.debt.minPayment.$invalid) ? 'invalid' : 'null'" />
                </b-input-group>
              </b-form-group>
            </b-form-row>
            <b-form-row>
              <b-form-group 
                label="Start Date" 
                class="col-md mb-3" 
                :feedback="formValidation.debt.messages.startDate"
                :state="(formValidation.debt.enabled && $v.form.debt.startDate.$invalid) ? 'invalid' : 'null'">
                <datepicker
                  placeholder="Date of first payment"
                  v-model.trim="form.debt.startDate" 
                  :bootstrapStyling="true"
                  :monday-first="true"
                  :full-month-name="true"
                  :calendar-button="true"
                  calendar-button-icon="ion ion-md-calendar"
                  :clear-button="true"  
                  :state="(formValidation.debt.enabled && $v.form.debt.startDate.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
              <b-form-group 
                label="Day To Bill" 
                class="col-md mb-3"
                :feedback="formValidation.debt.messages.dayToBill"
                :state="(formValidation.debt.enabled && $v.form.debt.dayToBill.$invalid) ? 'invalid' : 'null'">
                <multiselect
                  label="display"
                  track-by="value"
                  v-model.trim="form.debt.dayToBill" 
                  :options="multiselect.daysOfMonth"
                  :searchable="false"
                  :show-labels="false"  
                  :class="(formValidation.debt.enabled && $v.form.debt.dayToBill.$invalid) ? 'is-invalid' : 'null'" />
              </b-form-group>
            </b-form-row>
          </b-card>
        </tab-content>
        <tab-content title="<div class='small text-muted'>SECOND STEP</div>Interest Information" :before-change="beforeTabSwitch">
          <b-card class="mb-3">
            <b-form-row class="mt-3">
              <b-form-group 
                label="Interest Rate" 
                class="col-md-6 mb-3"
                :state="(formValidation.interest.enabled && $v.form.interest.rate.$invalid) ? 'invalid' : 'null'">
                <b-input-group append="%">
                  <b-form-input 
                    placeholder="Interest rate on debt"
                    v-model.trim="form.interest.rate"
                    :state="(formValidation.interest.enabled && $v.form.interest.rate.$invalid) ? 'invalid' : 'null'" />
                </b-input-group>
              </b-form-group>
              <b-form-group 
                label="Interest Type" 
                class="col-md-6 mb-3"
                :state="(formValidation.interest.enabled && $v.form.interest.fixed.$invalid) ? 'invalid' : 'null'">
                <multiselect
                  label="display"
                  track-by="value"
                  v-model.trim="form.interest.fixed" 
                  :options="multiselect.interestTypes"
                  :searchable="false"
                  :show-labels="false"  
                  :class="(formValidation.interest.enabled && $v.form.interest.fixed.$invalid) ? 'is-invalid' : 'null'" />
              </b-form-group>
            </b-form-row>
          </b-card>
        </tab-content>
        <tab-content title="<div class='small text-muted'>THIRD STEP</div>Lender Information" :before-change="beforeTabSwitch">
          <b-card class="mb-3">
            <b-form-row class="mt-3">
              <b-form-group label="Lender Name" class="col mb-3">
                <b-input 
                  placeholder="Name of lender"
                  v-model.trim="form.lender.name" 
                  :state="(formValidation.lender.enabled && $v.form.lender.name.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
            </b-form-row>
            <b-form-row class="mt-3">
              <b-form-group label="Account Number" class="col mb-3">
                <b-input 
                  placeholder="Account number with lender" 
                  v-model="form.lender.account"
                  :state="(formValidation.lender.enabled && $v.form.lender.account.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
              <b-form-group label="Lender Phone" class="col mb-3">
                <b-input 
                  placeholder="Lender's phone number" 
                  v-model="form.lender.phone"
                  :state="(formValidation.lender.enabled && $v.form.lender.phone.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
            </b-form-row>
            <b-form-row class="mt-3">
              <b-form-group label="Address Line 1" class="col mb-3">
                <b-input 
                  placeholder="Lender's address (line 1)" 
                  v-model="form.lender.address1"
                  :state="(formValidation.lender.enabled && $v.form.lender.address1.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
              <b-form-group label="Address Line 2" class="col mb-3">
                <b-input 
                  placeholder="Lender's address (line 2)" 
                  v-model="form.lender.address2" />
              </b-form-group>
            </b-form-row>
            <b-form-row class="mt-3">
              <b-form-group label="Zip" class="col mb-3">
                <b-input 
                  placeholder="Lender's zip code" 
                  v-model="form.lender.zip"
                  :state="(formValidation.lender.enabled && $v.form.lender.zip.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
              <b-form-group label="City" class="col mb-3">
                <b-input 
                  placeholder="Lender's city" 
                  v-model="form.lender.city"
                  :state="(formValidation.lender.enabled && $v.form.lender.city.$invalid) ? 'invalid' : 'null'" />
              </b-form-group>
              <b-form-group 
                label="State" 
                class="col mb-3"
                :state="(formValidation.lender.enabled && $v.form.lender.state.$invalid) ? 'invalid' : 'null'">
                <multiselect
                  label="display"
                  track-by="value"
                  v-model.trim="form.lender.state" 
                  :options="multiselect.states"
                  :searchable="false"
                  :show-labels="false"  
                  :class="(formValidation.lender.enabled && $v.form.lender.state.$invalid) ? 'is-invalid' : 'null'" />
              </b-form-group>
            </b-form-row>
          </b-card>
        </tab-content>

        <!-- Buttons -->
        <b-btn variant="default" slot="prev">Back</b-btn>
        <b-btn variant="default" slot="next">Next</b-btn>
        <b-btn variant="primary" slot="finish" @click="addDebt">Finish</b-btn>
      </form-wizard>

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
  'Mortgage', 'Student Loan', 'Auto Loan', 'Credit Card', 'Utilities'
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

const dayOptions = [
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
        startBalance: { required },
        currentBalance: { required },
        minPayment: { required },
        startDate: { required },
        dayToBill: { required },
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
      daysOfMonth: dayOptions,
      paymentPeriods: paymentPeriodOptions,
      interestTypes: interestTypeOptions,
      states: stateOptions
    },
    activeFormTab: 'debt',
    form: {
      debt: {
        name: null,
        type: null,
        startBalance: null,
        currentBalance: null, 
        minPayment: null, 
        startDate: moment().toDate(),
        dayToBill: null
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
          startBalance: '',
          currentBalance: '',
          minPayment: '',
          startDate: '',
          dayToBill: ''
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

      form['debt']['startBalance'] = parseFloat(form['debt']['startBalance'].replace(/[^0-9.]/g, '')).toFixed(2)
      form['debt']['currentBalance'] = parseFloat(form['debt']['currentBalance'].replace(/[^0-9.]/g, '')).toFixed(2)
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
      var parsed = value.replace(",", "")
      var amt = parseFloat(parsed).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return amt === "NaN" ? "" : amt
    },
    formattedPaymentPeriod: function () {
      return 'M1M' + this.form.debt.dayToBill.value
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
  computed: {}
}
</script>
