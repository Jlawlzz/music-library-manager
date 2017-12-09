<template>
  <div class="ml-dropdown" v-bind:class="{ active: isActive }">
    <h1 class="selected-value"
        v-on:click="toggleActive()">{{options[selectedIdx].text}}:</h1>
    <div class="dropdown-drawer">
      <div v-for="(option, idx) in options"
           v-if="idx !== selectedIdx"
           class="dropdown-item"
           v-on:click="handleSelect(idx)"
           value="option.value">
           {{option.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: {
      options: {
        required: true,
        type: Array,
      },
      onSelectedChange: {
        required: true,
        type: Function,
      },
    },
    data() {
      return {
        isActive: false,
        selectedIdx: 0,
      };
    },
    methods: {
      handleSelect(idx) {
        this.selectedIdx = idx;
        this.onSelectedChange(idx);
      },
      toggleActive() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style scoped lang="less">
  @import '../styles/mixins';

  .ml-dropdown {

    .dropdown-drawer {
      display: none;
    }

    &.active {
      background-color: @white; 
      .dropdown-drawer {
        display: block;
        background-color: @white;
      }

      .selected-value {
        background-color: @white;
        color: @green;
      }
    }
  }

  .selected-value {
    padding: 16px;
    cursor: pointer;
    margin: 0;
    font-size: 48px;
    color: @white;
  }
  .dropdown-drawer {
    position: absolute;
    font-size: 36px;
    color: @green;
    padding: 16px;

    .dropdown-item {
      cursor: pointer;
    }
  }
</style>
