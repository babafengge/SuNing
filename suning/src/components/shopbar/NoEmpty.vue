<template>
    <div class="body">
        <div class="login">
            <p>登录后同步电脑与手机购物车的商品</p>
            <span @click="$router.push({path:'/my'})">去登录</span>
        </div>
        <div class="shops" v-if="suzy.length>0">
            <div class="shop">
                <div class="left">
                    <span :class="{selected:suzycheck}" @click="btnClickZY()"></span>
                </div>
                <div class="right">
                    <div class="shopinfo">
                        <div class="shopicon icon-SN"></div>
                        <div>苏宁自营</div>
                    </div>
                    <div class="tools"></div>
                </div>
            </div>
            <div v-for="(item,index) in suzy">
                <div class="cmmdty-layout">
                    <div class="left">
                        <span :class="{selected:item.checked}" @click="btnClick(item,index)"></span>
                    </div>
                    <div class="right">
                        <div class="cmmdty">
                            <div class="img" @click="goDetail(item)">
                                <img :src="item.pic">
                            </div>
                            <div class="info">
                                <div class="info-top" @click="goDetail(item)">
                                    <p>{{item.text}}</p>
                                </div>
                                <div class="info-middle">
                                    <div class="symbol">
                                        <div :class="item.shop"></div>
                                    </div>
                                </div>
                                <div class="info-bottom">
                                    <div class="price">
                                        <span class="price1">￥</span>
                                        <span class="price2">{{item.price.slice(0,-3)}}</span>
                                        <span class="price3">.{{item.price.slice(-2)}}</span>
                                    </div>
                                    <div class="count">
                                        <button class="min" @click="$store.commit('minShop',{'item':item,'index':index})">-</button>
                                        <input type="number" v-model="item.num" readonly>
                                        <button class="plus" @click="$store.commit('plusShop',{'item':item,'index':index})">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shops" v-if="suhwg.length>0">
            <div class="shop">
                <div class="left">
                    <span :class="{selected:suhwgcheck}" @click="btnClickHWG()"></span>
                </div>
                <div class="right">
                    <div class="shopinfo">
                        <div class="shopicon icon-HWG"></div>
                        <a href="http://fe.suning.com/oversea/wap/selfsupport.html?safp=f73ee1cf.AIUE2AAaaA.4.771003001&safpn=10009">苏宁国际官方直营</a>
                    </div>
                    <div class="tools"></div>
                </div>
            </div>
            <div v-for="(item,index) in suhwg">
                <div class="cmmdty-layout">
                    <div class="left">
                        <span :class="{selected:item.checked}" @click="btnClick(item,index)"></span>
                    </div>
                    <div class="right">
                        <div class="cmmdty">
                            <div class="img" @click="goDetail(item)">
                                <img :src="item.pic">
                            </div>
                            <div class="info">
                                <div class="info-top" @click="goDetail(item)">
                                    <p>{{item.text}}</p>
                                </div>
                                <div class="info-middle">
                                    <div class="symbol">
                                        <div :class="item.shop"></div>
                                    </div>
                                </div>
                                <div class="info-bottom">
                                    <div class="price">
                                        <span class="price1">￥</span>
                                        <span class="price2">{{item.price.slice(0,-3)}}</span>
                                        <span class="price3">.{{item.price.slice(-2)}}</span>
                                    </div>
                                    <div class="count">
                                        <button class="min" @click="$store.commit('minShop',{'item':item,'index':index})">-</button>
                                        <input type="number" v-model="item.num">
                                        <button class="plus" @click="$store.commit('plusShop',{'item':item,'index':index})">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        suzy(){
            return this.$store.state.suzy;
        },
        suhwg(){
            return this.$store.state.suhwg;
        },
        suzycheck(){
            return this.$store.state.suzyAllcheck;
        },
        suhwgcheck(){
            return this.$store.state.suhwgAllcheck;
        }
    },
    // data(){
    //     return{
    //         suzycheck:true,
    //         suhwgcheck:true
    //     }
    // },
    methods:{
        btnClick(item,index){
            this.$store.commit("changeCheck",{
                item:item,
                index:index
            });
            if(item.checked==false){
                if(item.shop=="su-hwg"){
                    this.$store.commit("watchHWGAllCheckFalse")
                }else{
                    this.$store.commit("watchZYAllCheckFalse")
                };
            }else{
                let abc = true;
                if(item.shop=="su-hwg"){
                    this.suhwg.forEach(con=>{
                        if(con.checked==false){
                            abc=false
                        }
                    });
                    if(abc){
                        this.$store.commit("watchHWGAllCheckTrue")
                    }
                }else{
                    this.suzy.forEach(con=>{
                        if(con.checked==false){
                            abc=false
                        }
                    });
                    if(abc){
                        this.$store.commit("watchZYAllCheckTrue")
                    }
                }
            }
            this.$store.commit("watchAllcheck")

        },
        btnClickZY(){
            this.$store.commit("changeZYAllcheck");
            if(this.suzycheck==true){
                this.$store.commit("watchZYTrue");
            }else{
                this.$store.commit("watchZYFalse");
            }
            this.$store.commit("watchAllcheck")
        },
        btnClickHWG(){
            this.$store.commit("changeHWGAllcheck");
            if(this.suhwgcheck==true){
                this.$store.commit("watchHWGTrue")
            }else{
                this.$store.commit("watchHWGFalse")
            }
            this.$store.commit("watchAllcheck")
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
.body{
    padding: .48rem;
}
.login{
    background: #ffe37e;
    height: 1.2rem;
    line-height: .8rem;
    font-size: .48rem;
    color: #222;
    border-radius: .24rem;
    margin-bottom: .48rem;
    padding: .2rem .48rem;
    display: flex;
    justify-content: space-between;
}
.login span{
    background: #222;
    border-radius: .12rem;
    display: inline;
    color: #ffe37e;
    padding: 0 .08rem;
}
.shops{
    border-radius: .24rem;
    margin-bottom: .48rem;
    background-color: #fff;
}
.shop{
    display: flex;
    align-items: center;
    padding: .48rem .48rem .36rem 0;
}
.left{
    width: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left span{
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.left .selected{
    border: none;
    background: url(../../assets/shopbar/icon-selected.png);
    background-size: 100% 100%;
}
.right{
    flex: 1 1;
    align-items: center;
    justify-content: space-between;
}
.shopinfo{
    font-size: .56rem;
    display: flex;
    align-items: center;
}
.shopinfo a{
    color: #333;
}
.shopicon{
    width: .85rem;
    height: .85rem;
    margin-right: .2rem;
}
.icon-SN{
    background: url(../../assets/shopbar/lion.png) no-repeat;
    background-size: 100% 100%;
}
.icon-HWG{
    background: url(../../assets/shopbar/hwg1.png) no-repeat;
    background-size: 100% 100%;
}
.cmmdty-layout{
    padding-bottom: .6rem;
    padding-right: .48rem;
    display: flex;
    align-items: center;
}
.cmmdty{
    display: flex;
    padding-top: .12rem;
    padding-bottom: .4rem;
}
.img{
    width: 3.6rem;
    height: 3.6rem;
    border-radius: .12rem;
    overflow: hidden;
}
.img img{
    width: 100%;
    height: 100%;
}
.info{
    flex: 1 1;
    padding-left: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.info-top{
    font-size: .48rem;
    font-weight: 700;
}
.info-top p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.infp-middle{
    flex: 1 1;
    margin-bottom: .36rem;
}
.su-jiwu{
    margin-top: .24rem;
    width: 1.84rem;
    height: .6rem;
    margin-right: .2rem;
    background: url(../../assets/shopbar/sn-jiwu.png) no-repeat;
    background-size: 100% 100%;
}
.su-zy{
    margin-top: .24rem;
    width: 1.04rem;
    height: .6rem;
    margin-right: .2rem;
    background: url(../../assets/shopbar/sn-ziying.png) no-repeat;
    background-size: 100% 100%;
}
.su-hwg{
    margin-top: .24rem;
    width: 2.92rem;
    height: .6rem;
    margin-right: .2rem;
    background: url(../../assets/shopbar/sn-gjzy.png) no-repeat;
    background-size: 100% 100%;
}
.info-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .48rem;
}
.price{
    color: #f42;
    font-weight: 900;
}
.price1{
    font-size: .44rem;;
}
.price2{
    font-size: .56rem;
}
.price3{
    font-size: 0.4rem;
}
.count{
    width: 3.6rem;
    height: 1.08rem;
    padding: 3px;
    display: flex;
    justify-content: space-between;
    line-height: 1.08rem;
    align-items: center;
    background: url(../../assets/shopbar/counter-bg.png) no-repeat;
    background-size: 100% 100%;
}
.count input{
    outline: none;
    flex: 1 1;
    background-color: #fff;
    border: 0;
    width: 1rem;
    text-align: center;
    font-size: .48rem;
    color: #222;
    vertical-align: middle;
}
.count button{
    font-size: .48rem;
    width: .84rem;
    height: .84rem;
    border-radius: 50%;
    background-color: #f1f1f1;
    border: 0;
    user-select: none;
    outline: none;
}
</style>