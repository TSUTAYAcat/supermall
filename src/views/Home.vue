<template>
  <div id="home">
    <navbar class="homenav">
      <div class="title">蘑菇街</div>
    </navbar>
    <HomeSwiper v-if="banner.length>0" :banners="banner" />
    <RecommendView v-if="recommend.length>0" :recommends="recommend" />
    <Feature />
    <tab class="tabhome" :tabs="['流行','新款','精选']" />
    <div v-for="(value , index) in [1,2,3,,4,4,4,5,2122,2,2,22,2,2]" :key="index" style="height:200px">sadasdasd</div>
  </div>
</template>
<script>
import navbar from "components/common/navbar.vue";
import tab from "components/content/tab.vue";

import { getHomeMultiData } from "network/home.js";
import HomeSwiper from "views/home/HomeSwiper.vue";
import RecommendView from "views/home/RecommendView.vue";
import Feature from "views/home/Feature.vue";

export default {
  components: {
    navbar,
    tab,
    HomeSwiper,
    RecommendView,
    Feature
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
#home {
  padding-top: 44px;
}
.homenav {
  position: fixed;
  top: 0;
  left: 0;
}
.tabhome {
  position: sticky;
  top: 44px;
}
</style>