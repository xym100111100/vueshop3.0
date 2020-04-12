import { getReviewData, getReviewPage } from "../../../api/goods/review"

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
      },
      ["SET_REVIEW_PAGE"](state, payload) {
            state.reviews.push(...payload.reviews)
      }
   },
   actions: {
      getReviews(conText, payload) {
         let pagenum = 0;
         getReviewData(payload.gid).then((res) => {
            if (res.code === 200) {
               conText.commit('SET_REVIEWS', { reviews: res.data, total: res.pageinfo.total })
               pagenum = res.pageinfo.pagenum
            } else {
               conText.commit('SET_REVIEWS', { reviews: [], total: 0 })
            }
            if (payload && payload.success && (res.code === 200 || res.code === 201)) {
               payload.success(pagenum)
            }

         })
      },
      getReviewPage(conText, payload) {
         getReviewPage(payload).then((res) => {
            console.log(res.data)
            if (res.code === 200) {
               conText.commit("SET_REVIEW_PAGE", { reviews: res.data })
            }
         })
      }
   }

}