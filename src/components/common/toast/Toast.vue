<template>
  <div v-show="isShow" class="toast">{{msg}}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      isShow: false
    };
  },
  methods: {
    show(msg = "小糊涂", duration = 1000) {
      this.isShow = true;
      this.msg = msg;
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, duration);
    }
  }
};
</script>
<style scoped>
.toast {
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
}
</style>