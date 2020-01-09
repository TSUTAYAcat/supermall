<template>
  <div id="home">
    <navbar>
      <div class="title">蘑菇街</div>
    </navbar>
  </div>
</template>
<script>

import navbar from "components/common/navbar.vue";
import { getHomeMultiData } from "network/home.js";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: []
    };
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res.data.banner);
      this.banner = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
    });
  }
};
</script>
<style>
.title {
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: pink;
  color: #fff;
}
</style>