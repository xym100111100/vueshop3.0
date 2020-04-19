import Vue from 'vue'
import { getClassifyData, getFavData, delFavData, addFavData, getGoodsData, getGoodsDetailData, getSpecData } from '../../../api/goods/index'
export default {
   namespaced: true,
   state: {
      classifys: [],
      goods: [],
      details: {},
      attrs: [],
      favs: []
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

      },
      ["SELECT_ATTR"](state, payload) {
         for (let i = 0; i < state.attrs[payload.index].values.length; i++) {
            if (state.attrs[payload.index].values[i].active && i !== payload.index2) {
               state.attrs[payload.index].values[i].active = false;
            }
         }
         state.attrs[payload.index].values[payload.index2].active = !state.attrs[payload.index].values[payload.index2].active;
         Vue.set(state.attrs[payload.index].values, payload.index2, state.attrs[payload.index].values[payload.index2])
      },
      ["SET_DETAILS"](state, payload) {
         state.details = payload.details

      },
      ["SET_ATTR"](state, payload) {
         state.attrs = payload.attrs

      },
      ["SET_FAVS"](state, payload) {
         state.favs = payload.favs
      },
      ["SET_FAVS_PAGE"](state, payload) {
         state.favs.push(...payload.favs)
      },
      ["DEL_FAVS"](state, payload) {
         state.favs.splice(payload.index, 1)
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
      },
      getGoodsDetail(conText, payload) {
         getGoodsDetailData(payload.gid).then((res) => {
            if (res.code === 200) {
               conText.commit("SET_DETAILS", { details: res.data })

            }
            if (payload && payload.success && (res.code === 200 || res.code === 201)) {
               payload.success()
            }
         })
      },
      getSpec(conText, payload) {
         getSpecData(payload.gid).then((res) => {
            if (res.code === 200) {
               for (let i = 0; i < res.data.length; i++) {
                  for (let j = 0; j < res.data[i].length; j++) {
                     res.data[i].values[j].active = false
                  }
               }

               conText.commit("SET_ATTR", { attrs: res.data })
            }
         })
      },
      addFav(conText, payload) {
         addFavData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            if (payload && payload.success) {
               payload.success(res)
            }
         })
      },
      getFavs(conText, payload) {
         getFavData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            let pageNum = 0;
            if (res.code === 200) {
               pageNum = res.pageinfo.pagenum;
               conText.commit("SET_FAVS", { favs: res.data })
            } else {
               conText.commit("SET_FAVS", { favs: [] })
            }
            if ((res.code === 200 || res.code === 201) && payload && payload.success) {
               payload.success(pageNum)
            }
         })
      },
      getFavPage(conText, payload) {
         getFavData({ uid: conText.rootState.user.uid, ...payload }).then((res) => {
            let pageNum = 0;
            if (res.code === 200) {
               pageNum = res.pageinfo.pagenum;
               conText.commit("SET_FAVS_PAGE", { favs: res.data })
            }
            if ((res.code === 200 || res.code === 201) && payload && payload.success) {
               payload.success(pageNum)
            }
         })
      },
      delFav(conText, payload) {
         delFavData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            console.log(res)
            if (res.code === 200 && payload && payload.success) {
               conText.commit("DEL_FAVS", { index: payload.index })
               payload.success(res)
            }
         })
      }


   }
}