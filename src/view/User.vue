<template>
  <section>
    <vTitle></vTitle>
    <article>姓名： {{getUser.name}}</article>
    <article>性别： {{getUser.sex=='0'?'男':getUser.sex=='1'?'女':''}}</article>
    <article>爱好： <span v-for="(item,index) of getUser.interest" :key="index">{{item}}<span v-if="index<getUser.interest.length-1">、</span>  </span></article>
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
          getUser:state=>state.user
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
