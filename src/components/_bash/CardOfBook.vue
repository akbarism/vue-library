<template>
  <div class="carder">
    <router-link :to="'Book/'+book.id_book" class="card1" v-for="book in books" :key="book.id_book">
      <img :src="book.image" />
      <div class="sinopsis">
        <h1>{{book.tittle}}</h1>
        <p>{{book.description}}</p>
      </div>
    </router-link>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click="prevPages">Previous</a>
        </li>

        <li class="page-item" v-for="page in totalPages" :key="page">
          <a class="page-link" @click="pages(page)">{{page}} <span class="sr-only">(current)</span></a>
        </li>

        <li class="page-item next">
          <a class="page-link" @click="nextPages">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardOfBook",
  methods: {
    pages(id) {
      this.currentPage = 0 + id;
      axios
        .get(`http://localhost:8000/book/?pagination=${this.currentPage}`)
        .then(res => {
          this.books = res.data.result;
          this.totalPages = Math.ceil(this.total / 10);
        });
    },
    nextPages() {
      if (this.currentPage == this.totalPages) {
        this.currentPage = this.totalPages;
      } else {
        this.currentPage += 1;
      }
      axios
        .get(`http://localhost:8000/book/?pagination=${this.currentPage}`)
        .then(res => {
          this.books = res.data.result;
          this.totalPages = Math.ceil(this.total / 10);
        })
        .catch(err => {
          console.log(err);
        });
    },
    prevPages() {
      if (this.currentPage === 1) {
        this.currentPage = 1;
      } else {
        this.currentPage -= 1;
      }
      axios
        .get(`http://localhost:8000/book/?pagination=${this.currentPage}`)
        .then(res => {
          this.books = res.data.result;
          this.totalPages = Math.ceil(this.total / 10);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      books: [],
      currentPage: 1,
      totalPages: [],
      total: []
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/book/?pagination=${this.currentPage}`)
      .then(res => {
        this.books = res.data.result;
        this.total = res.data.total;
        this.totalPages = Math.ceil(this.total / 10);
        console.log(this.totalPages);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.carder {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 6000px;
  /* overflow-y: scroll; */
}

.card1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-top: 20px;
  height: 250px;
  width: 250px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  color: black;
}
.card1:hover {
  transform: scale(1.02);
  transition: 0.3s;
  text-decoration: none;
}
.card1 img {
  width: 250px;
  height: 125px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}
.sinopsis {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 125px;
  background: white;
  /* overflow: hidden; */
}
.sinopsis h1 {
  font-family: "Airbnb Cereal App bold";
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
}
.sinopsis p {
  font-family: "Airbnb Cereal App Light";
  font-size: 12px;
  text-align: justify;
  padding: 10px;
  text-decoration: none;
  overflow: hidden;
}
</style>