import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        cartData: localStorage['cartData'] ? JSON.parse(localStorage['cartData']) : []
    },
    mutations: {

    },
    getters: {
        //计算总金额
        total(state) {
            if (state.cartData.length > 0) {
                let total = 0;
                for (let i = 0; i < state.cartData.length; i++) {
                    if (state.cartData[i].checked) {
                        total += state.cartData[i].price * state.cartData[i].amount;
                    }
                }
                return parseFloat(total.toFixed(2));
            } else {
                return 0;
            }
        },
        //运费
        freight(state) {
            if (state.cartData.length > 0) {
                let freights = [];
                for (let i = 0; i < state.cartData.length; i++) {
                    if (state.cartData[i].checked) {
                        freights.push(state.cartData[i].freight);
                    }
                }
                return freights.length > 0 ? Math.max.apply(null, freights) : 0;
            } else {
                return 0;
            }
        }
    }
}