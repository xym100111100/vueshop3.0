import config from "../../assets/js/conf/config";
import { request } from "../../assets/js/utils/request";
// 首页快速导航
export function getNavsData() {
    return request(config.baseApi + "/home/index/nav?token=" + config.token);
}

// 首页轮播图
export function getSwipersData() {
    return request(config.baseApi + "/home/index/slide?token=" + config.token)
}
// 首页核心产品
export function getGoodsData(){
    return request(config.baseApi + "/home/index/goodsLevel?token=" + config.token)
}
// 推荐产品
export function getRcomgoodsData(){
    return request(config.baseApi + "/home/index/recom?token=" + config.token)
}