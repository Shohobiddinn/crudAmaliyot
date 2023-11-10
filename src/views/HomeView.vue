<script>
import api from "../server/api";
import product from "@/src/components/product.vue";
export default {
  data() {
    return {
      product: null,
      page: 1,
      limit: 25
    };
  },
  created() {
    this.productApi();
  },
  methods: {
    productApi() {
      api.products(0).then((res) => {
        this.product = res?.data.slice(0, 2);
      });
    },
    clickMe(){
      this.$refs.name.textContent = this.$refs.input.value
      console.log(this.$refs.input.value);
      this.$refs.input.value = ""
    }
  },
  components:{
    product
  }
};
</script>
<template>
  <!-- <pre v-for="item in product" :key="item?.id">
    <router-link :to="`/about/${item?.id}`">
      <img style="width: 100px;height: 100px;" :src="item?.image" alt="">
    </router-link>
 </pre> -->
 <div>
  <product>
    
  </product>
  <input type="text" ref="input" @keyup.enter="clickMe">
  <button @click="clickMe">Click me</button>
  <h1 ref="name">Salom Vue</h1>
 </div>
</template>
