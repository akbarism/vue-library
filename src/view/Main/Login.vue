<template>
  <div>
    <div class="container-fluid ok">
      <div class="row">
        <CoverAuth />
        <FormLogin />
      </div>
    </div>
  </div>
</template>

<script>
import CoverAuth from "../../components/_bash/CoverAuth.vue";
import FormLogin from "../../components/_bash/FormLogin";
// import contoh from "../../components/_bash/contoh.vue"

export default {
  name: "Login",
  components: {
    CoverAuth,
    FormLogin
    
  }
};
</script>

<style Scoped>
.ok {
  overflow: hidden;
}
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