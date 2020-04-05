<template>
  <div class="sider kntl">
    <div @click="klik" class="iconic move">
      <img src="../../assets/img/ikon.png" alt="ikon" />
    </div>
    <div class="profil">
      <img src="../../assets/img/niki-zefanya.jpg" alt />
      <p>Niki Zefanya</p>
    </div>
    <div class="side-menu">
      <section>Explore</section>
      <section>History</section>
      <section>Add Book*</section>
      <router-link to="Login">Log Out</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  props: ["classes"],
  data() {
    return {};
  },
  methods: {
    klik() {
      document.querySelector(".sider").classList.toggle("kntl");
      document.querySelector(".iconic").classList.toggle("move");
    }
  }
};
</script>

<style scoped>
.sider {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  width: 280px;
  height: 100vh;
  z-index: 4;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
  background: white;
  left: 0;
  transition: 0.5s all;
}
.kntl {
  left: -280px;
}
.iconic {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  align-items: center;
  width: 260;
  height: 50px;
  right: 0;
  margin-top: 9px;
  margin-right: 5px;
  z-index: 7;
  cursor: pointer;
  transition: 0.5s;
}
.move {
  right: -50px;
  transition: 0.5s;
}

.iconic img {
  width: 30px;
  height: 30px;
}
.profil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 270px;
  height: 250px;
  background: #ffffff;
  z-index: 4;
}
.profil img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.profil p {
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
}
.side-menu {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 250px;
  margin-top: 30px;
  z-index: 5;
}
.side-menu a {
  cursor: pointer;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  padding: 17px 10px;
  color: black;
  text-decoration: none;
}
.side-menu section {
  cursor: pointer;
  cursor: pointer;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  padding: 17px 10px;
  color: black;
}
</style>