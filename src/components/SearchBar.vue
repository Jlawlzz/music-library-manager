<template>
  <div class="ml-search">
    <i class="material-icons search-icon">search</i>
    <dropdown :options="dropdownOptions"
              :onSelectedChange="onSelectedChange">
    </dropdown>
    <div class="search-bar">
      <input v-model="userInput"></input>
    </div>
  </div>
</template>

<script>
  import Dropdown from '@/components/Dropdown';

  export default {
    name: 'SearchBar',
    components: {
      dropdown: Dropdown,
    },
    props: {
      onSearchCallback: {
        required: true,
        type: Function,
      },
      onSearchValueCallback: {
        required: true,
        type: Function,
      },
      dropdownOptions: {
        required: true,
        type: Array,
      },
    },
    data() {
      return {
        userInput: '',
        searchValueIdx: 0,
      };
    },
    watch: {
      userInput(val) {
        this.onSearchCallback(val, this.searchValueIdx);
      },
    },
    methods: {
      onSelectedChange(idx) {
        this.searchValueIdx = idx;
        this.onSearchValueCallback(idx);
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-search {
    .flex-horizontal-container;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;

      .search-icon {
        color: @grey-dark;
        font-size: 48px;
      }

      .search-bar {
        padding: 0 8px;
        
        input {
          color: @grey-dark;
          height: 48px;
          font-size: 48px;
          background-color: transparent;
          border-top: none;
          border-right: none;
          border-left: none;
          border-bottom: 2px solid @grey-dark;
        }
      }
  }
</style>
