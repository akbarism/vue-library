<template>
  <div class="kiri">
    <div class="novel">
      <p>{{BookDetail.category_name}}</p>
    </div>
    <div class="judul">
      <h1>{{BookDetail.tittle}}</h1>
      <div v-if="BookDetail.status===1">
        <P>Available</P>
      </div>
      <div v-else>
        <P class="red">Unavailable</P>
      </div>
    </div>
    <div class="tahun">
      <p>Author : {{BookDetail.author}}</p>
    </div>
    <div id="paragraf">
      <p>{{BookDetail.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideLeft",
  props: ["BookDetail"]
};
</script>
<style scoped>
.kiri {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 465px;
  width: 65%;
  background: #ffffff;
  font-family: "Airbnb Cereal App Bold";
}
.novel {
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.novel p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  background: #fbcc38;
  border-radius: 15px;
  color: #ffffff;
}
.judul {
  display: flex;
  justify-content: space-between;
  /* text-align: center; */
  width: 90%;
  height: 100px;
  margin-bottom: 20px;
}
.judul h1 {
  font-size: 40px;
}
.judul p {
  color: #99d815;
  font-size: 30px;
  margin-top: 10px;
}
.tahun {
  display: flex;
  width: 90%;
  height: 40px;
  font-size: 20px;
}
#paragraf {
  height: 255px;
  width: 90%;

  margin-top: 20px;
  font-family: "Airbnb Cereal App Light";
}
#paragraf p {
  text-align: justify;
}
.judul .red {
  color: #a75656;
}
</style>