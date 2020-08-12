<template>
<div>
    <div class="compfiy-box" v-for="item in recomlist" :key="item.title">
        <div class="recomtitle">
           <span>{{item.title}}</span>
        </div>
        <div class="recombody">
            <div v-for="cont in item.recontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
                <div class="contimg">
                    <img :src="cont.img" alt="图片加载失败" >
                </div>
                <div class="recomtxt">{{cont.text}}</div>
            </div>
        </div>
    </div>
    <div class="lastcont">
        <a href="https://m.suning.com/?adTypeCode=100013&pageId=supercs&webUrl=https://c.m.suning.com/supercs.html&adId=http%3A%2F%2Fsnmps.suning.com%2Fsnmps-web%2Fprogram%2Fget_60107283318c45249d447d87f14eb1b4_%7BcurrVersion%7D_0_%7BclientVersion%7D.htm">进入苏宁超市频道</a>
    </div>
</div>
    
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            recomlist:[]
        }
    },
    created() {
        let url = "http://localhost:5500/src/components/data/peoplehl.json";
        let that = this;
        axios
        .get(url)
        .then(function(response) {
            if (response.data.code == 200) {
            that.recomlist = response.data.recomlist;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}
</script>

<style scoped>
.compfiy-box{
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
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