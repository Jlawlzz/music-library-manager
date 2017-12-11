<template>
  <div class="ml-dropdown" v-bind:class="{ active: isActive }">
    <h1 class="selected-value"
        v-on:click="toggleActive()">
        {{options[selectedIdx].string}}
        <i class="material-icons dropdown-icon">
           arrow_drop_down
        </i>
    </h1>
    <div class="dropdown-drawer">
      <div v-for="(option, idx) in options"
           v-if="idx !== selectedIdx"
           class="dropdown-item"
           v-on:click="handleSelect(idx)"
           value="option.value">
           {{option.string}}
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
      background-color: @grey-dark; 

      .dropdown-drawer {
        display: block;
        background-color: @grey-dark;
      }

      .selected-value {
        background-color: @grey-dark;
        color: @green;
      }
    }
  }
  .selected-value {
    padding: 0 16px;
    cursor: pointer;
    margin: 0;
    font-size: 48px;
    color: @grey-dark;

    .dropdown-icon {
      font-size: 32px;
    }
  }
  .dropdown-drawer {
    position: absolute;
    padding: 0 16px;
    font-size: 36px;
    color: @green;

    .dropdown-item {
      cursor: pointer;
      &:hover {
        color: @white;
      }
    }
  }
</style>
