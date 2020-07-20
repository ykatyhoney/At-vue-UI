<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$Message('It works! We believe that you can save your time with AT-UI.')
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
