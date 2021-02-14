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
    <ul
      :class="['list', {
        '_translate-100': step === 2,
        '_translate-200': step === 3,
        '_translate-300': step === 4,
      }]"
    >
      <template v-for="(gif, i) in gifs">
        <li
          v-if="i < 41 && Object.keys(gif).length > 0"
          :key="i"
          class="slide"
        >
          <app-gif-with-like
            v-if="title === 'Trending'"
            :gif="gif"
          />
          <app-gif-with-names
            v-if="title === 'Users'"
            :gif="gif.gif"
          />
        </li>
      </template>
    </ul>
    <div
      v-show="step !== 1"
      class="step-prev"
      @click="goToPrevSlides"
    >
      <img src="/ico/slide-arrow-next.svg" alt="Previous slide">
    </div>
    <div
      v-show="step !== 4"
      class="step-next"
      @click="goToNextSlides"
    >
      <img src="/ico/slide-arrow-next.svg" alt="Next slide">
    </div>
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
  },

  data() {
    return {
      step: 1,
    };
  },

  methods: {
    goToPrevSlides() {
      if (this.step > 1) {
        this.step -= 1;
      } else return false;
    },

   goToNextSlides() {
      if (this.step < 4) {
        this.step += 1;
      } else return false;
    }
  },
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
    position: relative;
    width: 100%;
    overflow: hidden;

    .step-prev,
    .step-next {
      position: absolute;
      top: 0;
      height: 100%;
      width: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      opacity: .5;
      transition: opacity .25s;

      &:hover {
        opacity: 1;
      }
    }

    .step-prev {
      left: 0;
      background: linear-gradient(to left, rgba(18, 18, 18, 0), rgba(18, 18, 18, 0.75));

      img {
        transform: rotate(180deg);
      }
    }

    .step-next {
      right: 0;
      background: linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%);
    }

    .list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      transition: transform .4s ease-in-out;

      .slide {
        margin-right: 6px;
      }
    }
  }
}

._translate-100 {
  transform: translate3d(-100%, 0, 0);
}
._translate-200 {
  transform: translate3d(-200%, 0, 0);
}
._translate-300 {
  transform: translate3d(-300%, 0, 0);
}
</style>
