<template>
  <div class="body">
    <div class="login" v-if="login">
      <p>登录后同步电脑与手机购物车的商品</p>
      <span @click="$router.push({path:'/my'})">去登录</span>
    </div>
    <div class="shops" v-if="suzy.length>0">
      <div class="shop">
        <div class="left">
          <span :class="{selected:suzycheck}" @click="btnClickZY()"></span>
        </div>
        <div class="right">
          <div class="shopinfo">
            <div class="shopicon icon-SN"></div>
            <div>苏宁自营</div>
          </div>
          <div class="tools"></div>
        </div>
      </div>
      <div v-for="(item,index) in suzy" class="cmmdty-layout-all">
        <div class="del-remove" ref="del" @click="delOwn(item,index)">删除</div>
        <div
          class="cmmdty-layout"
          @touchstart="movestart(item,index)"
          @touchend="moveend(item,index)"
          @touchmove="movediv(item,index)"
          ref="delcontainer"
        >
          <div class="left">
            <span :class="{selected:item.checked}" @click="btnClick(item,index)"></span>
          </div>
          <div class="right">
            <div class="cmmdty">
              <div class="img" @click="goDetail(item)">
                <img :src="item.pic" />
              </div>
              <div class="info">
                <div class="info-top" @click="goDetail(item)">
                  <p>{{item.text}}</p>
                </div>
                <div class="info-middle">
                  <div class="symbol">
                    <div :class="item.shop"></div>
                  </div>
                </div>
                <div class="info-bottom">
                  <div class="price">
                    <span class="price1">￥</span>
                    <span class="price2">{{item.price.slice(0,-3)}}</span>
                    <span class="price3">.{{item.price.slice(-2)}}</span>
                  </div>
                  <div class="count">
                    <button
                      class="min"
                      @click="$store.commit('minShop',{'item':item,'index':index})"
                    >-</button>
                    <input type="number" v-model="item.num" readonly />
                    <button
                      class="plus"
                      @click="$store.commit('plusShop',{'item':item,'index':index})"
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shops" v-if="suhwg.length>0">
      <div class="shop">
        <div class="left">
          <span :class="{selected:suhwgcheck}" @click="btnClickHWG()"></span>
        </div>
        <div class="right">
          <div class="shopinfo">
            <div class="shopicon icon-HWG"></div>
            <a
              href="http://fe.suning.com/oversea/wap/selfsupport.html?safp=f73ee1cf.AIUE2AAaaA.4.771003001&safpn=10009"
            >苏宁国际官方直营</a>
          </div>
          <div class="tools"></div>
        </div>
      </div>
      <div v-for="(item,index) in suhwg" class="cmmdty-layout-all">
        <div class="del-remove" ref="del" @click="delOwn(item,index)">删除</div>
        <div
          class="cmmdty-layout"
          @touchstart="movestart(item,index)"
          @touchend="moveend(item,index)"
          @touchmove="movediv(item,index)"
          ref="delcontainer2"
        >
          <div class="left">
            <span :class="{selected:item.checked}" @click="btnClick(item,index)"></span>
          </div>
          <div class="right">
            <div class="cmmdty">
              <div class="img" @click="goDetail(item)">
                <img :src="item.pic" />
              </div>
              <div class="info">
                <div class="info-top" @click="goDetail(item)">
                  <p>{{item.text}}</p>
                </div>
                <div class="info-middle">
                  <div class="symbol">
                    <div :class="item.shop"></div>
                  </div>
                </div>
                <div class="info-bottom">
                  <div class="price">
                    <span class="price1">￥</span>
                    <span class="price2">{{item.price.slice(0,-3)}}</span>
                    <span class="price3">.{{item.price.slice(-2)}}</span>
                  </div>
                  <div class="count">
                    <button
                      class="min"
                      @click="$store.commit('minShop',{'item':item,'index':index})"
                    >-</button>
                    <input type="number" v-model="item.num" />
                    <button
                      class="plus"
                      @click="$store.commit('plusShop',{'item':item,'index':index})"
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    login() {
      return this.$store.state.login;
    },
    suzy() {
      return this.$store.state.suzy;
    },
    suhwg() {
      return this.$store.state.suhwg;
    },
    suzycheck() {
      return this.$store.state.suzyAllcheck;
    },
    suhwgcheck() {
      return this.$store.state.suhwgAllcheck;
    },
  },
  methods: {
    movestart(item, index) {
        this.suzy.forEach((item,index)=>{
            item.movelength=0;
            item.movedirect=true;
            this.$refs.delcontainer[
            index
          ].style.cssText = `transform:translateX(0px);transition-duration:.5s`;
        })
        this.suhwg.forEach((item,index)=>{
            item.movelength=0;
            item.movedirect=true;
            this.$refs.delcontainer2[
            index
          ].style.cssText = `transform:translateX(0px);transition-duration:.5s`;
        })
      if (item.shop == "su-hwg") {
        this.suhwg[index].startX = event.changedTouches[0].clientX;
      } else {
        this.suzy[index].startX = event.changedTouches[0].clientX;
      }
    },
    moveend(item, index) {
      if (item.shop == "su-hwg") {
        this.suhwg[index].endX = event.changedTouches[0].clientX;
        if (this.suhwg[index].endX - this.suhwg[index].startX < 0) {
          this.$refs.delcontainer2[
            index
          ].style.cssText = `transform:translateX(-${this.$refs.del[0].offsetWidth}px)`;
          this.suhwg[index].movedirect = false;
        } else {
          this.$refs.delcontainer2[
            index
          ].style.cssText = `transform:translateX(0px)`;
          this.suhwg[index].movedirect = true;
        }
      } else {
        this.suzy[index].endX = event.changedTouches[0].clientX;
        if (this.suzy[index].endX - this.suzy[index].startX < 0) {
          this.$refs.delcontainer[
            index
          ].style.cssText = `transform:translateX(-${this.$refs.del[0].offsetWidth}px)`;
          this.suzy[index].movedirect = false;
        } else {
          this.$refs.delcontainer[
            index
          ].style.cssText = `transform:translateX(0px)`;
          this.suzy[index].movedirect = true;
        }
      }
    },
    movediv(item, index) {
      if (item.shop == "su-hwg") {
        if (this.suhwg[index].movedirect) {
          this.suhwg[index].movelength =
            event.changedTouches[0].clientX - this.suhwg[index].startX;
        } else {
          this.suhwg[index].movelength =
            -this.$refs.del[0].offsetWidth +
            event.changedTouches[0].clientX -
            this.suhwg[index].startX;
        }
        if (
          this.suhwg[index].movelength < 0 &&
          this.suhwg[index].movelength > -this.$refs.del[0].offsetWidth
        ) {
          this.$refs.delcontainer2[
            index
          ].style.cssText = `transform:translateX(${this.suhwg[index].movelength}px)`;
        }
      } else {
        if (this.suzy[index].movedirect) {
          this.suzy[index].movelength =
            event.changedTouches[0].clientX - this.suzy[index].startX;
        } else {
          this.suzy[index].movelength =
            -this.$refs.del[0].offsetWidth +
            event.changedTouches[0].clientX -
            this.suzy[index].startX;
        }
        if (
          this.suzy[index].movelength < 0 &&
          this.suzy[index].movelength > -this.$refs.del[0].offsetWidth
        ) {
          this.$refs.delcontainer[
            index
          ].style.cssText = `transform:translateX(${this.suzy[index].movelength}px)`;
        }
      }
    },
    btnClick(item, index) {
      this.$store.commit("changeCheck", {
        item: item,
        index: index,
      });
      if (item.checked == false) {
        if (item.shop == "su-hwg") {
          this.$store.commit("watchHWGAllCheckFalse");
        } else {
          this.$store.commit("watchZYAllCheckFalse");
        }
      } else {
        let abc = true;
        if (item.shop == "su-hwg") {
          this.suhwg.forEach((con) => {
            if (con.checked == false) {
              abc = false;
            }
          });
          if (abc) {
            this.$store.commit("watchHWGAllCheckTrue");
          }
        } else {
          this.suzy.forEach((con) => {
            if (con.checked == false) {
              abc = false;
            }
          });
          if (abc) {
            this.$store.commit("watchZYAllCheckTrue");
          }
        }
      }
      this.$store.commit("watchAllcheck");
    },
    btnClickZY() {
      this.$store.commit("changeZYAllcheck");
      if (this.suzycheck == true) {
        this.$store.commit("watchZYTrue");
      } else {
        this.$store.commit("watchZYFalse");
      }
      this.$store.commit("watchAllcheck");
    },
    btnClickHWG() {
      this.$store.commit("changeHWGAllcheck");
      if (this.suhwgcheck == true) {
        this.$store.commit("watchHWGTrue");
      } else {
        this.$store.commit("watchHWGFalse");
      }
      this.$store.commit("watchAllcheck");
    },
    goDetail(val) {
      if (val.id) {
        this.$router.push({
          path: "/detail",
          query: {
            id: val.id,
          },
        });
      }
    },
    delOwn(item,index){
        this.suzy.forEach((item1,index1)=>{
            item1.movelength=0;
            item1.movedirect=true;
            this.$refs.delcontainer[
            index1
          ].style.cssText = `transform:translateX(0px)`;
        })
        this.suhwg.forEach((item1,index1)=>{
            item1.movelength=0;
            item1.movedirect=true;
            this.$refs.delcontainer2[
            index1
          ].style.cssText = `transform:translateX(0px)`;
        })
        if(item.shop=="su-hwg"){
            this.$store.commit("delhwgOwn",index)
        }else{
            this.$store.commit("delzyOwn",index)
        }
    }
  }
};
</script>

