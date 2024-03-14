<template>
  <navbar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
 import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue'
 export default {
  components: {
    NavbarComp,
    FooterComp
  }
 }
</script>

<style>
* {
  padding-left:0;

}
body {
  
  background-color:aquamarine;
  background-repeat: no-repeat;
  background-size: cover;
background-blend-mode: darken;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030303;
}

nav {
  padding: 30px;
}
nav a {
  
  font-weight: bold;
  color: #fffefe;
  text-decoration: none;
  padding: 7px;
}

nav a.router-link-exact-active {
  color: #070707;
  background: #03f2ae;
  padding: 5px;
  border-radius: 6px 0 6px 0;
}
</style>
