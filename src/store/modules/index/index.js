import { getNavsData, getSwipersData, getGoodsData, getRcomgoodsData } from "../../../api/index";

export default {
    namespaced: true,
    state: {
        navs: [],
        swipers: [],
        goods: [],
        recomgoods: []

    },
    mutations: {
        ["SET_NAVS"](state, payload) {
            state.navs = payload.navs;
        },
        ["SET_SWIPERS"](state, payload) {
            state.swipers = payload.swipers
        },
        ["SET_GOODS"](state, payload) {
            state.goods = payload.swipers
        },
        ["SET_RCOMGOODS"](state, payload) {
            state.recomgoods = payload.recomgoods
        }
    },
    actions: {
        getNavs(conText, payload) {
            getNavsData().then(res => {
                if (res.code === 200) {
                    conText.commit("SET_NAVS", { navs: res.data });
                    // 成功后执行回调函数
                    if (payload && payload.success) {
                        payload.success()
                    }
                } else {
                    // 失败时回调
                    if (payload && payload.error) {
                        payload.error(res)
                    }
                }
            })
        },
        getSwipers(conText, payload) {
            getSwipersData().then(res => {
                if (res.code === 200) {
                    conText.commit("SET_SWIPERS", { swipers: res.data })
                    // 成功后执行回调函数
                    if (payload && payload.success) {
                        payload.success()
                    } else {
                        // 失败时回调
                        if (payload && payload.error) {
                            payload.error(res)
                        }
                    }

                }

            })
        },
        getGoods(conText, payload) {

            getGoodsData().then(res => {
                if (res.code === 200) {
                    conText.commit("SET_GOODS", { swipers: res.data })
                    // 成功后执行回调函数
                    if (payload && payload.success) {
                        payload.success()
                    } else {
                        // 失败时回调
                        if (payload && payload.error) {
                            payload.error(res)
                        }
                    }

                }

            })
        },
        getRcomgoods(conText, payload) {

            getRcomgoodsData().then(res => {
                if (res.code === 200) {
                    conText.commit("SET_RCOMGOODS", { recomgoods: res.data })
                    // 成功后执行回调函数
                    if (payload && payload.success) {
                        payload.success()
                    } else {
                        // 失败时回调
                        if (payload && payload.error) {
                            payload.error(res)
                        }
                    }

                }

            })
        }
    }
}