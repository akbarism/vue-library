<template>
  <div class="sampul">
    <router-link to="/" class="bck">
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <div class="option">
      <a @click="edit" class="id-edit">Edit</a>
      <!-- MODAL EDIT -->
      <div class="modal-add modal-on">
        <div class="add-content">
          <div class="parent">
            <div class="detail">
              <div class="ed">Edit Data</div>
              <p @click="backk" class="fck">&times;</p>
            </div>
            <form>
              <div class="form-group">
                <label class="label-title" for="exampleFormControlInput1">Title</label>
                <input
                  class="form-control"
                  v-model="cover.tittle"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label class="label-title" for="exampleFormControlInput1">Author</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="cover.author"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="form-group">
                <label class="label-title" for="exampleFormControlInput1">Status</label>
                <select
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="cover.status"
                >
                  <option value="1">Available</option>
                  <option value="0">Unavailable</option>
                </select>
              </div>
              <div class="form-group">
                <label class="label-title" for="exampleFormControlInput1">Category</label>
                <select
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="cover.id_category"
                >
                  <option value="1">Life</option>
                  <option value="2">Mistery</option>
                  <option value="3">Comic</option>
                  <option value="4">Eductaion</option>
                </select>
              </div>
              <div class="form-group">
                <label class="label-desc" for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-conrol"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="cover.description"
                ></textarea>
              </div>
              <a class="btn" @click="justEdit">Edit</a>
            </form>
          </div>
        </div>
      </div>
      <!-- ENDO OF MODAL -->
      <a class="id-del" @click="del">Delete</a>
      <div class="container-del modal-on">
        <div class="ibu">
          <div class="anak1" @click="close">
            <p>&times;</p>
          </div>
          <div class="anak2">
            <img src="../../assets/img/checked.png" alt />
          </div>
          <div class="anak3">Buku Telah Terhapus</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import ModalEdit from "../../components/_bash/ModalEdit";
export default {
  name: "CoverDetail",
  props: ["cover", "IdBook"],
  components: {
    // ModalEdit
  },
  data() {
    return {
      bookDetail: {}
    };
  },
  mounted() {
    const sampul = document.querySelector(".sampul");
    sampul.style.backgroundImage = `url("${this.cover.image}")`;
  },

  methods: {
    edit() {
      document.querySelector(".modal-add").classList.toggle("modal-on");
    },
    close() {
      document.querySelector(".container-del").classList.toggle("modal-on");
      this.$router.push("/");
    },
    backk() {
      document.querySelector(".modal-add").classList.toggle("modal-on");
    },
    justEdit() {
      axios
        .patch(`http://localhost:8000/book/${this.$route.params.IdBook}`, {
          tittle: this.cover.tittle,
          author: this.cover.author,
          status: this.cover.status,
          id_category: this.cover.id_category,
          description: this.cover.description
        })
        .then(res => {
          res.data;
          this.$router.go(
            `http://localhost:8000/book/${this.$route.params.IdBook}`
          );
        });
    },
    del() {
      document.querySelector(".container-del").classList.toggle("modal-on");
      axios
        .delete(`http://localhost:8000/book/${this.$route.params.IdBook}`)
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style Scoped>
.sampul {
  display: flex;
  flex-direction: row;
  height: 45%;
  width: 100%;
  background-image: url("../../assets/img/cover-dilan.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.option {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
  height: 50px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 25px;
}
.option a {
  padding: 10px;
  color: #efefef;
  text-decoration: none;
  text-shadow: rgba(0, 0, 0, 0.4);
}
.bck {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 100px;
  text-decoration: none;
}
.fas {
  text-decoration: none;
  color: black;
}
.container-del {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 4;
  padding-top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 900px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-on {
  display: none;
}
.ibu {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;
  width: 500px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #888888;
}
.anak1 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 470px;
  margin-top: 10px;
  margin-bottom: 50px;
  color: red;
  font-size: 50px;
}
.anak1:hover,
.anak1:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.anak2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 400px;
  margin-bottom: 5px;
}
.anak2 img {
  height: 100px;
  width: 100px;
}
.anak3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 400px;
}
.anak3 p {
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.modal-add {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 800px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-on {
  display: none;
}
.add-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #888888;
  width: 700px;
  height: 700px;
  border-radius: 5px;
}
.parent {
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 600px;
  /* background: #fbcc38; */
}
.detail {
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  margin-bottom: 30px;
  /* margin-left: -50px; */
}
.ed {
  height: 40px;
  width: 150px;
  color: black;
  font-size: 30px;

  font-family: "Airbnb Cereal App bold";
}
p.fck {
  /* height: 10px; */
  /* width: 30px; */
  color: red;
  font-size: 50px;
  margin: 0;
  padding: 0;
  line-height: 0;
  margin-right: -35px;
}
p.fck:hover,
p.fck:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.label-title {
  /* margin-right: 28px; */
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.label-desc {
  /* margin-right: 7px; */
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbcc38;
  width: 100px;
  height: 50px;
  padding: 10px 32px;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin-left: 500px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  text-decoration: none;
}
.form-group {
  display: flex;
  justify-content: space-between;
}
.form-control {
  width: 430px;
  height: 50px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-conrol {
  width: 430px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>