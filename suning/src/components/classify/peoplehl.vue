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
                    title:"美发护发",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/mfhf-xfs.jpg"),
                            text:"洗发水"
                        },
                        {
                            img:require("../../assets/flyimg/mfhf-xhtz.jpg"),
                            text:"洗护套装"
                        },
                        {
                            img:require("../../assets/flyimg/mfhf-rtzx.jpg"),
                            text:"染烫造型"
                        },
                        {
                            img:require("../../assets/flyimg/mfhf-yys.jpg"),
                            text:"营养水"
                        },
                        {
                            img:require("../../assets/flyimg/mfhf-mfgj.jpg"),
                            text:"美发工具"
                        }
                    ]
                },
                {
                    title:"身体护理",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/sthl-myl.jpg"),
                            text:"沐浴露"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-hss.jpg"),
                            text:"护手霜"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-hzs.jpg"),
                            text:"护足霜"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-ams.jpg"),
                            text:"按摩霜"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-rts.jpg"),
                            text:"润体霜"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-rtr.jpg"),
                            text:"润体乳"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-tm.jpg"),
                            text:"脱毛"
                        },
                        {
                            img:require("../../assets/flyimg/sthl-fxmr.jpg"),
                            text:"丰胸美乳"
                        }
                    ]
                },
                {
                    title:"口腔护理",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/kqhl-yx.jpg"),
                            text:"牙线"
                        },
                        {
                            img:require("../../assets/flyimg/kqhl-kqtz.jpg"),
                            text:"口腔套装"
                        },
                        {
                            img:require("../../assets/flyimg/kqhl-yf.jpg"),
                            text:"牙粉"
                        }
                    ]
                },
                {
                    title:"女性护理",
                    recontlist:[
                        {
                            img:require("../../assets/flyimg/wsmt.jpg"),
                            text:"卫生棉条"
                        }
                    ]
                },
                {
                    title:"品牌墙",
                    recontlist:[
                        {img:require("../../assets/flyimg/ppq-gjs.jpg")},
                        {img:require("../../assets/flyimg/ppq-glj.jpg")},
                        {img:require("../../assets/flyimg/ppq-hfs.jpg")},
                        {img:require("../../assets/flyimg/ppq-hr.jpg")},
                        {img:require("../../assets/flyimg/ppq-hsb.jpg")},
                        {img:require("../../assets/flyimg/ppq-ls.jpg")},
                        {img:require("../../assets/flyimg/ppq-pr.jpg")},
                        {img:require("../../assets/flyimg/ppq-qdkj.jpg")},
                        {img:require("../../assets/flyimg/ppq-qy.jpg")},
                         {img:require("../../assets/flyimg/ppq-sfj.jpg")}
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