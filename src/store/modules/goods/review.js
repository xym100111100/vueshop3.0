import { getReviewData } from "../../../api/goods/review"

export default {
   namespaced: true,
   state: {
      reviews: [],
      total: 0
   },
   mutations: {
      ["SET_REVIEWS"](state, payload) {
         state.reviews = payload.reviews;
         state.total = payload.total;
         console.log(state)
      }
   },
   actions: {
      getReviews(conText, payload) {
         getReviewData(payload.gid).then((res) => {
            console.log(res)
            if (res.code === 200) {
               conText.commit('SET_REVIEWS', { reviews: res.data, total: res.pageinfo.total })
            } else {
               conText.commit('SET_REVIEWS', { reviews: [], total: 0 })
            }
            if (payload && payload.success && (res.code === 200 || res.code === 201)) {
               payload.success()
            }

         })
      }
   }

}