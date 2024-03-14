<template>
<table>
<tr>
  <th>Product ID</th>
  <th>Name</th>
  <th>Description</th>
  <th>price</th>
  <th>Product</th>
</tr>
<tbody v-for="item in $store.getProduct" :key="item.prodID">
<td>{{item.prodID}}</td>
<td>{{item.name}}</td>
<td>{{item.description}}</td>
<td>{{item.price}}</td>
<td><img :src="item.image" alt="" height="80px" width="90px"></td>
</tbody>
</table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products:null,
    }
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
}
  </script>
  