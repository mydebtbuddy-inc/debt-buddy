<template>
  <b-navbar toggleable="lg" :variant="getLayoutNavbarBg()" class="layout-navbar align-items-lg-center container-p-x">

    <!-- Brand -->
    <b-navbar-brand to="/dashboard">
      <img src="@/assets/img/mdb_logo.png" alt="MyDebtBuddy">
    </b-navbar-brand>

    <!-- Sidenav toggle -->
    <b-navbar-toggle target="navbar-example-3"></b-navbar-toggle>

    <b-collapse is-nav id="navbar-example-3">
      <b-navbar-nav class="mr-auto">
        <!--<b-nav-item href="javascript:void(0)">
          <router-link :to="'/dashboard'">Dashboard</router-link>
        </b-nav-item>-->
        <b-nav-item href="javascript:void(0)">
          <router-link :to="'/debts'"><strong>Debts</strong></router-link>
        </b-nav-item>
        <b-nav-item href="javascript:void(0)">
          <router-link :to="'/payment-plan'"><strong>Payment Plan</strong></router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-nav-form>
        <b-btn variant="outline-secondary" size="sm" class="align-middle">
          <router-link :to="{name: 'logout'}">Log Out</router-link>
        </b-btn>
      </b-nav-form>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
img {
  height: 35px;
  width: 155px;
}

a, a:hover {
  color: white;
}
</style>

<script>
export default {
  name: 'app-layout-navbar',

  props: {
    sidenavToggle: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    },

    getLayoutNavbarBg () {
      return this.layoutNavbarBg
    }
  }
}
</script>
