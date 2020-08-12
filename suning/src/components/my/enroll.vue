<template>
  <div class="content">
    <div class="box">
      <div class="top">
        <div class="top-bar">
          <div></div>
          <h5>我的易购</h5>
          <img src="../../assets/myimg/setting.png" alt="图片加载失败" />
        </div>
        <div class="top-mid">
          <img src="../../assets/myimg/lionicon.jpg" alt="图片加载失败" />
          <p class="attest">去实名认证</p>
          <div class="top-center">
            <p class="phonum">158******07</p>
            <p class="ecology">生态值204</p>
          </div>
        </div>
        <img src="../../assets/myimg/ewm.png" alt="图片加载失败" class="midright" />
        <div class="top-botton">
          <div class="topbot-list">
            <p>2</p>
            <span>优惠券</span>
          </div>
          <div class="topbot-list">
            <p>0</p>
            <span>领云钻</span>
          </div>
          <div class="topbot-list">
            <p>18</p>
            <span>足迹</span>
          </div>
          <div class="topbot-list">
            <p>1</p>
            <span>我的关注</span>
          </div>
        </div>
      </div>
      <div class="advert">
        <img class="adv-img" src="../../assets/myimg/vip.png" alt="图片加载失败" />
        <span class="adv-sp">【免费】您有一张运费券待领取</span>
        <div class="advert-right">
          <span>立即领取</span>
          <img src="../../assets/myimg/r-icon.png" alt="图片加载失败" />
        </div>
      </div>
      <div class="myorder">
        <div class="ordertop">
          <span>我的订单</span>
          <div class="ordertop-right">
            查看全部
            <img src="../../assets/myimg/next.png" alt="图片加载失败" />
          </div>
        </div>
        <div class="order-list">
          <div class="orderlist">
            <img src="../../assets/myimg/order-icon01.png" alt="图片加载失败" />
            <p>待支付</p>
          </div>
          <div class="orderlist">
            <img src="../../assets/myimg/order-icon02.png" alt="图片加载失败" />
            <p>待收货</p>
          </div>
          <div class="orderlist">
            <img src="../../assets/myimg/order-icon03.png" alt="图片加载失败" />
            <p>评价有礼</p>
          </div>
          <div class="orderlist">
            <img src="../../assets/myimg/order-icon04.png" alt="图片加载失败" />
            <p>退换/售后</p>
          </div>
          <div class="orderlist">
            <img src="../../assets/myimg/order-icon05.png" alt="图片加载失败" />
            <p>常购清单</p>
          </div>
        </div>
      </div>
      <div class="mytool">
        <h4>必备工具</h4>
        <div class="tool-list">
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-hb.png" alt="图片加载失败" />
            <p>红包</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-dpgz.png" alt="图片加载失败" />
            <p>店铺关注</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-zj.png" alt="图片加载失败" />
            <p>足迹</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-khfw.png" alt="图片加载失败" />
            <p>客户服务</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-bqqd.png" alt="图片加载失败" />
            <p>必抢清单</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-pg.png" alt="图片加载失败" />
            <p>拼购</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-xyvip.png" alt="图片加载失败" />
            <p>校园VIP</p>
          </div>
          <div class="toolist">
            <img src="../../assets/myimg/bbgj-wdsy.png" alt="图片加载失败" />
            <p>我的试用</p>
          </div>
        </div>
      </div>
      <div class="recom">
        <img src="../../assets/myimg/guessTitle-icon.png" alt="图片加载失败" />
        <p>好货推荐</p>
        <img src="../../assets/myimg/guessTitle-icon.png" alt="图片加载失败" />
      </div>
      <div class="guessLikeList">
        <div class="myshow">
          <div class="my-show"></div>
          <div class="guang"></div>
          <div class="circl circl1" >
              <img src="../../assets/myimg/like3.png" alt="图片加载失败" />
          </div>
          <div class="circl circl2">
              <img src="../../assets/myimg/like1.png" alt="图片加载失败" />
          </div>
          <div class="circl circl3">
              <img src="../../assets/myimg/like2.png" alt="图片加载失败" />
          </div>
        </div>
        <div class="myshow">
            <img src="../../assets/myimg/show1.jpg" alt="图片加载失败" class="showimg">
            <div class="myshow-title">
                <em class="zy"></em>
                Apple iPhone 11 128G 绿色 移动联通电信4G 全网通手机
            </div>
            <div class="price">
                ￥
                <span>4999</span>
                .00
            </div>
        </div>
      </div>
      <div class="end"></div>
      <div class="fixicon">
        <a href="https://qss.suning.com/604fc.htm"></a>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../TabBar.vue";
