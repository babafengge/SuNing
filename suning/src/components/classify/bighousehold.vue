<template>
<div  class="phone-cont">
    <div class="topnav" ref="topnav">
        <div class="topscoll">
            <div class="scolllist" @click="skip(1)"><span class="holdactive" ref="kt">空调</span></div>
            <div class="scolllist" @click="skip(2)"><span ref="bx">冰箱</span></div>
            <div class="scolllist" @click="skip(3)"><span ref="xyj">洗衣机</span></div>
            <div class="scolllist" @click="skip(4)"><span ref="ds">电视</span></div>
            <div class="scolllist" @click="skip(5)"><span ref="jcjd">集成家电</span></div>
            <div class="scolllist" @click="skip(6)"><span ref="sydq">商用电器</span></div>
            <div class="scolllist" @click="skip(7)"><span ref="tjpp">推荐品牌</span></div>
        </div>
    </div>
    <div class="middle" @scroll="midscrol" ref="midd">
        <div class="compfiy-box" :ref="'a'+index" v-for="(item,index) in holdlist" :key="item.title" :id="item.id" >
            <div class="recomtitle">
            <span>{{item.title}}</span>
            </div>
            <div class="recombody" >
                <div v-for="cont in item.holdcontlist" :key="cont.text" class="recomcontent" @click="$router.push('/search')">
                    <div class="contimg">
                        <img :src="cont.img" alt="图片加载失败" >
                    </div>
                    <div class="recomtxt">{{cont.text}}</div>
                </div>
            </div>
        </div>
        <div class="lastcont">
            <a>进入家电频道</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            holdlist:[
                {
                    title:"空调",
                    id:"skipid1",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/rmtj-kt.jpg"),
                            text:"空调挂机"
                        },
                        {
                            img:require("../../assets/flyimg/kt-dgj.png"),
                            text:"空调柜机"
                        },
                        {
                            img:require("../../assets/flyimg/kt-ydkt.png"),
                            text:"移动空调"
                        },
                        {
                            img:require("../../assets/flyimg/kt-fgj.jpg"),
                            text:"风管机"
                        },
                        {
                            img:require("../../assets/flyimg/kt-dlj.jpg"),
                            text:"多联机"
                        },
                        {
                            img:require("../../assets/flyimg/kt-yjnx.jpg"),
                            text:"一级能效"
                        },
                        {
                            img:require("../../assets/flyimg/kt-yjhx.png"),
                            text:"以旧换新"
                        },
                        {
                            img:require("../../assets/flyimg/kt-0.png"),
                            text:"0元安装"
                        },
                        {
                            img:require("../../assets/flyimg/kt-ktmx.jpg"),
                            text:"空调免息"
                        }
                    ]
                },
                {
                    title:"冰箱",
                    id:"skipid2",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/rmtj-bx.jpg"),
                            text:"冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/bx-dmbx.jpg"),
                            text:"多门冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/bx-dkmbx.jpg"),
                            text:"对开门冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/bx-szdk.jpg"),
                            text:"十字对开门冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/bx-smbx.jpg"),
                            text:"三门冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/bx-sm.jpg"),
                            text:"双门冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/bx-sylg.jpg"),
                            text:"商用冷柜"
                        },
                        {
                            img:require("../../assets/flyimg/bx-jylg.jpg"),
                            text:"家用冷柜"
                        },
                        {
                            img:require("../../assets/flyimg/bx-hjg.png"),
                            text:"红酒柜"
                        }
                    ]
                },
                {
                    title:"洗衣机",
                    id:"skipid3",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/xyj-xhytj.jpg"),
                            text:"洗烘一体机"
                        },
                        {
                            img:require("../../assets/flyimg/xyj-gtxyj.jpg"),
                            text:"滚筒洗衣机"
                        },
                        {
                            img:require("../../assets/flyimg/xyj-blxyj.jpg"),
                            text:"波轮洗衣机"
                        },
                        {
                            img:require("../../assets/flyimg/xyj-drl.jpg"),
                            text:"大容量洗衣机"
                        },
                        {
                            img:require("../../assets/flyimg/xyj-mnxyj.jpg"),
                            text:"迷你洗衣机"
                        },
                        {
                            img:require("../../assets/flyimg/xyj-hgj.png"),
                            text:"烘干机"
                        }
                    ]
                },
                {
                    title:"电视",
                    id:"skipid4",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/ds-ds.jpg"),
                            text:"电视"
                        },
                        {
                            img:require("../../assets/flyimg/ds-55.jpg"),
                            text:"55寸"
                        },
                        {
                            img:require("../../assets/flyimg/ds-qmp.jpg"),
                            text:"全面屏"
                        },
                        {
                            img:require("../../assets/flyimg/ds-65.jpg"),
                            text:"65寸"
                        },
                        {
                            img:require("../../assets/flyimg/ds-4K.png"),
                            text:"4K"
                        },
                        {
                            img:require("../../assets/flyimg/ds-jyds.jpg"),
                            text:"教育电视"
                        },
                        {
                            img:require("../../assets/flyimg/ds-jtyy.jpg"),
                            text:"家庭影院"
                        },
                        {
                            img:require("../../assets/flyimg/ds-zhp.jpg"),
                            text:"智慧屏"
                        },
                        {
                            img:require("../../assets/flyimg/ds-tyy.jpg"),
                            text:"投影仪"
                        }
                    ]
                },
                {
                    title:"集成家电",
                    id:"skipid5",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/jcjd-bgsxf.jpg"),
                            text:"挂壁式新风"
                        },
                        {
                            img:require("../../assets/flyimg/jcjd-ddsxf.jpg"),
                            text:"吊顶式新风"
                        },
                        {
                            img:require("../../assets/flyimg/jcjd-qzglq.jpg"),
                            text:"前置过滤器"
                        },
                        {
                            img:require("../../assets/flyimg/jcjd-kqnr.jpg"),
                            text:"空气能热水器"
                        },
                        {
                            img:require("../../assets/flyimg/jcjd-bgl.jpg"),
                            text:"壁挂炉"
                        },
                        {
                            img:require("../../assets/flyimg/jcjd-qwjs.jpg"),
                            text:"全屋净水"
                        }
                    ]
                },
                {
                    title:"商用电器",
                    id:"skipid6",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/sydq-syfjj.jpg"),
                            text:"商用发酵剂"
                        },
                        {
                            img:require("../../assets/flyimg/sydq-syzsg.jpg"),
                            text:"商用展示柜"
                        },
                        {
                            img:require("../../assets/flyimg/sydq-sybg.jpg"),
                            text:"商用冰柜"
                        },
                        {
                            img:require("../../assets/flyimg/sydq-sybx.jpg"),
                            text:"商用冰箱"
                        },
                        {
                            img:require("../../assets/flyimg/sydq-sycfyj.jpg"),
                            text:"商用厨房用具"
                        },
                        {
                            img:require("../../assets/flyimg/sydq-syzbj.jpg"),
                            text:"商用制冰机"
                        }
                    ]
                },
                {
                    title:"推荐品牌",
                    id:"skipid7",
                    holdcontlist:[
                        {
                            img:require("../../assets/flyimg/tjpp-md.jpg"),
                            text:"美的"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-he.jpg"),
                            text:"海尔"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-cw.jpg"),
                            text:"创维"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-tcl.jpg"),
                            text:"TCL"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-aks.jpg"),
                            text:"奥克斯"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-gl.jpg"),
                            text:"格力"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-hx.jpg"),
                            text:"海信"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-xmz.jpg"),
                            text:"西门子"
                        },
                        {
                            img:require("../../assets/flyimg/tjpp-kj.jpg"),
                            text:"康佳"
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
            if(this.scrollTop<this.$refs.a0[0].offsetHeight-1){
                this.$refs.kt.classList.add("holdactive")
            }else{
                this.$refs.kt.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs.a1[0].offsetHeight-2 && this.scrollTop<this.$refs.a2[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2){
                this.$refs.bx.classList.add("holdactive")
            }else{
                this.$refs.bx.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs.a2[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2&&this.scrollTop<this.$refs.a3[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2){
                this.$refs.xyj.classList.add("holdactive")
            }else{
                this.$refs.xyj.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs.a3[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2&&this.scrollTop<this.$refs.a4[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2){
                this.$refs.ds.classList.add("holdactive")
            }else{
                this.$refs.ds.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs.a4[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2&&this.scrollTop<this.$refs.a5[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2){
                this.$refs.jcjd.classList.add("holdactive")
            }else{
                this.$refs.jcjd.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs.a5[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2 &&this.scrollTop<this.$refs.a6[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2){
                this.$refs.sydq.classList.add("holdactive")
            }else{
                this.$refs.sydq.classList.remove("holdactive")
            }

            if(this.scrollTop>this.$refs.a6[0].offsetTop-this.$refs.topnav.offsetTop-this.$refs.topnav.offsetHeight-2){
                this.$refs.tjpp.classList.add("holdactive")
            }else{
                this.$refs.tjpp.classList.remove("holdactive")
            }
        },
        skip(key){
            // console.log(this.$refs.a0)
            // console.log(this.$refs.topnav)
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
    height: 100%;
}
.topnav{
    margin:0.6rem 0 0 1rem;
}
.topscoll{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
.scolllist{
    flex-shrink: 0;
    margin:0 .5rem .3rem 0;
}
.topscoll span{
    font-size: .48rem;
    line-height: .48rem;
    white-space: nowrap;
    padding-bottom: .3rem;
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