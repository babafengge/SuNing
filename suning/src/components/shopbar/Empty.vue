<template>
    <div class="body">
        <div class="login" v-if="login">
            <p>登录后同步电脑与手机购物车的商品</p>
            <span @click="btnClick('/my')">去登录</span>
        </div>
        <div class="cart-content-empty">
            <div class="empty-cart">
                <img src="../../assets/shopbar/sn-cart-empty.png">
            </div>
            <span class="empty-cart-tip">购物车还是空的，快来挑选好货吧</span>
            <div class="lead">
                <span @click="btnClick('/')">去逛逛</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        login(){
            return this.$store.state.login
        }
    },
    methods:{
        btnClick(val){
            this.$router.push({
                path:val
            })
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
.cart-content-empty{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.empty-cart{
    width: 3.5rem;
    height: 3.5rem;
    margin: 2.6rem auto .8rem;
}
.empty-cart img{
    width: 100%;
}
.empty-cart-tip{
    font-size: .56rem;
    color: #666;
    margin-bottom: .52rem;
}
.lead{
    margin-bottom: 1.52rem;
    font-size: 14px;
}
.lead span{
    margin-right: 0.6rem;
    display: inline-block;
    line-height: .96rem;
    background-color: #fff;
    font-size: .48rem;
    color: #666;
    width: 2.16rem;
    height: .96rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
}
</style>