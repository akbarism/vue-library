<template>
  <div class="col-sm-5">
    <HomeIcon />
    <div class="form px-5">
      <div class="parenting">
        <h2>Register</h2>
        <p>
          Welcome , Please Register
          <br />to crete your account
        </p>

        <form @submit.prevent="sign">
          <div class="form-group">
            <label for="exampleInputPassword1" class="label">Fullname</label>
            <input v-model="fullname" type="text" class="form-control" id="exampleInputPassword1" :class="{ 'is-invalid': submitted && $v.fullname.$error }" />
          <div
                v-if="submitted && !$v.fullname.required"
                class="invalid-feedback"
              >Username is required</div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword" class="label">Email</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputPassword" :class="{ 'is-invalid': submitted && $v.email.$error }" />
         <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required</span>
                  <span v-if="!$v.email.email">Email is invalid</span>
              </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              :class="{ 'is-invalid': submitted && $v.password.$error }"
            />
             <div v-if="submitted && $v.password.$error" class="invalid-feedback">
                  <span v-if="!$v.password.required">Password is required</span>
                  <span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
              </div>
          </div>
          <button @click="sign" type="submit" class="btnreg">Sign Up</button>
          <router-link to="/Login">
            <button class="btnreg ml-4">Login</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import HomeIcon from "../../components/_module/HomeIcon";
import Axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "FormRegister",
  components: {
    HomeIcon
  },
  data() {
    return {
      fullname: null,
      email: null,
      password: null
    };
  },
   validations: {
    email: { required, email },
    fullname: { required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    sign(e) {
       e.preventDefault()
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
      Axios.post(`http://localhost:8000/user/register`, {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then(res => {
        res.data;
        this.$router.push("login");
      });
    }
    }
  },
  updated() {
    if (this.email === "") {
      this.email = null;
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
.btnreg:hover {
  background-color: black;
}
.btnreg {
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
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
}
.label {
  position: absolute;
  margin-top: 5px;
  margin-left: 6px;
  font-family: "Airbnb Cereal App Bold";
  color: #d0cccc;
}
</style>