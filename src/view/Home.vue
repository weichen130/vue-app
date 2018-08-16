<template>
    <section id="home">
      <vTitle></vTitle>
      <Swipe :autoplay="3000">
        <SwipeItem class="demo-lazyload" v-for="(item,index) of swipeImages" :key="index">
          <img  v-lazy="item">
        </SwipeItem>
      </Swipe>
      <router-link :to="{name:'user'}">回退User页面</router-link>
      <vBottom></vBottom>
    </section>
</template>

<script>
  import {Button,Swipe, SwipeItem} from 'vant';
  import { mapState } from 'vuex';
  import vTitle from '@/components/vTitle';
  import vBottom from '@/components/vBottom';
    export default {
      name: "home",
      components: {
        Button,
        Swipe,
        SwipeItem
      },
      data() {
        return {
          swipeImages:[
            require('../assets/images/swipe-image-01.jpg'),
            require('../assets/images/swipe-image-02.jpg'),
            require('../assets/images/swipe-image-03.jpg'),
            require('../assets/images/swipe-image-04.jpg')
          ]
        }
      },
      computed: {
        ...mapState({
          getName:state=>{
            console.log(`state:${JSON.stringify(state)}`);
            return state.user.name;
          }
        })
      },
      components: {
        vTitle,
        vBottom,
        Swipe,
        SwipeItem
      }
    }
</script>

<style scoped>
  .demo-lazyload img, .demo-lazyload div[lazy] {
    padding: 15px;
    width: 100%;
    height: 250px;
    margin: 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
</style>
