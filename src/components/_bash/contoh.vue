<template>
  <form @submit.prevent="login">
    <button class="a-button">Login</button>
  </form>
</template>
<script>
import axios from "axios";
// import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  name: "contoh",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8000/user/login", {
          email: this.email,
          password: this.password
        })
        .then(req => {
          this.loginSucces(req);
        })
        .catch(() => {
          this.loginFailed();
        });
    },
    loginSucces(request) {
      if (!request.data.result.password) {
        this.loginFailed();
        return;
      } else if (request.data.result.status === 0) {
        alert("ok");
        this.$route.push("/");
      }
      localStorage.password = request.data.result.password;
      localStorage.idUser = request.data.result.id_user;
      localStorage.token = request.data.result.token;
      localStorage.role = request.data.result.role;
      this.error = false;
      this.$router.go("/");
    },
    loginFailed() {
      this.error = "Login Failed";
      delete localStorage.password;
      delete localStorage.idUser;
    }
  }
};
</script>
<style scoped>
.a-button:hover {
  background-color: black;
}
.a-button {
  background: #ffffff;
  /* padding: 10px 0px; */
  width: 100px;
  height: 50px;
  margin-top: 19px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #d0cccc;
  color: #d0cccc;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  text-decoration: none;
}
.field {
  height: 50px;
  /* padding-top: 13px; */
  /* padding-left: 15px; */
  margin-right: 5px;
  margin-bottom: 20px;
  font-family: "Airbnb Cereal App Bold";
  background: white;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
}
.lbl {
  position: absolute;
  margin-left: 6px;
  margin-top: 10px;
  font-family: "Airbnb Cereal App Bold";
  color: #d0cccc;
  font-size: 15px;
  background: white;
}
/* .lbl {
  position: absolute;

  margin-top: 10px;
  font-family: "Airbnb Cereal App Bold";
  color: #d0cccc;
  font-size: 15px;
} */
</style>