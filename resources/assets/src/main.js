import Vue from 'vue'
import App from './App'
import {store} from './store'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import BlockUI from 'vue-blockui'

import globals from './globals'
import Popper from 'popper.js'

import { ClientTable } from 'vue-tables-2'

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(BlockUI)
Vue.use(ClientTable)

// Global RTL flag
Vue.mixin({
  data: globals
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
