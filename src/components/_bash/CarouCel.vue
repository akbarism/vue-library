<template>
  <div>
    <div v-if="local.result[0]">
      <div class="caroucel hiden">
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
      </div>
    </div>
    <!-- teeeeeeeeeretrterterterteteeeeeeeeeeeeeeeeetretretretretetteee -->
    <div v-else>
      <div class="regis">
        <div class="tagline">
          <h1>
            book is a window
            <br />to the world
          </h1>
        </div>
        <div class="form-regis">
          <p>New Here? Create a free account !!</p>

          <div class="footer">
            <button @click="sign" type="submit" class="btnreg">Sign Up</button>
            <h5>
              By signing up, you agree to Book’s Terms and
              <br />Conditions and Privacy Policy
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength} from "vuelidate/lib/validators";
import Axios from "axios";
export default {
  name: "CarouCel",
  props: ["beHiden"],
  data() {
    return {
      local: [],
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
      }else{
      Axios.post(`http://localhost:8000/user/register`, {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then(res => {
        res.data;
        alert('check ur email')
        this.$router.go("/");
      });
    }
  }
  },
  updated() {
    if (this.email === "0") {
      this.email = null;
    }
  },
  created() {
    Axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
      .then(res => {
        this.local = res.data;
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
.caroucel {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 0;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 10px;
  background: white;
  transition: height 0.5s;
  overflow: hidden;
}
.hiden {
  height: 300px;
  /* margin-top: 25px; */
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
  background: blue;
  z-index: 3;
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
/* teeeeeeeeeeeeeeeetrerereteteeeeeeeeeeeeeeetteretretreteeee */
.regis {
  display: flex;
  /* flex-direction: row; */
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../../assets/img/bgpage.jpg");
  background-position: center;
  background-size: cover;
  height: 300px;
}
.tagline {
  width: 62%;
}

.tagline h1 {
  position: absolute;
  left: 56px;
  top: 88px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 50px;
  color: #ffffff;
}
.form-con {
  margin-top: 5px;
  height: 50px;
  width: 410px;
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
  font-size: 12px;
}
.form-regis p {
  margin-top: 50px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  color: #ffffff;
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
.footer {
  display: flex;
}
.footer h5 {
  font-family: "Airbnb Cereal App Light";
  font-size: 12px;
  color: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
}
</style>