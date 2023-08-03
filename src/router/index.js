import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/components/Home.vue"; 
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Produk from "@/components/Produk.vue";
import Kategori from "@/components/Kategori.vue";
import Detail from "@/components/Detail.vue";
import DetailKategori from "@/components/DetailKategori.vue";

import Login from "../view/Login.vue";
import { users } from '../assets/user';


const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  {
    path:"/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = users.find((user) => user.isLoggedIn == true);
      if (loggedInUser){
        next();
      } else {
        next("/login");
      }
    },
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;