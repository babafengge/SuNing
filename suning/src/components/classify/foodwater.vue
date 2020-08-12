<template>
<div>
    <div class="compfiy-box" v-for="item in recomlist" :key="item.title">
        <div class="recomtitle">
           <span>{{item.title}}</span>
        </div>
        <div class="recombody">
            <div v-for="cont in item.recontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
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
                    title:"精选品类",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/jxpl-m.jpg"),
                            text:"米"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-fm.jpg"),
                            text:"蜂蜜"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-bj.jpg"),
                            text:"白酒"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-sn.png"),
                            text:"酸奶"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-pj.jpg"),
                            text:"啤酒"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-nc.jpg"),
                            text:"奶茶"
                        },
                        {
                            img:require("../../assets/flyimg/syl-cyl.jpg"),
                            text:"茶饮料"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-gddx.jpg"),
                            text:"糕点点心"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-tg.jpg"),
                            text:"糖果"
                        },
                        {
                            img:require("../../assets/flyimg/jxpl-mjgf.jpg"),
                            text:"蜜饯/果脯"
                        }
                    ]
                },
                {
                    title:"中外名酒",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/zwmj-bj.jpg"),
                            text:"白酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-ptj.jpg"),
                            text:"葡萄酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-pj.jpg"),
                            text:"啤酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-jkptj.jpg"),
                            text:"进口葡萄酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-yj.jpg"),
                            text:"洋酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-hj.jpg"),
                            text:"黄酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-bjj.jpg"),
                            text:"保健酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-ydj.jpg"),
                            text:"预调酒"
                        },
                        {
                            img:require("../../assets/flyimg/zwmj-qpj.jpg"),
                            text:"起泡酒"
                        }
                    ]
                },
                {
                    title:"水饮料",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/syl-yys.jpg"),
                            text:"饮用水"
                        },
                        {
                            img:require("../../assets/flyimg/syl-sds.jpg"),
                            text:"苏打水"
                        },
                        {
                            img:require("../../assets/flyimg/syl-gnyl.jpg"),
                            text:"功能饮料"
                        },
                        {
                            img:require("../../assets/flyimg/syl-tsyl.jpg"),
                            text:"碳酸饮料"
                        },
                        {
                            img:require("../../assets/flyimg/syl-cyl.jpg"),
                            text:"茶饮料"
                        },
                        {
                            img:require("../../assets/flyimg/syl-gzgc.jpg"),
                            text:"果汁/果茶"
                        },
                        {
                            img:require("../../assets/flyimg/syl-kfyl.jpg"),
                            text:"咖啡饮料"
                        },
                        {
                            img:require("../../assets/flyimg/syl-hryl.jpg"),
                            text:"含乳饮料"
                        }
                    ]
                },
                {
                    title:"粮油干货",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/lygh-syy.jpg"),
                            text:"食用油"
                        },
                        {
                            img:require("../../assets/flyimg/lygh-dm.jpg"),
                            text:"大米"
                        },
                        {
                            img:require("../../assets/flyimg/lygh-mf.jpg"),
                            text:"面粉"
                        },
                        {
                            img:require("../../assets/flyimg/lygh-mt.jpg"),
                            text:"面条"
                        },
                        {
                            img:require("../../assets/flyimg/lygh-jkm.jpg"),
                            text:"进口米"
                        },
                        {
                            img:require("../../assets/flyimg/lygh-gh.jpg"),
                            text:"干货"
                        }
                    ]
                },
                {
                    title:"方便速食",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/fbss-zz.png"),
                            text:"粽子"
                        },
                        {
                            img:require("../../assets/flyimg/fbss-fbm.jpg"),
                            text:"方便面"
                        },
                        {
                            img:require("../../assets/flyimg/fbss-gt.jpg"),
                            text:"罐头"
                        },
                        {
                            img:require("../../assets/flyimg/fbss-fbz.jpg"),
                            text:"方便粥"
                        }
                    ]
                },
                {
                    title:"厨房调料",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/cftl-twj.jpg"),
                            text:"调味酱"
                        },
                        {
                            img:require("../../assets/flyimg/cftl-jc.jpg"),
                            text:"酱菜"
                        },
                        {
                            img:require("../../assets/flyimg/cftl-jy.jpg"),
                            text:"酱油"
                        },
                        {
                            img:require("../../assets/flyimg/cftl-sc.jpg"),
                            text:"食醋"
                        },
                        {
                            img:require("../../assets/flyimg/cftl-hgdl.jpg"),
                            text:"火锅底料"
                        },
                        {
                            img:require("../../assets/flyimg/cftl-st.jpg"),
                            text:"食糖"
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