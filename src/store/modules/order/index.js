import { addOrderData, getOrderNumData, getReviewOrderData, getOrderDescData, getMyOrderData, cancelOrderData } from "../../../api/order"
export default {
   namespaced: true,
   state: {
      orderNum: "",
      orders: [],
      orderDesc: {},
      reviews: []
   },
   mutations: {
      ["SET_ORDERNUM"](state, payload) {
         state.orderNum = payload.orderNum
      },
      ["SET_ORDERS"](state, payload) {
         state.orders = payload.orders
      },
      ["SET_ORDERS_PAGE"](state, payload) {
         state.orders.push(...payload.orders)
      },
      ["CANCE_ORDER"](state, payload) {
         state.orders.splice(payload.index, 1)
      },
      ["SET_ORDER_DESC"](state, payload) {
         state.orderDesc = payload.orderDesc;
      },
      ["SET_REVIEWS"](state, payload) {
         state.reviews = payload.reviews

      },
      ["SET_REVIEW_PAGE"](state, payload) {
         console.log(payload.reviews)
         state.reviews.push(...payload.reviews)

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
            if (res.code === 200) {
               conText.commit('SET_ORDERNUM', { orderNum: res.data.ordernum })
            }
         })
      },
      getMyOrder(conText, payload) {
         getMyOrderData({ uid: conText.rootState.user.uid, ...payload }).then((res) => {
            let pageNum = 0;
            if (res.code === 200) {
               pageNum = res.pageinfo.pagenum;
               conText.commit("SET_ORDERS", { orders: res.data })
            } else {
               conText.commit("SET_ORDERS", { order: [] })
            }
            if ((res.code === 200 || res.code === 201) && payload && payload.success) {
               payload.success(pageNum)
            }
         })
      },
      getOrderPage(conText, payload) {
         getMyOrderData({ uid: conText.rootState.user.uid, ...payload }).then((res) => {
            let pageNum = 0;
            if (res.code === 200) {
               pageNum = res.pageinfo.pagenum;
               conText.commit("SET_ORDERS_PAGE", { orders: res.data })
            }
            if ((res.code === 200 || res.code === 201) && payload && payload.success) {
               payload.success(pageNum)
            }
         })
      },
      cancelOrder(conText, payload) {
         cancelOrderData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            if (res.code === 200) {
               conText.commit("CANCE_ORDER", { index: payload.index })
            }
         })
      },
      getOrderDesc(conText, payload) {
         getOrderDescData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            if (res.code === 200) {
               conText.commit("SET_ORDER_DESC", { orderDesc: res.data })
            }
         })
      },
      getReviewOrder(conText, payload) {
         let pageNum = 0;
         getReviewOrderData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            if (res.code === 200) {
               pageNum = res.pageinfo.pagenum;
               conText.commit("SET_REVIEWS", { reviews: res.data })
            }
            if ((res.code === 200 || res.code === 201) && payload && payload.success) {
               payload.success(pageNum)
            }
         })
      },
      getReviewOrderPage(conText, payload) {
         getReviewOrderData({ uid: conText.rootState.user.uid, ...payload }).then((res) => {
            let pageNum = 0;
            if (res.code === 200) {
               pageNum = res.pageinfo.pagenum;
               conText.commit("SET_REVIEW_PAGE", { reviews: res.data })
            }
            if ((res.code === 200 || res.code === 201) && payload && payload.success) {
               payload.success(pageNum)
            }
         })
      }
   }
}