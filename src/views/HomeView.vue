<script>
import api from "../server/api";
import product from "@/components/product.vue";
export default {
  data() {
    return {
      product: null,
      page: 1,
      limit: 25,
      names: ["saman","botir"],
      languages:[]
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
    },
    yopish(){
      alert("ishladi")
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
  <product @close="yopish" :names="names">

  </product>
  <div>
    <div>
      <span>english</span>
      <input type="checkbox" v-model="languages" value="english">
    </div>
    <div>
      <span>Russian</span>
      <input type="checkbox" v-model="languages" value="russian">
    </div>
    <div>
      <span>uzbek</span>
      <input type="checkbox" v-model="languages" value="uzbek">
    </div>
  </div>
  <div>
    <ol>
      <li v-for="lang in languages" :key="lang">{{lang}}</li>
    </ol>
  </div>
  <input type="text" ref="input" @keyup.enter="clickMe">
  <button @click="clickMe">Click me</button>
  <h1 ref="name">Salom Vue</h1>
 </div>
</template>
