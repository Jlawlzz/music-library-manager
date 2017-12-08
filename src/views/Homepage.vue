<template>
  <div class="ml-homepage">
    <header/>
    <list/>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import List from '@/components/List';

  export default {
    name: 'Homepage',
    components: {
      header: Header,
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
<style scoped>
</style>
