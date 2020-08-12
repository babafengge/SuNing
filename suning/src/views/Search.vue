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

    <!-- 热门搜索 -->
    <div class="hot-search-wrap">
      <h2>热门搜索</h2>

      <div class="hot-search">
        <a href="#" v-for="(item,index) in hotList" :key="item.content" ref="changeColor">
          <span :class="{isActive:item.highlight}" @click="addHistory(index)">{{item.content}}</span>
        </a>
      </div>
    </div>
    <!-- 历史搜索 -->
    <div class="history-wrap">
      <div class="his-top-wrap" v-if="isSeen">
        <h2>历史搜索</h2>
        <img src="../assets/home-img/trash-icon.png" @click="empty()" />
      </div>
      <div class="histroySearch">
        <a href="#" v-for="item in historyList">
          <span>{{item.content}}</span>
        </a>
      </div>
    </div>

    <div class="search-mask" v-if="isFound">
      <div class="mask-middle-wrap">
        <div class="mask-top-content">
          <p>温馨提示</p>
          <p>确定清空历史数据？</p>
        </div>
        <div class="mask-btn">
          <p @click="isFound=false">取消</p>
          <p @click="sure">确定</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "请输入你想要的找的商品",
      blurValue: "限时抢9.9元榨汁机",
      hotList: [
        {
          listUrl:
            "http://th.suning.com/cpm/calCpmClick?adtype=3&sid=17063231&tid=1706323120200810&click_id=MeYxME80Bp7GIDgy37oWm4f1EA&ap=ODE1ZThkYzg0MDcyMmMzYzdiMmIzY2Q4NzNlOGVhODR8MTAwMDAzNTgzfDE3MDYzMjMxMjAyMDA4MTB8MTcwNjMyMzF8aHR0cHM6Ly9zaG9wLm0uc3VuaW5nLmNvbS9zYWxlLzMwMDAwMDIzXzEwMTE5NDcwLmh0bWx8Y3BtfDIwMjAtMDgtMTAgMDk6MTQ6NDh8MTU5NzAyMjA4ODc2Mjc4NzYxMjJ8MTIyLjk3LjE5Ny4zMXwwfGh0dHBzOi8vbS5zdW5pbmcuY29tL3NlYXJjaC5odG1sfDQyOTAyNDA4NnwxNTk2NTA4OTgzOTE5ODc4ODd8MzAwODYzMzl8OXwxMDB8MTAuMTA2LjEzLjM4fDF8MXx3YXB8NjIyODg1Mjc2MHxkZDgyMTc3MGE3NWRkNGU2ZDFlYjNkZjMyYTBlOGE2N3x8MTAwMDAzNTgzfHx8fHx85pa55aSq54iG5qy%2B56eS5p2AfG51bGx8&clickUrl=https%3A%2F%2Fshop.m.suning.com%2Fsale%2F30000023_10119470.html%3Fadtype%3D3",
          content: "空调扇",
          highlight: false
        },
        {
          listUrl:
            "https://shop.m.suning.com/30002894.html?adtype=3&safp=f73ee1cf.21471.searchKeywordsborb.2&safc=hotkeyword.2.1706747220200809",
          content: "一加手机",
          highlight: true
        },
        {
          listUrl:
            "https://cuxiao.m.suning.com/scms/809WPPK.html?adtype=3&safp=f73ee1cf.21471.searchKeywordsborb.3&safc=hotkeyword.2.1707392020200809",
          content: "全场五折起",
          highlight: true
        },
        {
          listUrl: "https://m.suning.com/search/%E8%BF%90%E5%8A%A8%E9%9E%8B/",
          content: "运动鞋",
          highlight: false
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "二手优品",
          highlight: false
        },
        {
          listUrl:
            "https://cuxiao.m.suning.com/scms/jzjccp.html?adtype=3&safp=f73ee1cf.21471.searchKeywordsborb.6&safc=hotkeyword.2.1706758320200809",
          content: "家装5折枪",
          highlight: true
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "学习机赢奖金",
          highlight: true
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "手机",
          highlight: false
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "冰箱",
          highlight: false
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "电视",
          highlight: false
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "茅台",
          highlight: false
        },
        {
          listUrl: "http://fe.suning.com/recycling/m/index.html",
          content: "笔记本",
          highlight: false
        }
      ],
      historyList: [],
      isDisplay: false,
      isFound: false,
      isSeen: false
    };
  },
  created() {
    let list = JSON.parse(localStorage.getItem("historyList"));
    if (list) {
      this.historyList = list;
    }
  },
  watch: {
    "historyList.length": {
      handler(historyList) {
        if (this.historyList.length == 0) {
          this.isSeen = false;
        } else {
          this.isSeen = true;
        }
      }
    }
  },
  methods: {
    changeValue() {
      this.$refs.inputValue.placeholder = this.inputValue;
    },
    backValue() {
      this.$refs.inputValue.placeholder = this.blurValue;
    },
    addHistory(index) {
      
      this.isDisplay = true;
      this.isSeen = true;
      if (this.historyList.indexOf(this.hotList[index]) > -1) {
        return;
      } else {
        this.historyList.unshift(this.hotList[index]);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      }
    },
    empty() {
      this.isFound = true;
    },
    sure() {
      this.historyList = [];
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
      // console.log(list);
      this.historyList.length = 0;
      this.isFound = false;
      this.isSeen = false;
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
  border-bottom: 1px solid rgb(226, 226, 226);
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
  top: 0.45rem;
  left: 2rem;
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

.hot-search-wrap {
  width: 92%;
  height: 8rem;
  margin: 0 auto;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.his-top-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h2 {
  line-height: 0.96rem;
  height: 0.96rem;
  color: #999;
  font-size: 0.6rem;
  font-weight: 100;
}

.hot-search {
  margin-top: 0.2rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.hot-search a,
.histroySearch a {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  display: inline-block;
  width: 31.5%;
  height: 1.3rem;
  text-align: center;
  background: #f2f2f2;
  font-size: 0.53rem;
  line-height: 1.3rem;
  border-radius: 4px;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.history-wrap {
  width: 92%;
  margin: 0 auto;
  padding-top: 0.8rem;
  margin-top: 1.2rem;
  border-top: 1px solid rgb(226, 226, 226);
}

.isActive {
  color: #ff6600;
}

.search-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.mask-middle-wrap {
  width: 13rem;
  height: 5.28rem;
  background: white;
  position: absolute;
  border-radius: 8px;
  top: 40%;
  left: 10%;
  text-align: center;
  font-size: 0.7rem;
  overflow: hidden;
}

.mask-top-content {
  display: flex;
  height: 3rem;
  flex-direction: column;
  justify-content: space-around;
}

.mask-btn {
  display: flex;
  justify-content: space-around;
  height: 2.28rem;
  line-height: 2.28rem;
}

.mask-btn p {
  flex-grow: 1;
  border: 1px solid rgb(226, 226, 226);
}

.mask-btn p:nth-child(2) {
  color: #eda200;
}
</style>