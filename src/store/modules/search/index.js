import { getHotKeywordData } from "../../../api/search";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        historyKeywords: localStorage['historyKeywords'] ? JSON.parse(localStorage['historyKeywords']) : [],
        hotKeywords: [],
        pariceData: {
            isHide: false,
            items: [
                { price1: 1, price2: 50, active: false },
                { price1: 51, price2: 99, active: false },
                { price1: 100, price2: 300, active: false },
                { price1: 301, price2: 1000, active: false },
                { price1: 1001, price2: 4000, active: false },
                { price1: 4001, price2: 9999, active: false },

            ],
        }
    },
    mutations: {
        ["SET_KEYWORDS"](state, payload) {
            state.historyKeywords = payload.historyKeywords;
            // 存储到localStorage里面最好转成json
            localStorage['historyKeywords'] = JSON.stringify(state.historyKeywords);
        },
        ["CLEAR_KEYWORDS"](state, payload) {
            state.historyKeywords = [];
            localStorage.removeItem("historyKeywords");
        },
        ["SET_HOTKEYWORD"](state, payload) {
            state.hotKeywords = payload.hotKeywords;
        },
        ["HIDE_PRICE"](state, payload) {
            console.log("sss")
            state.pariceData.isHide = !state.pariceData.isHide
        },
        ["SELECT_PRICE"](state, payload) {
            for (let i = 0; i < state.pariceData.items.length; i++) {
                if (state.pariceData.items[i].active) {
                    state.pariceData.items[i].active = false;
                    break;
                }
            }
            state.pariceData.items[payload.index].active = true
        }
    },
    actions: {
        getHotKeyword(conText, payload) {
            getHotKeywordData().then(res => {
                if (res.code === 200) {
                    conText.commit("SET_HOTKEYWORD", { hotKeywords: res.data });
                }
            })
        },
        selectClassify(conText, payload) {
            let array = conText.rootState.goods.classifys;
            for (let i = 0; i < array.length; i++) {
                if (array[i].active) {
                    array[i].active = false;
                    break
                }
            }
            array[payload.index].active = true;
            Vue.set(array, payload.index, array[payload.index])
        }
    },

}