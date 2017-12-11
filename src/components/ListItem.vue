<template>
  <div class="ml-list-item">
    <img class="album-artwork" :src="image"></img>
    <h2 class="title">{{title}}</h2>
    <h2 class="artist">{{artist}}</h2>
    <h2 class="album">{{album}}</h2>
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
      album: {
        type: String,
        required: true,
      },
      image: {
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
    padding: 20px 20px;
    border-bottom: 2px solid @green;
    color: @grey-dark;
    align-items: center;

    .album-artwork {
      background-color: @white;
      height: 60px;
      width: 60px;
      margin-right: 30px;
    }

    .title {
      width: 50%;
    }

    .artist, .album {
      width: 25%;
    }
  }

  .album-artwork {
    height: 60px;
    width: 60px;
    margin-right: 30px;
  }

  .main-content {
    margin: 0 20px;

    h2, h4 {
      margin: 0;
    }
  }
</style>
