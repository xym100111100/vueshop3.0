import config from "../../assets/js/conf/config"
import { request } from "../../assets/js/utils/request"

export function getAddressData(uid) {
   return request(config.baseApi + "/user/address/index?uid=" + uid + "&token=" + config.token)
}


export function delAddressData(data) {
   let uid = data.uid ? data.uid : "";
   let aid = data.aid ? data.aid : "";
   return request(config.baseApi + "/user/address/del?uid=" + uid + "&aid=" + aid + "&token" + config.token)
}

export function addAddressData(data) {
   return request(config.baseApi + "/user/address/add?token" + config.token, "post", data)
}