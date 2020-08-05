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
                <div v-for="(item,index) in ifylist" :key="item.title" @click="ifyitembtn(index)" :class="{active:index==count}">
                    <span >{{item.title}}</span>
                </div>
            </div>
            <div class="ify-bdright">
                <recommendation></recommendation>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import TabBar from "../components/TabBar.vue"
import recommendation from "../components/classify/recommendation.vue"

export default {
    data(){
        return {
            ifylist:[
                {title:"热门推荐"},
                {title:"手机数码"},
                {title:"大家电"},
                {title:"电脑办公"},
                {title:"厨卫大电"},
                {title:"生活家电"},
                {title:"食品酒水"},
                {title:"个人护理"},
                {title:"美妆护肤"},
                {title:"奶粉尿裤"},
                {title:"苏宁国际"},
                {title:"珠宝首饰"},
                {title:"品质男装"},
                {title:"品质男鞋"},
                {title:"流行女装"},
                {title:"精品女鞋"},
                {title:"运动户外"},
                {title:"居家生活"},
                {title:"家居家纺"},
                {title:"家装建材"},
                {title:"厨具水具"},
                {title:"二手优品"},
                {title:"苏宁生鲜"},
                {title:"智能数码"},
                {title:"钟表眼镜"},
                {title:"汽车生活"},
                {title:"童装玩具"},
                {title:"皮具箱包"},
                {title:"内衣配饰"},
                {title:"图书音像"},
                {title:"苏宁极物"},
                {title:"苏皮士"},
                {title:"礼品乐器"},
                {title:"艺术陶瓷"},
                {title:"苏宁健康"},
                {title:"苏宁服务"},
                {title:"苏宁乐居"}
            ],
            count:0
        }
    },
    components:{
        "tabbar":TabBar,
        "recommendation":recommendation,

    },
    methods:{
        ifyitembtn(index){
            this.count=index;
        }
    }
}
</script>

<style >
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