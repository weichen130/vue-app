<template>
  <section>
    <vTitle></vTitle>
    <article>Hello {{getName}}</article>
    <article><Field v-model="user.name" placeholder="请输入名称" /></article>
    <article><Button @click="updateUserName()">修改姓名</Button></article>
    <router-link :to="{name:'home'}">跳转Home页面</router-link>
    <vBottom></vBottom>
  </section>
</template>

<script>
    import { Field,Button,NavBar } from 'vant';
    import { mapState } from 'vuex';
    import vTitle from '@/components/vTitle'
    import vBottom from '@/components/vBottom'
    import router from '../router'
    export default {
        name: "user",
        data() {
          return {
            user:{
              name:""
            }
          }
        },
      computed: {
        ...mapState({
          getName:state=>state.user.name
        })
      },
      components: {
          Field,
          Button,
          vTitle,
          vBottom
      },
      methods: {
          updateUserName(){
            console.log(this.$store);
            this.$store.dispatch('setUserInfo',{name:this.user.name});
          },
          onClickLeft(){

          }
      }
    }
</script>

<style scoped>

</style>
