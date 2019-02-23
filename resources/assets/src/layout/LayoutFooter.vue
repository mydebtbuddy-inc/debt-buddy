<template>
  <nav class="layout-footer footer" :class="getLayoutFooterBg()">
    <div class="container-fluid container-p-x pb-3">
      <a href="#" class="footer-link pt-3">Terms and Conditions</a>
      <a href="#" class="footer-link pt-3 ml-4">Privacy Policy</a>
    </div>
  </nav>
</template>

<style>
  .layout-footer {
    text-align: right;
  }
</style>

<script>
export default {
  name: 'app-layout-footer',

  methods: {
    getLayoutFooterBg () {
      return `bg-${this.layoutFooterBg}`
    }
  }
}
</script>
