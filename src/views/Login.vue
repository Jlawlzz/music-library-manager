<template>
  <div class="ml-login-page">
    <h1 class="title">Music Library Manager</h1>
    <a href="/#/browse" v-if="loggedIn" class="goto-browse">
      Browse Your Library
    </a>
  </div>
</template>

<script>
  import { isLoggedIn } from '@/services/spotifyService';

  export default {
    name: 'Login',
    computed: {
      loggedIn() {
        return isLoggedIn();
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-login-page {
    .flex-vertical-container;
    justify-content: center;
    padding-top: 60px;
    color: @green;
    width: 100%;
    align-items: center;

    h1 {
      font-size: 72px;
    }

    .goto-browse {
      font-size: 36px;
    }
  }
</style>
