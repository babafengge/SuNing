<template>
  <div class="home-container">
    <!-- 遮罩层 -->
    <mask-load></mask-load>
    <!-- 主体外框 -->
    <div class="main-container" ref="mainScroll">
      <!-- 顶部 -->
      <div class="top-type-container">
        <div class="content-wrap-one">
          <div class="icon-wrap">
            <img class="classify-icon" src="../assets/home-img/classify-icon.png" />
          </div>
          <img class="home-top-gif" src="../assets/home-img/home-top-gif.gif" />
          <div class="icon-wrap">
            <img class="my-icon" src="../assets/home-img/my-icon.png" />
          </div>
        </div>

        <!-- 搜索栏外框 -->
        <div class="content-wrap-two">
          <div class="search-bar" @click="jumpSearch">
            <!-- 放大镜背景图标 -->
            <i class="magnifier-icon"></i>
            <span>清凉风扇每100减10</span>
          </div>
        </div>
        <!-- 轮播图 -->
        <loop></loop>

        <!-- 轮播图下的广告图 -->
        <div class="hor-view">
          <a
            href="https://cuxiao.m.suning.com/scms/10inecopy3.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2F10inecopy3.js%3FpageCode%3D10inecopy3&safp=f73ee1cf.wapindex7.113458729906.1&safpn=10001"
          >
            <img src="../assets/home-img/maotai.png" />
          </a>
        </div>

        <!-- 广告图下的图标列表 -->
        <div class="enter-list-container">
          <div class="enter-list-wrap1">
            <a
              href="https://c.m.suning.com/channel/newZsq.html?safp=f73ee1cf.wapindex7.113456729859.1&safpn=10001"
              v-for="item in enterList1"
              :key="item.title"
            >
              <div class="enter-item">
                <img :src="item.icon" />
                <p>{{item.title}}</p>
              </div>
            </a>
          </div>

          <div class="enter-list-wrap2">
            <a
              href="https://c.m.suning.com/channel/newZsq.html?safp=f73ee1cf.wapindex7.113456729859.1&safpn=10001"
              v-for="item in enterList2"
              :key="item.title"
            >
              <div class="enter-item">
                <img :src="item.icon" />
                <p>{{item.title}}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- 图标列表下的活动专区 -->
        <four-content></four-content>
        <!-- 为你推荐栏 -->
        <div class="recommend">
          <a
            href="https://c.m.suning.com/channelNSQ.html?safp=f73ee1cf.wapindex7.123114334595.1&safpn=10001"
          >
            <div class="rec-left-content">
              <h2>为您推荐</h2>
              <p>精选频道</p>
            </div>
          </a>

          <div class="four-space">
            <a
              href="https://g.m.suning.com/oversea.html?productCode=000000011643002233&vendorId=0071053609&shopCode=0071053609&supplierCode=0071053609&productType=6&productName=%E5%BE%B7%E5%9B%BDWELEDA%E7%BB%B4%E8%95%BE%E5%BE%B7%20%E6%9C%89%E6%9C%BA%E9%87%94%E7%9B%8F%E8%8A%B1%20%E5%84%BF%E7%AB%A5%E7%89%99%E8%86%8F%20%E6%97%A0%E6%B0%9F%E6%97%A0%E5%8F%94%E6%B3%A1%E5%89%82%201-10%E5%B2%81%E5%AE%9D%E5%AE%9D%20%E5%8F%AF%E5%90%9E%E9%A3%9F%E5%8F%AF%E5%90%9E%E5%92%BD%20%E5%84%BF%E7%AB%A5%E6%8A%A4%E7%90%8650%E6%AF%AB%E5%8D%87&handwork=rec_19-28_0_A&contentId=&promotionInfo=&price=78.00&picVersion=2000&pictureUrl=//imgservice.suning.cn/uimg1/b2c/image/QI5qMVoeICjiats4QMcQ9A.jpg&productCode2=000000010885693796&vendorId2=0070209036&shopCode2=0070209036&supplierCode2=0070209036&productType2=6&productName2=LV%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB%20%E6%AC%A7%E6%B4%B2%E7%9B%B4%E9%82%AE%202019Louis%20Vuitton%E6%96%B0%E6%AC%BE%E5%A5%B3%E5%A3%AB%E4%BC%94%E9%97%B2%E6%97%B6%E5%B0%9A%E7%9A%AE%E9%9D%A9%E8%85%B0%E5%B8%A6%E7%9A%AE%E5%B8%A6%E9%92%88%E6%89%A3%E6%A3%95%E8%89%B2%E7%B3%BBM0100U&handwork2=rec_19-28_0_A&contentId2=&promotionInfo2=&price2=5420.00&picVersion2=2000&pictureUrl2=//imgservice.suning.cn/uimg1/b2c/image/TCg8rJgqViXT02EQxDIbXA.jpg&safp=f73ee1cf.wapindex7.123114334595.3&safc=0.1.rec_19-28_0_A&safpn=10001"
            >
              <div class="four-item">
                <img src="../assets//home-img/yinxiang.jpg" />
                <p>苏宁国际</p>
              </div>
            </a>

            <a
              href="//temai.m.suning.com/?collectId1=100265862&grppurId1=20560791&collectId2=100266059&grppurId2=20571068&fixed=1"
            >
              <div class="four-item">
                <img src="../assets//home-img/watch.jpg" />
                <p>苏宁Outlets</p>
              </div>
            </a>
            <a href="https://c.m.suning.com/xpsf719.html">
              <div class="four-item">
                <img src="../assets//home-img/5G-mobile.jpg" />
                <p>新品首发</p>
              </div>
            </a>

            <a href="https://c.m.suning.com/xpsf719.html">
              <div class="four-item">
                <img src="../assets//home-img/iqoo-mobile.jpg" />
                <p>0元试用</p>
              </div>
            </a>
          </div>
        </div>
        <!-- 818好购物图片 -->
        <div height="1rem">
          <img src="../assets/home-img/good-818.png" width="100%" />
        </div>
        <!-- 攻略四张外框图 -->
        <div class="raiders">
          <div class="raiders-four">
            <img src="../assets/home-img/pad.jpg" />
            <div class="text-wrap">
              <p class="raiders-title">进口爆款</p>
              <p class="raiders-desc">99选10件</p>
            </div>
          </div>
          <div class="raiders-four">
            <img src="../assets/home-img/fengshan2.jpg" />
            <div class="text-wrap">
              <p class="raiders-title">空调狂欢购</p>
              <p class="raiders-desc">每千减百</p>
            </div>
          </div>
          <div class="raiders-four">
            <img src="../assets/home-img/binxiang2.jpg" />
            <div class="text-wrap">
              <p class="raiders-title">冰箱洗衣机</p>
              <p class="raiders-desc">至高抵1000</p>
            </div>
          </div>
          <div class="raiders-four">
            <img src="../assets/home-img/touyingyi.jpg" style="left:7px" />
            <div class="text-wrap">
              <p class="raiders-title">电视家影</p>
              <p class="raiders-desc">至高抵1000</p>
            </div>
          </div>
        </div>

        <!-- 推荐榜单 -->
        <div class="rec-list">
          <h2>推荐榜单</h2>
          <!-- 榜单三个列表 -->
          <div class="bd-wrap">
            <div class="list-three bd-item-one">
              <img class="pd-img" src="../assets/home-img/红酒.jpg" />
              <p class="three-name">人气榜</p>
              <p>甄选回香红酒榜</p>
              <p>卖爆1.8万件</p>
              <img class="bottom-bg" src="../assets/home-img/bottom-bg.png" />
            </div>
            <vertical-looper></vertical-looper>
            <div class="list-three bd-item-three">
              <img class="pd-img" src="../assets/home-img/hufupin.jpg" />
              <p class="three-name">人气榜</p>
              <p>甄选回香红酒榜</p>
              <p>卖爆1.8万件</p>
              <img class="bottom-bg" src="../assets/home-img/bottom-bg3.png" />
            </div>
          </div>
        </div>
        <!-- 四个人气榜 -->
        <four-bd></four-bd>

        <!-- 猜你喜欢 -->
        <div class="u-like"></div>

        <!-- 猜你喜欢商品 -->
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>
        <ulike></ulike>

        <!-- 最底部两张图 -->
        <div class="bottom-img">
          <img src="https://res.suning.cn/project/cmsWeb/suning/wap/v7/images/snlogo.png" />
          <img src="https://image2.suning.cn/uimg/cms/img/154425305248104492.jpg" />
        </div>
      </div>
    </div>
    <div class="content-wrap-one fix" v-if="isShow" @click="jumpSearch">
      <div class="icon-wrap">
        <img class="classify-icon" src="../assets/home-img/classify-icon.png" />
      </div>
      <a
        name="index_none_header_sysc"
        class="search"
        href="//m.suning.com/search.html?defaultWord=限时抢9.9元榨汁机"
      ></a>
      <i class="search-icon"></i>
      <form>
        <input
          class="searchInput"
          name="index_none_header_sysc"
          type="text"
          placeholder="限时抢9.9元榨汁机"
          autocomplete="off"
        />
      </form>
      <div class="icon-wrap">
        <img class="my-icon" src="../assets/home-img/my-icon.png" />
      </div>
    </div>

    <div class="back-top" v-show="isShow" @click="backTop()"></div>
    <!-- 固定图标 -->
    <div class="gzh-icon">
      <a href="https://cuxiao.m.suning.com/scms/wapshouyexuanfu.html">
        <img src="https://image3.suning.cn/uimg/cms/img/159123677688634206.png" />
      </a>
    </div>

    <div class="open-app">
      <a href="https://cuxiao.m.suning.com/scms/wapshouyexuanfu.html">
        <img src="//image.suning.cn/uimg/cms/img/159463095607612281.png" />
      </a>
    </div>

    <!-- 跳转到登录组件 -->
    <div class="to-login" @click="jumpLogin" v-if="login">
      <img v-if="isDel" src="https://image3.suning.cn/uimg/cms/img/157588645542963955.png" />
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "../components/TabBar.vue";
import loop from "../components/home/Loop.vue";
import BScroll from "better-scroll";
import VerticalLooper from "../components/home/VerticalLooper.vue";
import FourContent from "../components/home/Four-Content.vue";
import FourBd from "../components/home/FourBd.vue";
import Ulike from "../components/home/Ulike.vue";
import MaskLoad from "../components/home/MaskLoad.vue";
import Search from "./Search.vue";
export default {
  data() {
    return {
      enterList1: [
        {
          icon: require("../assets/home-img/low-price.png"),
          title: "天天低价"
        },
        {
          icon: require("../assets/home-img/sn-market.png"),
          title: "苏宁超市"
        },
        {
          icon: require("../assets/home-img/sn-pingou.png"),
          title: "苏宁拼购"
        },
        {
          icon: require("../assets/home-img/5G-phone.png"),
          title: "5G手机"
        },
        {
          icon: require("../assets/home-img/sn-jiadian.png"),
          title: "苏宁家电"
        }
      ],
      enterList2: [
        {
          icon: require("../assets/home-img/free-fruit.png"),
          title: "免费水果"
        },
        {
          icon: require("../assets/home-img/xiaoxiaole.png"),
          title: "赚钱消消乐"
        },
        {
          icon: require("../assets/home-img/youli.png"),
          title: "签到有礼"
        },
        {
          icon: require("../assets/home-img/linquan.png"),
          title: "领券中心"
        },
        {
          icon: require("../assets/home-img/more-channel.png"),
          title: "更多频道"
        }
      ],
      isShow: false,
      scroll: null,
      isDel: true
    };
  },

  mounted() {
    let that = this;
    this.scroll = new BScroll(this.$refs.mainScroll, {
      mouseWheel: {
        // pc端同样能滑动
        speed: 20,
        invert: false
      },
      probeType: 3,
      click: true
    });

    this.scroll.on("scroll", function(position) {
      if (-position.y > 300) {
        that.isShow = true;
      } else {
        that.isShow = false;
      }

      if (-position.y > 7780) {
        that.isDel = false;
      } else {
        that.isDel = true;
      }
    });
    // 返回顶部
    this.scroll.scrollTo(0, 0);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    login() {
      return this.$store.state.login;
    }
  },
  methods: {
    jumpSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    backTop() {
      // 返回顶部
      this.scroll.scrollTo(0, 0, 500);
    },
    jumpLogin() {
      this.$router.push({
        path: "/my"
      });
      this.isDel = !this.isDel;
    }
  },
  components: {
    TabBar,
    loop,
    VerticalLooper,
    FourContent,
    FourBd,
    Ulike,
    MaskLoad
  }
};
</script>



