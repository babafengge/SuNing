<template>
    <div class="ify-box">
        <div class="ify-header">
            <div class="ify-hdleft">商品分类</div>
            <div class="ify-hdright">
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

export default {
    data(){
        return {
            ifylist:[
                {
                    title:"热门推荐",
                    name:"recommendation"
                },
                {
                    title:"手机数码",
                    name:"phonesm"
                },
                {
                    title:"大家电",
                    name:"bighousehold"
                },
                {
                    title:"电脑办公",
                    name:"computer"
                },
                {
                    title:"厨卫大电",
                    name:"cookhouse"
                },
                {
                    title:"生活家电",
                    name:"savehousehold"
                },
                {
                    title:"食品酒水",
                     name:"foodwater"
                },
                {
                    title:"个人护理",
                     name:"peoplehl"
                },
                {
                    title:"美妆护肤",
                     name:"makeandskin"
                },
                {
                    title:"奶粉尿裤",
                     name:"powderedmilk"
                },
                {
                    title:"苏宁国际",
                     name:"international"
                },
                {
                    title:"珠宝首饰",
                     name:"jewellery"
                },
                {
                    title:"品质男装",
                     name:"recommendation"
                },
                {
                    title:"品质男鞋",
                     name:"phonesm"
                },
                {
                    title:"流行女装",
                     name:"bighousehold"
                },
                {
                    title:"精品女鞋",
                    name:"computer"
                },
                {
                    title:"运动户外",
                    name:"cookhouse"
                },
                {
                    title:"居家生活",
                    name:"savehousehold"
                },
                {
                    title:"家居家纺",
                    name:"foodwater"
                },
                {
                    title:"家装建材",
                    name:"peoplehl"
                },
                {
                    title:"厨具水具",
                    name:"makeandskin"
                },
                {
                    title:"二手优品",
                    name:"powderedmilk"
                },
                {
                    title:"苏宁生鲜",
                    name:"international"
                },
                {
                    title:"智能数码",
                    name:"jewellery"
                },
                {
                    title:"钟表眼镜",
                    name:"recommendation"
                },
                {
                    title:"汽车生活",
                    name:"phonesm"
                },
                {
                    title:"童装玩具",
                    name:"bighousehold"
                },
                {
                    title:"皮具箱包",
                    name:"computer"
                },
                {
                    title:"内衣配饰",
                    name:"cookhouse"
                },
                {
                    title:"图书音像",
                    name:"savehousehold"
                },
                {
                    title:"苏宁极物",
                    name:"foodwater"
                },
                {
                    title:"苏皮士",
                    name:"peoplehl"
                },
                {
                    title:"礼品乐器",
                    name:"makeandskin"
                },
                {
                    title:"艺术陶瓷",
                    name:"powderedmilk"
                },
                {
                    title:"苏宁健康",
                    name:"international"
                },
                {
                    title:"苏宁服务",
                    name:"jewellery"
                },
                {
                    title:"苏宁乐居",
                    name:"recommendation"
                }
            ],
            count:0,
            iscpt:'recommendation'
        }
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

<style>
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