<template>
<div>
  <div class="container">    
      <products @viewDetails="viewDetails"></products>
      <product-details :product="selectedProduct"></product-details>
  </div>
</div>
</template>

<script>
import ProductList from './ProductList.vue'
import ProductDetails from './ProductDetails.vue'
export default {
  data(){
    return {
      selectedProduct: {}
    }
  },
  components: {
    'products': ProductList,
    ProductDetails,
  },  
  methods:{
    viewDetails(product){
      this.selectedProduct = product;
    }
  }
}
</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
  }
</style>