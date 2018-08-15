<template>
  <section id="vTitle">
    <NavBar :title="name"  left-arrow  @click-left="onClickLeft"  />
  </section>
</template>

<script>
import { NavBar } from 'vant';
export default {
    name: 'vTitle',
    data() {
      return {
        name:document.title
      }
    },
    methods: {
      onClickLeft(){
        this.$router.go(-1);
      }
    },
    components: {
      NavBar
    }
}
</script>

<style scoped>

</style>
