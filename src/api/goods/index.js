import config from '../../assets/js/conf/config'
import { request } from '../../assets/js/utils/request'

export function getClassifyData() {
   return request(config.baseApi + "/home/category/menu?token=" + config.token)
}

export function getGoodsData(cid = "") {
   return request(config.baseApi + "/home/category/show?cid=" + cid + "&token=" + config.token)
}