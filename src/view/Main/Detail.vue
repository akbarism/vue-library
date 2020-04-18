<template>
  <div class="containe">
    <CoverDetail v-bind:cover="bookDetail.result[0]" />
    <div class="isi">
      <SideLeft v-bind:BookDetail="bookDetail.result[0]" />
      <SideRight v-bind:BookDetail="bookDetail.result[0]" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CoverDetail from "../../components/_bash/CoverDetail.vue";
import SideLeft from "../../components/_bash/SideLeft.vue";
import SideRight from "../../components/_bash/SideRight.vue";
export default {
  name: "Detail",
  components: {
    CoverDetail,
    SideLeft,
    SideRight
  },
  data() {
    return {
      bookDetail: {}
    };
  },

  props: ["IdBook"],
  mounted() {
    axios.get(`http://localhost:8000/book/${this.IdBook}`).then(res => {
      this.bookDetail = res.data;
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "Airbnb Cereal App Bold";
  font-style: normal;
  font-weight: normal;
  src: local("Airbnb Cereal App Bold"),
    url("/src/font/AirbnbCerealBold.woff") format("woff");
}

@font-face {
  font-family: "Airbnb Cereal App Light";
  font-style: normal;
  font-weight: normal;
  src: local("Airbnb Cereal App Light"),
    url("/src/font/AirbnbCerealLight.woff") format("woff");
}
.containe {
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 100%;
  z-index: 1;
}
.isi {
  display: flex;
  height: 500px;
  width: 100%;
  background: #ffffff;
}

#container-modal {
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 4;
  padding-top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 900px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

/* --------------------- css modal --------------------- */
.parent {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 645px;
  background: #ffffff;
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
  width: 600px;
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
.txtt {
  display: flex;
  height: 70px;
  width: 550px;
  background: #ffffff;
  font-size: 17px;
  font-family: "Airbnb Cereal App Light";
  margin-left: 20px;
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
  width: 550px;
  background-color: #ffffff;
  font-size: 17px;
  font-family: "Airbnb Cereal App Light";
  margin-left: 20px;
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
  width: 550px;
  background: #ffffff;
  font-size: 17px;
  font-family: "Airbnb Cereal App Light";
  margin-left: 20px;
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
  width: 560px;
  margin-top: 150px;
}
.btn-save {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4cf5d;
  width: 80px;
  height: 30px;
  padding: 10px 32px;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin-top: 310px;
  margin-left: 100px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  text-decoration: none;
}

/* -------------css modal end --------------- */
@media (max-width: 768px) {
  .kiri {
    width: 90%;
  }
  .novel p {
    display: none;
  }
  .judul {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .tahun {
    display: none;
  }
  .kanan {
    width: 10%;
  }
  .thumbnail {
    display: flex;
    position: absolute;
    margin-right: 100px;
    margin-top: -225px;
    z-index: 2;
  }
  .kanan a {
    position: fixed;
    margin-right: 30px;
    width: 350px;
    margin-top: 120px;
  }
}
</style>