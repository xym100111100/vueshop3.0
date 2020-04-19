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

export function addFavData(data) {
   return request(config.baseApi + "/goods/fav?uid=" + data.uid + "&gid=" + data.gid + "&token=" + config.token)
}

export function getFavData(data) {
   return request(config.baseApi + "/user/fav/index?uid=" + data.uid + "&token=" + config.token + "&page=" + data.page)
}

export function delFavData(data) {
   return request(config.baseApi + "/user/fav/del?uid=" + data.uid + "&fid=" + data.fid + "&token=" + config.token)
}