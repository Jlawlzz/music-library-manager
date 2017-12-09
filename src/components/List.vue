<template>
  <div class="ml-list">
    <list-item
      v-for="item in listItems"
      :key="item.id"
      :title="item.title"
      :url="item.url"
      :genre="item.genre"
      :artist="item.artist">
    </list-item>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem';

  export default {
    name: 'List',
    components: {
      listItem: ListItem,
    },
    props: {
      listItems: {
        required: true,
        type: Array,
      },
    },
  };
</script>

<style scoped lang="less">
</style>
