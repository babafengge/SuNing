<template>
  <div id="app">
    <router-view />
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
html,body,#app {
  height: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  color: #222;
  font-size: 25px;
}
a {
  text-decoration: none;
}
</style>


