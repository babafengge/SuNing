<template>
<div  class="phone-cont">
    <div class="topnav" ref="topnav">
        <img src="../../assets/flyimg/savehouse.jpg" alt="图片加载失败">
        <div class="topscoll">
            <div class="scolllist" @click="skip(1)"><span class="holdactive" ref="cfdq">厨房电器</span></div>
            <div class="scolllist" @click="skip(2)"><span ref="wydq">卫浴电器</span></div>
            <div class="scolllist" @click="skip(3)"><span ref="yzpp">优质品牌</span></div>
        </div>
    </div>
    <div class="middle" @scroll="midscrol" ref="midd">
        <div class="compfiy-box" :ref="index" v-for="(item,index) in holdlist" :key="item.title" :id="item.id">
            <div class="recomtitle">
            <span>{{item.title}}</span>
            </div>
            <div class="recombody">
                <div v-for="cont in item.holdcontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="lastcont">
        <a>进入厨卫电器频道</a>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            holdlist:[
                {
                    title:"厨房电器",
                    id:"skipid1",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/cfdq-yyj.jpg"),
                            text:"油烟机"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-rqz.jpg"),
                            text:"燃气灶"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-yztc.jpg"),
                            text:"烟灶套餐"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-jcz.jpg"),
                            text:"集成灶"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-xdg.jpg"),
                            text:"消毒柜"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-jsq.jpg"),
                            text:"净水器"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-ysj.jpg"),
                            text:"饮水机"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-jslt.jpg"),
                            text:"净水龙头"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-xwj.jpg"),
                            text:"洗碗机"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-wzk.png"),
                            text:"微蒸烤"
                        },
                        {
                            img:require("../../assets/flyimg/cfdq-xcj.jpg"),
                            text:"洗菜机"
                        }
                    ]
                },
                {
                    title:"卫浴电器",
                    id:"skipid2",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/wydq-rqrsq.jpg"),
                            text:"燃气热水器"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-drsq.jpg"),
                            text:"电热水器"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-jrsrsq.jpg"),
                            text:"即热式热水器"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-drslt.jpg"),
                            text:"电热水龙头"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-cb.jpg"),
                            text:"厨宝"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-tynrsq.jpg"),
                            text:"太阳能热水器"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-znmtg.jpg"),
                            text:"智能马桶盖"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-ddlyj.jpg"),
                            text:"电动晾衣架"
                        },
                        {
                            img:require("../../assets/flyimg/wydq-yb.jpg"),
                            text:"浴霸"
                        }
                    ]
                },
                {
                    title:"优质品牌",
                    id:"skipid3",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/yzpp-fqmx.png"),
                            text:"分期免息"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-sms.jpg"),
                            text:"史密斯"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-lb.jpg"),
                            text:"老板"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-xmz.jpg"),
                            text:"西门子"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-ft.jpg"),
                            text:"方太"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-kb.jpg"),
                            text:"康宝"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-wjl.jpg"),
                            text:"万家乐"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-ln.jpg"),
                            text:"林内"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-ns.jpg"),
                            text:"能率"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-qy.jpg"),
                            text:"沁园"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-md.jpg"),
                            text:"美的"
                        },
                        {
                            img:require("../../assets/flyimg/yzpp-mq.jpg"),
                            text:"名气"
                        }
                    ]
                }
            ],
            scollTop:null,
        }
    },
    methods:{
        midscrol(event){
            this.scrollTop = event.target.scrollTop;
            // console.log(this.scrollTop);
            if(this.scrollTop<this.$refs[0][0].offsetHeight-2){
                this.$refs.cfdq.classList.add("holdactive")
            }else{
                this.$refs.cfdq.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs[0][0].offsetHeight-2 && this.scrollTop<this.$refs[0][0].offsetHeight+this.$refs[1][0].offsetHeight-2){
                this.$refs.wydq.classList.add("holdactive")
            }else{
                this.$refs.wydq.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs[0][0].offsetHeight+this.$refs[1][0].offsetHeight-2){
                this.$refs.yzpp.classList.add("holdactive")
            }else{
                this.$refs.yzpp.classList.remove("holdactive")
            }
        },
        skip(key){
            var pad = document.querySelector("#skipid"+key);
            this.$refs.midd.scrollTop=pad.offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight
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
.topscoll{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
.scolllist{
    flex-shrink: 0;
    margin: 0 10px;
}
.topscoll span{
    font-size: .48rem;
    line-height: .48rem;
    white-space: nowrap;
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
.holdactive{
    border-bottom: 3px solid #ffcc00;
    font-weight: bolder;
}
</style>