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

export function getAddressInfoData(data) {
   let uid = data.uid ? data.uid : "";
   let aid = data.aid ? data.aid : "";
   return request(config.baseApi + "/user/address/info?uid=" + uid + "&aid=" + aid + "&token" + config.token)
}

export function modAddressData(data) {
   return request(config.baseApi + "/user/address/mod?token" + config.token, "post", data)

}

export function getDefaultAddressData(uid) {
   return request(config.baseApi + "/user/address/defaultAddress?uid=" + uid + "&token" + config.token)
}