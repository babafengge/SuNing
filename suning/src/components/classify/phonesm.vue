<template>
<div class="phone-cont">
    <div class="topnav">
        <img src="../../assets/flyimg/sjsm-nav.jpg" alt="图片加载失败">
    </div>
    <div class="middle">
        <div class="compfiy-box" v-for="item in phonelist" :key="item.title">
            <div class="recomtitle">
                <span>{{item.title}}</span>
            </div>
            <div class="recombody">
                <div v-for="cont in item.phcontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
        <div class="lastcont">
            <a href="https://c.m.suning.com/phone2019.html">进入手机频道</a>
        </div>
    </div>
</div>
    
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            phonelist:[]
        }
    },
    created() {
        let url = "http://localhost:5500/src/components/data/phonesm.json";
        let that = this;
        axios
        .get(url)
        .then(function(response) {
            if (response.data.code == 200) {
            that.phonelist = response.data.phonelist;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
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
</style>