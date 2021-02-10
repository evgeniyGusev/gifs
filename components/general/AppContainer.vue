<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<script>
export default {
name: "AppContainer",
}
</script>

<style lang="scss" scoped>
.app-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
