<template>
  <div class="homeswiper">
      <Swiper>
          <SwiperItem v-for="(item , index) in banners" :key="index">
              <a :href="item.link">
                  <img :src="item.image" />
              </a>
          </SwiperItem>
      </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  props: {
      banners: Array
  },

  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style >
</style>