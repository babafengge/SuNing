<template>
  <div class="container">
    <div class="detail-body" @scroll="bodyScroll" ref="scrollbody">
      <div style="position:relative">
        <div
          class="detail-header"
          :class="{fix:fixshow,backgroundwhite:backcolor}"
          ref="detailHeader"
        >
          <div class="detail-header-left" :class="{bgleft:backcolor}" @click="$router.go(-1)"></div>
          <div class="detail-header-text" v-if="backcolor">商品详情</div>
          <div class="detail-header-right" :class="{bgright:backcolor}"></div>
        </div>
        <swiper ref="myDetailSwiper" :options="swiperDetailOptions">
          <swiper-slide v-for="item in obj.swiperpic">
            <img :src="obj.swiperback" class="swiper-img" />
            <img :src="item" />
          </swiper-slide>
          <div class="swiper-detail-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="detail-product">
        <div class="detail-price" v-if="obj">
          <span class="price1">￥</span>
          <span class="price2">{{obj.price.slice(0,-3)}}</span>
          <span class="price1">.{{obj.price.slice(-2)}}</span>
        </div>
        <div class="detail-title">
          <div class="detail-text">
            <div class="text-left">
              <i>自营</i>
              {{obj.text}}
            </div>
            <div class="text-right">
              <img src="../assets/detail/notice.png" />
            </div>
          </div>
          <div style="position:relative">
            <div class="text-sub">【Next，Tesco制造商】软弹防滑 提升居家幸福感</div>
          </div>
        </div>
      </div>
      <div class="sn-cell">
        <div class="sn-cell1">分期</div>
        <div class="sn-cell2">开通任性付返50元红包</div>
        <div class="sn-cell3">
          <div class="sn-cell31">立即激活</div>
        </div>
      </div>
      <div class="sn-cell sn-cell-center">
        <div class="sn-cell-pic"></div>
        <div class="sn-cell2">优选原材料 · 大牌制造商 · 自有品牌</div>
        <div class="sn-cell3"></div>
      </div>
      <div class="detail-product">
        <div class="sn-cell4">
          <div class="sn-grow">
            <img src="../assets/detail/icon1.png" />
            <span>
              还差
              <span class="colorred">9件</span>可参加满减活动
            </span>
          </div>
          <div class="sn-cell3"></div>
        </div>
        <div class="sn-cell5">
          <div class="sn-cell1">优惠</div>
          <div class="sn-cell2">
            <span class="bgo">SUPER专享</span>
            <span class="bgy">最高减20元</span>
          </div>
        </div>
        <div class="sn-cell5 sn-aligin-start">
          <div class="sn-cell1">促销</div>
          <div class="sn-cell2">
            <div class="cell-marginb">
              <div class="cell-marginb">
                <span class="huodong">云钻促销</span>
                <span class="huodong-text">普通会员预计返0云钻</span>
              </div>
              <div class="cell-marginb">
                <span class="huodong">实名领券</span>
                <span class="huodong-text">实名认证领10元支付券</span>
              </div>
              <div class="cell-marginb">
                <span class="huodong">满减</span>
                <span class="huodong-text">99元任选10件</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-product">
        <div class="sn-cell5">
          <div class="sn-cell1">已选</div>
          <div class="sn-cell2" style="font-weight:700">玫瑰灰粉,240MM（适合37-38码） 1件</div>
          <div class="sn-cell3"></div>
        </div>
        <div class="sn-cell5">
          <div class="sn-cell1">送至</div>
          <div class="sn-cell2">江苏 苏州 吴中 全区</div>
          <div class="sn-cell3"></div>
        </div>
        <div class="padding-away">
          <span style="font-weight:700">现货</span> 18:00前付款，预计明天（8月12日）送达
        </div>
        <div class="sn-cell5">
          <div class="sn-cell1">运费</div>
          <div class="sn-cell2">满98元免基础运费(20kg内)</div>
        </div>
        <div class="sn-cell5">
          <div class="sn-cell1">重量</div>
          <div class="sn-cell2 sn-grow">
            0.175kg
            <span>
              <img src="../assets/detail/icon2.png" />
            </span>
          </div>
          <div class="sn-cell3"></div>
        </div>
        <div class="sn-cell5 sn-aligin-start" style="padding-bottom: .5rem">
          <div class="sn-cell1">服务</div>
          <div class="sn-cell2">
            <span class="defualtstyle">苏宁发货</span>
            <span class="defualtstyle">自提</span>
            <span class="defualtstyle">
              满98元免基础运费(20kg内)
            </span>
            <span class="defualtstyle">
              商品保管说明
            </span>
            <span class="defualtstyle">
              贵就赔
            </span>
            <span class="defualtstyle">
              急速退
            </span>
            <span class="defualtstyle">
              配送延时赔
            </span>
            <span class="defualtstyle">
              30天无理由退货
            </span>
          </div>
          <div class="sn-cell3"></div>
        </div>
      </div>
      <div class="detail-product">
        <div class="sn-cell5" style="padding-top:0">
          <div class="sn-cell2" style="font-weight:700">评价（4500+）</div>
          <div class="sn-cell3">
            <div class="sn-cell31">99%好评率</div>
          </div>
        </div>
        <div class="chat-container">
          <div class="name-time">
            <div class="name-time-left">
              <img src="../assets/detail/head.jpg" class="user-img">
              <span>s***e</span>
              <img src="../assets/detail/super.gif">
            </div>
            <div class="staring"></div>
          </div>
          <div class="detail-container">质量不错，送货物流也比较快，苏宁自营产品非常好，而且是梳理及无自已制造，穿在脚上非常的舒适，底子也比较厚。
            </div>
          <div class="container-pic">
            <img src="../assets/detail/pic1.jpg">
            <img src="../assets/detail/pic2.jpg">
            <img src="../assets/detail/pic3.jpg">
            <img src="../assets/detail/pic4.jpg">
          </div>
        </div>
        <div class="look-all-wrap">
          <div class="look-all">查看全部评价</div>
        </div>
      </div>
      <div class="detail-product">
        <div class="sn-cell5" style="padding-top:0">
          <div class="sn-cell2" style="font-weight:700">问答</div>
          <div class="sn-cell3">
            <div class="sn-cell31">查看全部问题</div>
          </div>
        </div>
        <div class="user-question-content">
          <div class="content-item">
            <div class="item-logo">问</div>
            <div class="detail-container item-con">我想买三双：37码粉色一双，37码黄色一双，43码灰色一双。有吗？</div>
            <div class="item-count">0个回答</div>
          </div>
          <div class="content-item">
            <div class="item-logo">问</div>
            <div class="detail-container item-con">不能买3个不一样的样了吗？</div>
            <div class="item-count">0个回答</div>
          </div>
        </div>
      </div>
      <div class="detail-product sn-cell5" style="padding-bottom:.5rem">
        <div class="shop"><img src="../assets/detail/su-logo.png"></div>
        <div class="shop-text">苏宁极物苏宁自营旗舰店</div>
        <div class="shop-btn">进店逛逛</div>
      </div>
      <div class="pull-detail" ref="detailTitle2">
        <div class="detail-nav" :class="{fix2:fixshow2}">
          <span @click="btnClick">图文详情</span>
        </div>
        <div class="content-detail">
          <img :src="item" v-for="item in obj.detailpic">
        </div>
      </div>
      <div class="scroll-tip">
        <div class="line"><hr></div>
        <div class="scroll-tip-text"> duang 到底啦~ </div>
        <div class="line"><hr></div>
      </div>
    </div>
    <div class="detail-bottom">
      <div class="detail-bottom-left">
        <div>
          <img src="../assets/detail/sn-custom.png" />
        </div>
        <div>
          <a href="https://pindao.suning.com/snjw.html">
            <img src="../assets/detail/action-jw.png" />
          </a>
        </div>
        <div style="position: relative" @click="$router.push({path:'/shopCar'})">
          <img src="../assets/detail/sn-cart.png" />
          <span class="shop-num">{{shopNum}}</span>
        </div>
      </div>
      <div class="detail-bottom-right">
        <span class="btn-left">立即购买</span>
        <span class="btn-right" @click="addShop">加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    let url =
      "http://localhost:5500/src/assets/detail/detail" +
      this.$route.query.id +
      ".json";
    let that = this;
    axios.get(url).then((response) => {
      // console.log(response)
      if (response.data.code == 200) {
        that.obj = response.data.obj;
      }
    })
  },
  data() {
    return {
      swiperDetailOptions: {
        pagination: {
          el: ".swiper-detail-pagination",
          clickable: true,
          type: "fraction",
        },
      },
      fixshow: false,
      backcolor: false,
      obj: "",
      fixshow2:false
    };
  },
  computed: {
    suzy() {
      return this.$store.state.suzy;
    },
    suhwg() {
      return this.$store.state.suhwg;
    },
    shopNum() {
      let shopnum = 0;
      if (this.suzy.length > 0) {
        this.suzy.forEach((item) => {
          shopnum += item.num;
        });
      }
      if (this.suhwg.length > 0) {
        this.suhwg.forEach((item) => {
          shopnum += item.num;
        });
      }
      return shopnum;
    },
    swiper() {
      return this.$refs.myDetailSwiper.$swiper;
    },
  },
  methods: {
    bodyScroll(e) {
      // console.log(e.target.scrollTop)
      // console.log(this.$refs.detailTitle2.offsetTop);
      // console.log(this.detailTitle2Top)
      if (e.target.scrollTop > this.$refs.detailHeader.offsetHeight + 2) {
        this.fixshow = true;
      } else {
        this.fixshow = false;
      }
      if (e.target.scrollTop > this.$refs.detailHeader.offsetHeight * 2 + 10) {
        this.backcolor = true;
      } else {
        this.backcolor = false;
      }
      if(e.target.scrollTop>this.$refs.detailTitle2.offsetTop){
        this.fixshow2 = true;
      }else{
        this.fixshow2 = false;
      }
      //   console.log(this.$refs.detailHeader.offsetHeight);
    },
    btnClick(){
      // this.fixshow2 = false;
      this.$refs.scrollbody.scrollTop = this.$refs.detailTitle2.offsetTop+this.$refs.detailHeader.offsetHeight
    },
    addShop(){
      this.$store.commit("addShop",{
        shop:this.obj.shop,
        pic:this.obj.swiperpic[0],
        price:this.obj.price,
        text:this.obj.text,
        id:this.$route.query.id
      })
    }
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.detail-bottom {
  height: 2rem;
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.detail-body {
  flex-grow: 1;
  overflow: auto;
}
.swiper-slide {
  /* height: 100px; */
  /* background: #fff; */
  position: relative;
}
.swiper-slide img {
  width: 100%;
  /* z-index: 999; */
  display: block;
}
.swiper-slide .swiper-img {
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 500; */
}
.swiper-detail-pagination {
  display: block;
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem !important;
  z-index: 800;
  width: 1.5rem;
  height: 1rem;
  line-height: 1rem;
  border-radius: 0.1rem;
  font-size: 0.5rem;
  color: #fff;
  opacity: 0.6;
  background-color: #222;
  text-align: center;
  left: auto;
}
.detail-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 1.8rem;
  font-size: 0.64rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  transition: background-color 0.3s ease;
}
.detail-header-left {
  width: 1.4rem;
  height: 1.4rem;
  background: url(../assets/detail/back-fill.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.7;
}
.detail-header-right {
  width: 1.4rem;
  height: 1.4rem;
  background: url(../assets/detail/menu-fill.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.7;
}
.detail-header-text {
  font-size: 0.72rem;
}
.fix {
  position: fixed;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent);
}
.backgroundwhite {
  background: #fff;
  opacity: 1;
}
.bgleft {
  background: url(../assets/detail/back.png) no-repeat;
  background-size: 100% 100%;
}
.bgright {
  background: url(../assets/detail/menu.png) no-repeat;
  background-size: 100% 100%;
}
.detail-bottom-left {
  display: flex;
  flex-shrink: 0;
}
.detail-bottom-left div {
  width: 2rem;
  height: 2rem;
  margin-left: 0.2rem;
}
.detail-bottom-left img {
  width: 100%;
  height: 100%;
}
.detail-bottom-right {
  flex: 1 1;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
}
.btn-left {
  flex: 1 1;
  display: inline-block;
  font-size: 0.6rem;
  border-radius: 0.25rem 0.06rem 0.06rem 0.25rem;
  background: #fc0;
  margin-right: 0.15rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-right {
  flex: 1 1;
  display: inline-block;
  font-size: 0.6rem;
  border-radius: 0.06rem 0.25rem 0.25rem 0.06rem;
  background: #f60;
  color: #fff;
  /* margin-right: 0.15rem; */
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop-num {
  width: 1.05rem;
  height: 0.7rem;
  line-height: 0.7rem;
  color: #fff;
  background-color: #f42;
  border-radius: 0.4rem;
  font-size: 0.4rem;
  text-align: center;
  position: absolute;
  top: 0.2rem;
  right: -0.2rem;
}
.detail-product {
  padding: 0.5rem 0.5rem 0;
  margin-bottom: 0.3rem;
  background: #fff;
  overflow: hidden;
}
.detail-price {
  color: #f42;
}
.price1 {
  font-size: 0.75rem;
}
.price2 {
  font-size: 1rem;
}
.detail-text {
  margin-bottom: 0.35rem;
  display: flex;
  justify-content: space-between;
}
.text-right {
  width: 10%;
  flex-shrink: 0;
}
.text-right img {
  width: 100%;
}
.text-left {
  flex-grow: 1;
  width: 90%;
  font-size: 0.7rem;
  font-weight: 700;
}
.text-left i {
  font-style: normal;
  display: inline-block;
  vertical-align: 0.05rem;
  padding: 0.02rem 0.1rem 0;
  background: #fc0;
  color: #222;
  border-radius: 0.15rem;
  font-size: 0.5rem;
  margin-right: 0.08rem;
}
.text-sub {
  color: rgb(153, 153, 153);
  padding: 0.4rem 0.42rem 0.5rem 0.58rem;
  border-radius: 0.15rem;
  background-color: #f6f6f6;
  margin-bottom: 0.4rem;
  font-size: 0.6rem;
}
.text-sub::after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border: 0.4rem solid transparent;
  border-bottom-color: #f6f6f6;
  position: absolute;
  top: -0.8rem;
  left: 1rem;
}
.sn-cell {
  margin-bottom: 0.3rem;
  padding: 0.5rem;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  justify-content: space-between;
}
.sn-cell1 {
  font-size: 0.56rem;
  color: #999;
  width: 1.52rem;
  flex-shrink: 0;
}
.sn-cell2 {
  flex-grow: 1;
  font-size: 0.56rem;
}
.sn-cell3 {
  display: flex;
  align-items: center;
}
.sn-cell3::after {
  content: "";
  width: 0.8rem;
  height: 0.8rem;
  background: url(../assets/detail/arrow_right.png) no-repeat center center;
  background-size: 120% 120%;
}
.sn-cell31 {
  text-align: right;
  color: #999;
  font-size: 0.56rem;
  padding-right: 0.2rem;
}
.sn-cell-center {
  align-items: center;
}
.sn-cell-pic::before {
  content: "";
  display: block;
  width: 3.66rem;
  height: 0.82rem;
  margin-top: -0.26rem;
  background: url(../assets/detail/jw-logo.png) no-repeat center center;
  background-size: 100% 100%;
}
.sn-cell-pic {
  padding-right: 0.3rem;
}
.sn-cell4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sn-grow {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.sn-grow img {
  margin-right: 0.08rem;
  width: 0.6rem;
  height: 0.6rem;
}
.sn-grow {
  font-size: 0.56rem;
}
.colorred {
  display: inline-block;
  color: #f42;
  font-weight: 700;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.sn-cell5 {
  display: flex;
  justify-content: space-between;
  padding-top: 0.6rem;
  align-items: center;
}
.bgo {
  display: inline-block;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  background-color: #fc0;
}
.bgy {
  display: inline-block;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  background-color: #fefbee;
}
.cell-marginb {
  margin-bottom: 0.25rem;
}
.huodong {
  display: inline-block;
  border-radius: 0.15rem;
  border: 1px solid #fb0;
  background-color: #fefbee;
  font-size: 0.5rem;
  margin-right: 0.2rem;
  padding: 0 0.2rem;
}
.sn-aligin-start {
  align-items: flex-start;
}
.padding-away {
  padding-left: 1.5rem;
  font-size: 0.5rem;
}
.defualtstyle {
  display: inline-block;
  font-size: 0.6rem;
  color: #222;
  margin-right: 0.7rem;
    /* line-height: 1rem; */
}
.defualtstyle::before{
    content: "";
    display: inline-block;
    width: .75rem;
    height: .75rem;
    vertical-align: middle;
    background: url(../assets/detail/check.png) no-repeat 0 0;
    background-size: contain;
}
.chat-container{
  padding: 0.6rem 0.5rem;
}
.name-time{
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.staring{
  width: 2.9rem;
  height: .52rem;
  background: url(../assets/detail/star.png) no-repeat center center;
  background-size: 100% 100%;
}
.name-time-left{
  display: flex;
  align-items: center;
}
.user-img{
  display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: .3rem;
}
.user-img+span{
    font-size: .52rem;
    color: #222;
    margin-right: .3rem;
}
.user-img+span+img{
  width: 2rem;
}
.detail-container{
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    font-size: .6rem;
}
.container-pic{
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  margin-top: .4rem;
}
.container-pic img{
  width: 3.4rem;
  margin-right: 0.1rem;
}
.look-all-wrap{
  padding: 0 0 0.25rem;
}
.look-all{
  width: 5rem;
  margin: 0 auto;
  font-size: 0.6rem;
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
}
.user-question-content{
  padding: 0.6rem 0;
}
.content-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  margin-top: 0.52rem;
}
.item-logo{
  width: 1.3rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .6rem;
    text-align: center;
    background-color: #fad222;
    border-radius: .15rem;
    margin-right: .4rem;
    flex-shrink: 0;
}
.item-count{
  font-size: .52rem;
    color: #999;
    white-space: nowrap;
    flex-shrink: 0;
}
.item-con{
  -webkit-line-clamp: 1;
  flex-grow: 1;
}
.shop{
  margin-right: 0.4rem;
  flex-shrink: 0;
}
.shop img{
      width: 2.5rem;
    height: 2.5rem;
}
.shop-text{
  font-size: 0.6rem;
  white-space: nowrap;
  flex-grow: 1;
  font-weight: 700;
}
.shop-btn{
    text-align: center;
    line-height: 1.2rem;
    font-size: .6rem;
    width: 4rem;
    height: 1.2rem;
    border-radius: .25rem;
    padding: 0 .5rem;
    color: #000;
    background-color: #fc0;
    margin-left: .5rem;
    white-space: nowrap;
}
.content-detail img{
  display: block;
  width: 100%;
}
.detail-nav{
  width: 100%;
  background-color: #fff;
  margin-bottom: 0.3rem;
  text-align: center;
  font-size: .56rem;
  font-weight: 700;
}
.detail-nav span{
  display: inline-block;
  padding: .5rem 0;
  border-bottom: 3px solid #fc0;
}
.scroll-tip{
  padding: 0 30%;
  display: flex;
  font-size: .56rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 2rem;
}

.line{
  width: 10%;
  flex: 1 1;
}
.scroll-tip-text{
  padding: 0 .1rem;
}
.fix2{
  position: fixed;
  top:1.8rem
}
</style>