<template>
<div>
    <div class="compfiy-box" v-for="item in jewellelist" :key="item.title">
        <div>{{item.title}}</div>
        <div v-for="cont in item.jewellecontlist" :key="cont.txt">
            <div>{{cont.txt}}</div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            jewellelist:[
                {
                    title:"优质黄金品牌",
                    jewellecontlist:[
                        {
                        img:"",
                        txt:"周大福"
                    }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>