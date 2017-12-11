<template>
  <div class="ml-homepage">
    <list :listItems="songs"
          :isLoading="isLoading"/>
  </div>
</template>

<script>
  import List from '@/components/List';
  import { getTracks, clearAuth } from '@/services/spotifyService';

  export default {
    name: 'Homepage',
    components: {
      list: List,
    },
    data() {
      return {
        songs: [],
        isLoading: true,
      };
    },
    mounted() {
      this.isLoading = true;
      getTracks()
      .then((mappedSongs) => {
        this.songs = mappedSongs;
        this.isLoading = false;
      }, () => {
        clearAuth();
        this.$router.go('Login');
      });
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/layout';

  .ml-homepage {
    .flex-vertical-container;
    padding-top: 60px;
  }
</style>
