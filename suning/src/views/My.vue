<template>
<div class="content">
    <div class="my-box" v-if="seen">
      <div class="top-nav">
        <a class="first-nav">联系客服</a>
        <a>企业注册</a>
      </div>
      <div class="middle">
        <h2>
          <img src="../assets/myimg/suning-icon.png" alt="图片加载失败">
          欢迎登陆苏宁易购
        </h2>
        <regist></regist>
        <div class="otherbutton">验证码登录</div>
      </div>
      <div class="footer">
        <div>
          <div class="f-nav">其他登陆方式</div>
          <div class="f-icons">
            <a><img src="../assets/myimg/qq.png" alt="图片加载失败"></a>
            <a><img src="../assets/myimg/zfb.png" alt="图片加载失败"></a>
            <a><img src="../assets/myimg/epp.png" alt="图片加载失败"></a>
            <a><img src="../assets/myimg/k.png" alt="图片加载失败"></a>
          </div>
          <div class="f-last">
            <span>我同意</span>
            <a>《苏宁易购会员章程》</a>
            <a>《易付宝协议》</a>
          </div>
        </div>

      </div>
    </div>
    <enroll v-else></enroll>
</div>
</template>

<script>
import regist from "../components/my/regist.vue"
import enroll from "../components/my/enroll.vue"

export default {
  computed:{
    seen(){
      return this.$store.state.login
    }
  },
  components:{
    "regist":regist,
    "enroll":enroll
  }
}
</script>

<style scoped>
.content{
  height: 100%;
  display: flex;
}
.my-box{
  width: 100%;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top-nav{
  font-size: .48rem;
  color: #222;
  text-align: right;
  height: 1.2rem;
  line-height: 1.2rem;
  padding: .3rem;
}
.first-nav{
  border-right: 1px solid #dddddd;
  padding-right: .3rem;
}
.top-nav a{margin-left:.3rem;}
h2{
  font-size: .72rem;
  font-weight: 400;
}
h2 img{
  width: 1.8rem;
  height: 1.8rem;
  margin-right: .6rem;
  vertical-align: middle;
}
.middle{
  flex-grow: 1;
  padding: 0 1.5rem;
  margin-top: 1.12rem;
}
.otherbutton{
  margin-top: .84rem;
  font-size: .6rem;
  text-align: center;
}
.footer{
  text-align: center;
  font-size: .4rem;
  color: #999;
}
.f-nav{
  margin-bottom: .38rem;
}
.f-icons{margin-bottom: .7rem;}
.f-icons a{
  padding-right: 1rem;
}
.f-icons img{width: 1.32rem;}
.f-last{
  
  margin-bottom: 0.84rem;
}
</style>