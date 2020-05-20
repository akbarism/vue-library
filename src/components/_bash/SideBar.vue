<template>
  <div class="sider kental">
    <div @click="klik" class="iconic move">
      <img src="../../assets/img/ikon.png" alt="ikon" />
    </div>
    <div class="profil">
      <img :src="tes.result[0].photo" alt />
      <p>{{tes.result[0].fullname}}</p>
    </div>
    <div class="side-menu">
      <section @click="$emit('swipup')">Explore</section>
      <section>
        <router-link to="History" class="hist">History</router-link>
      </section>
      <section>Cart</section>
      <div>
        <section @click="kliks">Add Book</section>
      </div>
      <section @click="logout">Log Out</section>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "SideBar",
  data() {
    return {
      tes: {},
    };
  },
  methods: {
    klik() {
      document.querySelector(".sider").classList.toggle("kental");
      document.querySelector(".iconic").classList.toggle("move");
    },
    kliks() {
      document.querySelector(".modal-add").classList.toggle("modal-on");
    },
    logout() {
      delete localStorage.password;
      delete localStorage.idUser;
      this.$router.go("/");
    },
    onFileSelected(event) {
      this.photo = event.target.files[0];
    },
    onupload() {
      const fd = new FormData();
      fd.append("photo", this.photo, this.photo);
      Axios.post(`http://localhost:8000/user/`, fd).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    Axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
      .then(res => {
        this.tes = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    const tag = document.querySelector(".signin");
    const tes = tes.result[0].fullname;
    if (tes == true) {
      tag.style.display = "block";
    }
  }
};
</script>

<style scoped>
.sider {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  width: 280px;
  height: 100vh;
  z-index: 4;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2);
  background: white;
  left: 0;
  transition: 0.5s all;
}
.kental {
  left: -280px;
}
.iconic {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  align-items: center;
  width: 260;
  height: 50px;
  right: 0;
  margin-top: 9px;
  margin-right: 5px;
  z-index: 7;
  cursor: pointer;
  transition: 0.5s;
}
.move {
  right: -50px;
  transition: 0.5s;
}

.iconic img {
  width: 30px;
  height: 30px;
}
.profil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 270px;
  height: 250px;
  background: #ffffff;
  z-index: 4;
}
.profil img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.profil p {
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
}
.side-menu {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  /* margin-top: 10px; */
  z-index: 5;
}
.side-menu section {
  cursor: pointer;
  cursor: pointer;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  padding: 10px 10px;
  color: black;
}
.hist {
  text-decoration: none;
  color: #000000;
}
</style>