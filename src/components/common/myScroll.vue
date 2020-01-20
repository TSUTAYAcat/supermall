<template>
  <div class="wrapper" ref="wrapper" :style="scrollStyle">
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script>
import BS from "better-scroll";
export default {
  props: {
    scrollStyle: {
      type: Object,
      default() {
        return { height: "600px" };
      }
    },
    probeType:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      bs: null
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bs.scrollTo(0, 0, time);
    },
  },
  mounted() {
    this.bs = new BS(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      // pullUpLoad: this.pullUpLoad
    });
    // 监听滚动位置
    this.bs.on('scroll',position=>{
      this.$emit('position',position)
    })
  }
};
</script>
<style >
.wrapper {
  height: 400px;
  overflow: hidden;
}
</style>