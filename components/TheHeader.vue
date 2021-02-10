<template>
  <header>
    <nuxt-link
      to="/"
      class="logo"
    >
      <img src="/ico/logo.svg" alt="giphyClone">
    </nuxt-link>
    <nav class="nav">
      <ul class="nav-list">
        <li
          v-for="link in NAV_LINKS.visible"
          :key="link.id"
          class="nav-item"
        >
          <nuxt-link
            :to="link.link"
            class="nav-link"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="control"></div>
    <div class="user"></div>
  </header>
</template>

<script>
import NAV_LINKS from '@/mock/NAV_LINKS.json';

export default {
  name: 'TheHeader',

  data() {
    return {
      NAV_LINKS,
    };
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 10px;

  .logo {
    display: block;
    max-width: 164px;
    max-height: 35px;

      img {
        width: 100%;
        height: auto;
      }
  }

  .nav {
    .nav-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0 5px;
      background: linear-gradient(to right, rgb(0, 204, 255), rgb(153, 51, 255) 31%, rgb(230, 70, 182) 52%, rgb(255, 249, 170) 77%, rgb(0, 255, 153), rgb(0, 204, 255)) 0% 50% / 200% 50%;

      .nav-item {
        background-color: $mainBG;

        .nav-link {
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
