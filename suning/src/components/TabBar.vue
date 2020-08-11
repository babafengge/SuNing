<template>
    <div class="tab-bar-container">
        <div class="tab-bar-item" @click="btnClick('')">
            <div v-if="page=='/'"><img src="../assets/tabbar/heart.png"></div>
            <div v-else><img src="../assets/tabbar/tab-bar-home.png"></div>
            <div :class="{'tab-bar-active':page=='/'}" v-if="page=='/'">猜你喜欢</div>
            <div :class="{'tab-bar-active':page=='/'}" v-else>首页</div>
        </div>
        <div class="tab-bar-item" @click="btnClick('classify')">
            <div v-if="page=='/classify'"><img src="../assets/tabbar/magnifier-active.png"></div>
            <div v-else><img src="../assets/tabbar/magnifier.png"></div>
            <div :class="{'tab-bar-active':page=='/classify'}">分类</div>
        </div>
        <div class="tab-bar-item"><a href="https://c.m.suning.com/channel/higoubq11.html?safp=f73ee1cf.AIUE2AAaaA.0.9113e495e7&safpn=10009">
            <div v-if="page=='/requir'"><img src="../assets/tabbar/must-grab-active.png"></div>
            <div v-else><img src="../assets/tabbar/must-grab.png"></div>
            <div :class="{'tab-bar-active':page=='/requir'}">必抢清单</div>
        </a></div>
        <div class="tab-bar-item" @click="btnClick('shopCar')">
            <div v-if="page=='/shopCar'"><img src="../assets/tabbar/shop-car-active.png"></div>
            <div v-else><img src="../assets/tabbar/shop-car.png"></div>
            <div :class="{'tab-bar-active':page=='/shopCar'}">购物车</div>
        </div>
        <div class="tab-bar-item" @click="btnClick('my')">
            <div v-if="page=='/my'"><img src="../assets/tabbar/my-active.png"></div>
            <div v-else><img src="../assets/tabbar/my.png"></div>
            <div :class="{'tab-bar-active':page=='/my'}">我的易购</div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        page(){
            return this.$route.path;
        }
    },
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
.tab-bar-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 1px solid #EEE;
    background: #fff;
    height: 2rem;
    flex-shrink: 0;
}
.tab-bar-item{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
    color: #666;
}
.tab-bar-item a{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
}
.tab-bar-item img{
    width: 0.96rem;
}
.tab-bar-active{
    color:#000;
    font-weight: bold;
}
</style>