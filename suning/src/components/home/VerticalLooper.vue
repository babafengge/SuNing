<template>
  <!-- 轮播图 -->
  <div class="list-three bd-item-two">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.secText">
        <a :href="item.url">
          <img class="pd-img" :src="item.imgUrl" />
          <p class="three-name">{{item.firstText}}</p>
          <p>{{item.secText}}</p>
          <p>{{item.thirdText}}</p>
          <img class="bottom-bg" src="../../assets/home-img/bottom-bg2.png" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        {
          url:
            "https://c.m.suning.com/top.html?labelType=1&parameter=66601&catalogueId=162116&catalogueName=%E7%A2%B3%E9%85%B8%E9%A5%AE%E6%96%99%E6%A6%9C&multiDepiction=%E5%8D%96%E7%88%867.5%E4%B8%87%E4%BB%B6&productCode=000000000642257628&productName=%E9%9B%B6%E5%BA%A6%E5%8F%AF%E4%B9%90%E6%B1%BD%E6%B0%B4300ml*12%20%E6%95%B4%E7%AE%B1%E8%A3%85%20%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%E5%87%BA%E5%93%81&shopCode=0000000000&supplierCode=0000000000&productType=1&promotionType=&promotionInfo=&price=23.80&picVersion=2000&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FPWjkcJFNfcrjO-ML3_qQKw.jpg&handwork=rec_21-56_21-56_none_sys:rec,inpo:0,cpn:0,p:1,ab:A,uuid:ef304cab-bb18-431f-a92d-97ca4ca7efa5,dab:17-77_cateid:162116,catesource:parent-city&safp=f73ee1cf.wapindex7.122836334394.4&safc=0.1.rec_21-56_21-56_none_sys:rec,inpo:0,cpn:0,p:1,ab:A,uuid:ef304cab-bb18-431f-a92d-97ca4ca7efa5,dab:17-77_cateid:162116,catesource:parent-city&safpn=10001",
          firstText: "人气榜",
          secText: "甄选回香红酒榜",
          thirdText: "卖爆1.8万件",
          imgUrl: require("../../assets/home-img/coco.jpg")
        },
        {
          url:
            "https://c.m.suning.com/top.html?labelType=1&parameter=66601&catalogueId=162205&catalogueName=%E6%B8%85%E6%B4%81%E6%B4%97%E5%8F%91%E6%B0%B4%E6%A6%9C&multiDepiction=%E5%8D%96%E7%88%869.5%E4%B8%87%E4%BB%B6&productCode=000000011562661371&productName=%E6%B8%85%E6%89%AC%EF%BC%88CLEAR%EF%BC%89%E7%94%B7%E5%A3%AB%E5%8E%BB%E5%B1%91%E6%B4%97%E5%8F%91%E9%9C%B2%E6%B8%85%E7%88%BD%E6%8E%A7%E6%B2%B9%E5%9E%8B%E8%93%9D%E7%93%B6720GX2%2B100GX2%E3%80%90%E8%81%94%E5%90%88%E5%88%A9%E5%8D%8E%E3%80%91%EF%BC%88%E6%96%B0%E8%80%81%E5%8C%85%E8%A3%85%E9%9A%8F%E6%9C%BA%E5%8F%91%E8%B4%A7%EF%BC%89&shopCode=0000000000&supplierCode=0000000000&productType=1&promotionType=&promotionInfo=&price=109.90&picVersion=2000&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F_HL6Ooa49hiDA4pnYWk22g.jpg&handwork=rec_21-56_21-56_none_sys:rec,inpo:0,cpn:0,p:1,ab:A,uuid:ba19b917-5000-43d8-b1ea-13be181eaced,dab:17-77_cateid:162205,catesource:parent-city",
          firstText: "人气榜",
          secText: "清洁洗发水榜",
          thirdText: "卖爆1.8万件",
          imgUrl: require("../../assets/home-img/qingyang.jpg")
        },
        {
          url:
            "https://c.m.suning.com/top.html?labelType=1&parameter=66601&catalogueId=184313&catalogueName=%E7%94%B5%E8%84%91DIY%E9%85%8D%E4%BB%B6%E6%A6%9C&multiDepiction=%E5%8D%96%E7%88%864189%E4%BB%B6&productCode=000000010089208136&productName=%E4%B8%89%E6%98%9F(Samsung)%20860%20EVO%20250GB%20SATA%E6%8E%A5%E5%8F%A3%202.5%E2%80%9C%E5%8F%B0%E5%BC%8F%E7%BB%84%E8%A3%85%E6%9C%BA%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%E5%86%85%E7%BD%AE%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98%EF%BC%88SSD)%EF%BC%88MZ-76E250%EF%BC%89&shopCode=0000000000&supplierCode=0000000000&productType=1&promotionType=&promotionInfo=&price=309.00&picVersion=2027&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FO8Ie32zk9LrJvsSxKgZ1Ww.png&handwork=rec_21-56_21-56_none_sys:rec,inpo:0,cpn:0,p:1,ab:A,uuid:23d27339-cf54-402e-b028-dca1c5529dcb,dab:17-77_cateid:184313,catesource:parent-city&safp=f73ee1cf.wapindex7.122836334394.3&safc=0.1.rec_21-56_21-56_none_sys:rec,inpo:0,cpn:0,p:1,ab:A,uuid:23d27339-cf54-402e-b028-dca1c5529dcb,dab:17-77_cateid:184313,catesource:parent-city&safpn=10001",
          firstText: "人气榜",
          secText: "电脑DIY配件榜",
          thirdText: "卖爆1.8万件",
          imgUrl: require("../../assets/home-img/neicuntiao.jpg")
        }
      ],
      swiperOptions: {
        direction: "vertical",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true
      }
    };
  }
};
</script>

<style scoped>
.swiper-container {
  height: 100%;
  width: 94%;
  /* border-radius: 8px; */
}

.swiper > img,
.swiper-slide > img {
  width: 100%;
  height: 100%;
}
.list-three {
  display: flex;
  justify-content: center;
  width: 100%;
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
</style>