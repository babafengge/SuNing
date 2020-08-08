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
    <div class="lastcont">
        <a>进入黄金珠宝频道</a>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            recomlist:[
                {
                    title:"优质黄金品牌",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/ppq-zdf.jpg"),
                            text:"周大福"
                        },
                        {
                            img:require("../../assets/flyimg/ppq-zss.jpg"),
                            text:"周生生"
                        },
                        {
                            img:require("../../assets/flyimg/ppq-zds.jpg"),
                            text:"周大生"
                        }
                    ]
                },
                {
                    title:"金银投资",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/jytz-tzj.jpg"),
                            text:"投资金"
                        },
                        {
                            img:require("../../assets/flyimg/jytz-tzy.jpg"),
                            text:"投资银"
                        },
                        {
                            img:require("../../assets/flyimg/jytz-hjhs.jpg"),
                            text:"黄金回收"
                        }
                    ]
                },
                {
                    title:"K金饰品",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/kjsp-kjdz.jpg"),
                            text:"K金吊坠"
                        },
                        {
                            img:require("../../assets/flyimg/kjsp-kjxl.jpg"),
                            text:"K金项链"
                        },
                        {
                            img:require("../../assets/flyimg/kjsp-kjsl.jpg"),
                            text:"K金手链"
                        },
                        {
                            img:require("../../assets/flyimg/kjsp-kjjz.jpg"),
                            text:"K金戒指"
                        },
                        {
                            img:require("../../assets/flyimg/kjsp-kjes.jpg"),
                            text:"K金耳饰"
                        }
                    ]
                },
                {
                    title:"时尚饰品",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/sssp-xl.jpg"),
                            text:"项链"
                        },
                        {
                            img:require("../../assets/flyimg/sssp-fs.jpg"),
                            text:"发饰"
                        },
                        {
                            img:require("../../assets/flyimg/sssp-xz.jpg"),
                            text:"胸针"
                        }
                    ]
                },
                {
                    title:"铂金饰品",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/bjsp-bjjz.jpg"),
                            text:"铂金戒指"
                        },
                        {
                            img:require("../../assets/flyimg/bjsp-bjes.jpg"),
                            text:"铂金耳饰"
                        },
                        {
                            img:require("../../assets/flyimg/bjsp-bjdz.jpg"),
                            text:"铂金吊坠"
                        }
                    ]
                },
                {
                    title:"钻石饰品",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/zssp-lz.jpg"),
                            text:"裸钻"
                        },
                        {
                            img:require("../../assets/flyimg/zssp-zsjz.jpg"),
                            text:"钻石戒指"
                        },
                        {
                            img:require("../../assets/flyimg/zssp-zsxl.jpg"),
                            text:"钻石项链"
                        }
                    ]
                },
                {
                    title:"木饰手串",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/mssc-xypt.jpg"),
                            text:"星月菩提"
                        },
                        {
                            img:require("../../assets/flyimg/mssc-jgpt.jpg"),
                            text:"金刚菩提"
                        }
                    ]
                },
                {
                    title:"翡翠玉石",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/fcys-jz.jpg"),
                            text:"戒指"
                        },
                        {
                            img:require("../../assets/flyimg/fcys-es.jpg"),
                            text:"耳饰"
                        },
                        {
                            img:require("../../assets/flyimg/fcys-ysbj.jpg"),
                            text:"玉石摆件"
                        }
                    ]
                },
                {
                    title:"水晶玛瑙",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/sjmn-xldz.jpg"),
                            text:"项链/吊坠"
                        },
                        {
                            img:require("../../assets/flyimg/sjmn-es.jpg"),
                            text:"耳饰"
                        },
                        {
                            img:require("../../assets/flyimg/sjmn-jz.jpg"),
                            text:"戒指"
                        }
                    ]
                },
                {
                    title:"品牌墙",
                    recontlist:[
                        {img:require("../../assets/flyimg/ppq-dr.jpg")},
                        {img:require("../../assets/flyimg/ppq-zss.jpg")},
                        {img:require("../../assets/flyimg/ppq-zky.png")},
                        {img:require("../../assets/flyimg/ppq-zdf.jpg")},
                        {img:require("../../assets/flyimg/ppq-zssj.jpg")},
                        {img:require("../../assets/flyimg/ppq-zds.jpg")},
                        {img:require("../../assets/flyimg/ppq-lstl.png")},
                        {img:require("../../assets/flyimg/ppq-kld.png")},
                        {img:require("../../assets/flyimg/ppq-lfzb.jpg")}
                    ]
                },
                
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