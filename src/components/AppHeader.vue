<template>
  <div class="ml-header">
    <div class="search">
      <i class="material-icons search-icon">search</i>
      <div class="search-selector">
        <h1>Songs:</h1>
      </div>
      <div class="search-bar">
        <input></input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-header {
    .flex-horizontal-container;
    padding: 30px 20px;
    background-color: #42B983;
    height: 120px;
  }

  .search {
    .flex-horizontal-container;
    align-items: center;

    .search-icon {
      font-size: 48px;
    }

    .search-selector {
      padding: 0 8px;
      font-size: 24px;
    }

    .search-bar {
      padding: 0 8px;
      input {
        color: @white;
        height: 48px;
        font-size: 48px;
        background-color: transparent;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 2px solid #ffffff;
      }
    }
  }
</style>
