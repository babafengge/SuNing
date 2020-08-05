<template>
  <div class="home-container">
    <!-- 主题外框 -->
    <div class="main-container">
      <!-- 顶部 -->
      <div class="top-type-container">
        <div class="content-wrap-one">
          <img class="classify-icon" src="../assets/home-img/classify-icon.png" />
          <img class="home-top-gif" src="../assets/home-img/home-top-gif.gif" />
          <img class="my-icon" src="../assets/home-img/my-icon.png" />
        </div>
        <!-- 搜索栏外框 -->
        <div class="content-wrap-two">
          <div class="search-bar">
            <!-- 放大镜背景图标 -->
            <i class="magnifier-icon"></i>
            <span>清凉风扇每100减10</span>
          </div>
        </div>

        <!-- 轮播图 -->
        <div class="swiper"></div>
        <!-- 轮播图下的广告图 -->
        <div class="hor-view"></div>
        <!-- 广告图下的图标列表 -->
        <div class="enter-list"></div>
        <!-- 图标列表下的活动专区 -->
        <div class="activity-area">四个活动小列表</div>
        <!-- 为你推荐栏 -->
        <div class="recommend">为你推荐栏</div>
        <!-- 818好购物图片 -->
        <div class>
          <img src alt />
        </div>
        <!-- 攻略四张外框图 -->
        <div class="raiders">
          <img src alt />
          <img src alt />
          <img src alt />
          <img src alt />
        </div>

        <!-- 推荐榜单 -->
        <div class="rec-list">
          <h2>推荐榜单</h2>
          <!-- 榜单三个列表 -->
          <div class="bd-item-one"></div>
          <div class="bd-item-two"></div>
          <div class="bd-item-three"></div>
        </div>
      </div>
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "../components/TabBar.vue";
export default {
  components: {
    "tab-bar": TabBar
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
  height: 96%;
}
.top-type-container {
  width: 100%;
}

.content-wrap-one,
.content-wrap-two {
  width: 100%;
  height: 1.76rem;
  background-color: rgb(255, 219, 71);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home-top-gif {
  width: 9rem;
  height: 1.1rem;
  margin-right: 1rem;
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

.search-bar{
    width: 96%;
    height: 1.76rem;
}
</style>

