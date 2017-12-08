<template>
  <div class="ml-nav">
    <div class="nav-title">
      <h1>Music Library</h1>
    </div>
    <div class="nav-actions">
      <h3>Sign In</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppNav',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style scoped lang="less">
  .ml-nav {
    height: 60px;
    flex-direction: row;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    background-color: #293132;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
  }

  .nav-actions {
    text-align: right;

    h3 {
      cursor: pointer;
    }
  }
</style>
