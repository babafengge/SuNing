<template>
  <div class="like-pro-container">
    <a :href="item.url" v-for="item in proList" :key="item.desc">
      <div class="pro-item">
        <div class="item-img">
          <img :src="item.proImg" />
        </div>
        <div class="pro-text">
          <p class="pro-desc">{{item.desc}}</p>

          <div class="proIcon">
            <p v-if="item.proIcon == '自营'">{{item.proIcon}}</p>
            <p v-if="item.jiwu == '苏宁极物'">{{item.jiwu}}</p>
            <p v-if="item.inter=='苏宁国际直营'">{{item.inter}}</p>
            <span v-if="item.pingou =='拼购'">{{item.pingou}}</span>
          </div>

          <div class="pro-bottom-text">
            <div class="price-eva">
              <p class="item-price" style="display:inline-block">
                <span style="color:#FF4422;font-weight:bold">￥</span>
                <span style="color:#FF4422;font-weight:bold;font-size:0.72rem">{{item.price}}</span>
              </p>
              <p class="item-eva">{{item.evaluate}}</p>
            </div>

            <span class="item-adv">{{item.adv}}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      proList: []
    };
  },
  created() {
    let url = "http://localhost:5500/src/assets/data/productList.json";
    let that = this;
    axios
      .get(url)
      .then(function(response) {
        if (response.data.code == 200) {
          that.proList = response.data.list;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.like-pro-container {
  display: flex;
  width: 94%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
.pro-item {
  overflow: hidden;
  width: 7.3rem;
  height: 10.84rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-around;
  margin-top: 0.3rem;
  border-radius: 0.4rem;
  padding-bottom: 0.2rem;
}

.item-img img {
  width: 100%;
}

.pro-text {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.52rem;
  margin: 0 auto;
}

.pro-desc {
  width: 6.46rem;
  height: 1.34rem;
  font-size: 0.52rem;
  line-height: 0.68rem;
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.proIcon {
  display: flex;
  align-items: center;
}
.proIcon p {
  padding: 0 0.08rem;
  height: 0.52rem;
  line-height: 0.52rem;
  border-radius: 0.2rem;
  background-color: #ffcc00;
  margin-left: 0.1rem;
}

.proIcon span {
  border: 1px solid #ffcc00;
  border-radius: 0.2rem;
  padding: 0 0.1rem;
  margin-left: 0.2rem;
  line-height: 0.48rem;
}

.pro-bottom-text {
  width: 100%;
  height: 0.76rem;
  line-height: 0.76rem;
  position: relative;
}

.price-eva {
  display: flex;
}

.item-eva {
  margin: 0 0.2rem;
  color: rgb(175, 174, 174);
  display: inline;
}

.item-adv {
  position: absolute;
  right: 0.1rem;
  color: rgb(175, 174, 174);
  bottom: 0.2rem;
}
</style>