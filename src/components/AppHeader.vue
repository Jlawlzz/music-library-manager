<template>
  <div class="ml-header">
    <div class="search">
      <i class="material-icons search-icon">search</i>
      <dropdown :options="dropdownOptions"
                :onSelectedChange="onSelectedChange">
      </dropdown>
      <div class="search-bar">
        <input v-model="userInput"></input>
      </div>
    </div>
  </div>
</template>

<script>
  import Dropdown from '@/components/Dropdown';

  export default {
    name: 'AppHeader',
    props: {
      onSearchCallback: {
        required: true,
        type: Function,
      },
    },
    components: {
      dropdown: Dropdown,
    },
    data() {
      return {
        dropdownOptions: [
          {
            value: 'artist',
            text: 'Artist',
          },
          {
            value: 'song',
            text: 'Song',
          },
          {
            value: 'genre',
            text: 'Genre',
          },
          {
            value: 'album',
            text: 'Album',
          },
        ],
        searchValueIdx: 0,
        userInput: '',
      };
    },
    watch: {
      userInput(val) {
        this.onSearchCallback(val, this.dropdownOptions[this.searchValueIdx].value);
      },
    },
    methods: {
      onSelectedChange(idx) {
        this.searchValueIdx = idx;
      },
    },
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
