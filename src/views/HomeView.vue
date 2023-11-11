
<template>
  <!-- <pre v-for="item in product" :key="item?.id">
    <router-link :to="`/about/${item?.id}`">
      <img style="width: 100px;height: 100px;" :src="item?.image" alt="">
    </router-link>
 </pre> -->
 <div>
  
  

  <input type="text" ref="input" @keyup="scil">
  <button @click="clickMe">Click me</button>
  <ol>
    <li v-for="item in skils" :key="item">{{ item }}</li>
  </ol>
  <!-- <h1 ref="name">Salom Vue</h1> -->
 </div>
</template>
<script>
import product from "@/components/product.vue";
export default {
  data() {
    return {
      skils:[]
    };
  },
  created() {
  },
  methods: {
    scil(event){
      if(event.key == "," && this.$refs.input){
        if(this.$refs.input.value.length >= 3){
          // console.log(this.$refs.input.value);
          // this.$refs.input.value = this.$refs.input.value.substring(0,this.$refs.input.value.length - 1)
          // this.skils.push(this.$refs.input.value)
          // this.$refs.input.value = null;
          console.log(this.$refs.input.value.substring(0,this.$refs.input.value.length - 1));
        }
      }
    }
 
  },
  components:{
    product
  }
};
</script>