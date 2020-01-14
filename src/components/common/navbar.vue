<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>
<style>
.navbar {
  width: 100%;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}
</style>