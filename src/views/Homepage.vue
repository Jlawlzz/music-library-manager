<template>
  <div class="ml-homepage">
    <app-header :onSearchCallback="onSearchCallback"/>
    <list :listItems="filteredSongs"/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';
  import List from '@/components/List';

  const songs = [{
    id: 1,
    title: 'Generic rock song #4',
    artist: 'The Rock Gods',
    genre: 'Rock',
    url: 'url1',
  },
  {
    id: 2,
    title: 'Generic rap song #234',
    artist: 'The Rap People',
    genre: 'Rap',
    url: 'url2',
  }];

  export default {
    name: 'Homepage',
    components: {
      appHeader: AppHeader,
      list: List,
    },
    data() {
      return {
        filteredSongs: songs,
      };
    },
    methods: {
      onSearchCallback(value, type) {
        if (value !== '') {
          this.filteredSongs = songs.filter(song => song[type].includes(value));
        } else {
          this.filteredSongs = songs;
        }
      },
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
