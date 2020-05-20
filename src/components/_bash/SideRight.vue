<template>
  <div class="kanan">
    <div class="thumbnail">
      <img :src="BookDetail.image" alt />
    </div>
    <div class="t">Add To Cart</div>
    <div class="borrow-button" v-if="BookDetail.status === 1" @click="borrowBook">Borrow</div>
    <div class="cant-button" v-else>Borrow</div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  name: "SideRight",
  props: ["BookDetail"],
  data() {
    return {
      userData: ""
    };
  },
  methods: {
    borrowBook() {
      axios
        .post("http://localhost:8000/loan", {
          id_user: this.userData.result[0].id_user,
          id_book: this.BookDetail.id_book
        })
        .then(res => {
          res.data;
          Swal.fire({
            title: "Pinjam Buku  Berhasil!",
            text: "Pergi ke history?",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya"
          }).then(result => {
            if (result.value) {
              this.$router.push('/history')
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    axios
      .get(`http://localhost:8000/user/${localStorage.idUser}`)
      .then(res => {
        this.userData = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.kanan {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 380px;
  height: 465px;
  background: #ffffff;
}
.thumbnail {
  display: flex;
  position: relative;
  margin-top: -160px;
}
.thumbnail img {
  width: 200px;
  height: 288px;
  border-radius: 8px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}
.borrow-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background: #fbcc38;
  margin-top: 250px;
  border-radius: 10px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.cant-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background: gray;
  margin-top: 250px;
  border-radius: 10px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>