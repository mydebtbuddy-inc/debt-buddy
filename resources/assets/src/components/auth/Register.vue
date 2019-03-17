<template>
  <div class="register">
    
    <div class="authentication-wrapper authentication-3">
      <div class="authentication-inner">

        <!-- Side container -->
        <!-- Do not display the container on extra small, small and medium screens -->
        <div class="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5" :style="`background-image: url('${baseUrl}img/bg/17.jpg');`">
          <div class="ui-bg-overlay bg-dark opacity-50"></div>

          <!-- Text -->
          <div class="w-100 text-white px-5">
            <h1 class="display-2 font-weight-bolder mb-4">JOIN OUR<br>COMMUNITY</h1>
            <div class="text-large font-weight-light">
              Start saving today with MyDebtBuddy and be on your way to a debt-free life. After registering you will be able to choose whether you want to have a free tier membership or paid tier.
            </div>
          </div>
          <!-- /.Text -->
        </div>
        <!-- / Side container -->

        <!-- Form container -->
        <div class="d-flex col-lg-4 align-items-center bg-white p-5">
          <!-- Inner container -->
          <!-- Have to add `.d-flex` to control width via `.col-*` classes -->
          <div class="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
            <div class="w-100">

              <!-- Logo -->
              <div class="d-flex justify-content-center align-items-center">
                <div class="w-100 position-relative">
                  <img src="@/assets/img/mdb_logo.png" alt="MyDebtBuddy">
                  <!--<svg class="w-100 h-100 position-absolute" viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3"></stop><stop stop-opacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></linearGradient></defs><path class="fill-primary" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>-->
                </div>
              </div>
              <!-- / Logo -->

              <h4 class="text-center text-lighter font-weight-normal mt-5 mb-0">Register an account</h4>

              <!-- Form -->
              <form class="my-5" @submit.prevent="register">
                <b-form-group label="First Name">
                  <b-input v-model="registrant.name" @keyup.enter="submitForm()" />
                </b-form-group>
                <b-form-group label="Last Name">
                  <b-input v-model="registrant.surname" @keyup.enter="submitForm()" />
                </b-form-group>
                <b-form-group label="Email">
                  <b-input v-model="registrant.email" @keyup.enter="submitForm()" />
                </b-form-group>
                <b-form-group label="Confirm Email">
                  <b-input v-model="registrant.email_confirmation" @keyup.enter="submitForm()" />
                </b-form-group>
                <b-form-group label="Password">
                  <b-input type="password" v-model="registrant.password" @keyup.enter="submitForm()" />
                </b-form-group>
                <ladda-btn 
                  id="submit_form"
                  :loading="loading" 
                  type="submit"
                  data-style="zoom-out" 
                  class="btn btn-info mt-4 btn-primary btn-block"
                  :disabled="$v.registrant.$invalid">
                    Register
                  </ladda-btn>
                <div class="text-light small mt-4">
                  By clicking "Register", you agree to our
                  <a href="javascript:void(0)">terms of service</a> and <a href="javascript:void(0)">privacy policy</a>. We’ll occasionally send you account-related emails.
                </div>
              </form>
              <!-- / Form -->

              <div class="text-center text-muted">
                Already have an account? <router-link :to="{name: 'login'}">Login</router-link>
              </div>

            </div>
          </div>
        </div>
        <!-- / Form container -->

      </div>
    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<style scoped>
img {
   height: auto;
   width: 100%;
}

a {
    color: #1e70cd !important;
}
</style>

<script>
import { required, minLength, maxLength, requiredIf, sameAs } from 'vuelidate/lib/validators'
import LaddaBtn from '@/vendor/libs/ladda/Ladda'

export default {
  name: 'register',
  metaInfo: {
    title: 'Register'
  },
  components: {
    LaddaBtn
  },
  data: () => ({
    loading: false,
    registrant: {
      name: '',
      surname: '',
      email: '',
      email_confirmation: '',
      password: ''
    }
  }),
  validations: {
    registrant: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(64)
      },
      surname: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(64)
      },
      email: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(128)
      },
      email_confirmation: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(128)
      },
      confirmation_email: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(128),
        sameAs: sameAs('email')
      },
      password: {
        required: required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    submitForm() {
      $("#submit_form").click();
    },
    register() {
      this.loading = true

      this.$store.dispatch('register', {
        name: this.registrant.name,
        surname: this.registrant.surname,
        email: this.registrant.email,
        email_confirmation: this.registrant.email_confirmation,
        password: this.registrant.password
      })
      .then(response => {
        this.$router.push({name: 'login'})
      })
      .catch(error => {
        console.log(error)
        this.loading = false
      })
    }
  }
}
</script>
