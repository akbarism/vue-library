<template>
  <div cl>
    <h1 class="Text">{{msg}}</h1>
    <div class="parent" v-if="code === 1">
      <div class="content">
        <img src="../../assets//img/checked.png" alt />
        <h1>CONGRATULATION!</h1>
        <P>your acount has been regitered</P>
        <p>
          Click
          <router-link to="/">Here</router-link>for back to the website
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Activate",
  data() {
    return {
      msg: "",
      code: null
    };
  },
  beforeCreate() {
    Axios.get(
      `http://localhost:8000/user/auth?activated=${this.$route.query.activated}`
    )
      .then(res => {
        this.msg = res.data.err;
        this.code = 1;
      })
      .catch(() => {
        this.msg = "Token Failed";
      });
  }
};
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  width: 500px;
  background: #ffffff;
  border-radius: 5px;
}
.parent h1 {
  font-family: "Airbnb Cereal App Bold";
}
.parent p {
  font-family: "Airbnb Cereal App Light";
}
.content img {
  height: 100px;
  width: 100px;
}
.text {
  color: red;
}
</style>