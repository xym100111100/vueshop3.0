import { addOrderData, getOrderNumData } from "../../../api/order"

export default {
   namespaced: true,
   state: {
      orderNum: ""
   },
   mutations: {
      ["SET_ORDERNUM"](state, payload) {
         state.orderNum = payload.orderNum
      }
   },
   actions: {
      addOrder(conText, payload) {
         addOrderData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            if (res.code === 200 && payload.success) {
               payload.success(res)
            }
         })
      },
      getOrderNum(conText) {
         getOrderNumData(conText.rootState.user.uid).then((res) => {
            console.log(res)
            if (res.code === 200) {
               conText.commit('SET_ORDERNUM', { orderNum: res.data.ordernum })
            }
         })
      }
   }
}