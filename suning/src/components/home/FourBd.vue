<template>
  <div class="activity-area">
    <a :href="item.url" v-for="item in newBdList" :key="item.id" class="activity-item">
      <div>
        <div class="activity-top-content">
          <span class="activity-title">{{item.title}}</span>
          <p class="bd">{{item.bd}}</p>
        </div>
        <p class="desc">{{item.desc}}</p>
        <div class="avatar-wrap">
          <div class="img-content-wrap">
            <img :src="item.avatar1" />
          </div>
          <div class="img-content-wrap">
            <img :src="item.avatar2" />
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
      newBdList: []
    };
  },
  created() {
    let url = "http://localhost:5500/src/assets/data/newBdList.json";
    let that = this;
    axios
      .get(url)
      .then(function(response) {
        if (response.data.code == 200) {
          that.newBdList = response.data.list;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.activity-area {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 0.44rem;
  margin-top: 0.6rem;
  overflow: hidden;
}

.activity-item {
  display: inline-block;
  flex-shrink: 1;
  width: 50%;
  background: #fff;
  border: 1px solid #f2f2f2;
  padding: 0.4rem 0.6rem;
}

.activity-item p {
  font-size: 0.4rem;
  line-height: 0.8rem;
}

.desc {
  font-size: 0.48rem;
  color: #999;
}

.img-content-wrap p {
  text-align: center;
  background: url(../../assets/home-img/price-bg.png);
  background-size: 2.5rem 1.08rem;
  background-position: 0px -8px;
  background-repeat: no-repeat;
}

.activity-title {
  font-size: 0.56rem;
  font-weight: bold;
}
.activity-top-content {
  display: flex;
  justify-content: space-between;
}
.bd {
  width: 1.6rem;
  background: #f9f5ee;
  font-size: 0.44rem;
  color: #ab813a;
  margin-left: 0.24rem;
  border-radius: 0.56rem;
  text-align: center;
  height: 0.56rem;
  line-height: 0.56rem;
}

.activity-item img {
  width: 2.4rem;
  height: 2.4rem;
}

.avatar-wrap {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
</style>