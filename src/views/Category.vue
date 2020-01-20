<template>
  <div class="wrapper" ref = "wrapper">
    <div class="content" id="category">
      <div style="width:100%;height:1000px;background-color:red">dsadas</div>
    </div>
  </div>
</template>
<script>
import BS from "better-scroll";
export default {
  data() {
    return {
      bs: null
    };
  },
  mounted() {
      console.log(this.$refs)
    this.bs = new BS(this.$refs.wrapper, {});
  }
};
</script>
<style >
.wrapper {
    height: 400px;
    overflow: hidden;
    /* background-color:   */
}
</style>