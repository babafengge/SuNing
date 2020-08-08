<template>
<div>
    <div class="compfiy-box" v-for="item in recomlist" :key="item.title">
        <div>{{item.title}}</div>
        <div v-for="cont in item.contentlist" :key="cont.text">
            <div>{{cont.text}}</div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            recomlist:[
                {
                    title:"热门推荐",
                    contentlist:[
                        {
                        img:"",
                        text:"手机"
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