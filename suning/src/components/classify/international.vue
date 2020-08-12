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
        <a>进入苏宁国际频道</a>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            recomlist:[
                {
                    title:"热门分类",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/rmfl-znk.jpg"),
                            text:"纸尿裤"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-fs.png"),
                            text:"防晒"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-mm.png"),
                            text:"面膜"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-jkhj.jpg"),
                            text:"进口红酒"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-syy.jpg"),
                            text:"食用油"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-ssbc.jpg"),
                            text:"膳食补充"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-dcf.png"),
                            text:"电吹风"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-clnb.jpg"),
                            text:"潮流女包"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-qjyp.png"),
                            text:"清洁用品"
                        }
                    ]
                },
                {
                    title:"母婴儿童",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/myet-nf.png"),
                            text:"奶粉"
                        },
                        {
                            img:require("../../assets/flyimg/rmfl-znk.jpg"),
                            text:"纸尿裤"
                        },
                        {
                            img:require("../../assets/flyimg/myet-myyy.png"),
                            text:"母婴营养"
                        },
                        {
                            img:require("../../assets/flyimg/myet-yefs.png"),
                            text:"婴儿辅食"
                        },
                        {
                            img:require("../../assets/flyimg/myet-yeyp.jpg"),
                            text:"婴儿用品"
                        },
                        {
                            img:require("../../assets/flyimg/myet-yexh.png"),
                            text:"婴儿洗护"
                        },
                        {
                            img:require("../../assets/flyimg/myet-tctc.png"),
                            text:"通车童床"
                        },
                        {
                            img:require("../../assets/flyimg/myet-etwj.png"),
                            text:"儿童玩具"
                        },
                        {
                            img:require("../../assets/flyimg/myet-tztx.png"),
                            text:"童装童鞋"
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