<template>
  <div class="col-sm-5">
    <HomeIcon />
    <div class="form px-5">
      <div class="parenting">
        <h2>Login</h2>
        <p>
          Welcome , Please Login
          <br />to your account
        </p>
        <form @submit.prevent="login">
          <div class="formgroup">
            <label for="exampleInputEmail1" class="label">Username</label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="formgroup">
            <label for="exampleInputPassword1" class="label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
            <label class="form-check-label ml-4 mr-4 mt-1" for="exampleCheck1">Remember me</label>
            <az href="#">Forgot Password?</az>
          </div>
          <button class="btnLogin">Login</button>
          <router-link to="/Register"  ><button class="btnLogin ml-4">Sign Up</button></router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import HomeIcon from "../../components/_module/HomeIcon";
import axios from "axios";
export default {
  name: "FormLogin",
  components: {
    HomeIcon
  },
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
          // console.log(req);
        })
        .catch(() => {
          this.loginFailed();
        });
    },
    loginSucces(request) {
      if (!request.data.result.password) {
        this.loginFailed();
        return;
      }
      localStorage.password = request.data.result.password;
      localStorage.idUser = request.data.result.id_user;
      localStorage.token = request.data.result.token;
      this.error = false;
      this.$router.replace("/");
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
* {
  margin: 0;
  padding: 0;
}
.form h2 {
  font-family: "Airbnb Cereal App Bold";
  font-size: 50px;
  color: #424242;
  margin: 0;
  padding: 0;
  margin-bottom: 3px;
}

.form p {
  font-size: 15px;
  font-family: "Airbnb Cereal App Light";
  font-size: 17px;
  line-height: 22px;
  color: #424242;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}
.btnLogin:hover {
  background-color: black;
}
.btnLogin {
  background: #ffffff;
  padding: 10px 0px;
  width: 150px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #d0cccc;
  color: #d0cccc;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  text-decoration: none;
}
.form-control {
  height: 60px;
  padding-top: 13px;
  padding-left: 15px;
  font-family: "Airbnb Cereal App Bold";
  background: white;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
}
.label {
  position: absolute;
  margin-top: 3px;
  margin-left: 6px;
  font-family: "Airbnb Cereal App Bold";
  color: #d0cccc;
}
.formgroup a {
  color: black;
  font-size: 17px;
  text-decoration: none;
  margin-left: 150px;
  font-family: "Airbnb Cereal App Bold";
}
.form-check-label {
  font-family: "Airbnb Cereal App Bold";
  color: black;
}
</style>