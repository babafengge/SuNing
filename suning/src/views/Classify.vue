<template>
    <div class="ify-box">
        <div class="ify-header fix">
            <div class="ify-hdleft fl">商品分类</div>
            <div class="ify-hdright fl">
                <p>运动手表</p>
            </div>
        </div>
        <div class="ify-body">
            <div class="ify-bdleft">
                <div v-for="(item,index) in ifylist" :key="item.title" @click="ifyitembtn(index)">
                    <span :class="{active:index==count}">{{item.title}}</span>
                </div>
            </div>
            <div class="ify-bdright">
                这是身体右边部分
            </div>
        </div>
    </div>
</template>

<script>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.ify-header{
     width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    /* zoom: 1; */
}
.ify-hdleft{
height: 100%;
width: 3.6rem;
font-size: .72rem;
line-height: 2.16rem;
text-align: center;
} 
.fl{float: left;}
.ify-hdright{
width: 11.4rem;
height: 2.16rem;
}
.ify-hdright p{
    width: 10.44rem;
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
}
.ify-bdleft{
    width: 3.6rem;
    height: calc(100% - 2.16rem - 1.96rem);
    overflow: auto;
    position: fixed;
    left: 0;
    top: 2.16rem;
}
.ify-bdleft span{
    padding: 0 .5rem;
    font-size: .56rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ify-bdright{

}
.fix::after{
    display: block;
    content: '';
    clear: both;
   height: 0;
}

</style>