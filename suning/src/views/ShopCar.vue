<template>
    <div class="container">
        <div class="main">
            <div class="header">
                <div class="header-side"></div>
                <div class="header-name">购物车</div>
                <div class="header-side">
                    <div v-show="suzy.length>0||suhwg.length>0">
                        <div v-if="del" @click="del=false">编辑</div>
                        <div v-else @click="del=true">完成</div>
                    </div>
                </div>
            </div>
            <div class="address-content" @click="seen=true">
                <span>江苏苏州吴中区</span>
                <i></i>
            </div>
            <empty-car v-if="suzy.length==0&&suhwg.length==0"></empty-car>
            <no-empty v-else></no-empty>
            <div>
                <div class="recommend-guessliked-header"></div>
                <div class="recommend-purchased-content">
                    <div class="goods-info" v-for="item in shoplove">
                        <div class="goods-content">
                            <div class="recommend-goods">
                                <img :src="item.pic" @click="goDetail(item)">
                            </div>
                            <div @click="goDetail(item)">
                                <div class="shop-info">
                                    {{item.text}}
                                </div>
                                <div class="promotion-activity">
                                    <div :class="item.shop"></div>
                                </div>
                            </div>
                            <div class="recommend-price">
                                <div class="recommend-info">
                                    <div class="mount">
                                        <span class="price-symbol">￥</span>
                                        <span class="price-count">{{item.price.slice(0,-3)}}</span>
                                        <span class="price-point">.{{item.price.slice(-2)}}</span>
                                    </div>
                                </div>
                                <div class="cart" @click="addShop(item)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reach-bottom"></div>
        </div>
        <tab-bar></tab-bar>
        <div class="shadow" v-if="seen">
            <div class="address-choose">
                <div class="address-header">
                    <i></i>
                    <h2>选择收货地址</h2>
                    <i class="address-close" @click="seen=false"></i>
                </div>
                <div class="address-container">
                    <div class="address-detail">
                        <div>
                            <div class="now-address">
                                <i></i>
                                当前位置：江苏苏州吴中区
                            </div>
                            <div class="address-serve">
                                <div class="address-serve-container">
                                    <div class="address-serve-container-left">定位服务未开启</div>
                                    <div class="address-serve-container-right">
                                        <i></i>
                                        刷新定位
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="address-footer">
                        <div class="address-btn">选择其他收货地址</div>
                    </div>
                </div>
            </div>
        </div>
        <price-count v-if="suzy.length>0||suhwg.length>0" :del="del"  @show="seen2=true"></price-count>
        <div class="delShadow" v-if="seen2">
            <div class="delWindow">
                <div class="delHeader">提示</div>
                <div class="delBody">是否确认删除？</div>
                <div class="delFoot">
                    <span @click="seen2=false" class="delbtn">取消</span>
                    <span @click="delShop" class="delbtn yes">确定</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabBar from "../components/TabBar.vue"
