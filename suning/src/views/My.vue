<template>
  <div class="my-box">
    <div class="top-nav">
      <a>联系客服</a>
      <span>|</span>
      <a>企业注册</a>
    </div>
    <div>
      <h2>
        <img src="../assets/myimg/suning-icon.png" alt="图片加载失败">
        欢迎登陆苏宁易购
      </h2>
      组件切换
    </div>
    <div class="footer">
      <div>
        其他登陆方式
        <div>
          <a><img src="../assets/myimg/qq.png" alt="图片加载失败"></a>
          <a><img src="../assets/myimg/zfb.png" alt="图片加载失败"></a>
          <a><img src="../assets/myimg/epp.png" alt="图片加载失败"></a>
          <a><img src="../assets/myimg/k.png" alt="图片加载失败"></a>
        </div>
        <div>
          我同意 
          <a>《苏宁易购会员章程》</a>
          <a>《易付宝协议》</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.my-box{
  background-color: white;
}
.top-nav{
  font-size: .48rem;
  color: #222;
  text-align: right;
  padding: 10px;
}
.top-nav a{margin: 0 4px;}
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
</style>