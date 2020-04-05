<template>
  <div class="modal-add" :class="SendModalOn.modalOn">
    <div class="add-content">
      <div class="parent">
        <div class="detail">
          <div class="ed">Add Data</div>
          <p class="fck" @click="$emit('close')">&times;</p>
        </div>
        <form>
          <div class="form-group">
            <label class="label-title" for="exampleFormControlInput1">Url Image</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Url Image.."
            />
          </div>
          <div class="form-group">
            <label class="label-url" for="exampleFormControlInput1">title</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title.."
            />
          </div>
          <div class="form-group">
            <label class="label-desc" for="exampleFormControlTextarea1">Description</label>
            <textarea class="form-conrol" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <a href="#" class="btn">Save</a>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "ModalAdd",
  props: ["SendModalOn",],
    mounted() {
    axios.insert(`http://localhost:8000/book/`).then(res => {
      this.bookDetail = res.data;
    console.log(res);
    });
  }
};
</script>

<style scoped>
.modal-add {
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-on {
  display: flex;
}
.add-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #888888;
  width: 630px;
  height: 470px;
  border-radius: 5px;
}
.parent {
  display: flex;
  flex-direction: column;
  height: 430px;
  width: 550px;
}
.detail {
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  margin-bottom: 50px;
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
  margin-right: 28px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.label-url {
  margin-right: 80px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 20px;
}
.label-desc {
  margin-right: 7px;
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
  margin-left: 449px;
  font-family: "Airbnb Cereal App Bold";
  font-size: 17px;
  text-decoration: none;
}
.form-group {
  display: flex;
  flex-direction: row;
}
.form-control {
  width: 430px;
  height: 60px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-conrol {
  width: 430px;
  /* height: 60px; */
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>