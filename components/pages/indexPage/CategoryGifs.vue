<template>
<section>
  <div class="head">
    <div class="title-wrap">
      <img :src="`/ico/${icon}`" :alt="`${icon}`" >
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
    <app-general-link
      :link="link"
      :link-text="linkText"
    />
  </div>
  <div class="body">
    <ul class="list">
      <template v-for="(gif, i) in gifs">
        <li
          v-if="i < 20"
          :key="i"
          class="slide"
        >
          <app-gif
            :gif="gif"
          />
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
      }
    }
  }
}
</style>
