<template>
  <div class="modal-add modal-on">
    <div class="add-content">
      <div class="parent">
        <div class="detail">
          <div class="ed">Add Data</div>
          <p @click="close" class="fck">&times;</p>
        </div>
        <form>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Title</label>
            <input
              v-model="dataUser.tittle"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title.."
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Author</label>
            <input
              v-model="dataUser.author"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Author.."
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Status</label>
            <select v-model="dataUser.status" class="form-control" id="exampleFormControlInput1">
              <option value="1">Available</option>
              <option value="0">Unavailable</option>
            </select>
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Id Category</label>
            <select
              v-model="dataUser.id_category"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Id Category.."
            >
              <option value="1">Novel</option>
              <option value="2">Komik</option>
              <option value="3">Sejerah</option>
              <option value="4">Buku Masakan</option>
              <option value="4">Komputer</option>
              <option value="4">Sosial</option>
              <option value="4">Pendidikan</option>
            </select>
          </div>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Image Url</label>
            <input
              type="file"
              ref="file"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Url Image.."
            />
          </div>
          <div class="form-group">
            <label class="label-desc" for="exampleFormControlTextarea1">Description</label>
            <textarea
              v-model="dataUser.description"
              class="form-conrol"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button class="buttonAdd" @click="submit">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ModalAdd",
  data() {
    return {
      dataUser: {
        tittle: "",
        author: "",
        status: "",
        id_category: "",
        image: null,
        description: ""
      }
    };
  },
  mounted() {},
  methods: {
    close() {
      document.querySelector(".modal-add").classList.toggle("modal-on");
    },
    submit(e) {
      e.preventDefault();
      const fd = new FormData();
      fd.append("tittle", this.dataUser.tittle);
      fd.append("author", this.dataUser.author);
      fd.append("image", this.$refs.file.files[0]);
      fd.append("status", this.dataUser.status);
      fd.append("id_category", this.dataUser.id_category);
      fd.append("description", this.dataUser.description);
      axios.post(`http://localhost:8000/book/`, fd).then(res => {
        res.data;
        this.$router.replace(`Book/${res.data.result.insertId}`);
      });
    }
  }
};
</script>

<style scoped>
.modal-add {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1075px;
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
  height: 650px;
  border-radius: 5px;
}
.parent {
  display: flex;
  flex-direction: column;
  height: 550px;
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
.buttonAdd {
  background: #fbcc38;
  padding: 10px 35px;
  border-radius: 8px;
  color: white;
  text-align: center;
  margin-left: 500px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  border: none;
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