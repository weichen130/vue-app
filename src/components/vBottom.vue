<template>
  <section>
    <Tabbar>
      <TabbarItem  icon="chat" dot></TabbarItem>
      <TabbarItem  icon="contact"></TabbarItem>
      <TabbarItem  icon="setting"></TabbarItem>
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
        }

    }
</script>

<style scoped>

</style>
