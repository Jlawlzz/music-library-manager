<template>
  <div class="ml-sort-item" v-on:click="onClick(id)">
    <h2>{{string}}</h2>
    <div v-if="selected" class="sort-direction">
      <i v-if="sortByAscending"
         class="material-icons sort-icon">
         arrow_drop_up
      </i>
      <i v-if="!sortByAscending"
         class="material-icons sort-icon">
         arrow_drop_down
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SortItem',
    props: {
      id: {
        type: Number,
        required: true,
      },
      sortByIdx: {
        type: Number,
        required: true,
      },
      sortByAscending: {
        type: Boolean,
        required: true,
      },
      string: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      onClick: {
        type: Function,
        required: true,
      },
    },
    computed: {
      selected() {
        return this.id === this.sortByIdx;
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-sort-item {
    .flex-horizontal-content;
    align-items: center;
    color: @grey-dark;

    h2 {
      margin: 0;
      padding: 2px 4px;
      box-sizing: border-box;
      border: 2px solid @grey-dark;
      cursor: pointer;

      &:hover {
        color: @green;
        border: 2px solid @green;
      }
    }
  }
</style>
