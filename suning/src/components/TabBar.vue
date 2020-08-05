<template>
    <div class="container">
        <div class="item" @click="btnClick('home')">首页</div>
        <div class="item" @click="btnClick('classify')">分类</div>
        <div class="item"><a href="https://c.m.suning.com/channel/higoubq11.html?safp=f73ee1cf.AIUE2AAaaA.0.9113e495e7&safpn=10009">必抢清单</a></div>
        <div class="item" @click="btnClick('shopCar')">购物车</div>
        <div class="item" @click="btnClick('my')">我的易购</div>
    </div>
</template>

<script>
export default {
    methods:{
        btnClick(val){
            this.$router.push({
                path:"/"+val
            })
        }
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>