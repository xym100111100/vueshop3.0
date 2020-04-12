import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        cartData: localStorage['cartData'] ? JSON.parse(localStorage['cartData']) : []
    },
    mutations: {
        ["ADD_CART"](state, payload) {
            let isSame = false;
            for (let i = 0; i < state.cartData.length; i++) {
                // 注意这里使用了一个技巧，将数组转为字符串能快速判断两个数组是否完全相等F)
                if (
                    state.cartData[i].gid ===
                    payload.cartData.gid &&
                    JSON.stringify(state.cartData[i].attrs) ===
                    JSON.stringify(payload.cartData.attrs)
                ) {
                    isSame = true
                    state.cartData[i].amount += parseInt(payload.cartData.amount)
                    break;
                }
            }
            if (!isSame) {
                state.cartData.push(payload.cartData)
            }
            // 存到本地缓存里面(使用的时候需要成JSON对象)
            localStorage["cartData"] = JSON.stringify(state.cartData)
        },
        ["INC_COUNT"](state, payload) {
            state.cartData[payload.index].amount += 1
            localStorage["cartData"] = JSON.stringify(state.cartData)

        },
        ["DEC_COUNT"](state, payload) {
            state.cartData[payload.index].amount = state.cartData[payload.index].amount > 1 ? state.cartData[payload.index].amount -= 1 : 1
            localStorage["cartData"] = JSON.stringify(state.cartData)

        },
        ["DEL_CART"](state, payload) {
            state.cartData.splice(payload.index, 1);
            localStorage["cartData"] = JSON.stringify(state.cartData)
        },
        ["SET_AMOUNT"](state, payload) {
            state.cartData[payload.index].amount = payload.value
            state.cartData[payload.index].amount = parseInt(state.cartData[payload.index].amount.replace(/[^\d]/g, ""));
            // false undefined 空的时候这个条件都会成立,且这里是一个字符串，使用全等需要加引号。
            if (!state.cartData[payload.index].amount || state.cartData[payload.index].amount === "0") {
                state.cartData[payload.index].amount = 1;
            }

            localStorage["cartData"] = JSON.stringify(state.cartData)
        },
        ["SELECT_ITEM"](state, payload) {
            state.cartData[payload.index].checked = !state.cartData[payload.index].checked
            Vue.set(state.cartData, payload.index, state.cartData[payload.index])
            localStorage["cartData"] = JSON.stringify(state.cartData)

        },
        ["SELECT_ALL"](state, payload) {
            for (let i = 0; i < state.cartData.length; i++) {
                state.cartData[i].checked = payload.checked
            }
            localStorage["cartData"] = JSON.stringify(state.cartData)

        }
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
                // parseFloat这个是假如小数点后面是0的话会被去掉，toFixed四舍五入保留两位小数
                return parseFloat(total.toFixed(2));
            } else {
                return 0;
            }
        },
        //运费
        freight(state) {
            // 筛选出所有运费，放在数组里面，再用方法找出最高
            if (state.cartData.length > 0) {
                let freights = [];
                for (let i = 0; i < state.cartData.length; i++) {
                    if (state.cartData[i].checked) {
                        freights.push(state.cartData[i].freight);
                    }
                }
                // 这里需要判断freights.length,否则Math.max.apply会有问题
                return freights.length > 0 ? Math.max.apply(null, freights) : 0;
            } else {
                return 0;
            }
        }
    }
}