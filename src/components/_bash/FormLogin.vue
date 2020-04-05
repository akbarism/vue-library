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
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" class="label">Username</label>
            <input v-model="datauser.username"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="label">Password</label>
            <input v-model="datauser.password" type="password" class="form-control" id="exampleInputPassword1" />
            <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
            <label class="form-check-label ml-4 mr-4 mt-1" for="exampleCheck1">Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <router-link to="Dashboard" class="btn btn-primary">Login</router-link>
          <router-link to="/Register" class="btn btn-primary ml-0 ml-sm-2">Sign Up</router-link>
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
      datauser: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {
    axios
      .post("http://localhost:8000/user/login")
      .then(res => {
        this.userdata = res.data;
      })
      .catch(err => {
        console.log(err);
      });
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
.btn:hover {
  background-color: black;
}
.btn {
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
.form-group a {
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