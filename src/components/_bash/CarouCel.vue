<template>
  <div class="caroucel" :class="beHiden">
    <div class="slide-a">
      <div class="opaciti">
        <h1>Dilan 1990</h1>
        <p>Pidi Baiq</p>
      </div>
    </div>
    <div class="slide-b">
      <div class="opacity">
        <h1>Ubur-ubur Lembur</h1>
        <p>Raditya Dika</p>
      </div>
    </div>
    <div class="slide-c">
      <div class="opaciti">
        <h1>Laskar Pelangi</h1>
        <p>Andrea hirata</p>
      </div>
    </div>
    <div class="slide-btn">
      <div class="lbtn">
        <a href="#">
          <i class="fas fa-angle-left"></i>
        </a>
      </div>
      <div class="rbtn">
        <a href="#">
          <i class="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouCel",
  props: ["beHiden"]
};
</script>


<style scoped>
.caroucel {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 10px;
  background: white;
  transition: height 0.5s;
}
.hide {
  overflow: hidden;
  height: 0px;
  margin-top: 25px;
}
.caroucell-b {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 100px;
  background: white;
  transition: 0.5s all;
}
.caroucel h1 {
  font-family: "Airbnb Cereal App Bold";
  color: white;
  left: 10px;
}
.caroucel p {
  font-family: "Airbnb Cereal App Light";
  color: white;
  left: 10px;
}
.slide-a {
  display: flex;
  align-items: flex-end;
  width: 400px;
  height: 200px;
  background: url("../../assets/img/cover-dilan.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}
.opaciti {
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 10px 10px;
}
.slide-b {
  display: flex;
  align-items: flex-end;
  width: 500px;
  height: 250px;
  background: url("../../assets/img/cover-ubur.jpg");
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  background-position: -100px;
}
.opacity {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 10px 10px;
}
.slide-c {
  display: flex;
  align-items: flex-end;
  width: 400px;
  height: 200px;
  background: url("../../assets/img/cover-laskar.jpg");
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
  width: 900px;
  margin-top: 20px;
  z-index: 6;
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
</style>