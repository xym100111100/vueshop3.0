import config from '../../assets/js/conf/config'
import { request } from '../../assets/js/utils/request'

export function getClassifyData() {
   return request(config.baseApi + "/home/category/menu?token=" + config.token)
}

export function getGoodsData(cid = "") {
   return request(config.baseApi + "/home/category/show?cid=" + cid + "&token=" + config.token)
}
export function getGoodsDetailData(gid = "") {
   let url = config.baseApi + "/home/goods/info?gid=" + gid + "&type=details&token=" + config.token;
   return request(url)
}

export function getSpecData(gid = "") {
   let url = config.baseApi + "/home/goods/info?gid=" + gid + "&type=spec&token=" + config.token;
   return request(url)
}