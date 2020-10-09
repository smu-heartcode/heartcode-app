<template>
  <section>
    <div v-if="isMac">
      <slot name="mac"></slot>
    </div>

    <div v-if="isWin">
      <slot name="win"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "OperatingSystemContent",
  data() {
    return {
      isMac: false,
      isWin: false,
    }
  },
  mounted() {
    this.isMac = navigator.platform.indexOf('Mac') > -1
    this.isWin = navigator.platform.indexOf('Win') > -1

    if (!this.isMac && !this.isWin) {
      this.isMac = true
      this.isWin = true
    }
  },
}
</script>

<style scoped>

</style>
