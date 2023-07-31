import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/components/Home.vue"; 
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Produk from "@/components/Produk.vue";
import Detail from "@/components/Detail.vue";

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
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/detail/id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;