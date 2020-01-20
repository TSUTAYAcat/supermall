<template>
  <div id="tabbar">
    <div
      class="tabbarItem"
      @click="clickBar(value)"
      v-for="(value,index) in tabbarArr"
      :key="index"
    >
      <div class="imgClass">
        <img v-if="isActiveImg(value.to)" :src="value.imgSrcActive" />
        <img v-else :src="value.imgSrc" />
      </div>
      <div class="des" :style="isActive(value.to)">{{value.des}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  props: {
    tabbarArr: Array
  },
  data() {
    return {
      path: this.$route.path
    };
  },
  methods: {
    clickBar(value) {
      if (value.to !== this.$route.path) {
        this.$router.push(value.to);
        this.path = value.to;
      }
    },
    isActive(path) {
      return path === this.$route.path ? { color: "#f00" } : { color: "#000" };
    },
    isActiveImg(path) {
      return path === this.$route.path;
    }
  }
};
</script>
<style>
#tabbar {
  width: 100%;
  height: 49px;
  position: fixed;
  background-color: #f6f6f6;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
#tabbar .tabbarItem {
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
#tabbar .tabbarItem .imgClass {
  text-align: center;
  margin-top: 5px;
}
#tabbar .tabbarItem .imgClass img {
  height: 20px;
}
#tabbar .tabbarItem .des {
  text-align: center;
}
</style>