<style scoped>
.home-container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.main-container {
  width: 100%;
  flex-grow: 1;
  overflow: auto;
}
.top-type-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content-wrap-one,
.content-wrap-two {
  width: 100%;
  height: 1.76rem;
  background-color: rgb(255, 219, 71);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-top-gif {
  width: 9rem;
  height: 1rem;
  margin-left: -1rem;
}

.icon-wrap {
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 100%;
  align-items: center;
}

.fix {
  width: 100%;
  position: fixed;
  top: 0;
}

.classify-icon,
.my-icon {
  width: 0.72rem;
  height: 1.2rem;
}

/* 顶部搜索栏 */
.content-wrap-two {
  height: 1.84rem;
}

.content-wrap-two span {
  margin-left: 1.3rem;
  color: rgb(187, 187, 187);
}

.magnifier-icon {
  background: url(../assets/home-img/magnifier-icon.png);
  display: inline-block;
  position: absolute;
  width: 0.72rem;
  height: 0.72rem;
  top: 0.3rem;
  left: 0.4rem;
  background-size: 0.72rem 0.72rem;
}
.search-bar {
  width: 92%;
  height: 1.3rem;
  position: relative;
  line-height: 1.3rem;
  background-color: white;
  margin: 0 auto;
  border-radius: 18px;
  font-size: 14px;
}

form {
  height: 1.76rem;
  display: flex;
  flex-grow: 1;
  outline: none;
  align-items: center;
}

.search-icon {
  background: url(../assets/home-img/magnifier-icon.png);
  width: 0.72rem;
  height: 0.72rem;
  top: 0.5rem;
  left: 1.8rem;
  background-size: 0.72rem 0.72rem;
  position: absolute;
}

form > input {
  flex-grow: 1;
  border: 0;
  border-radius: 0.6rem;
  padding-left: 1.5rem;
  width: 100%;
  height: 1.28rem;
  line-height: 1.28rem;
  background: #fff;
  font-size: 0.56rem;
  color: #999;
}

/* 茅台广告图 */
.hor-view > a > img {
  margin-top: 0.3rem;
  height: 100%;
  width: 100%;
}
.hor-view {
  width: 96%;
  margin: 0 auto;
}

/* 10个list图标 */
.enter-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 5.6rem;
  padding: 0 0.6rem;
  justify-content: center;
}

