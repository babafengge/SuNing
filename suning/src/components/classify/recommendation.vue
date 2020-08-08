<template>
<div>
    <div class="compfiy-box" v-for="item in recomlist" :key="item.title">
        <div class="recomtitle">
           <span>{{item.title}}</span>
        </div>
        <div class="recombody">
            <div v-for="cont in item.recontlist" :key="cont.text" class="recomcontent">
                <div class="contimg">
                    <img :src="cont.img" alt="图片加载失败" >
                </div>
                <div class="recomtxt">{{cont.text}}</div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            recomlist:[
                {
                    title:"热门推荐",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/sjsm-mbsb.jpg"),
                            text:"手机"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-bjb.jpg"),
                            text:"笔记本"
                        },
                        {
                            img:require("../../assets/flyimg/pbdn-ipad.jpg"),
                            text:"平板电脑"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-bx.jpg"),
                            text:"冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-dfs.jpg"),
                            text:"电风扇"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-pbj.jpg"),
                            text:"破壁机"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-kt.jpg"),
                            text:"空调"
                        },
                        {
                            img:require("../../assets/flyimg/ds-ds.jpg"),
                            text:"电视"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-rsq.jpg"),
                            text:"热水器"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-yl.jpg"),
                            text:"哑铃"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-yjd.jpg"),
                            text:"瑜伽垫"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-pbj.jpg"),
                            text:"跑步机"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-xyj.jpg"),
                            text:"洗衣机"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-sb.png"),
                            text:"手表"
                        },
                        {
                            img:require("../../assets/flyimg/yynf-mmnf.jpg"),
                            text:"奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-bj.jpg"),
                            text:"白酒"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-xxls.jpg"),
                            text:"休闲零食"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-sg.jpg"),
                            text:"水果"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-ts.jpg"),
                            text:"文化图书"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-shyz.jpg"),
                            text:"生活用纸"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-hjxl.jpg"),
                            text:"黄金项链"
                        }
                    ]
                }
            ]
        }
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
</style>