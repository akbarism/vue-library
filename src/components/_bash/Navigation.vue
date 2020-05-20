<template>
  <div>
    <div v-if="local.result[0]">
      <div class="navigasi">
        <div class="kategori" v-bind:value="message">
          <a @click="down">
            {{message}}
            <i class="fas fa-caret-down"></i>
          </a>
          <ul class="dropdown-categories up">
            <li @>Author</li>
            <li >Titleh</li>
          </ul>
          <a @click="downy">
            All times
            <i class="fas fa-caret-down"></i>
          </a>
          <ul class="dropdown-alltime up">
            <li>All Categories</li>
            <li>All Categories</li>
            <li>All Categories</li>
          </ul>
        </div>
        <div class="parentsrc">
        <i class="fas fa-search"></i>
        <input type="text" class="cari" name="search" placeholder="search book" />
        </div>
        <router-link to="Dashboard" class="logo">
          <img src="../../assets/img/shelfpage.png" alt="logo" />
          <h1>Library</h1>
        </router-link>
      </div>
    </div>
    <!-- teeeeeeeeeeeeeeetetetetettttttttttttteteteteeeeeeeeeeeeeeet -->
    <div v-else>
      <div class="navigasi">
          <router-link to="Dashboard" class="logo-if">
            <img src="../../assets/img/shelfpage.png" alt="logo" />
            <h1>Library</h1>
          </router-link>
        <div class="if-kategori" v-bind:value="message">
          <a @click="down">
            {{message}}
            <i class="fas fa-caret-down"></i>
          </a>
          <ul class="dropdown-categories up">
            <li >Author</li>
            <li >Title</li>
          </ul>
          <a @click="downy">
            All times
            <i class="fas fa-caret-down"></i>
          </a>
          <ul class="dropdown-alltime up">
            <li>All Categories</li>
            <li>All Categories</li>
            <li>All Categories</li>
          </ul>
        </div>
        <div class="parentsrc">
        <i class="fas fa-search"></i>
        <input type="name" class="if-cari" placeholder="search book" />
        </div>
        <router-link to="login" class="lgn">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Navigation",
  data() {
    return {
      message: "Sort by :",
      local: []
    };
  },
  methods: {
    down() {
      document.querySelector(".dropdown-categories").classList.toggle("up");
    },
    downy() {
      document.querySelector(".dropdown-alltime").classList.toggle("up");
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
.navigasi {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  font-family: "Airbnb Cereal App Bold";
  z-index: 3;
}
.none {
  display: none;
}
.if-kategori {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 70px;
  margin: 0 100px;
}
.if-kategori a {
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.parentsrc {
  position: relative;
}
.if-cari {
  position: relative;
  width: 320px;
  height: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding-left: 40px;
  margin-left: -30px;
  outline: none;
}
.logo-if {
  display: flex;
  align-items: center;
  width: 200px;
  height: 70px;
  font-family: "Airbnb Cereal App Bold";
  color: black;
  text-decoration: none;
}
.logo-if img {
  width: 50px;
  height: 50px;
}
/* -----------------ELSA------------ */
.kategori {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 70px;
  margin: 0 30px 0 300px;
}
.kategori a {
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.cari {
  position: relative;
  width: 320px;
  height: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding-left: 40px;
  margin-left: -30px;
  outline: none;
}
.fas {
  position: relative;
  color: #777;
  cursor: pointer;
  z-index: 2;
}
.fas:hover {
  color: #0099ff;
}
.logo {
  display: flex;
  align-items: center;
  width: 230px;
  height: 70px;
  font-family: "Airbnb Cereal App Bold";
  color: black;
  text-decoration: none;
  margin-left: 250px;
}
.logo img {
  width: 50px;
  height: 50px;
}
.dropdown-categories {
  position: relative;
  height: 90px;
  background-color: white;
  margin-left: -195px;
  overflow-y: scroll;
  transition: 0.5s;
  margin-top: 163px;
  z-index: 3;
}
.dropdown-alltime {
  position: relative;
  height: 95px;
  background: white;
  margin-left: -150px;
  /* border: 1px solid #d0cccc; */
  overflow: hidden;
  transition: 0.5s;
  margin-top: 163px;
}

.up {
  height: 0;
  margin-top: 80px;
}
.dropdown-categories li {
  padding: 5px 10px;
  width: 140px;
  list-style: none;
  font-family: "Airbnb Cereal App Bold";
}
.dropdown-alltime li {
  padding: 5px 10px;
  width: 140px;
  list-style: none;
  font-family: "Airbnb Cereal App Bold";
}
.dropdown-categories li:hover {
  background: #d0cccc;
}
.dropdown-alltime li:hover {
  background: #d0cccc;
}
.lgn {
  padding: 8px 35px;
  background: #000000;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  margin-left: 300px;
  text-decoration: none;
}
@media (max-width: 414px) {
.if-kategori{
  display: none;
}
.if-cari{
  display: none;
}
.logo-if{
  display: none;
}
}
</style>