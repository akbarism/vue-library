<template>
  <div class="sampul">
    <router-link to="/Dashboard" class="bck">
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <div class="option">
      <a href="#" class="id-edit">Edit</a>
      <ModalAdd />
      <a href="#" id="id-del">Delete</a>
      <!-- <div id="container-del">
                    <div class="ibu">
                        <div class="anak1">
                            <p>&times;</p>
                        </div>
                        <div class="anak2"><img src="/assets/img/checked.png" alt=""></div>
                        <div class="anak3">
                            <p>Data <b>Dilan 1990</b> berhasil dihapus !</p>
                        </div>
                    </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import ModalAdd from "../../components/_bash/ModalAdd";
export default {
  name: "CoverDetail",
  props: ["cover"],
  mounted() {
    const sampul = document.querySelector(".sampul");
    sampul.style.backgroundImage = `url("${this.cover}")`;
  },
  components: {
    ModalAdd
  }
};
</script>

<style Scoped>
.sampul {
  display: flex;
  flex-direction: row;
  height: 45%;
  width: 100%;
  background-image: url("../../assets/img/cover-dilan.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.option {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
  height: 50px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
}
.option a {
  padding: 10px;
  color: #ffffff;
  text-decoration: none;
}
.bck {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 100px;
  text-decoration: none;
}
.fas {
  text-decoration: none;
  color: black;
}
</style>