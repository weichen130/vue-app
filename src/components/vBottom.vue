<template>
  <section>
    <Tabbar>
      <TabbarItem @click="linkToHome"  icon="chat" dot></TabbarItem>
      <TabbarItem @click="linkToUser"  icon="contact"></TabbarItem>
      <TabbarItem @click="linkToSetting"  icon="setting"></TabbarItem>
    </Tabbar>
  </section>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vant';
    export default {
        name: "vBottom",
        data() {
          return {

          }
        },
        components: {
          Tabbar,
          TabbarItem
        },
        methods: {
          linkToHome(){
            this.$router.push({path:"/home"});
          },
          linkToUser(){
            this.$router.push({path:"/user"});
          },
          linkToSetting(){
            this.$router.push({path:"/setting"});
          }
        }

    }
</script>

<style scoped>

</style>
