<template>
    <ul>
      <li>
        <router-link :class="{ active: rl_1 }" :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li><router-link :class="{ active: rl_2 }" :to="{ name: 'Contact' }">Contact</router-link>
      </li>
      <li><router-link :class="{ active: rl_3 }" :to="{ name: 'About' }">About</router-link>
      </li>
      <li><router-link :class="{ active: rl_4 }" :to="{ name: 'Produk' }">Produk</router-link>
      </li>
    </ul>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      idMenu: Number,
    },
    setup(props) {
      const rl_1 = ref(false);
      const rl_2 = ref(false);
      const rl_3 = ref(false);
      const rl_4 = ref(false);
  
      if (props.idMenu == 1) {
        rl_1.value = true;
        rl_2.value = false;
        rl_3.value = false;
        rl_4.value = false;
      } else if (props.idMenu == 2) {
        rl_1.value = false;
        rl_2.value = true;
        rl_3.value = false;
        rl_4.value = false;
      } else if (props.idMenu == 3) {
        rl_1.value = false;
        rl_2.value = false;
        rl_3.value = true;
        rl_4.value = false;
      } else if (props.idMenu == 4) {
        rl_1.value = false;
        rl_2.value = false;
        rl_3.value = false;
        rl_4.value = true;
      }
  
      return {
        rl_1,
        rl_2,
        rl_3,
        rl_4
      }
    }
  }
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #4caf50;
  }
  </style>