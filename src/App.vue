<template>
  <div id="app">
    <app-nav/>
    <router-view/>
  </div>
</template>

<script>
  import AppNav from '@/components/AppNav';

  export default {
    name: 'app',
    components: {
      appNav: AppNav,
    },
  };
</script>

<style lang="less">
  @import './styles/mixins';

  body {
    margin: 0;
    height: 100vh;
    width: 100vw;
  }

  #app {
    height: 100%;
    width: 100%;
    min-width: 900px;
    .font-family-regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @white;
  }
</style>
