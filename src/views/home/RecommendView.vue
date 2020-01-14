<template>
  <div class="recomend">
    <div v-for="(item , index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <div class="titlerecommend">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: Array
  }
};
</script>
<style >
.recomend {
  padding: 10px 0 20px;
  width: "100%";
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 10px solid #eee
}
.recomend img {
  width: 65px;
  height: 65px;
}
.recomend .titlerecommend {
  margin-top: 10px;
  color: #d31f8e;
  /* width: 65px;
   height: 65px; */
}
</style>