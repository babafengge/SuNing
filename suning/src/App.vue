<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  created() {
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt =
          "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
        };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener("DOMContentLoaded", recalc, false);
    })(document, window);
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  color: #222;
}
a {
  text-decoration: none;
  color: #222;
}

/* 轮播图小圆点样式 */
.loop-pagination .swiper-pagination-bullet {
  /* position: absolute !important; */
  width: 4px !important;
  height: 4px !important;
  display: inline-block !important;
  border-radius: 100% !important;
  background: rgb(80, 79, 79) !important;
  opacity: 0.6 !important;
  margin-left: 10px !important;
}

/* 轮播图小圆点激活时的样式 */
.loop-pagination .swiper-pagination-bullet-active {
  width: 10px !important;
  height: 4px !important;
  border-radius: 30% !important;
  background-color: white !important;
}
</style>


