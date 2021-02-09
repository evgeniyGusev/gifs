<template>
  <div class="container">
    <div
      v-for="gif in trendGifs"
      :key="gif.id"
    >
      <h6>{{ gif.title }}</h6>
      <img :src="gif.images.preview_gif.url" :alt="gif.title">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Main',

  computed: {
    trendGifs() {
      return this.$store.state.gifs.gifs.trend;
    },
  },

  methods: {
    ...mapActions({
      setTrendGifs: 'gifs/FETCH_TRENDS',
    }),
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #444;
}
</style>
