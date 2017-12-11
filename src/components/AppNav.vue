<template>
  <div class="ml-nav">
    <div class="nav-title">
      <h1>Music Library</h1>
    </div>
    <div class="nav-actions">
      <h3 v-if="!loggedIn" v-on:click="signIn()">Sign In</h3>
      <h3 v-if="loggedIn" v-on:click="signOut()">Sign Out</h3>
    </div>
  </div>
</template>

<script>
  import { getAuth, clearAuth, isLoggedIn } from '@/services/spotifyService';

  export default {
    name: 'AppNav',
    data() {
      return {
        loggedIn: false,
      };
    },
    methods: {
      signIn() {
        getAuth();
      },
      signOut() {
        clearAuth();
        this.signedIn = false;
        this.$router.go('Login');
      },
    },
    mounted() {
      this.loggedIn = isLoggedIn();
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-nav {
    .flex-horizontal-container;
    background-color: @grey-dark;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
  }

  .nav-actions {
    text-align: right;
    
    h3 {
      cursor: pointer;
    }
  }
</style>
