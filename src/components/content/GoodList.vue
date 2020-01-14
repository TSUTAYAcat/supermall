<template>
  <div class="good-list">
    <GoodListItem v-for="(value,index) in goodList" :key="index" :goodListItem="value" />
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem";
export default {
  props: {
    goodList: {
      type: Array,
      default: []
    }
  },
  components: {
    GoodListItem
  }
};
</script>
<style>
.good-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>