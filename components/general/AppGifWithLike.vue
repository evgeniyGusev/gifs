<template>
  <div
    class="gif"
    @click.stop="followTheLink(gif.id)"
  >
    <div class="likes">
      <div class="link" @click.stop="a(1)" />
      <div class="like" @click.stop="a(2)" />
    </div>
    <div
      class="avatar"
      :style="{
        backgroundImage: `url(${gif.user && gif.user.avatar_url ? gif.user.avatar_url : '/img/user-eyes.gif'})`,
      }"
      @click.stop="a(3)"
    />
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
  name: "AppGifWithLike",

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
    height: 140px;
    width: auto;
  }

  .likes {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 5px 8px;
    opacity: 0;
    transition: opacity .25s;

    .link,
    .like {
      width: 16px;
      height: 20px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      transition: all .25s;

      &:hover {
        transform: scale(1.23);
      } 
    }

    .link {
      margin-right: 20px;
      background-image: url('/img/gif-link.png');
    }

    .like { 
      background-image: url('/img/gif-favorite.png');
    }
  }

  .avatar {
    position: absolute;
    left: 8px;
    bottom: 10px;
    width: 32px;
    height: 32px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity .25s;
  }
}
</style>
