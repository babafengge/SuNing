<template>
  <transition name="animate">
    <div class="mask-wrap" v-if="isShow">
      <div class="img-wrap">
        <a href="https://code.suning.cn/PrEpKj">
          <img
            class="adv-img"
            src="https://image3.suning.cn/uimg/cms/img/159592986814286941.png"
            alt
          />
        </a>
        <img src="../../assets/home-img/删除.png" alt class="del-btn" @click="delBtn" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    let that = this;
    setTimeout(function () {
      that.isShow = !that.isShow;
    }, 1000);
  },
  methods: {
    delBtn() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
@keyframes animate {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

.animate-enter-active {
  animation: animate 0.05s;
}

.animate-leave-active {
  animation: animate 0.05s reverse;
}

.mask-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.img-wrap {
  width: 13.2rem;
  height: 14.36rem;
  position: absolute;
  top: 25%;
  left: 10%;
}

.adv-img {
  width: 100%;
  height: 100%;
}

.del-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.8rem;
}
</style>