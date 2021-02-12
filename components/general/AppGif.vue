<template>
  <div
    class="slide"
    @click.stop="followTheLink(gif.id)"
  >
    <div class="functional-wrapper">
      <div class="likes">
        <div class="link" @click.stop="a">li</div>
        <div class="like">lik</div>
      </div>
      <div class="avatar"></div>
    </div>
    <img
      v-if="gif && gif.images"
      :src="gif.images.original.url"
      :alt="gif.title"
    >
    <img
      v-else
      src="/img/404-gif.gif"
      alt="crying"
    >
  </div>
</template>

<script>
export default {
  name: "AppGif",

  props: {
    gif: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    a() {
      console.log("log");
    },
    followTheLink(id) {
      this.$router.push(`/gif/${id}`);
    }
  },
}
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  display: block;
  cursor: pointer;

  img {
    height: 140px;
    width: auto;
  }

  .functional-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
