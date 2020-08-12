<template>
<div  class="phone-cont">
    <div class="topnav" ref="topnav">
        <img src="../../assets/flyimg/savehouse.jpg" alt="图片加载失败">
        <div class="topscoll">
            <div class="scolllist" @click="skip(1)"><span class="holdactive" ref="cfdq">厨房电器</span></div>
            <div class="scolllist" @click="skip(2)"><span ref="wydq">卫浴电器</span></div>
            <div class="scolllist" @click="skip(3)"><span ref="yzpp">优质品牌</span></div>
        </div>
    </div>
    <div class="middle" @scroll="midscrol" ref="midd">
        <div class="compfiy-box" :ref="index" v-for="(item,index) in holdlist" :key="item.title" :id="item.id">
            <div class="recomtitle">
            <span>{{item.title}}</span>
            </div>
            <div class="recombody">
                <div v-for="cont in item.holdcontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="lastcont">
        <a href="http://c.m.suning.com/jdscw.html">进入厨卫电器频道</a>
    </div>
</div>
    
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            holdlist:[],
            scollTop:null,
        }
    },
    created() {
        let url = "http://localhost:5500/src/components/data/cookhouse.json";
        let that = this;
        axios
        .get(url)
        .then(function(response) {
            if (response.data.code == 200) {
            that.holdlist = response.data.holdlist;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    methods:{
        midscrol(event){
            this.scrollTop = event.target.scrollTop;
            // console.log(this.scrollTop);
            if(this.scrollTop<this.$refs[0][0].offsetHeight-2){
                this.$refs.cfdq.classList.add("holdactive")
            }else{
                this.$refs.cfdq.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs[0][0].offsetHeight-2 && this.scrollTop<this.$refs[0][0].offsetHeight+this.$refs[1][0].offsetHeight-2){
                this.$refs.wydq.classList.add("holdactive")
            }else{
                this.$refs.wydq.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs[0][0].offsetHeight+this.$refs[1][0].offsetHeight-2){
                this.$refs.yzpp.classList.add("holdactive")
            }else{
                this.$refs.yzpp.classList.remove("holdactive")
            }
        },
        skip(key){
            var pad = document.querySelector("#skipid"+key);
            this.$refs.midd.scrollTop=pad.offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight
        }
    }
}
</script>

<style scoped>
.phone-cont{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
    overflow: hidden; */
    height: 100%;
}
.topnav{
    margin:0.6rem 0 0 1rem;
}
.topnav img{
    width: 10.16rem;
    height: 3.78rem;
    border-radius: .48rem;
}
.topscoll{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
.scolllist{
    flex-shrink: 0;
    margin: 0 10px;
}
.topscoll span{
    font-size: .48rem;
    line-height: .48rem;
    white-space: nowrap;
}
.middle{
    flex-grow: 1;
    overflow: auto;
}
.recomtitle{
    padding: .6rem 0;
    font-size: .48rem;
    line-height: .48rem;
}
.recomtitle span{
    color: #000;
    font-weight: bold;
    margin-left: 1rem;
}
.recombody{
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
}
.recomcontent{
    width: 2.52rem;
    margin: 0 0.5rem .6rem 1rem;

}
.contimg{
    width: 2.52rem;
    height: 2.52rem;
}
.contimg img{width: 100%;}
.recomtxt{
    font-size: .48rem;
    line-height: .48rem;
    color: #666;
    text-align: center;
    padding: .12rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.lastcont{
    width: 10.24rem;
    border-radius: .24rem;
    border: 1px solid #ddd;
    text-align: center;
    margin: 1rem auto;
}
.lastcont a{
    text-decoration: none;
    font-size: .56rem;
    color: #222;
    line-height: 1.32rem;
}
.holdactive{
    border-bottom: 3px solid #ffcc00;
    font-weight: bolder;
}
</style>