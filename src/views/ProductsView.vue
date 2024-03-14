<template>

<table>
<tr>
  <th>Product ID</th>
  <th>Name</th>
  <th>Description</th>
  <th>price</th>
  <th>Product</th>
</tr>
<tbody v-for="item in $store.state.products" :key="item.prodID">
<td>{{item.prodID}}</td>
<td>{{item.name}}</td>
<td>{{item.description}}</td>
<td>{{item.price}}</td>
<td><img :src="item.image" alt="" height="80px" width="90px"></td>
<td><button @click="getProducts">Show Product</button></td>
</tbody>
</table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products:null,
      };
    },
    methods: {
    
    },
    computed: {
      async getProducts(){
         await this.$store.dispatch('getProducts')
        },
     async getproduct() {
      await this.store.dispatch('getProduct')
    },
      },
    mounted() {
      this.getProducts
      this.getProduct
    }
  };
  </script>
  
  <style scoped>
table{
  border: solid white 3px;
}
  tbody,td ,th{
    border: solid white 3px;
  }
  </style>
  