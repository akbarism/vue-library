<template>
    <div>
        <div class="nav">
            <router-link to="/">
            <i class="fas fa-arrow-left"></i>
            </router-link>
             <h3 class="sub">Histroy Peminjaman Buku</h3>
        </div>
        <div class="tabel">
            <div class="table-responsive">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">ID Loan</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tittle Book</th>
                    <th scope="col">Tanggal Pinjam</th>
                    <th scope="col">Tanggal Kembali</th>
                    <th scope="col">Status</th>
                    <th scope="col">Denda</th>
                    </tr>
                </thead>
                <tbody v-for="cart in loans" :key="cart.id_loan">
                    <tr>
                    <th scope="row">{{cart.id_loan}}</th>
                    <td>{{cart.fullname}}</td>
                    <td>{{cart.tittle}}</td>
                    <td>{{cart.loan_date}}</td>
                    <td>{{cart.expired_date}}</td>
                    <td>{{cart.status}}</td>
                    <td>{{cart.forfeit}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'History',
    data(){
        return {
            loans: [],
            user:[],
            role: null
        }
    },
    methods: {
        getAllCart(){
            axios.get(`http://localhost:8000/loan/${localStorage.idUser}`)
            .then((res)=> {
                this.loans = res.data
            })
        },
        getUserDetail(){
            axios.get(`http://localhost:8000/user/${localStorage.idUser}`)
        .then(res => {
            this.user = res.data.result
            this.role = this.user[0].type
        })
        .catch(err=> {
            console.log(err)
        })
        }
    },
    mounted(){
        this.getAllCart();
        this.getUserDetail()
    }
}
</script>

<style scoped>
    .tabel {
        padding: 50px;
        box-sizing: border-box;
    }
    .nav {
        display:  flex;
        align-items: center;
        width: 100%;
        height: 70px;
        padding: 10px;
        background: #ffffff;
        box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.1);
    }
    .sub {
        margin-left: 450px;
    }
    .fas {
        text-decoration: none;
        color: black;
    }
     h1{
        text-align: center;
        margin-bottom: 40px;
    }
    .back{
        /* background-color: b */
        width: 50px;
        height: 50px;
        margin-top: 20px;
        margin-left: 20px;
    }
    .action{
        text-align: center;
    }
    .btn-primary{
        width: 85px;
    }
</style>