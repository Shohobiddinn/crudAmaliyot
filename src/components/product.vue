<template>
  <div>
    <div class="product">
      <img src="" alt="" />
      <div class="options">
        <div class="title" v-for="item in names" :key="item">lorem ipsum</div>
        <div class="title">45$</div>
        <div class="btn">click me</div>
        <button @click="$emit('close')">close</button>
        <Title>

        </Title>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue"
export default {
  props:['names'],
  data() {
    return {};
  },
  components:{
    Title
  }
};
</script>

<style lang="scss" scoped>
</style>