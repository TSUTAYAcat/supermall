<template>
  <div id="home">
    <navbar class="homenav">
      <div class="title">蘑菇街</div>
    </navbar>
    <MyScroll :scrollStyle = "scrollStyle">
      <HomeSwiper v-if="banner.length>0" :banners="banner" />
      <RecommendView v-if="recommend.length>0" :recommends="recommend" />
      <Feature />
      <tab class="tabhome" :tabs="['流行','新款','精选']" @tabClick="tabClick" />
      <GoodList
        :goodList="goodList.index===0?goodList.popList:(goodList.index===1?goodList.newList:goodList.clecList)"
      />
      <div style="width:100%;height:49px;" />
    </MyScroll>
  </div>
</template>
<script>
import MyScroll from "components/common/myScroll.vue";
import navbar from "components/common/navbar.vue";
import tab from "components/content/tab.vue";
import GoodList from "components/content/GoodList.vue";

import { getHomeMultiData, getDetail } from "network/home.js";
import HomeSwiper from "views/home/HomeSwiper.vue";
import RecommendView from "views/home/RecommendView.vue";
import Feature from "views/home/Feature.vue";

export default {
  components: {
    navbar,
    tab,
    HomeSwiper,
    RecommendView,
    Feature,
    GoodList,
    MyScroll
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goodList: {
        index: 0,
        popList: [],
        newList: [],
        clecList: []
      }
    };
  },
  created() {
    getHomeMultiData().then(res => {
      this.banner = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
    });
    this.goodList.popList = getDetail(0);
    this.goodList.newList = getDetail(1);
    this.goodList.clecList = getDetail(2);
  },
  methods: {
    tabClick(index) {
      this.goodList.index = index;
    }
  },
  computed: {
    scrollStyle (){
      return {
        height:(document.documentElement.clientHeight-93) +"px"
      }
    }
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
  z-index: 999;
}
.tabhome {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>