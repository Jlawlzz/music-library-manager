<template>
  <div id="app">
    <app-nav/>
    <router-view class="ml-main"/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F4FFF8;
}

.ml-main {

}
</style>
