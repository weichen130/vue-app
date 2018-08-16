<template>
    <section>
      <vTitle></vTitle>
      <van-row>
        <van-col span="8" style=" height: 44px;line-height: 44px;">姓名：</van-col>
        <van-col span="16"><Field  v-model="fromData.name" placeholder="请输入用户名" /></van-col>
      </van-row>
      <van-row>
        <van-col span="8" style=" height: 44px;line-height: 44px;">性别：</van-col>
        <van-col span="16">
          <RadioGroup class="radio" v-model="fromData.sex">
            <Radio name="0" >男</Radio>
            <Radio name="1">女</Radio>
          </RadioGroup>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" style=" height: 44px;line-height: 44px;">爱好：</van-col>
        <van-col span="16">
          <CheckboxGroup class="checkbox" v-model="fromData.interest">
            <Checkbox
              v-for="(item, index) in list"
              :key="item"
              :name="item"
            >
              {{ item }}
            </Checkbox>
          </CheckboxGroup>
        </van-col>
      </van-row>
      <van-row>
        <van-col offset="8" span="14"><Button @click="submit" size="large">提交</Button></van-col>
      </van-row>
      <vBottom></vBottom>
    </section>
</template>

<script>
  import vBottom from '@/components/vBottom';
  import vTitle from '@/components/vTitle';
  import {Field,RadioGroup, Radio, Checkbox, CheckboxGroup,Button} from 'vant';
  export default {
    name: "setting",
    data() {
        return {
          fromData:{
            name:"",
            sex:"",
            interest:[]
          },
          list:["滑雪","看电影","看报纸","上网聊天","看小说","足球","球类活动","旅游"]
        }
    },
    components: {
      vTitle,
      vBottom,
      Field,
      RadioGroup,
      Radio,
      Checkbox,
      CheckboxGroup,
      Button
    },
    methods: {
      submit(){
        console.log(this.fromData);
        this.$store.dispatch('setUserInfo',this.fromData);
      }
    }
  }
</script>

<style scoped>
.radio>div{
  display: inline-block;
  width:45%;
  text-align: left;
}
.checkbox>div{
  display: inline-block;
  width: 50%;
  text-align: left;
}
</style>
