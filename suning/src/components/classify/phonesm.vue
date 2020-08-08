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
                <div v-for="cont in item.phcontlist" :key="cont.text" class="recomcontent">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
        <div class="lastcont">
            <a>进入手机频道</a>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            phonelist:[
                {
                    title:"热销大牌",
                    phcontlist:[
                        {img:require("../../assets/flyimg/rxdp-xtc.jpg")},
                        {img:require("../../assets/flyimg/rxdp-bbg.jpg")},
                        {img:require("../../assets/flyimg/rxdp-bose.jpg")},
                        {img:require("../../assets/flyimg/rxdp-ho.jpg")},
                        {img:require("../../assets/flyimg/rxdp-hw.jpg")},
                        {img:require("../../assets/flyimg/rxdp-sx.jpg")},
                        {img:require("../../assets/flyimg/rxdp-vivo.jpg")},
                        {img:require("../../assets/flyimg/rxdp-xm.jpg")},
                        {img:require("../../assets/flyimg/rxdp-iq.jpg")},
                    ]
                },
                {
                    title:"手机通讯",
                    phcontlist:[
                        {
                            img:require("../../assets/flyimg/sjtx-qbsj.jpg"),
                            text:"全部手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjtx-5gsj.jpg"),
                            text:"5G手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-qmpsj.jpg"),
                            text:"全面屏手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-yxsj.jpg"),
                            text:"游戏手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjtx-lrj.jpg"),
                            text:"老人机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-pzsj.jpg"),
                            text:"拍照手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-zwsj.jpg"),
                            text:"指纹手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-mbsb.jpg"),
                            text:"面部识别手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-nxsj.jpg"),
                            text:"女性手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-cxh.jpg"),
                            text:"长续航手机"
                        },
                        {
                            img:require("../../assets/flyimg/sjtx-yjhx.jpg"),
                            text:"以旧换新"
                        },
                        {
                            img:require("../../assets/flyimg/sjsm-sjwx.png"),
                            text:"手机维修"
                        }
                    ]
                },
                {
                    title:"运营商",
                    phcontlist:[
                        {
                            img:require("../../assets/flyimg/yys-snwt.jpg"),
                            text:"苏宁网厅"
                        },
                        {
                            img:require("../../assets/flyimg/yys-sjk.jpg"),
                            text:"手机卡"
                        },
                        {
                            img:require("../../assets/flyimg/yys-kd.jpg"),
                            text:"宽带"
                        },
                        {
                            img:require("../../assets/flyimg/yys-qlh.jpg"),
                            text:"抢靓号"
                        },
                        {
                            img:require("../../assets/flyimg/yys-hfcz.jpg"),
                            text:"话费充值"
                        },
                        {
                            img:require("../../assets/flyimg/yys-lldg.jpg"),
                            text:"流量订购"
                        }
                    ]
                },
                {
                    title:"手机配件",
                    phcontlist:[
                        {
                            img:require("../../assets/flyimg/sjpj-stl.jpg"),
                            text:"小米生态链"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-pgyz.jpg"),
                            text:"苹果原装"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-hwzn.jpg"),
                            text:"华为智能手表"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-opej.jpg"),
                            text:"OPPO耳机"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-cdb.jpg"),
                            text:"充电宝"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/sjpj-nck.png"),
                            text:"内存卡"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/sjpj-sjup.jpg"),
                            text:"手机U盘"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/sjpj-ryzn.jpg"),
                            text:"荣耀智能手表"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/sjpj-rysh.jpg"),
                            text:"荣耀手环"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/sjpj-sjk.jpg"),
                            text:"手机壳/套"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/sjpj-sjm.jpg"),
                            text:"手机膜"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-sjx.png"),
                            text:"数据线/充电器"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-wxc.jpg"),
                            text:"无线充"
                        },
                        {
                            img:require("../../assets/flyimg/sjpj-sjzj.jpg"),
                            text:"手机支架"
                        }
                    ]
                },
                {
                    title:"智能数码",
                    phcontlist:[
                        {
                            img:require("../../assets/flyimg/znsm-pgsb.jpg"),
                            text:"苹果手表"
                        },
                        {
                            img:require("../../assets/flyimg/znsm-znyx.jpg"),
                            text:"智能音箱"
                        },
                        {
                            img:require("../../assets/flyimg/znsm-znms.jpg"),
                            text:"智能门锁"
                        },
                        {
                            img:require("../../assets/flyimg/znsm-znsh.jpg"),
                            text:"智能手环"
                        },
                        {
                            img:require("../../assets/flyimg/znsm-phc.jpg"),
                            text:"平衡车"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-znjqr.jpg"),
                            text:"智能机器人"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-znsxt.jpg"),
                            text:"智能摄像头"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-znsb.jpg"),
                            text:"智能手表"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-etsb.jpg"),
                            text:"儿童手表"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-wrj.jpg"),
                            text:"无人机"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-fyj.jpg"),
                            text:"翻译机"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-xsdn.jpg"),
                            text:"学生电脑"
                        }
                        ,
                        {
                            img:require("../../assets/flyimg/znsm-gsj.jpg"),
                            text:"故事机"
                        },
                        {
                            img:require("../../assets/flyimg/znsm-lyb.jpg"),
                            text:"录音笔"
                        }

                    ]
                },
                {
                    title:"影音娱乐",
                    phcontlist:[
                        {
                            img:require("../../assets/flyimg/yyyl-ej.jpg"),
                            text:"耳机/耳麦"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-lyej.jpg"),
                            text:"蓝牙耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-zwxej.jpg"),
                            text:"真无线耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-tds.jpg"),
                            text:"头戴式耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-ydej.jpg"),
                            text:"运动耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-sjej.jpg"),
                            text:"手机耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-jzej.jpg"),
                            text:"降噪耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-yxeji.jpg"),
                            text:"游戏耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-resej.jpg"),
                            text:"入耳式耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-yx.jpg"),
                            text:"音箱/音响"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-yxej.jpg"),
                            text:"有线耳机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-syj.jpg"),
                            text:"收音机"
                        },
                        {
                            img:require("../../assets/flyimg/yyyl-mkf.jpg"),
                            text:"麦克风"
                        }
                    ]
                },
                {
                    title:"摄影摄像",
                    phcontlist:[
                        {
                            img:require("../../assets/flyimg/sysx-dfxj.jpg"),
                            text:"单反相机"
                        },
                        {
                            img:require("../../assets/flyimg/sysx-wddd.jpg"),
                            text:"微单/单电"
                        },
                        {
                            img:require("../../assets/flyimg/sysx-smxj.jpg"),
                            text:"数码相机"
                        },
                        {
                            img:require("../../assets/flyimg/sysx-sxj.jpg"),
                            text:"摄像机"
                        },
                        {
                            img:require("../../assets/flyimg/sysx-pld.jpg"),
                            text:"拍立得"
                        },
                        {
                            img:require("../../assets/flyimg/sysx-jt.jpg"),
                            text:"镜头"
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