<template>
  <!-- 轮播图 -->
  <div class="swiper">
    <swiper ref="loop" :options="loopOptions">
      <swiper-slide v-for="item in imgList" :key="item.imgUrl">
        <a :href="item.href">
          <img :src="item.imgUrl" />
        </a>
      </swiper-slide>
    </swiper>
    <div class="loop-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          href:
            "https://cuxiao.m.suning.com/scms/m0622coapp.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fm0622coapp.js%3FpageCode%3Dm0622coapp&safp=f73ee1cf.wapindex7.113456529858.1&safpn=10001",
          imgUrl: require("../assets/home-img/swiper01.jpg")
        },
        {
          href: "https://cuxiao.m.suning.com/scms/wapdn072601.html?adtype=3",
          imgUrl: require("../assets/home-img/swiper02.png")
        },
        {
          href:
            "https://cuxiao.m.suning.com/scms/zhongyangjicheng818.html?adtype=3&safp=f73ee1cf.wapindex7.113456529858.3&safc=0.2.1706354320200808",
          imgUrl: require("../assets/home-img/swiper03.jpg")
        },
        {
          href:
            "https://cuxiao.m.suning.com/scms/808wppk.html?adtype=3&safp=f73ee1cf.wapindex7.113456529858.4&safc=0.2.1707288120200808",
          imgUrl: require("../assets/home-img/swiper04.jpg")
        },
        {
          href:
            "https://shop.m.suning.com/30001790.html?adtype=3&safp=f73ee1cf.wapindex7.113456529858.6&safc=shop.2.1707144620200808",
          imgUrl: require("../assets/home-img/swiper05.png")
        },
        {
          href:
            "https://cuxiao.m.suning.com/scms/2020215227copy1.html?adtype=3&safp=f73ee1cf.wapindex7.113456529858.5&safc=0.2.1701958320200808",
          imgUrl: require("../assets/home-img/swiper06.png")
        },
        {
          href:
            "https://cuxiao.m.suning.com/scms/808wppk.html?adtype=3&safp=f73ee1cf.wapindex7.113456529858.4&safc=0.2.1707288120200808",
          imgUrl: require("../assets/home-img/swiper07.png")
        },
        {
          href:
            "https://cuxiao.m.suning.com/scms/pinpairi710.html?adtype=3&safp=f73ee1cf.wapindex7.113456529858.8&safc=0.2.1702800820200808",
          imgUrl: require("../assets/home-img/swiper08.jpg")
        }
      ],
      loopOptions: {
        pagination: {
          el: ".loop-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.loop.$swiper;
    }
  }
};
</script>

<style scoped>
/* 轮播图板块 */
.swiper {
  position: relative;
  width: 100%;
  height: 5.2rem;
  background: url(../assets/home-img/yellow-bg.png);
  background-size: 100% 5.2rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.loop-pagination {
  position: absolute;
  bottom: 0rem;
  z-index: 999;
}

.swiper-container {
  position: relative;
  height: 100%;
  width: 92%;
  border-radius: 8px;
}

.swiper img,
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>