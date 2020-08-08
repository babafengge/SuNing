<template>
<div class="phone-cont">
    <div class="topnav">
        <img src="../../assets/flyimg/savehouse.jpg" alt="图片加载失败">
    </div>
    <div class="middle">
        <div class="compfiy-box" v-for="item in computerlist" :key="item.title">
            <div class="recomtitle">
                <span>{{item.title}}</span>
            </div>
            <div class="recombody">
                <div v-for="cont in item.cptcontlist" :key="cont.text" class="recomcontent">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
        <div class="lastcont">
            <a>进入生活家电频道</a>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            computerlist:[
                {
                    title:"热门推荐",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/cfjd-kx.jpg"),
                            text:"烤箱"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-yxb.jpg"),
                            text:"榨汁机"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-dfs.jpg"),
                            text:"电风扇"
                        },
                        {
                            img:require("../../assets/flyimg/shjd-kqzg.jpg"),
                            text:"空气炸锅"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-dbd.jpg"),
                            text:"电饼铛"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-pbj.jpg"),
                            text:"破壁机"
                        },
                        {
                            img:require("../../assets/flyimg/shjd-xcq.jpg"),
                            text:"吸尘器"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-csj.jpg"),
                            text:"除湿机"
                        }
                    ]
                },
                {
                    title:"厨房家电",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/cfjd-dfb.jpg"),
                            text:"电饭煲"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-dylg.jpg"),
                            text:"电压力锅"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-dsh.jpg"),
                            text:"电水壶"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-wbl.jpg"),
                            text:"微波炉"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-kx.jpg"),
                            text:"烤箱"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-kfj.jpg"),
                            text:"咖啡机"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-mbj.jpg"),
                            text:"面包机"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-ysh.jpg"),
                            text:"养生壶"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-smzj.jpg"),
                            text:"三明治机"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-snj.jpg"),
                            text:"酸奶机"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-zdq.jpg"),
                            text:"煮蛋器"
                        },
                        {
                            img:require("../../assets/flyimg/cfjd-mtj.jpg"),
                            text:"面条机"
                        }
                    ]
                },
                {
                    title:"生活电器",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/rmtj-dfs.jpg"),
                            text:"电风扇"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-kqjhq.jpg"),
                            text:"空气净化器"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-xcq.jpg"),
                            text:"吸尘器"
                        },
                        {
                            img:require("../../assets/flyimg/rmtj-csj.jpg"),
                            text:"家用除湿机"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-cmy.jpg"),
                            text:"除螨仪"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-gyj.jpg"),
                            text:"干衣机"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-jsq.jpg"),
                            text:"加湿器"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-gtj.jpg"),
                            text:"挂烫机"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-dyd.jpg"),
                            text:"电熨斗"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-mqxjq.jpg"),
                            text:"毛球修剪器"
                        },
                        {
                            img:require("../../assets/flyimg/shdq-qnq.jpg"),
                            text:"取暖器"
                        }
                    ]
                },
                {
                    title:"个护健康",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/ghjk-ddtxd.jpg"),
                            text:"电动剃须刀"
                        },
                        {
                            img:require("../../assets/flyimg/ghjk-dcf.jpg"),
                            text:"电吹风"
                        },
                        {
                            img:require("../../assets/flyimg/ghjk-ddys.jpg"),
                            text:"电动牙刷"
                        },
                        {
                            img:require("../../assets/flyimg/ghjk-mry.jpg"),
                            text:"美容仪"
                        },
                        {
                            img:require("../../assets/flyimg/ghjk-amy.jpg"),
                            text:"按摩椅"
                        }
                    ]
                },
                {
                    title:"推荐品牌",
                    cptcontlist:[
                        {img:require("../../assets/flyimg/tjpp-sbe.jpg")},
                        {img:require("../../assets/flyimg/tjpp-jy.jpg")},
                        {img:require("../../assets/flyimg/tjpp-rt.jpg")},
                        {img:require("../../assets/flyimg/tjpp-gl.jpg")},
                        {img:require("../../assets/flyimg/tjpp-kas.jpg")},
                        {img:require("../../assets/flyimg/tjpp-flp.jpg")},
                        {img:require("../../assets/flyimg/tjpp-dl.jpg")},
                        {img:require("../../assets/flyimg/tjpp-mf.jpg")},
                        {img:require("../../assets/flyimg/tjpp-xx.jpg")},
                    ]
                }
            ]
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