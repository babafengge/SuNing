<template>
    <div class="ify-box">
        <div class="ify-header">
            <div class="ify-hdleft">商品分类</div>
            <div class="ify-hdright" @click="$router.push('/search')">
                <p>运动手表</p>
            </div>
        </div>
        <div class="ify-body">
            <div class="ify-bdleft">
                <div v-for="(item,index) in ifylist" :key="item.title" @click="ifyitembtn(index,item)" :class="{active:index==count}">
                    <span >{{item.title}}</span>
                </div>
            </div>
            <div class="ify-bdright">
                <component :is="iscpt"></component>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import TabBar from "../components/TabBar.vue"
import recommendation from "../components/classify/recommendation.vue"
import phonesm from "../components/classify/phonesm.vue"
import bighousehold from "../components/classify/bighousehold.vue"
import computer from "../components/classify/computer.vue"
import cookhouse from "../components/classify/cookhouse.vue"
import savehousehold from "../components/classify/savehousehold.vue"
import foodwater from "../components/classify/foodwater.vue"
import peoplehl from "../components/classify/peoplehl.vue"
import makeandskin from "../components/classify/makeandskin.vue"
import powderedmilk from "../components/classify/powderedmilk.vue"
import international from "../components/classify/international.vue"
import jewellery from "../components/classify/jewellery.vue"
import axios from "axios"

export default {
    data(){
        return {
            ifylist:[],
            count:0,
            iscpt:'recommendation'
        }
    },
  created() {
    let url = "http://localhost:5500/src/components/data/Classify.json";
    let that = this;
    axios
      .get(url)
      .then(function(response) {
        if (response.data.code == 200) {
          that.ifylist = response.data.ifylist;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
    components:{
        "tabbar":TabBar,
        "recommendation":recommendation,
        "phonesm":phonesm,
        "bighousehold":bighousehold,
        "computer":computer,
        "cookhouse":cookhouse,
        "savehousehold":savehousehold,
        "foodwater":foodwater,
        "peoplehl":peoplehl,
        "makeandskin":makeandskin,
        "powderedmilk":powderedmilk,
        "international":international,
        "jewellery":jewellery
    },
    methods:{
        ifyitembtn(index,item){
            this.count=index;
            this.iscpt=item.name
        }
    }
}
</script>

<style scoped>
.ify-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ify-header{
    width: 100%;
    background-color: white;
    display: flex;
}
.ify-hdleft{
height: 100%;
width: 3.6rem;
font-size: .72rem;
line-height: 2.16rem;
text-align: center;
} 

.ify-hdright{
width: 11.4rem;
height: 2.16rem;
}
.ify-hdright p{
    flex-grow: 1;
    /* width: 10.44rem; */
    height: 1.28rem;
    padding-left: 1.32rem;
    background: url("../assets/flyimg/search-icon.png") .36rem .28rem/.72rem .72rem no-repeat #f7f7f7;
    border-radius: 0.64rem;
    margin: 0.44rem auto;
    font-size: .56rem;
    line-height: 1.28rem;
    color: #999;
}
.ify-body{
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
}
.ify-bdleft{
    width: 3.6rem;
    overflow: auto;
    flex-shrink: 0;
}
.ify-bdleft span{
    padding: 0 .3rem;
    font-size: .56rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 8px;
}
.ify-bdright{
    flex-grow: 1;
    overflow: auto;
    background-color: white;
}
.active{
     /* width: 3.4rem; */
    background-color: white; 
    }
.active span{
    border-left: 5px solid #ffcc00;
    font-weight: bolder;
}
.fix::after{
    display: block;
    content: '';
    clear: both;
   height: 0;
}

</style>