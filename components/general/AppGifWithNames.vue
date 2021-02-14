<template>
  <div
    class="gif"
    @click.stop="followTheLink(gif.id)"
  >
    <div
      class="avatar"
      :style="{
        backgroundImage: `url(${gif.user.avatar_url})`,
      }"
      @click.stop="a(3)"
    />
    <img
      v-if="gif.images"
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
  name: "AppGifWithNames",

  props: {
    gif: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    a(t) {
      console.log(t);
    },
    followTheLink(id) {
      this.$router.push(`/gif/${id}`);
    }
  },
}
</script>

<style lang="scss" scoped>
.gif {
  position: relative;
  display: block;
  cursor: pointer;

  &:hover {
    .likes {
      opacity: 1;
    }
    .avatar {
      opacity: 1;
    }
  }

  img {
    height: 269px;
    width: 343px;
    object-fit: cover;
  }

  .avatar {
    position: absolute;
    left: 8px;
    bottom: 10px;
    width: 36px;
    height: 36px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity .25s;
  }
}
</style>
