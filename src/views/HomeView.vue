<script>
import api from "../server/api";
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.productApi();
  },
  methods: {
    productApi() {
      api.products("/products").then((res) => {
        this.product = res?.data.slice(0, 2);
      });
    },
  },
};
</script>
<template>
  <pre v-for="item in product" :key="item?.id">
    <router-link :to="`/about/${item?.id}`">
      <img style="width: 100px;height: 100px;" :src="item?.image" alt="">
    </router-link>
 </pre>
</template>