import EmptyCar from "../components/shopbar/Empty.vue"
import axios from "axios"
import NoEmpty from "../components/shopbar/NoEmpty.vue"
import PriceCount from "../components/shopbar/PriceCount.vue"
export default {
    computed:{
        suzy(){
            return this.$store.state.suzy;
        },
        suhwg(){
            return this.$store.state.suhwg;
        }
    },
    components:{
        "tab-bar":TabBar,
        "empty-car":EmptyCar,
        "no-empty":NoEmpty,
        "price-count":PriceCount
    },
    data(){
        return{
            seen:false,
            del:true,
            shoplove:[],
            seen2:false
        }
    },
    created(){
        let url = "http://localhost:5500/src/assets/shopbar/shopcar.json";
        let that = this;
        axios.get(url).then(response=>{
            // console.log(response)
            if(response.data.code==200){
                that.shoplove=response.data.list;
            }
        })
    },
    methods:{
        addShop(item){
            this.$store.commit("addShop",item)
        },
        delShop(){
            this.$store.commit("delShop");
            this.seen2=false;
            this.del=true;
        },
        goDetail(val){
            if(val.id){
                this.$router.push({
                    path:"/detail",
                    query:{
                        id:val.id
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f5f5f9;
}
.main{
    flex-grow: 1;
    overflow: auto;
}
.header{
    height: 1.7rem;
    font-size: 0.68rem;
    line-height: 1.7rem;
    text-align: center;
    background: #fff;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.48rem;
}
.header-name{
    flex-grow: 1;
}
.header-side{
    flex:1 1;
    text-align: right;
    color: #37f;
    font-size: 0.56rem;
}
.address-content{
    border-radius: .48rem;
    margin: .48rem .48rem 0;
    padding: .3rem .48rem;
    font-size: .4rem;
    background: #ffe37e;
    line-height: 1.9;
    display: flex;
    justify-content: space-between;
}
.address-content i{
    width: .84rem;
    height: .84rem;
    background: url(../assets/shopbar/右箭头.png) center center no-repeat;
    background-size: 20px;
}
.recommend-guessliked-header{
    width: 8.16rem;
    height: .96rem;
    background: url(../assets/shopbar/cnxh-title.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.48rem;
}
.recommend-purchased-content{
    padding: 0 0.48rem;
    grid-column-gap: .2rem;
    column-gap: .2rem;
    columns: 6.92rem 2;
}
.reach-bottom{
    margin: .72rem auto 1.8rem;
    width: 8.4rem;
    height: .48rem;
    background: url(../assets/shopbar/reach-bottom.png);
    background-size: 100% 100%;
}
.shadow{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0,0,0,.4);
    display: flex;
    flex-direction: column-reverse;
    z-index: 999;
}
.address-choose{
    background-color: #fff;
    border-radius: 0.4rem;
}
.address-header{
    height: 1.76rem;
    line-height: 1.76rem;
    padding: 0 0.48rem;
    text-align: center;
    font-size: 0.68rem;
    color: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h2{
    font-size: 100%;
    font-weight: 500;
}
.address-header i{
    width: 0.52rem;
    height: 0.52rem;
}
.address-close{
    background: url(../assets/shopbar/叉叉.png) no-repeat center center;
    background-size: 150%;
}
.address-btn{
    text-align: center;
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: 0.64rem;
    color: #fff;
    background-image: linear-gradient(90deg, #FF8F00 0%, #FF5500 97%);
    margin: 0 0.1rem;
    border-radius: 0.36rem;
}
.address-footer{
    padding: 0.4rem;
}
.address-detail{
    min-height: 13.4rem;
}
.now-address{
    background: #FFF3EA;
    font-size: 0.56rem;
    color: #FF5500;
    padding: 0.4rem 0.48rem;
}
.now-address i{
    height: 0.64rem;
    width: 0.64rem;
    background: url(../assets/shopbar/定位.png) no-repeat;
    background-size: 0.64rem 0.64rem;
    display: inline-block;
    position: relative;
    top: 0.12rem;
    margin-right: 0.16rem;
}
.address-serve{
    padding: 0 0.48rem;
}
.address-serve-container{
    display: flex;
    justify-content: space-between;
    font-size: 0.52rem;
    padding: 0.3rem 0;
}
.address-serve-container-left{
    color: #FF5500;
}
.address-serve-container-right{
    color: #666666;
    font-size: 0.48rem;
    position: relative;
}
.address-serve-container-right i{
    background: url(../assets/shopbar/刷新.png);
    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;
    background-size: 0.6rem 0.6rem;
    margin-right: 0.1rem;
    position: relative;
    top: 0.07rem;
}
.goods-info{
    padding-bottom: .24rem;
}
.goods-content{
    background: #fff;
    border-radius: .24rem;
    padding: .48rem .48rem .36rem;
    font-size: .4rem;
    position: relative;
}
.recommend-goods{
    height: 5.96rem;
    padding: .24rem;
}
.recommend-goods img{
    width: 100%;
    height: 100%;
}
.shop-info{
    margin: .24rem 0;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: .48rem;
    font-weight: 700;
}
.promotion-activity{
    height: .6rem;
    line-height: .6rem;
    font-size: .4rem;
    display: flex;
    align-items: center;
    margin-bottom: .36rem;
}
.su-jiwu{
    width: 1.84rem;
    height: .6rem;
    margin-right: .2rem;
    background: url(../assets/shopbar/sn-jiwu.png) no-repeat;
    background-size: 100% 100%;
}
.su-zy{
    width: 1.04rem;
    height: .6rem;
    margin-right: .2rem;
    background: url(../assets/shopbar/sn-ziying.png) no-repeat;
    background-size: 100% 100%;
}
.su-hwg{
    width: 2.92rem;
    height: .6rem;
    margin-right: .2rem;
    background: url(../assets/shopbar/sn-gjzy.png) no-repeat;
    background-size: 100% 100%;
}
.recommend-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart{
    width: 0.72rem;
    height: 0.72rem;
    background: url(../assets/shopbar/cart-recommend-icon-cart.png);
    background-size: 100% 100%;
}
.mount{
    color: #f42;
    font-weight: 600;
}
.price-symbol{
    font-size: 0.48rem;
}
.price-count{
    font-size: .64rem;
    vertical-align: baseline;
}
.price-point{
    font-size: .48rem;
}
.delShadow{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.delWindow{
    width: 11rem;
    padding-top: 0.7rem;
    border-radius: 0.3rem;
    background-color: #fff;
    border: 0;
}
.delHeader{
    padding: 0.25rem 0.6rem 0.6rem;
    height: 1.92rem;
    /* line-height: 1.92rem; */
    text-align: center;
    font-size: 0.72rem;
    font-weight: 700;
}
.delBody{
    padding: 0 0.6rem 0.6rem;
    font-size: 0.6rem;
    color: #888;
    height: 100%;
    /* line-height: 1.5; */
    text-align: center;
}
.delFoot{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0.5rem;
}
.delbtn{
    width: 4.76rem;
    height: 1.28rem;
    background-color: #fff;
    border-radius: 0.24rem;
    border: 1px solid #ccc;
    line-height: 1.28rem;
    text-align: center;
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    padding-left: 0.8rem;
}
.yes{
    background-color: #fc0;
    border: none;
}
</style>