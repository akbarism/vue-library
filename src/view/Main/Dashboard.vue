<template>
  <div class="containe">
    <div class="content">
      <Navigation />
      <SideBar  />
      <CarouCel />
      <div class="list-book">
        <div class="list">
          <h1>List book</h1>
        </div>
      </div>
      <CardOfBook />
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/_bash/Navigation.vue";
import SideBar from "../../components/_bash/SideBar";
import CarouCel from "../../components/_bash/CarouCel.vue";
import CardOfBook from "../../components/_bash/CardOfBook.vue";
export default {
  name: "Dashboard",
  components: {
    Navigation,
    SideBar,
    CarouCel,
    CardOfBook
  },
  data() {
    return {
      hide: "",
      explore: "",
      classes: ""
    };
  },
  props: ["req"]
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
  overflow: hidden;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.list-book {
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  transform: translateX(0);
  transition: 0.5s;
}
.listMove {
  transform: translateX(250px);
}
.space {
  width: 340px;
  height: 40px;
  background: white;
}
.list {
  font-family: "Airbnb Cereal App Bold";
  font-size: 12px;
  margin-left: 60px;
  color: #424242;
}

@media (max-width: 414px) {
  /* ----------responsive caroucell--------------- */
  .caroucell {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 250px;
    margin-top: 25px;
    margin-bottom: 10px;
    margin-left: -50px;
    background: white;
  }
  .caroucell h1 {
    font-family: "Airbnb Cereal App Bold";
    color: white;
    left: 10px;
  }
  .caroucell p {
    font-family: "Airbnb Cereal App Light";
    color: white;
    left: 10px;
  }
  .slide-a {
    display: flex;
    align-items: flex-end;
    width: 100px;
    height: 200px;
    background: url(/assets/img/cover-dilan.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    /* background-position: 1px -200px; */
    object-fit: cover;
  }
  .opaciti {
    width: 100%;
    height: 120px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0 0 10px 10px;
  }
  .slide-b {
    display: flex;
    align-items: flex-end;
    width: 250px;
    height: 250px;
    background: url(/assets/img/cover-ubur.jpg);
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    background-position: -100px;
  }
  .opacity {
    width: 100%;
    height: 180px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0 0 10px 10px;
  }
  .slide-c {
    display: flex;
    align-items: flex-end;
    width: 100px;
    height: 200px;
    background: url(/assets/img/cover-laskar.jpg);
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    background-position: -50px;
    margin-right: -100px;
  }
  .slide-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    height: 70px;
    width: 400px;
    margin-top: 20px;
    z-index: 1;
  }
  .lbtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background: #ffffff;
    margin-left: 100px;
    border-radius: 150px;
  }
  .lbtn a {
    text-decoration: none;
    color: black;
  }
  .rbtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background: #ffffff;
    border-radius: 150px;
  }
  .rbtn a {
    text-decoration: none;
    color: black;
  }
  /* ----end of caraoucell responsive--------- */

  /* -------responsive card------------------ */
  .card {
    display: flex;

    width: 100%;
    height: 250px;
  }
  .a {
    display: flex;
    width: 80px;
    height: 230px;
  }
  .b {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    width: 300px;
    height: 1000px;
    background: white;
  }
  .card1 {
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 250px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .card2 {
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .card3 {
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 250px;

    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .card0 {
    display: none;
    flex-direction: column;
    height: 250px;
    width: 250px;

    border-radius: 10px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  /* -----end of------------ */
  .list-book {
    display: flex;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
  .space {
    width: 20px;
    height: 40px;
    background: white;
  }
  .list {
    font-family: "Airbnb Cereal App Bold";
    font-size: 12px;
    margin-left: 60px;
    color: #424242;
  }
  /*end of list book */
  /* ----navbar responsive-- */
  .navigasi {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.2);
  }
  .kategori {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 160px;
    height: 50px;
    margin-left: 70px;
  }
  .kategori a {
    font-family: "Airbnb Cereal App Bold";
    font-size: 12px;
    color: black;
    text-decoration: none;
  }
  .search {
    display: flex;

    align-items: center;
    width: 120px;
    height: 50px;
    margin-right: 60px;
    margin-bottom: 10px;
  }
  #src {
    width: 120px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 30px;
    padding-left: 40px;
  }
  #src + a {
    position: relative;
    left: -160px;
    color: #777;
  }
  #src + a:focus {
    color: #0099ff;
  }
  .logo {
    display: none;
    width: 230px;
    height: 70px;

    font-family: "Airbnb Cereal App Bold";
  }
  .logo img {
    width: 50px;
    height: 50px;
  }
  /* -----end of navbar responsive----------- */
  .add-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #888888;
    width: 350px;
    height: 450px;
    border-radius: 5px;
  }
  .parent {
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 380px;
    /* background: #ffffff; */
    margin-top: -50px;
  }
  .detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 70px;
    width: 380px;
    background: #ffffff;
    margin-bottom: 20px;
  }
  .ed {
    height: 60px;
    width: 200px;
    background: #ffffff;
    color: black;
    font-size: 30px;
    font-family: "Airbnb Cereal App bold";
  }
  .x {
    display: flex;
    justify-content: flex-end;
    height: 60px;
    width: 100px;
    background: #ffffff;
    color: red;
    font-size: 50px;
  }
  .x:hover,
  .x:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .txta {
    display: flex;
    height: 70px;
    width: 350px;
    background: #ffffff;
    font-size: 17px;
    font-family: "Airbnb Cereal App Light";
    margin-left: 10px;
  }

  .lbl1 {
    height: 60px;
    width: 120px;
    background: #ffffff;
  }
  .field1 {
    height: 60px;
    width: 100%;
    background: #ffffff;
    margin-left: 20px;
  }

  .txt {
    display: flex;
    height: 70px;
    width: 350px;
    background-color: #ffffff;
    font-size: 17px;
    font-family: "Airbnb Cereal App Light";
    margin-left: 10px;
  }
  .lbl2 {
    height: 60px;
    width: 120px;
    background: #ffffff;
  }
  .field2 {
    height: 60px;
    width: 100%;
    background: #ffffff;
    margin-left: 20px;
  }

  .txt3 {
    display: flex;
    height: 70px;
    width: 350px;
    background: #ffffff;
    font-size: 17px;
    font-family: "Airbnb Cereal App Light";
    margin-left: 10px;
  }
  .lbl3 {
    height: 60px;
    width: 120px;
    background: #ffffff;
  }
  .field3 {
    height: 60px;
    width: 100%;
    background: #ffffff;
    margin-left: 20px;
  }

  .save {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 50px;
    width: 340px;
    margin-top: 150px;
  }
  .btn-save {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fbcc38;
    width: 80px;
    height: 30px;
    padding: 10px 32px;
    border-radius: 5px;
    color: white;
    text-align: center;
    margin-top: 310px;
    /* margin-left: 100px; */
    font-family: "Airbnb Cereal App Bold";
    font-size: 17px;
    text-decoration: none;
  }
  input[type="text"],
  textarea {
    width: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
  /* -------modal responsive------------------ */
  /* --------sidebar responsive-------------- */
  .side {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    width: 410px;
    height: 100vh;
    z-index: 2;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
    background: white;
    left: -410px;
    transition: 0.5s all;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 410px;
    height: 100vh;
    z-index: 2;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
    background: white;
    left: 0;
    transition: 0.5s all;
  }
  .profil {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 400px;
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
  /* -----end of side bar rsponsive------------- */
}
</style>