<template>
  <div class="good-list-item">
    <img :src="goodListItem.img" />
    <p>{{goodListItem.name}}</p>
    <div>
      <span class="price">{{goodListItem.price}}</span>
      <span>
        <img src="~assets/img/common/collect.svg" />
        {{goodListItem.clec}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodListItem: {
      type: Object,
      default: null
    }
  }
};
</script>
<style>
.good-list-item {
  width: 48%;
}
.good-list-item img {
  width: 100%;
  height: auto;
}
.good-list-item p {
    padding: 0 8px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
  margin-bottom: 3px;
  color:#666
}
.good-list-item div {
  width: 100%;
  text-align: center;
  margin-bottom: 4px
}
.good-list-item div span {
  padding: 0 4px;
  font-size: 18px
}
.price {
    color: pink
}
.good-list-item div span img {
  width: 16px;
}
</style>