<template>
  <nuxt-link
    :to="link"
    class="head-link"
  >
    {{ linkText }}
    <span>
      &rsaquo;
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: "AppGeneralLink",

  props: {
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
  }
}
</script>

<style lang="scss" scoped>
.head-link {
  display: block;
  font-size: 14px;
  font-weight: 600;

  span {
    font-size: 31px;
    line-height: 1px;
    color: inherit;
    position: relative;
    top: 3px;
    margin-left: 5px;
    font-weight: 700;
  }
}
</style>
