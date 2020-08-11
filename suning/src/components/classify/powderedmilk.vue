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
        <a>进入母婴频道</a>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            recomlist:[
                {
                    title:"孕婴奶粉",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/yynf-ydnf.jpg"),
                            text:"一段奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/yynf-erdnf.jpg"),
                            text:"二段奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/yynf-sandnf.jpg"),
                            text:"三段奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/yynf-sdnf.jpg"),
                            text:"四段奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/yynf-mmnf.jpg"),
                            text:"妈咪奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/yynf-yjnf.jpg"),
                            text:"有机奶粉"
                        }
                    ]
                },
                {
                    title:"尿裤湿巾",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/nksj-nbh.jpg"),
                            text:"NB号"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-sh.jpg"),
                            text:"S号"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-mh.jpg"),
                            text:"M号"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-lh.jpg"),
                            text:"L号"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-xlh.jpg"),
                            text:"XL号"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-xxlh.jpg"),
                            text:"XXL号"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-llk.jpg"),
                            text:"拉拉裤"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-znp.jpg"),
                            text:"纸尿片"
                        },
                        {
                            img:require("../../assets/flyimg/nksj-sj.jpg"),
                            text:"湿巾"
                        }
                    ]
                },
                {
                    title:"营养辅食",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/yyfs-mf.jpg"),
                            text:"米粉"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-gn.jpg"),
                            text:"果泥"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-gz.jpg"),
                            text:"果汁"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-msl.jpg"),
                            text:"面食类"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-rs.jpg"),
                            text:"肉松"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-bg.jpg"),
                            text:"饼干"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-bbls.jpg"),
                            text:"宝宝零食"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-dha.jpg"),
                            text:"DHA"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-gtx.jpg"),
                            text:"钙铁锌"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-ncr.jpg"),
                            text:"牛初乳"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-myl.jpg"),
                            text:"免疫类"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-ygy.jpg"),
                            text:"鱼肝油"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-wss.jpg"),
                            text:"维生素"
                        },
                        {
                            img:require("../../assets/flyimg/yyfs-yys.jpg"),
                            text:"营养素"
                        }
                    ]
                },
                {
                    title:"洗护用品",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/xhyp-qw.jpg"),
                            text:"驱蚊/防蚊"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-fs.jpg"),
                            text:"防晒"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-xfmy.jpg"),
                            text:"洗发沐浴"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-yp.jpg"),
                            text:"浴盆/浴桶"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-srt.jpg"),
                            text:"散热贴"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-bp.jpg"),
                            text:"便盆/坐便器"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-kqqj.jpg"),
                            text:"口腔清洁"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-pps.jpg"),
                            text:"屁屁霜"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-ssf.jpg"),
                            text:"爽身粉"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-xyy.jpg"),
                            text:"洗衣液"
                        },
                        {
                            img:require("../../assets/flyimg/xhyp-npqx.jpg"),
                            text:"奶瓶清洗"
                        }
                    ]
                },
                {
                    title:"喂养用品",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/wyyp-np.jpg"),
                            text:"奶瓶"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp--nz.jpg"),
                            text:"奶嘴"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp-sb.jpg"),
                            text:"水杯/水壶"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp-xnq.jpg"),
                            text:"吸奶器"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp-fyrd.jpg"),
                            text:"防溢乳垫"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp-bbcj.jpg"),
                            text:"宝宝餐具"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp-fsllj.jpg"),
                            text:"辅食料理机"
                        },
                        {
                            img:require("../../assets/flyimg/wyyp-bbb.jpg"),
                            text:"BB煲/电饭煲"
                        }
                    ]
                },
                {
                    title:"品牌墙",
                    recontlist:[
                        {img:require("../../assets/flyimg/ppq-qs.jpg")},
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