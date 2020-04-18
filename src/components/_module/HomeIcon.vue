<template>
  <router-link to="/" class="home-icon">
    <img src="../../assets/img/shelfpage.png" />
  </router-link>
</template>
<script>
export default {
  name: "HomeIcon"
};
</script>

<style scoped>
.home-icon img {
  height: 100px;
  width: 100px;
}
.home-icon {
  display: flex;
  justify-content: flex-end;
  height: 100px;
  width: 560px;
  margin-bottom: 30px;
}
</style>