export default {
  components: {
    tabbar: tabbar,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
}
.box {
  width: 100%;
  flex-grow: 1;
  overflow: auto;
}
.top {
  width: 100%;
  height: 8.24rem;
  background: #ffdb47;
  position: relative;
}
.top-bar {
  display: flex;
  justify-content: space-between;
}
h5 {
  height: 1.28rem;
  padding-top: 0.36rem;
}
.top-bar img {
  width: 0.84rem;
  height: 0.84rem;
  margin: 0.5rem 0.5rem 0 0;
}
.top-mid img {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.3rem;
  border: 0.1rem solid #fff;
  margin: 1rem;
}
.attest,.ecology {
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  font-size: 0.4rem;
}
.attest {
  width: 2.84rem;
  background-color: #ffeca3;
  border-radius: 0.4rem;
  color: #222;
  position: absolute;
  top: 4rem;
  left: 1rem;
}
.ecology {
  background: #e1bb23;
  color: #fff;
  border-radius: 0.3rem;
  padding: 0 0.24rem;
}
.phonum {
  font-size: 0.56rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.top-center {
  position: absolute;
  top: 2.6rem;
  left: 4rem;
}
.midright {
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  right: 1rem;
  top: 2.5rem;
}
.top-botton {
  width: 100%;
  height: 3.5rem;
  display: flex;
}
.topbot-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.topbot-list p {
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  color: #222;
  font-weight: bold;
}
.topbot-list span {
  width: 100%;
  text-align: center;
  font-size: 0.52rem;
  color: #222;
}
.advert {
  width: 15rem;
  height: 1.8rem;
  padding: 0.28rem 0.48rem 0.28rem 0.4rem;
  background: #fff;
  border-radius: 0.24rem;
  margin-top: -0.4rem;
  margin-left: 0.48rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.adv-img {
  width: 1.8rem;
  height: 1.2rem;
}
.adv-sp {
  line-height: 1.2rem;
  width: 7.6rem;
  font-size: 0.48rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.5rem;
}
.advert-right {
  display: flex;
  align-items: center;
}
.advert-right span {font-size: 0.48rem;}
.advert-right img {
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.12rem;
  vertical-align: middle;
}
.myorder,.mytool {
  width: 15rem;
  border-radius: 0.24rem;
  background: #fff;
  margin-left: 0.48rem;
  padding: 0.48rem;
}
.myorder {
  margin-bottom: 0.4rem;
  margin-top: 0.68rem;
}
.mytool {height: 8rem;}
.ordertop {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}
.ordertop-right {
  display: flex;
  align-items: center;
  font-size: 0.48rem;
}
.ordertop-right img {
  width: 0.48rem;
  margin-left: 0.3rem;
}
.ordertop span {
  font-size: 0.7rem;
  font-weight: bolder;
}
.order-list {
  width: 100%;
  height: 3rem;
  display: flex;
}
.orderlist {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 0.48rem;
}
.orderlist img {
  width: 1.2rem;
  height: 1.2rem;
  margin-bottom: 0.26rem;
}
.mytool h4 {font-size: 0.6rem;}
.toolist {
  display: flex;
  width: 25%;
  height: 2.36rem;
  float: left;
  flex-direction: column;
  align-items: center;
  margin-top: 0.58rem;
  justify-content: center;
}
.toolist img {
  width: 0.96rem;
  height: 0.96rem;
  margin-bottom: 0.32rem;
}
.toolist p {
  width: 100%;
  text-align: center;
  font-size: 0.48rem;
}
.recom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 0.48rem 0;
  height: 0.84rem;
  line-height: 0.84rem;
}
.recom p {
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0 0.48rem;
}
.recom img {
  width: 1.02rem;
  height: 0.24rem;
}
.guessLikeList {
  width: 15rem;
  margin: 0 auto;
  overflow: hidden;
}
.myshow {
  width: 6.84rem;
  height: 10.24rem;
  background: #fff;
  float: left;
  border-radius: 0.24rem;
  position: relative;
  margin-bottom: 0.36rem;
  margin-right: .6rem ;

}
.my-show {
  width: 100%;
  height: 100%;
  background: url(../../assets/myimg/newMy-show.png) no-repeat;
  background-size: cover;
}
.guang{
    width: 2.6rem;
    height: 2.6rem;
    background: url("../../assets/myimg/guang.png") no-repeat;
    background-size: contain;
    position: absolute;
    top: 5.5rem;
    left: 2.46rem;
}
.circl{
    position: absolute;
    background-size: contain;
}
.circl img{width: 100%;}
.circl1{
    width: 2.88rem;
    left: 0.76rem;
    top: 2.8rem;
}
.circl2{
    width: 1.96rem;
    right: 0.5rem;
    top: 2.68rem;
}
.circl3{
    width: 2.12rem;
    top: 8rem;
    right: 1rem;
}
.showimg{
    width: 6.84rem;
    height: 6.84rem;
    border-top-left-radius: .24rem;
    border-top-right-radius: .24rem;
}
.myshow-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #222;
    font-size: 0.52rem;
    font-weight: bold;
    margin: 0.36rem 0.24rem 0;
}
.zy{
    display: inline-block;
    margin-right: .24rem;
    width: 1.04rem;
    height: 0.6rem;
    vertical-align: text-top;
    background: url("../../assets/myimg/zy-icon.png") no-repeat;
    background-size: 100% 100%;
}
.price{
    color: #F42;
    font-size: .48rem;
    padding: 0.48rem 0.24rem 0;
    font-weight: bold;
    height: 1.2rem;
    line-height: .8rem;
}
.price span{
    font-size: 0.72rem;
    font-weight: bold;
}
.end{
    width: 8.4rem;
    height: .48rem;
    margin: .48rem auto 1.8rem;
    background: url("../../assets/myimg/todown.png") no-repeat;
    background-size: contain;
}
.fixicon{
    width: 1.56rem;
    height: 1.56rem;
    position: fixed;
    bottom: 2.56rem;
    right: .6rem;
    background: url("../../assets/myimg/question-icon.png") no-repeat;
    background-size: 1.56rem 1.56rem;
}
.fixicon a{
  display: block;
  width: 100%;
  height: 100%;
}
</style>