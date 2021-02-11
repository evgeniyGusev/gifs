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
        <li class="nav-item">
          <div class="nav-link">
            <span class="_dots">...</span>
          </div>
        </li>
      </ul>
    </nav>
    <div class="control">
      <button class="control-btn">Upload</button>
      <button class="control-btn">Create</button>
    </div>
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
      padding: 0 0 4px;
      background: linear-gradient(to right, rgb(0, 204, 255), rgb(153, 51, 255) 31%, rgb(230, 70, 182) 52%, rgb(255, 249, 170) 77%, rgb(0, 255, 153), rgb(0, 204, 255)) 0% 50% / 200% 50%;

      .nav-item {
        background-color: rgba(18, 18, 18, 1);
        transition: background-color .3s;

        &:hover {
          background-color: rgba(18, 18, 18, 0);
        }

        .nav-link {
          position: relative;
          display: block;
          padding: 8px 14px 4px 10px;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          
          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 4px;
            height: calc(100% + 4px);
            background-color: rgb(18, 18, 18);
          }
        }

        ._dots {
          display: flex;
          position: relative;
          left: 3px;
          letter-spacing: 1px;
          font-weight: 800;
          transform: rotate(90deg);
        }
      }
    }
  }

  .control {
    .control-btn {
      @include button-default;
      padding: 8.5px 16px;
      background-color: #6157ff;
    }
  }
}
</style>
