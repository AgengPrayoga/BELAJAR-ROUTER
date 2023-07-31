<template>
  <Navbar :idMenu="idMenu" :key="idMenu"/>
  <router-view @id-menu="setMenu($event)"/>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import { ref } from 'vue'

  export default {
    name: 'App',
    components : {
      Navbar
    },
    setup() 
    {
      const idMenu = ref(1);

      function setMenu(id)
      {
        idMenu.value = id;
      }
      return{
        setMenu,
        idMenu,
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
    background-color: #4CAF50;
    
  }
</style>
<style>
  #app {
  font-family: Avenir, Halvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  }
</style>