<style scoped>
.body {
  padding: 0.48rem;
}
.login {
  background: #ffe37e;
  height: 1.2rem;
  line-height: 0.8rem;
  font-size: 0.48rem;
  color: #222;
  border-radius: 0.24rem;
  margin-bottom: 0.48rem;
  padding: 0.2rem 0.48rem;
  display: flex;
  justify-content: space-between;
}
.login span {
  background: #222;
  border-radius: 0.12rem;
  display: inline;
  color: #ffe37e;
  padding: 0 0.08rem;
}
.shops {
  border-radius: 0.24rem;
  margin-bottom: 0.48rem;
  background-color: #fff;
}
.shop {
  display: flex;
  align-items: center;
  padding: 0.48rem 0.48rem 0.36rem 0;
}
.left {
  width: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left span {
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.left .selected {
  border: none;
  background: url(../../assets/shopbar/icon-selected.png);
  background-size: 100% 100%;
}
.right {
  flex: 1 1;
  align-items: center;
  justify-content: space-between;
}
.shopinfo {
  font-size: 0.56rem;
  display: flex;
  align-items: center;
}
.shopinfo a {
  color: #333;
}
.shopicon {
  width: 0.85rem;
  height: 0.85rem;
  margin-right: 0.2rem;
}
.icon-SN {
  background: url(../../assets/shopbar/lion.png) no-repeat;
  background-size: 100% 100%;
}
.icon-HWG {
  background: url(../../assets/shopbar/hwg1.png) no-repeat;
  background-size: 100% 100%;
}
.cmmdty-layout {
  padding-bottom: 0.6rem;
  padding-right: 0.48rem;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
}
.cmmdty {
  display: flex;
  padding-top: 0.12rem;
  padding-bottom: 0.4rem;
}
.img {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.12rem;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
}
.info {
  flex: 1 1;
  padding-left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-top {
  font-size: 0.48rem;
  font-weight: 700;
}
.info-top p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.infp-middle {
  flex: 1 1;
  margin-bottom: 0.36rem;
}
.su-jiwu {
  margin-top: 0.24rem;
  width: 1.84rem;
  height: 0.6rem;
  margin-right: 0.2rem;
  background: url(../../assets/shopbar/sn-jiwu.png) no-repeat;
  background-size: 100% 100%;
}
.su-zy {
  margin-top: 0.24rem;
  width: 1.04rem;
  height: 0.6rem;
  margin-right: 0.2rem;
  background: url(../../assets/shopbar/sn-ziying.png) no-repeat;
  background-size: 100% 100%;
}
.su-hwg {
  margin-top: 0.24rem;
  width: 2.92rem;
  height: 0.6rem;
  margin-right: 0.2rem;
  background: url(../../assets/shopbar/sn-gjzy.png) no-repeat;
  background-size: 100% 100%;
}
.info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.48rem;
}
.price {
  color: #f42;
  font-weight: 900;
}
.price1 {
  font-size: 0.44rem;
}
.price2 {
  font-size: 0.56rem;
}
.price3 {
  font-size: 0.4rem;
}
.count {
  width: 3.6rem;
  height: 1.08rem;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  line-height: 1.08rem;
  align-items: center;
  background: url(../../assets/shopbar/counter-bg.png) no-repeat;
  background-size: 100% 100%;
}
.count input {
  outline: none;
  flex: 1 1;
  background-color: #fff;
  border: 0;
  width: 1rem;
  text-align: center;
  font-size: 0.48rem;
  color: #222;
  vertical-align: middle;
}
.count button {
  font-size: 0.48rem;
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
  background-color: #f1f1f1;
  border: 0;
  user-select: none;
  outline: none;
}
.del-remove {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 2.4rem;
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  justify-content: center;
  background-color: rgb(255, 102, 0);
  /* margin-right: 0.3rem; */
  color: #fff;
  border-radius: 0.1rem;
  /* z-index: -5; */
}
.cmmdty-layout-all {
  margin-bottom: 0.4rem;
  position: relative;
}
</style>