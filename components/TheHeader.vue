<template>
  <header>
    <section>
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
      <div class="user">
        <div class="user-gif">
          <img src="/img/user-eyes.gif" alt="user-eyes">
        </div>
        <div class="user-info">
          user11
        </div>
        <div class="user-arrow">
          &#9660;
        </div>
      </div>
    </section>
    <div class="input">
      <input type="text" class="search" placeholder="Search All the GIFs">
      <button class="search-btn" />
    </div>
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
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 15px;

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
          padding: 8px 18px 4px 14px;
          font-size: 14px;
          font-weight: 700;
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
      padding: 10px 16px;
      background-color: #6157ff;
      font-size: 15px;
      cursor: pointer;
    }
  }

  .user {
    height: 36px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    background-color: rgb(62, 62, 62);
    cursor: default;

    .user-gif {
      width: 36px;
      height: 100%;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .user-info {
      padding: 8px 31px;
      font-size: 15px;
      font-weight: 700;
    }

    .user-arrow {
      color: #fff;
    }
  }
}

.input {
  position: relative;
  margin-bottom: 10px;

  .search {
    appearance: none;
    width: 100%;
    padding: 15px 0 15px 20px;
    border: 0;
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 18px;
    color: $linkColor;
    outline: none;
  }

  .search-btn {
    @include button-default;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 52px;
    background-image: url("/img/search-bg.png");
    background-size: cover;
    cursor: pointer;
  }
}
</style>
