<template>
  <div>
    <div class="product">
      <img src="" alt="" />
      <div class="options">
        <div class="title">lorem ipsum</div>
        <div class="title">45$</div>
        <div class="btn">click me</div>
        <button @click="$emit('close','salom')">close</button>
        <Title>

        </Title>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue"
export default {
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