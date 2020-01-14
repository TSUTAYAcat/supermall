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
  props:{
      scrollStyle:{
          type: Object,
          default () {
              return {height:"600px"}
          }
      }
  },
  data() {
    return {
      bs: null
    };
  },
  mounted() {
    this.bs = new BS(this.$refs.wrapper, {});
  }
};
</script>
<style >
.wrapper {
  height: 400px;
  overflow: hidden;
}
</style>