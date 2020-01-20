<template>
  <div class="detai">
    <navbar>
      <div class="title">
        <div class="left">
          <img src="~assets/img/common/back.svg" />
        </div>
        <div class="center">
          <div
            class="center-item"
            :class="currentIndx===index?'active':null"
            v-for="(item , index) in titles"
            :key="index"
            @click="click(index)"
          >{{item}}</div>
        </div>
        <div class="right" />
      </div>
    </navbar>
  </div>
</template>
<script>
import navbar from "components/common/navbar.vue";
export default {
  components: {
    navbar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndx: 0
    };
  },
  methods: {
    click(i) {
      this.currentIndx = i;
    }
  }
};
</script>
<style scoped>
.detai {
    height: 100%;
    position: relative;
    background-color: #fff;
    z-index: 9;
}
.title {
  width: 100%;
  height: 44px;
  display: flex;
}
.left {
  display: flex;
  flex: 1;
  /* text-align: center; */
  flex-direction: column;
  justify-content: center;
}
.right {
  flex: 1;
}
.center {
  flex: 6;
  display: flex;
}
.center-item {
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.active {
  color: #1a8afa;
}
</style>