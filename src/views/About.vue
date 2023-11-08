<template>
  <div>
    <pre>{{ $route.params.id }}</pre>
    <pre>
    <img style="width: 100px;height: 100px;" :src="product?.image" alt="">
    </pre>
  </div>
</template>
<script>
import api from "../server/api";
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.productIdApi();
  },
  methods: {
    productIdApi() {
      api.productId(`/products/${this.$route.params.id}`).then((res) => {  
        this.product = res?.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>