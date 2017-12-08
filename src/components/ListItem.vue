<template>
  <div class="ml-list-item">
    <div class="album-artwork"></div>
    <div class="main-content">
      <h2>{{title}}</h2>
      <h4>{{artist}}</h4>
    </div>
    <h4>{{genre}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      title: {
        type: String,
        required: true,
      },
      artist: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-list-item {
    .flex-horizontal-container;
    padding: 30px 20px;
    border-bottom: 2px solid @green;
    color: @grey-dark;
  }

  .album-artwork {
    background-color: @grey-light;
    height: 60px;
    width: 60px;
  }

  .main-content {
    margin: 0 20px;

    h2, h4 {
      margin: 0;
    }
  }
</style>
