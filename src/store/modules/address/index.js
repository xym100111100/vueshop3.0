import { getAddressData, delAddressData } from "../../../api/address/index"
import Vue from "vue"

export default {
   namespaced: true,
   state: {
      address: []
   },
   mutations: {
      ["SET_ADDRESS"](state, payload) {
         state.address = payload.address
      },
      ["DEL_ADDRESS"](state, payload) {
         state.address.splice(payload.index, 1);
         Vue.set(state.address, payload.index, state.address[payload.index])
      }
   },
   actions: {
      getAddress(conText) {
         getAddressData(conText.state.uid).then((res) => {
            if (res.code === 200) {
               conText.commit('SET_ADDRESS', { address: res.data })
            }
         })
      },
      delAddress(conText, payload) {
         delAddressData({ uid: payload.uid, aid: payload.aid }).then((res) => {
            if (res.code === 200) {
               conText.commit("DEL_ADDRESS", { index: payload.index })
            }
         })
      }

   }

}