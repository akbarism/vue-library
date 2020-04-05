<template>
  <div class="col-sm-5">
    <HomeIcon/>
    <div class="form px-5">
      <div class="parenting">
        <h2>Register</h2>
        <p>
          Welcome , Please Register
          <br />to crete your account
        </p>

        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" class="label">Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="label">Fullname</label>
            <input type="text" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword" class="label">Email</label>
            <input type="email" class="form-control" id="exampleInputPassword" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
          <router-link to="/Login" class="btn btn-primary ml-0 ml-sm-2">Login</router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import HomeIcon from '../../components/_module/HomeIcon'
export default {
  name: "FormRegister",
  components: {
    HomeIcon,
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