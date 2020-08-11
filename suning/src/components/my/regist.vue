<template>
  <div class="body">
    <div class="iptsty first">
        <input type="text" placeholder="请输入手机号/用户名/邮箱"  v-model="namemsg">
        <span >
          <img src="../../assets/myimg/delicon.png" alt="图片加载失败" class="pwdimg"  v-if="seen1" @click="delbtn1">
        </span>
    </div>
    <div class="iptsty">
        <input :type="ispwd" placeholder="请输入密码" v-model="pwdmsg">
        <span>
        <img src="../../assets/myimg/delicon.png" alt="图片加载失败" class="pwdimg" v-if='seen2' @click="delbtn2">
        </span>
        <span @click="showpwd">
          <img src="../../assets/myimg/eye_open.png" alt="图片加载失败" class="pwdimg" v-if="closepwd">
          <img src="../../assets/myimg/eye_close.png" alt="图片加载失败" class="pwdimg" v-else>
        </span>
        <a >忘记密码</a>
    </div>
    <br>
    <div class="buttonbox" @click="registbtn(namemsg,pwdmsg)"><p>登录</p></div>
    
  </div>
</template>

<script>
export default {
  props:['show'],
  data() {
    return {
      ispwd:'password',
      closepwd:false,
      seen1:false,
      seen2:false,
      namemsg: "",
      pwdmsg:""
    }
  },
  watch:{
    namemsg(newValue){
      if(newValue != ''){
        this.seen1 = true
      }else{
        this.seen1 = false
      }
    },
    pwdmsg(pwdValue){
      if(pwdValue != ''){
        this.seen2 = true
      }else{
        this.seen2 = false
      }
    }
  },
  methods:{
    showpwd(){
      if(this.closepwd){
        this.ispwd ="password";
        this.closepwd = false;
      }else{
        this.ispwd ="text";
        this.closepwd = true;
      }
    },
    delbtn1(){
       if(this.namemsg.trim()!=""){
         this.namemsg = "";
       } 
    },
    delbtn2(){
      if(this.pwdmsg.trim()!=""){
         this.pwdmsg = "";
       } 
    },
    registbtn(namemsg,pwdmsg){
      if(this.namemsg.trim()==""){
          alert("请输入登录名")
      }else if(this.pwdmsg.trim()==""){
        alert("请输入密码")
      }else{
        let reg = /^1[3-9][0-9]{9}$/; 
        let reg1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/; 
        if(!reg.test(this.namemsg)){
          alert('请输入正确的登录名');
          // return false;
        }
        else if(!reg1.test(this.pwdmsg)){
          alert('请输入正确的密码');
          // return false;
        }
        else if(this.namemsg =='13111111111'&& this.pwdmsg =="Lww12345678"){
          this.$store.commit("loginAfter")
        }
      }
    }
  }
};
</script>

<style scoped>
.body{ 
  margin-top: 1.2rem;
  color: #bbb;
   font-size: .64rem;
  }
input{
    outline: none;
    border: none;
    width: 6rem;
    caret-color: #fb0;
    margin-left: .48rem;
   
}
.iptsty{
    width: 12rem;
    height: 1.8rem;
    line-height: 1.8rem;
    border-bottom: 1px solid #bbb;
}
.first input { width: 10rem;}
.buttonbox p{
    width: 12rem;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    color: #222;
    font-size: .68rem;
    border-radius: .36rem;
    background: #fc0;
    font-weight: 700;
}
.pwdimg{
  width: .84rem;
  vertical-align: middle;
  margin-right: .5rem;
}
</style>