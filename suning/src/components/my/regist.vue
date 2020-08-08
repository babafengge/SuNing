<template>
  <div class="body">
    <div  class="iptsty">
        <input type="text" placeholder="请输入手机号/用户名/邮箱"></input>
    </div>
    <div class="iptsty">
        <input type="passworld" placeholder="请输入密码" ></input>
    </div>
    <br>
    <div class="buttonbox"><p>登录</p></div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   content: "",
    //   password: "",
    };
  },
};
</script>

<style scoped>
.body{ 
  margin-top: 1.2rem;
  color: #bbb;
  }
input{
    outline: none;
    border: none;
    width: 10rem;
    caret-color: #fb0;
    margin-left: .48rem;
    font-size: .64rem;
}
.iptsty{
    width: 12rem;
    height: 1.8rem;
    line-height: 1.8rem;
    border-bottom: 1px solid #bbb;
}
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

</style>