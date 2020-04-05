<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <CoverAuth />
        <FormRegister />
      </div>
    </div>
  </div>
</template>

<script>
import CoverAuth from "../../components/_bash/CoverAuth.vue";
import FormRegister from "../../components/_bash/FormRegister.vue";
export default {
  name: "Register",
  components: {
    CoverAuth,
    FormRegister
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

@media (max-width: 414px) {
  .img {
    display: flex;
    justify-content: flex-end;
    height: 100px;
    width: 100%;
    margin-bottom: 30px;
  }
  .btn {
    width: 260px;
  }
}
</style>