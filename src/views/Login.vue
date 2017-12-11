<template>
  <div class="ml-login-page">
    <h1 class="title">Music Library Manager</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
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
  }
</style>
