<template>
  <div class="containe">
      <Navigation v-on:author="author" />
      <SideBar v-on:swipup="explor" v-bind="judul" />
    <div class="content">
      <CarouCel />
      <modalAdd />
      <div class="list-book">
        <div class="list">
          <h1>{{judul}}</h1>
        </div>
      </div>
      <CardOfBook  />
    </div>
  </div>
</template>

<script>
import modalAdd from "../../components/_bash/ModalAdd.vue";
import Navigation from "../../components/_bash/Navigation.vue";
import SideBar from "../../components/_bash/SideBar";
import CarouCel from "../../components/_bash/CarouCel.vue";
import CardOfBook from "../../components/_bash/CardOfBook.vue";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    Navigation,
    SideBar,
    CarouCel,
    CardOfBook,
    modalAdd
  },
  data() {
    return {
      hide: "",
      judul: "List Book",
      sort: "?sort=tittle"
    };
  },
  methods: {
    explor() {
      const tag = document.querySelector(".caroucel");
      const sider = document.querySelector(".sider");
      tag.classList.toggle("hiden");
      sider.classList.toggle("kental");
      document.querySelector(".iconic").classList.toggle("move");
      this.judul = "explore";
    },
    author() {
      axios
        .get("http://localhost:8000/book/" + this.sort)
        .then(res => {
          this.books = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style Scoped>
@font-face {
  font-family: "Airbnb Cereal App Bold";
  font-style: normal;
  font-weight: normal;
  src: local("Airbnb Cereal App Bold"),
    url("../../assets/font/AirbnbCerealBold.woff") format("woff");
}

@font-face {
  font-family: "Airbnb Cereal App Light";
  font-style: normal;
  font-weight: normal;
  src: local("Airbnb Cereal App Light"),
    url("../../assets/font/AirbnbCerealLight.woff") format("woff");
}
* {
  margin: 0;
  padding: 0;
}
.containe {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
}
.content {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.list-book {
  display: flex;
  width: 100%;
  height: 60px;
  transform: translateX(0);
  transition: 0.5s;
}
.listMove {
  transform: translateX(250px);
}
.space {
  width: 340px;
  height: 40px;
  background: black;
}
.list {
  font-family: "Airbnb Cereal App Bold";
  font-size: 12px;
  margin-left: 60px;
  color: #424242;
  margin-top: 10px;
}
</style>