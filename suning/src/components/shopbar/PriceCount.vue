<template>
    <div class="price-container">
        <div class="left">
            <span class="check" :class="{selected:allcheck}" @click="btnClick"></span>
            <span class="text">全部</span>
        </div>
        <div class="middle" v-if="del">
            合计:
            <span class="price1">￥</span>
            <span class="price2">{{allPrice.slice(0,-3)}}</span>
            <span class="price3">.{{allPrice.slice(-2)}}</span>
        </div>
        <div class="right" v-if="del">去结算({{shopNum}})</div>
        <div class="right" v-else @click="delShop">删除</div>
    </div>
</template>

<script>
export default {
    props:["del"],
    computed:{
        suzy(){
            return this.$store.state.suzy
        },
        suhwg(){
            return this.$store.state.suhwg
        },
        allPrice(){
            let price = 0;
            if(this.suzy.length>0){
                this.suzy.forEach(item=>{
                    if(item.checked==true){
                        price+=parseFloat(item.price)*item.num
                    }
                })
            }
            if(this.suhwg.length>0){
                this.suhwg.forEach(item=>{
                    if(item.checked==true){
                        price+=parseFloat(item.price)*item.num
                    }
                })
            }
            return price.toFixed(2)
        },
        shopNum(){
            let shopnum = 0;
            if(this.suzy.length>0){
                this.suzy.forEach(item=>{
                    if(item.checked==true){
                        shopnum+=item.num
                    }
                })
            }
            if(this.suhwg.length>0){
                this.suhwg.forEach(item=>{
                    if(item.checked==true){
                        shopnum+=item.num
                    }
                })
            }
            return shopnum
        },
        allcheck(){
            return this.$store.state.allcheck;
        }
    },
    methods:{
        btnClick(){
            this.$store.commit("changeAllcheck");
            if(this.allcheck == true){
                this.$store.commit("watchZYTrue");
                this.$store.commit("watchHWGTrue");
                this.$store.commit("watchZYAllCheckTrue");
                this.$store.commit("watchHWGAllCheckTrue");
            }else{
                this.$store.commit("watchZYFalse");
                this.$store.commit("watchHWGFalse");
                this.$store.commit("watchZYAllCheckFalse");
                this.$store.commit("watchHWGAllCheckFalse");
            }
        },
        delShop(){
            this.$emit("show")
        }
    }
}
</script>

<style scoped>
.price-container{
    width: 100%;
    position: fixed;
    bottom: 1.95rem;
    height: 1.8rem;
    line-height: 1.8rem;
    padding: 0 .48rem;
    display: flex;
    font-size: .56rem;
    box-shadow: 0 -0.02rem 0 0 rgba(0,0,0,.08);
    justify-content: space-between;
    color: #000;
    background-color: #fff;
    border-top: .02rem solid rgba(0,0,0,.08);
    align-items: center;
    z-index: 50;
}
.check{
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 50%;
    vertical-align: -0.1rem;
}
.selected{
    border: none;
    background: url(../../assets/shopbar/icon-selected.png) no-repeat;
    background-size: 100% 100%;
}
.text{
    display: inline-block;
    margin-left: .24rem;
}
.right{
    height: 1.36rem;
    line-height: 1.36rem;
    width: 4.5rem;
    background: #fc0;
    border-radius: .24rem;
    color: #222;
    text-align: center;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}
.middle{
    flex: 1 1;
    text-align: right;
    padding-right: .16rem;
    line-height: normal;
    font-size: .56rem;
    color: #000;
}
.price1{
    font-size: .50rem;
    color: #f42;
    display: inline-block;
}
.price2{
    font-size: .70rem;
    color: #f42;
    display: inline-block;
    font-weight: 700;
}
.price3{
    font-size: .50rem;
    color: #f42;
    display: inline-block;
    font-weight: 700;
}
</style>