import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    suzy: [],
    suhwg: [],
    flag: true,
    suzyAllcheck:true,
    suhwgAllcheck:true,
    allcheck:true
  },
  mutations: {
    addShop(state, item) {
      state.flag = true;
      if (item.shop == "su-hwg") {
        state.suhwg.forEach(con => {
          if (con.text == item.text) {
            con.num++;
            state.flag = false
          }
        })
        if (state.flag) {
          state.suhwg.push({
            shop: item.shop,
            pic: item.pic,
            price: item.price,
            text: item.text,
            num: 1,
            checked: true,
            id:item.id
          })
        }
      } else {
        state.suzy.forEach(con => {
          if (con.text == item.text) {
            con.num++;
            state.flag = false
          }
        })
        if (state.flag) {
          state.suzy.push({
            shop: item.shop,
            pic: item.pic,
            price: item.price,
            text: item.text,
            num: 1,
            checked: true,
            id:item.id
          })
        }
      }
    },
    minShop(state, obj) {
      if (obj.item.shop == "su-hwg") {
        if(state.suhwg[obj.index].num>1){
          state.suhwg[obj.index].num--
        }
      } else {
        if(state.suzy[obj.index].num>1){
          state.suzy[obj.index].num--
        }
      }
    },
    plusShop(state, obj) {
      if (obj.item.shop == "su-hwg") {
        state.suhwg[obj.index].num++
      } else {
        state.suzy[obj.index].num++
      }
    },
    watchZYTrue(state) {
      state.suzy.forEach(item => {
        item.checked = true;
      })
    },
    watchZYFalse(state) {
      state.suzy.forEach(item => {
        item.checked = false
      })
    },
    watchHWGTrue(state) {
      state.suhwg.forEach(item => {
        item.checked = true;
      })
    },
    watchHWGFalse(state) {
      state.suhwg.forEach(item => {
        item.checked = false
      })
    },
    changeCheck(state,obj){
      if(obj.item.shop=="su-hwg"){
        state.suhwg[obj.index].checked=!state.suhwg[obj.index].checked
      }else{
        state.suzy[obj.index].checked=!state.suzy[obj.index].checked
      }
    },
    watchZYAllCheckTrue(state){
      state.suzyAllcheck=true;
    },
    watchZYAllCheckFalse(state){
      state.suzyAllcheck=false;
    },
    watchHWGAllCheckTrue(state){
      state.suhwgAllcheck=true;
    },
    watchHWGAllCheckFalse(state){
      state.suhwgAllcheck=false;
    },
    // watchAllcheckTrue(state){
    //   state.allcheck=true;
    // },
    // watchAllcheckFalse(state){
    //   state.allcheck=false;
    // },
    watchAllcheck(state){
      let allchecked = true;
      state.suzy.forEach(item=>{
        if(item.checked==false){
          allchecked=false;
        }
      })
      state.suhwg.forEach(item=>{
        if(item.checked==false){
          allchecked=false;
        }
      });
      state.allcheck = allchecked;
    },
    changeZYAllcheck(state){
      state.suzyAllcheck=!state.suzyAllcheck;
    },
    changeHWGAllcheck(state){
      state.suhwgAllcheck=!state.suhwgAllcheck;
    },
    changeAllcheck(state){
      state.allcheck=!state.allcheck;
    },
    delShop(state){
      for(let i=0;i<state.suzy.length;i++){
        if(state.suzy[i].checked==true){
          state.suzy.splice(i,1);
          i--
        }
      }
      for(let i=0;i<state.suhwg.length;i++){
        if(state.suhwg[i].checked==true){
          state.suhwg.splice(i,1);
          i--
        }
      }
    }
  },
  actions: {},
  modules: {}
})