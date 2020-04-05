<template>
  <div class="col-sm-7 d-sm-block d-none">
    <div class="side-a">
      <h1>
        book is a window
        <br />to the world
      </h1>
      <p>Photo by Mark Pan4ratte on Unsplash</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoverAuth"
};
</script>

<style Scoped>
* {
  margin: 0;
  padding: 0;
}
.col-sm-7 {
  padding: 0;
}
.side-a {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../../assets/img/bgpage.jpg");
  background-position: center;
  background-size: cover;
}

.side-a h1 {
  position: absolute;
  left: 56px;
  top: 88px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 50px;
  color: #ffffff;
}

.side-a p {
  position: absolute;
  width: 378px;
  height: 30px;
  left: 29px;
  top: 600px;
  font-family: "Airbnb Cereal App Light";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
</style>
