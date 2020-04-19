import { addOrderData, addReviewData, getOrderNumData, getReviewServiceData, getReviewOrderData, getOrderDescData, getMyOrderData, cancelOrderData } from "../../../api/order"
export default {
   namespaced: true,
   state: {
      orderNum: "",
      orders: [],
      orderDesc: {},
      reviews: [],
      services: []
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
         state.reviews.push(...payload.reviews)

      },
      ["SET_SERVICES"](state, payload) {
         state.services = payload.services

      },
      ["SET_REVIEW_SCORE"](state, payload) {
         state.services[payload.index].score = payload.value
         for (let i = 0; i < state.services[payload.index].scores.length; i++) {
            if (i <= payload.index2) {
               state.services[payload.index].scores[i].active = true
            } else {
               state.services[payload.index].scores[i].active = false
            }
         }
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
      },
      getReviewService(conText) {
         getReviewServiceData().then((res) => {
            if (res.code === 200) {
               for (let i = 0; i < res.data.length; i++) {
                  res.data[i].score = 5;
                  res.data[i].scores = [
                     {
                        value: 1,
                        active: true
                     },
                     {
                        value: 2,
                        active: true
                     },
                     {
                        value: 3,
                        active: true
                     },
                     {
                        value: 4,
                        active: true
                     },
                     {
                        value: 5,
                        active: true
                     },
                  ]
               }
               conText.commit("SET_SERVICES", { services: res.data })
            }
         })
      },
      addReview(conText, payload) {
         addReviewData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
            if (res.code === 200 && payload && payload.success) {
               payload.success(res)
            }
         })
      }
   }
}