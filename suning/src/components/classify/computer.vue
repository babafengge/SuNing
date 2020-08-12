<template>
<div class="phone-cont">
    <div class="topnav">
        <img src="../../assets/flyimg/sjsm-nav.jpg" alt="图片加载失败">
    </div>
    <div class="middle">
        <div class="compfiy-box" v-for="item in computerlist" :key="item.title">
            <div class="recomtitle">
                <span>{{item.title}}</span>
            </div>
            <div class="recombody">
                <div v-for="cont in item.cptcontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
        <div class="lastcont">
            <a>进入电脑频道</a>
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
                    title:"电脑整机",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/dnzj-bjb.jpg"),
                            text:"笔记本"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-yxb.jpg"),
                            text:"游戏本"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-qbb.jpg"),
                            text:"轻薄本"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-tsj.jpg"),
                            text:"台式机"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-ytj.jpg"),
                            text:"一体机"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-sytsj.png"),
                            text:"商用台式机"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-zzj.png"),
                            text:"组装机"
                        },
                        {
                            img:require("../../assets/flyimg/dnzj-lxdn.jpg"),
                            text:"联想电脑"
                        }
                    ]
                },
                {
                    title:"平板电脑",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/pbdn-ipad.jpg"),
                            text:"iPad"
                        },
                        {
                            img:require("../../assets/flyimg/pbdn-hwpb.jpg"),
                            text:"华为平板"
                        },
                        {
                            img:require("../../assets/flyimg/pbdn-wr.jpg"),
                            text:"微软"
                        },
                        {
                            img:require("../../assets/flyimg/pbdn-xmpb.jpg"),
                            text:"小米平板"
                        },
                        {
                            img:require("../../assets/flyimg/pbdn-kindle.jpg"),
                            text:"kindle"
                        }
                    ]
                },
                {
                    title:"游戏机",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/yxj-switch.jpg"),
                            text:"Switch"
                        },
                        {
                            img:require("../../assets/flyimg/yxj-xbox.jpg"),
                            text:"Xbox"
                        },
                        {
                            img:require("../../assets/flyimg/yxj-ps4.jpg"),
                            text:"PS4游戏机"
                        },
                        {
                            img:require("../../assets/flyimg/yxj-snk.jpg"),
                            text:"SNK"
                        },
                        {
                            img:require("../../assets/flyimg/yxj-yxsb.jpg"),
                            text:"游戏手柄"
                        },
                        {
                            img:require("../../assets/flyimg/yxj-yxgd.jpg"),
                            text:"游戏光碟"
                        }
                    ]
                },
                {
                    title:"特色服务",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/tsfw-yjhx.png"),
                            text:"以旧换新"
                        },
                        {
                            img:require("../../assets/flyimg/tsfw-dnmx.png"),
                            text:"电脑免息"
                        },
                        {
                            img:require("../../assets/flyimg/tsfw-dnfw.png"),
                            text:"电脑服务"
                        }
                    ]
                },
                {
                    title:"电脑外设",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/dnws-up.jpg"),
                            text:"U盘"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-sb.jpg"),
                            text:"鼠标"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-jp.jpg"),
                            text:"键盘"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-yxjp.jpg"),
                            text:"游戏键盘"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-yxej.jpg"),
                            text:"游戏耳机"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-ydyp.jpg"),
                            text:"移动硬盘"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-dnyx.jpg"),
                            text:"电脑音箱"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-sbd.png"),
                            text:"鼠标垫"
                        },
                        {
                            img:require("../../assets/flyimg/dnws-dc.png"),
                            text:"电池"
                        }
                    ]
                },
                {
                    title:"网络设备",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/wlsb-lyq.jpg"),
                            text:"路由器"
                        },
                        {
                            img:require("../../assets/flyimg/wlsb-wxwk.jpg"),
                            text:"无线网卡"
                        },
                        {
                            img:require("../../assets/flyimg/wlsb-xhfdq.jpg"),
                            text:"信号放大器"
                        },
                        {
                            img:require("../../assets/flyimg/wlsb-ss.jpg"),
                            text:"随身WiFi"
                        },
                        {
                            img:require("../../assets/flyimg/wlsb-wx.jpg"),
                            text:"网线"
                        },
                        {
                            img:require("../../assets/flyimg/wlsb-jhj.jpg"),
                            text:"交换机"
                        }
                    ]
                },
                {
                    title:"DIY硬件",
                    cptcontlist:[
                        {
                            img:require("../../assets/flyimg/diy-gtyp.jpg"),
                            text:"固态硬盘"
                        },
                        {
                            img:require("../../assets/flyimg/diy-xsq.png"),
                            text:"显示器"
                        },
                        {
                            img:require("../../assets/flyimg/diy-cpu.jpg"),
                            text:"CPU"
                        },
                        {
                            img:require("../../assets/flyimg/diy-xk.jpg"),
                            text:"显卡"
                        },
                        {
                            img:require("../../assets/flyimg/diy-yp.jpg"),
                            text:"硬盘"
                        },
                        {
                            img:require("../../assets/flyimg/diy-nc.jpg"),
                            text:"内存"
                        },
                        {
                            img:require("../../assets/flyimg/diy-zb.jpg"),
                            text:"主板"
                        },
                        {
                            img:require("../../assets/flyimg/diy-dy.jpg"),
                            text:"电源"
                        },
                        {
                            img:require("../../assets/flyimg/diy-jx.jpg"),
                            text:"机箱"
                        }
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