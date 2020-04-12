import Vue from 'vue'
import Vuex from 'vuex';
import user from "./modules/user";
import index from "./modules/index";
import goods from "./modules/goods"
import search from "./modules/search";
import review from "./modules/goods/review"

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user,
        index,
        goods,
        search,
        review
    }
});

export default store;