<template>
  <div class="search-container">
    <div class="content-wrap-one">
      <div class="icon-wrap">
        <img class="back-icon" src="../assets/home-img/back.png" @click="$router.go(-1)" />
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
          @focus="changeValue()"
          @blur="backValue()"
          ref="inputValue"
        />
      </form>
      <div class="icon-wrap">
        <a
          href="https://cuxiao.m.suning.com/scms/PGzhimaijie.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2FPGzhimaijie.js%3FpageCode%3DPGzhimaijie"
        >搜索</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "请输入你想要的找的商品",
      blurValue: "限时抢9.9元榨汁机"
    };
  },
  methods: {
    changeValue() {
      this.$refs.inputValue.placeholder = this.inputValue;
    },
    backValue() {
      this.$refs.inputValue.placeholder = this.blurValue;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
  font-size: 0.65rem;
}
.search-container {
  width: 100%;
  height: 100%;
  background-color: white;
}
.content-wrap-one {
  width: 100%;
  height: 1.76rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-wrap {
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 100%;
  align-items: center;
  padding: 0.2rem 0.3rem;
}

.icon-wrap img {
  width: 0.8rem;
  height: 0.8rem;
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
  margin-left: 0.3rem;
}

form > input {
  flex-grow: 1;
  border: 0;
  border-radius: 0.1rem;
  padding-left: 1.5rem;
  width: 100%;
  height: 1.28rem;
  line-height: 1.28rem;
  background: #fff;
  font-size: 0.56rem;
  color: #999;
  outline: none;
  background-color: rgb(238, 238, 238);
}
</style>