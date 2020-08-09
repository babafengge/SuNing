<template>
  <div class="activity-area">
    <a :href="item.url" v-for="item in specialList" :key="item.id" class="activity-item">
      <div>
        <div class="activity-top-content">
          <span class="activity-title">{{item.title}}</span>
          <div class="time" v-if="item.title=='天天特价'">
            <span class="time-num">{{hours}}</span>
            <span>:</span>
            <span class="time-num">{{mins}}</span>
            <span>:</span>
            <span class="time-num">{{sec}}</span>
          </div>
        </div>
        <p class="desc">{{item.desc}}</p>
        <div class="avatar-wrap">
          <div class="img-content-wrap">
            <img :src="item.avatar1" />
            <p style="color:#ff5500">{{item.numPrice1}}</p>
            <p>{{item.price1}}</p>
          </div>
          <div class="img-content-wrap">
            <img :src="item.avatar2" />
            <p style="color:#ff5500">{{item.numPrice2}}</p>
            <p>{{item.price2}}</p>
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
      specialList: [],
      time: "",
      hours: "",
      mins: "",
      sec: ""
    };
  },
  created() {
    let url = "http://localhost:5500/src/assets/data/specialList.json";
    let that = this;
    axios
      .get(url)
      .then(function(response) {
        if (response.data.code == 200) {
          that.specialList = response.data.list;
          that.time = response.data.list[0].time;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted(){
    let that = this;
    setInterval(function() {
      that.countDown(that.time);
    }, 1000);
  },
  methods:{
    countDown(time) {
      let nowTime = +new Date(); //获取到现在的毫秒数
      let inputTime = +new Date(time); //获取用户输入的毫秒数
      let times = (inputTime - nowTime) / 1000; //获取倒计时的总秒数
      this.hours = parseInt((times / 60 / 60) % 24); //小时
      this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
      this.mins = parseInt((times / 60) % 60); //分钟
      this.mins = this.mins < 10 ? "0" + this.mins : this.mins;
      this.sec = parseInt(times % 60); //秒
      this.sec = this.sec < 10 ? "0" + this.sec : this.sec;
    }
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
  overflow: hidden;
  border-radius: 0.44rem;
}

.activity-item {
  display: inline-block;
  flex-shrink: 1;
  width: 50%;
  background: #fff;
  border: 1px solid #f2f2f2;
  padding: 0 0.4rem;
}

.activity-item p {
  font-size: 0.4rem;
  line-height: 0.8rem;
}

.desc {
  font-size: 0.48rem;
  color: #999;
}

.time {
  font-size: 0.4rem;
  display: inline-block;
  margin-left: 0.2rem;
  text-align: center;
}

.time .time-num {
  display: inline-block;
  border-radius: 6px;
  width: 0.8rem;
  margin-left: 0.1rem;

  background: rgb(255, 219, 71);
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