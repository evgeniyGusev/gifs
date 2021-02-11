<template>
<section>
  <div class="title-wrap">
    <img :src="`/ico/${icon}`" :alt="`${icon}`" >
    <h2 class="title">
      {{ title }}
    </h2>
  </div>
</section>
</template>

<script>
export default {
  name: "CategoryGifs",

  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
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
section {
  margin: 25px 0 50px;

  .title-wrap {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
}
</style>
