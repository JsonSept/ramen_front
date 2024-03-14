<template lang="">
    <div class='container'>
    
    <nav class="navbar fixed-top bg-body-tertiary">
        <!-- <img src="https://i.postimg.cc/m2FVdpVM/R-2.png" alt="" width="40" height="30"> -->
        <div class="container-fluid" id="nav">
             <!-- <a class="navbar-brand" href="#">Fixed top</a> -->
             <router-link to="/">Start</router-link>
             <router-link to="/signup">Sign up</router-link>
             <router-link to="/login">login</router-link>
            <router-link to="/landing" id='a'>Home</router-link>
            <router-link to="/about" id='a'>About</router-link>
            <router-link to="/products" id='a'>Products</router-link>
            <router-link to="/item" id='a'>Item</router-link>

        </div>
    </nav>
  
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
body {
    color:black;
    background-color: rgb(255, 255, 255);
}
.navbar {
    display : flex;
    padding:20px;
    background-color: black;
    text-align: start;
}
.container-fluid {
    /* text-align: end; */
    justify-content: end;
    display: flex;
}
   #nav {
    margin-left: 43%;
   }
</style>