import Vue from 'vue'
import Vuex from 'vuex';
import user from "./modules/user";
import index from "./modules/index";
import goods from "./modules/goods"
import search from "./modules/search";
import review from "./modules/goods/review"
import cart from "./modules/cart"
import address from "./modules/address"
import order from "./modules/order"

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        cart,
        user,
        index,
        goods,
        search,
        review,
        address,
        order
    }
});

export default store;