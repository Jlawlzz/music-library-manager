<template>
  <div class="ml-homepage">
    <app-header/>
    <list/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';
  import List from '@/components/List';

  export default {
    name: 'Homepage',
    components: {
      appHeader: AppHeader,
      list: List,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../styles/layout';

  .ml-homepage {
    .flex-vertical-container;
  }
</style>
