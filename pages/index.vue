<template>
  <main class="main">
    <div class="banner" />
    <CategoryGifs
      v-for="category in categories"
      :key="category.id"
      v-bind="category"
      :gifs="gifs[category.gifs]"
    />
  </main>
</template>

<script>
import CATEGORIES from '@/mock/indexPageCategories.json';
import { mapActions } from 'vuex';

export default {
  name: 'Main',

  created() {
    this.$store.dispatch('gifs/FETCH_TRENDS');
  },

  computed: {
    categories() {
      return CATEGORIES;
    },
    gifs() {
      return {
        trend: this.$store.state.gifs.gifs.trend,
      };
    },
  },

  methods: {
    ...mapActions({
      setTrendGifs: 'gifs/FETCH_TRENDS',
    }),
  },
}
</script>

<style lang="scss" scoped>
.main {
  .banner {
    width: 100%;
    height: 96px;
    background-image: url("/img/main-banner.gif");
  }
}
</style>
