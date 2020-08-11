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
        <a>进入苏宁超市频道</a>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            recomlist:[
                {
                    title:"当季主推",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/djzt-bs.jpg"),
                            text:"补水"
                        },
                        {
                            img:require("../../assets/flyimg/djzt--bs.jpg"),
                            text:"保湿"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-jmr.jpg"),
                            text:"控油"
                        }
                    ]
                },
                {
                    title:"拔草推荐",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/bctj-kh.jpg"),
                            text:"口红"
                        },
                        {
                            img:require("../../assets/flyimg/bctj-bsmm.jpg"),
                            text:"补水面膜"
                        },
                        {
                            img:require("../../assets/flyimg/bctj-rcg.jpg"),
                            text:"润唇膏"
                        }
                    ]
                },
                {
                    title:"面部护肤",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/mbhf-ry.jpg"),
                            text:"乳液"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-ms.jpg"),
                            text:"面霜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-fss.jpg"),
                            text:"防晒霜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-sfs.jpg"),
                            text:"爽肤水"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-jhy.jpg"),
                            text:"精华液"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-ys.jpg"),
                            text:"眼霜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-rs.jpg"),
                            text:"日霜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-ws.jpg"),
                            text:"晚霜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-cm.jpg"),
                            text:"唇膜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-ym.jpg"),
                            text:"眼膜"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-xz.jpg"),
                            text:"卸妆"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-pw.jpg"),
                            text:"喷雾"
                        },
                        {
                            img:require("../../assets/flyimg/mbhf-hflh.jpg"),
                            text:"护肤礼盒"
                        }
                    ]
                },
                {
                    title:"男士护肤",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/nshf-jmr.jpg"),
                            text:"洁面乳"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-qht.jpg"),
                            text:"祛黑头"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-hftz.jpg"),
                            text:"护肤套装"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-sfs.jpg"),
                            text:"爽肤水"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-ms.jpg"),
                            text:"面霜"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-xz.jpg"),
                            text:"卸妆"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-mm.jpg"),
                            text:"面膜"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-jh.jpg"),
                            text:"精华"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-fs.jpg"),
                            text:"防晒"
                        },
                        {
                            img:require("../../assets/flyimg/nshf-tx.jpg"),
                            text:"剃须"
                        }
                    ]
                },
                {
                    title:"香水",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/xs-nsxs.jpg"),
                            text:"女士香水"
                        },
                        {
                            img:require("../../assets/flyimg/xs-nansxs.jpg"),
                            text:"男士香水"
                        },
                        {
                            img:require("../../assets/flyimg/xs-xslh.jpg"),
                            text:"香水礼盒"
                        }
                    ]
                },
                {
                    title:"彩妆",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/cz-khcg.jpg"),
                            text:"口红/唇膏"
                        },
                        {
                            img:require("../../assets/flyimg/cz-qdbb.jpg"),
                            text:"气垫BB"
                        },
                        {
                            img:require("../../assets/flyimg/cz-mj.jpg"),
                            text:"美甲/指甲油"
                        },
                        {
                            img:require("../../assets/flyimg/cz-bbcc.jpg"),
                            text:"BB/CC霜"
                        },
                        {
                            img:require("../../assets/flyimg/cz-sh.jpg"),
                            text:"腮红"
                        },
                        {
                            img:require("../../assets/flyimg/cz-sf.jpg"),
                            text:"散粉"
                        },
                        {
                            img:require("../../assets/flyimg/cz-mf.jpg"),
                            text:"眉粉"
                        },
                        {
                            img:require("../../assets/flyimg/cz-cy.jpg"),
                            text:"唇釉/唇彩"
                        },
                        {
                            img:require("../../assets/flyimg/cz-cztz.jpg"),
                            text:"彩妆套装"
                        },
                        {
                            img:require("../../assets/flyimg/cz-nscz.jpg"),
                            text:"男士彩妆"
                        }
                    ]
                },
                {
                    title:"美妆工具",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/mzgj-sypt.jpg"),
                            text:"双眼皮贴"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-hzm.jpg"),
                            text:"化妆棉"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-hzs.jpg"),
                            text:"化妆刷"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-fp.jpg"),
                            text:"粉扑/洗脸扑"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-jjm.jpg"),
                            text:"假睫毛"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-jmj.jpg"),
                            text:"睫毛夹"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-xmd.jpg"),
                            text:"修眉刀"
                        },
                        {
                            img:require("../../assets/flyimg/mzgj-xyz.jpg"),
                            text:"吸油纸"
                        }
                    ]
                },
                {
                    title:"大牌推荐",
                    recontlist:[
                        {img:require("../../assets/flyimg/dptj-bcj.jpg")},
                        {img:require("../../assets/flyimg/dptj-bql.jpg")},
                        {img:require("../../assets/flyimg/dptj-hs.jpg")},
                        {img:require("../../assets/flyimg/dptj-kzl.jpg")},
                        {img:require("../../assets/flyimg/dptj-lk.jpg")},
                        {img:require("../../assets/flyimg/dptj-mdhe.jpg")},
                        {img:require("../../assets/flyimg/dptj-mfb.jpg")},
                        {img:require("../../assets/flyimg/dptj-oly.jpg")},
                        {img:require("../../assets/flyimg/dptj-sk2.jpg")},
                        {img:require("../../assets/flyimg/dptj-snp.jpg")},
                        {img:require("../../assets/flyimg/dptj-xybc.jpg")},
                        {img:require("../../assets/flyimg/dptj-ynf.jpg")},
                        {img:require("../../assets/flyimg/dptj-ysld.jpg")},
                        {img:require("../../assets/flyimg/dptj-zrt.jpg")}
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