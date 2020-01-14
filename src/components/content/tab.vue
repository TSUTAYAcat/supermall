<template>
  <div class="tab">
    <div class="tabitem" v-for="(value,index) in tabs" :key="index" @click="clickTab(index)">
      <span :class="indexCurrent === index?'active':null">{{value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tab",
  props: {
    tabs: Array
  },
  data() {
    return {
      indexCurrent: 0
    };
  },
  methods: {
    clickTab(index) {
     this.indexCurrent = index
    },
    // isActive(path) {
    //   return path === this.$route.path ? { color: "#f00" } : { color: "#000" };
    // },
    // isActiveImg(path) {
    //   return path === this.$route.path;
    // }
  }
};
</script>
<style>
.tab {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px
}
.tabitem {
  flex: 1;
  text-align: center;
  height: 44px;
  line-height: 44px;
}
.tabitem span {
  padding: 8px;
}
.active {
  border-bottom: 2px solid pink;
  color: pink
}
</style>