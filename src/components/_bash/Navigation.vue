<template>
  <div class="navigasi">
    <div class="kategori" v-bind:value="message">
      <a @click="down">
        {{message}}
        <i class="fas fa-caret-down"></i>
      </a>
      <ul class="dropdown-categories up">
        <li @click="down">
         <router-link to="AllCategories"> Novel</router-link>
          </li>
        <li @click="down">Komik</li>
        <li @click="down">Sejarah</li>
        <li @click="down">other/li>
        <li @click="down">other</li>
        <li @click="down">other</li>
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
    <div class="serah">
      <input type="text" id="cari" name="search" placeholder="search book" />
      <a href="#">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <router-link to="Dashboard" class="logo">
      <img src="../../assets/img/shelfpage.png" alt="logo" />
      <h1>Library</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      message: "All Categories"
    };
  },
  methods: {
    down() {
      document.querySelector(".dropdown-categories").classList.toggle("up");
    },
    downy() {
      document.querySelector(".dropdown-alltime").classList.toggle("up");
    }
  }
};
</script>

<style scoped>
.navigasi {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 3;
}
.kategori {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 70px;
  margin-left: 280px;
}
.kategori a {
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  color: black;
  text-decoration: none;
}
#cari {
  width: 320px;
  height: 50px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding-left: 40px;
  margin-top: 5px;
}
#cari + a {
  position: relative;
  left: -305px;
  color: #777;
}
#cari + a:focus {
  color: #0099ff;
}
.logo {
  display: flex;
  width: 230px;
  height: 70px;
  font-family: "Airbnb Cereal App Bold";
  color: black;
text-decoration: none;
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
</style>