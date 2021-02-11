<template>
<section>
  <div class="head">
    <div class="title-wrap">
      <img :src="`/ico/${icon}`" :alt="`${icon}`" >
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
    <nuxt-link
      :to="link"
      class="head-link"
    >
      {{ linkText }}
      <span>&rsaquo;</span>
    </nuxt-link>
  </div>
  <div class="body">
    <ul class="list">
      <template v-for="(gif, i) in gifs">
        <li
          v-if="i < 20"
          :key="i"
          class="slide"
        >
          <nuxt-link
            to="/"
            class="slide-link"
          >
            <img :src="gif.images.original.url" :alt="gif.title">
          </nuxt-link>
        </li>
      </template>
    </ul>
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
    gifs: {
      type: Array,
      default: () => ([]),
    },
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 25px 0 50px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .title-wrap {
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }
    }

    .head-link {
      display: block;
      font-size: 15px;

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
  }

  .body {
    width: 100%;
    height: 140px;
    overflow: hidden;

    .list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;

      .slide {
        margin-right: 6px;

        .slide-link {
          display: block;

          img {
            height: 140px;
            width: auto;
          }
        }
      }
    }
  }
}
</style>
