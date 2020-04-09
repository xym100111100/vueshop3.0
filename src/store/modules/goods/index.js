import Vue from 'vue'
import { getClassifyData, getGoodsData } from '../../../api/goods/index'

export default {
   namespaced: true,
   state: {
      classifys: [],
      goods: []
   },
   mutations: {
      ["SET_CLASSIFYS"](state, payload) {
         state.classifys = payload.classifys
      },
      ["SELECT_ITEM"](state, payload) {
         // 对数组操作前先对数组进行判断
         if (state.classifys.length > 0) {
            for (let index = 0; index < state.classifys.length; index++) {
               if (state.classifys[index].active) {
                  // 找到目标后就停止循环，提高性能
                  state.classifys[index].active = false
                  break;
               }
            }

            state.classifys[payload.index].active = true
            // 设置异步，(原始数据，索引，改变后的值),有的程序不会，但还是写的好，免得出现兼容
            Vue.set(state.classifys, payload.index, state.classifys[payload.index])
         }

      },
      ["SET_GOODS"](state, payload) {
         state.goods = payload.goods
         // console.log(state.goods)
      }
   },
   actions: {
      // 左侧分类
      getClassify(conText, payload) {
         getClassifyData().then((res) => {
            
            if (res.code === 200) {
               for (let index = 0; index < res.data.length; index++) {
                  res.data[index].active = false
               }
               // commit 和success的执行顺序不能改变，否则页面的滚动插件一样获取不到真实的dom
               conText.commit("SET_CLASSIFYS", { classifys: res.data })
               if (payload && payload.success) {
                  payload.success()
               }
            } else {
               if (payload && payload.error) {
                  payload.error()
               }
            }
         })
      },
      // 右侧商品
      getGoods(conText, payload) {
         getGoodsData(payload.cid).then((res) => {
            // console.log(res)
            if (res.code === 200) {
               conText.commit("SET_GOODS", { goods: res.data })
               if (payload && payload.success) {
                  payload.success()
               }
            } else if (res.code === 201) {// 接口中201表示没有数据，但同样要刷新获取dom的滚动插件
               conText.commit("SET_GOODS", { goods: [] })
               if (payload && payload.success) {
                  payload.success()
               }
            }
         })
      }
   }
}