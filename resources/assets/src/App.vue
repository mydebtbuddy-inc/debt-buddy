<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style src="@/vendor/styles/bootstrap-material.scss" lang="scss"></style>
<style src="@/vendor/styles/appwork-material.scss" lang="scss"></style>
<style src="@/vendor/styles/theme-soft-material.scss" lang="scss"></style>
<style src="@/vendor/styles/colors-material.scss" lang="scss"></style>
<style src="@/vendor/styles/uikit.scss" lang="scss"></style>
<style src="./style.scss" lang="scss"></style>

<script>
export default {
  name: 'app',
  metaInfo: {
    titleTemplate: '%s - DebtBuddy.com'
  },
  mounted(){
    //this.$store.dispatch('fetchUserData')
    //this.$store.dispatch('fetchUserDebts')
  },
  updated () {
    // Remove loading state
    setTimeout(() => document.body.classList.remove('app-loading'), 1)
  }
}
</script>