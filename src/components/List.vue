<template>
  <div class="ml-list">
    <div class="list-header">
      <search-bar :onSearchCallback="onSearchCallback"
                  :onSearchValueCallback="onSearchValueCallback"
                  :dropdownOptions="songMetadata">
      </search-bar>
      <div class="sort-items">
        <div class="spacer"></div>
        <sort-item v-for="(data, idx) in songMetadata"
          :class="data.value"
          :key="idx"
          :id="idx"
          :sortByIdx="sortByIdx"
          :sortByAscending="sortByAscending"
          :string="data.string"
          :value="data.value"
          :onClick="onSortItemCallback">
        </sort-item>
      </div>
    </div>
    <div v-if="!isLoading" class="list-items-container">
      <list-item v-for="item in sortedListItems"
        :key="item.id"
        :title="item.title"
        :image="item.image"
        :artist="item.artist"
        :album="item.album">
      </list-item>
    </div>
    <div v-if="isLoading" class="loading-indicator">
      <h1>Please wait while we load your tasty tracks!</h1>
      <img src="../assets/loading.svg"></img>
    </div>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem';
  import SortItem from '@/components/SortItem';
  import SearchBar from '@/components/SearchBar';

  export default {
    name: 'List',
    components: {
      listItem: ListItem,
      sortItem: SortItem,
      searchBar: SearchBar,
    },
    props: {
      listItems: {
        required: true,
        type: Array,
      },
      isLoading: {
        required: true,
        type: Boolean,
      },
    },
    data() {
      return {
        sortByIdx: 0,
        searchByIdx: 0,
        searchValue: '',
        sortByAscending: false,
        songMetadata: [
          {
            value: 'title',
            string: 'Title',
          },
          {
            value: 'artist',
            string: 'Artist',
          },
          {
            value: 'album',
            string: 'Album',
          },
        ],
      };
    },
    methods: {
      sortListItems(items) {
        return items.sort((a, b) => {
          const compareKey = this.songMetadata[this.sortByIdx].value;
          const compareA = a[compareKey].toUpperCase();
          const compareB = b[compareKey].toUpperCase();
          const result = this.sortByAscending
            ? (compareA < compareB)
            : (compareB < compareA);

          return result ? 1 : -1;
        });
      },
      filterListItems(items) {
        const searchType = this.songMetadata[this.searchByIdx].value;
        return (this.filterValue !== '')
          ? items.filter((item => item[searchType]
              .toUpperCase().includes(this.searchValue.toUpperCase())))
          : items;
      },
      sortAndFilterListItems() {
        const sortedListItems = this.sortListItems(this.listItems);
        return this.filterListItems(sortedListItems);
      },
      onSortItemCallback(sortIdx) {
        if (this.sortByIdx === sortIdx) {
          this.sortByAscending = !this.sortByAscending;
        } else {
          this.sortByIdx = sortIdx;
          this.sortByAscending = true;
        }
        this.sortedListItems = this.sortAndFilterListItems();
      },
      onSearchCallback(value) {
        this.searchValue = value;
        this.sortedListItems = this.sortAndFilterListItems();
      },
      onSearchValueCallback(idx) {
        this.searchByIdx = idx;
        this.sortedListItems = this.sortAndFilterListItems();
      },
    },
    computed: {
      sortedListItems: {
        get() {
          return this.sortAndFilterListItems();
        },
        set(listItems) {
          return listItems;
        },
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-list {
    background-color: @white;
  }

  .sort-items {
    .flex-horizontal-container;
    margin: 20px;

    .spacer {
      width: 90px;
    }
    .title {
      width: 50%;
    }
    .album, .artist {
      width: 25%;
    }
  }

  .list-items-container {
    overflow-y: scroll;
  }

  .list-header {
    border-bottom: 2px solid @green;
  }

  .loading-indicator {
    .flex-vertical-container;
    padding: 100px;
    color: @green;
    height: 100%;

    h1 {
      justify-content: center;
      display: flex;
    }

    img {
      margin: 0 auto;
      width: 100px;
      height: 100px;
    }
  }
</style>
