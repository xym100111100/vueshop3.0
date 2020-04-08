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

        },
        minPrice: '',
        maxPrice: '',
        attrs: [{
            title: "颜色",
            isHide: false,
            param: [
                {
                    title: '白色',
                    active: false
                },
                {
                    title: '黑色',
                    active: true
                }
            ]

        },
        {
            title: "尺码",
            isHide: false,
            param: [
                {
                    title: '38',
                    active: false
                },
                {
                    title: '39',
                    active: true
                }
            ]

        }]
    },
    mutations: {
        ["SET_MINPRICE"](state, payload) {
            state.minPrice = payload.minPrice;
            state.minPrice = state.minPrice.replace(/[^\d|\.]/g, '')
        },
        ["SET_MAXPRICE"](state, payload) {
            state.maxPrice = payload.maxPrice;
            state.maxPrice = state.maxPrice.replace(/[^\d|\.]/g, '')

        },
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
            state.pariceData.isHide = !state.pariceData.isHide
        },
        ["SELECT_PRICE"](state, payload) {
            for (let i = 0; i < state.pariceData.items.length; i++) {
                if (state.pariceData.items[i].active && i !== payload.index) {
                    state.pariceData.items[i].active = false;
                    break;
                }
            }
            state.pariceData.items[payload.index].active = !state.pariceData.items[payload.index].active;
            let temp = state.pariceData.items[payload.index];
            state.minPrice = temp.active ? temp.price1 : "";
            state.maxPrice = temp.active ? temp.price2 : "";
        },
        ["HIDE_ATTR"](state, payload) {
            state.attrs[payload.index].isHide = !state.attrs[payload.index].isHide;
            Vue.set(state.attrs, payload.index, state.attrs[payload.index])
        },
        ["SELECT_ATTR"](state, payload) {
            state.attrs[payload.index].param[payload.index2].active = !state.attrs[payload.index].param[payload.index2].active;
            Vue.set(state.attrs[payload.index].param, payload.index2, state.attrs[payload.index].param[payload.index2])
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