.enter-list-wrap1,
.enter-list-wrap2 {
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
}

.enter-item {
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.enter-item > img {
  width: 1.68rem;
  height: 1.68rem;
}

.enter-item > p {
  font-size: 0.44rem;
}

/* 为你推荐 */
.recommend {
  width: 94%;
  margin: 0 auto;
  display: flex;
  background: white;
}

.rec-left-content {
  width: 3.46rem;
  height: 3.44rem;
  padding: 0.94rem 0.36rem 0 0.36rem;
  display: flex;
  flex-direction: column;
}

.rec-left-content h2 {
  width: 2.74rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.64rem;
  color: #444;
  font-weight: bold;
}

.rec-left-content > p {
  width: 2.74rem;
  height: 0.64rem;
  line-height: 0.64rem;
  font-size: 0.48rem;
  color: #999;
}

.four-space {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 10.16rem;
  height: 3.44rem;
  align-items: center;
  padding-right: 0.4rem;
}

.four-item {
  width: 2.4rem;
  height: 3.44rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.four-item > p {
  width: 2.4rem;
  font-size: 0.44rem;
  text-align: center;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.four-item > img {
  width: 2rem;
  height: 2rem;
  text-align: center;
}

/* 818好物攻略 */
.raiders {
  width: 96%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.raiders-four {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-bottom: 0.5rem;
}

.raiders-four:nth-child(1) {
  padding-left: 0.5rem;
  width: 3.92rem;
  height: 6rem;
  background: url("../assets/home-img/bg-GO.png");
  background-size: 100% 100%;
}
.raiders-four:nth-child(2) {
  background: url("../assets/home-img/bg-GO2.png");
  width: 3.92rem;
  height: 6rem;
  background-size: 100% 100%;
}

.raiders-four:nth-child(3) {
  background: url("../assets/home-img/bg-GO3.png");
  width: 3.92rem;
  height: 6rem;
  background-size: 100% 100%;
}

.raiders-four:nth-child(4) {
  padding-right: 0.3rem;
  background: url("../assets/home-img/bg-GO4.png");
  width: 3.92rem;
  height: 6rem;
  background-size: 100% 100%;
}
.raiders-four img {
  width: 2.8rem;
  height: 2.8rem;
  top: 20px;
  left: 10px;
}

.raiders-four p {
  font-size: 0.52rem;
  bottom: 1.5rem;
  left: 0.89rem;
  color: white;
}

.raiders-four .raiders-desc {
  font-size: 0.44rem;
  bottom: 0.9rem;
  left: 1rem;
}

/* 推荐榜单 */
.rec-list h2 {
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: #444;
  margin-left: 1rem;
}
.bd-wrap {
  width: 94%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.list-three {
  width: 4.52rem;
  height: 5.32rem;
  background: white;
  border-radius: 6px;
  position: relative;
}

.list-three .pd-img {
  width: 3rem;
  height: 3rem;
  margin-left: 0.8rem;
  margin-top: 0.2rem;
}

.list-three .three-name {
  font-size: 0.44rem;
  line-height: 0.6rem;
  width: 2rem;
  background: #fff;
  color: #d9a87a;
  border: 0.04rem solid #d9a87a;
  border-radius: 0.34rem;
  text-align: center;
  margin: 0 auto;
}

.list-three p {
  z-index: 1;
  width: 4.4rem;
  height: 0.68rem;
  font-size: 0.52rem;
  position: relative;
  top: -0.3rem;
  line-height: 0.68rem;
  color: #fff;
  text-align: center;
}

.list-three .bottom-bg {
  width: 100%;
  height: 1.86rem;
  bottom: 0;
  left: 0;
  position: absolute;
}

/* 回到顶部图标 */
.back-top {
  position: fixed;
  width: 2rem;
  height: 2rem;
  bottom: 3.7rem;
  right: 0.3rem;
  background: url(../assets/home-img/back-top.png);
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
}

/* 猜你喜欢图标 */
.u-like {
  background: url(../assets/home-img/cai-u-like.png);
  background-repeat: no-repeat;
  width: 14.04rem;
  height: 1.2rem;
  background-size: 14.04rem 1.2rem;
  margin: 0.5rem auto;
}

/* 右下角固定图标 */
.gzh-icon {
  position: fixed;
  right: 0;
  bottom: 10.7rem;
  width: 2rem;
  height: 2rem;
  z-index: 999;
}

.gzh-icon img,
.open-app img {
  width: 100%;
  height: 100%;
}

.open-app {
  position: fixed;
  right: 0;
  bottom: 6.5rem;
  width: 2rem;
  height: 2.9rem;
  z-index: 999;
}

.bottom-img {
  width: 100%;
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.bottom-img img {
  width: 100%;
}

/* 跳转至登录页面 */
.to-login {
  width: 100%;
  height: 1.8rem;
}

.to-login img {
  width: 100%;
  height: 100%;
}
</style>

