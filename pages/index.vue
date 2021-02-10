<template>
  <h1>MAIN</h1>
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
</style>
