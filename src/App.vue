<template>
  <div id="app">
    <router-view />
    <tabbar :tabbarArr="tabbarArr" />
  </div>
</template>
<script>
import tabbar from "./components/content/tabbar";
import homeImg from "@/assets/img/tabbar/home.svg";
import homeImgActive from "@/assets/img/tabbar/home_active.svg";
import categoryImg from "@/assets/img/tabbar/category.svg";
import categoryImgActive from "@/assets/img/tabbar/category_active.svg";
import shopcartImg from "@/assets/img/tabbar/shopcart.svg";
import shopcartImgActive from "@/assets/img/tabbar/shopcart_active.svg";
import profileImg from "@/assets/img/tabbar/profile.svg";
import profileImgActive from "@/assets/img/tabbar/profile_active.svg";
export default {
  data() {
    return {
      tabbarArr: [
        {
          imgSrc: homeImg,
          imgSrcActive: homeImgActive,
          des: "首页",
          to: "/home"
        },
        {
          imgSrc: categoryImg,
          imgSrcActive: categoryImgActive,
          des: "分类",
          to: "/category"
        },
        {
          imgSrc: shopcartImg,
          imgSrcActive: shopcartImgActive,
          des: "购物车",
          to: "/shopcart"
        },
        {
          imgSrc: profileImg,
          imgSrcActive: profileImgActive,
          des: "我的",
          to: "/profile"
        }
      ]
    };
  },
  components: {
    tabbar
  }
};
</script>
<style>
@import "./assets/css/base.css";
</style>
