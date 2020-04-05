<template>
  <div class="kanan">
    <div class="thumbnail">
      <img :src="BookDetail.image" alt />
    </div>
    <div class="borrow-button" v-if="BookDetail.status === 1">Borrow</div>
    <div class="cant-button" v-else>Borrow</div>
  </div>
</template>
<script>
export default {
  name: "SideRight",
  props: ["BookDetail"]
};
</script>
<style scoped>
.kanan {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 380px;
  height: 465px;
  background: #ffffff;
}
.thumbnail {
  display: flex;
  position: relative;
  margin-top: -160px;
}
.thumbnail img {
  width: 200px;
  height: 288px;
  border-radius: 8px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}
.borrow-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background: #fbcc38;
  margin-top: 250px;
  border-radius: 10px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.cant-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background: gray;
  margin-top: 250px;
  border-radius: 10px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>