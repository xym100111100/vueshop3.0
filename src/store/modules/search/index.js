import { getHotKeywordData, getSearchData, getAttrsData } from "../../../api/search";
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
        attrs: [],
        searchData: [],
        cid: "",
        params: [],
        total: 0
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
        },
        ["SET_SEARCH_DATA"](state, payload) {
            state.searchData = payload.searchdata;
            state.total = payload.total

        },
        ["SET_SEARCH_DATA_PAGE"](state, payload) {
            for (let i = 0; i < payload.searchData.length; i++) {
                state.searchData.push(payload.searchData[i])

            }
        },
        ["SET_CID"](state, payload) {
            state.cid = payload.cid

        },
        ["SET_ATTRS"](state, payload) {
            state.attrs = payload.attrs
            console.log(state.attrs)
        },
        ["SET_PARAMS"](state, payload) {
            if (state.attrs.length > 0) {
                state.params = [];
                for (let i = 0; i < state.attrs.length; i++) {
                    for (let j = 0; j < state.attrs[i].param.length; j++) {
                        if (state.attrs[i].param[j].active) {
                            state.params.push(state.attrs[i].param[j].pid)
                        }
                    }
                }
            }

        },
        ["RESET_SCREEN"](state, payload) {
            state.cid = "";
            for (let i = 0; i < state.pariceData.items.length; i++) {
                state.pariceData.items[i].active = false;
            }
            state.minPrice = "";
            state.maxPrice = "";
            state.params = [];
            console.log(state.attrs)
            for (let i = 0; i < state.attrs.length; i++) {
                for (let j = 0; j < state.attrs[i].param.length; j++) {
                    state.attrs[i].param[j].active = false
                    Vue.set(state.attrs[i].param[j], j, state.attrs[i].param[j].active)
                }
            }


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
            conText.commit("SET_CID", { cid: array[payload.index].cid })
        },
        getSearch(conText, payload) {
            getSearchData(payload).then((res) => {
                let pagenum = 0;
                if (res.code === 200) {
                    conText.commit("SET_SEARCH_DATA", { searchdata: res.data, total: res.pageinfo.total })
                    pagenum = res.pageinfo.pagenum
                } else {
                    conText.commit("SET_SEARCH_DATA", { searchdata: [], total: 0 })

                }
                if (payload && payload.success && (res.code === 200 || res.code === 201)) {
                    payload.success(pagenum)
                }

            })
        },
        getSearchPage(conText, payload) {
            getSearchData(payload).then(res => {
                if (res.code === 200) {
                    conText.commit("SET_SEARCH_DATA_PAGE", { searchData: res.data });
                }
            })
        },
        getAttrs(conText, payload) {
            getAttrsData(payload).then((res) => {
                if (res.code === 200) {
                    for (let i = 0; i < res.data.length; i++) {
                        res.data[i].isHide = false;
                        for (let j = 0; j < res.data[i].param.length; j++) {
                            res.data[i].param[j].active = false
                        }
                    }
                    conText.commit("SET_ATTRS", { attrs: res.data })
                } else {
                    conText.commit("SET_ATTRS", { attrs: [] })
                }
                if (payload && payload.success && (res.code === 200 || res.code === 201)) {
                    payload.success()
                }

            })
        },
        resetScreen(conText, payload) {
            let array = conText.rootState.goods.classifys;
            for (let i = 0; i < array.length; i++) {
                if (array[i].active) {
                    array[i].active = false;
                    break
                }
            }
            conText.commit("RESET_SCREEN")
        }
    },

}