import config from '../../assets/js/conf/config';
import { request } from '../../assets/js/utils/request';

export function addOrderData(data) {
   return request(config.baseApi + "/order/add?token=" + config.token, "post", data)
}

export function getOrderNumData(uid) {
   return request(config.baseApi + "/order/lastordernum?uid=" + uid + "&token=" + config.token)
}

export function getMyOrderData(data) {
   return request(config.baseApi + "/user/myorder/index?uid=" + data.uid + "&status=" + data.status + "&token=" + config.token + "&page=" + data.page)
}

export function cancelOrderData(data) {
   return request(config.baseApi + "/user/myorder/clearorder?uid=" + data.uid + "&ordernum=" + data.ordernum + "&token=" + config.token)
}

export function getOrderDescData(data) {
   return request(config.baseApi + "/user/myorder/desc?uid=" + data.uid + "&ordernum=" + data.ordernum + "&token=" + config.token)
}
export function getReviewOrderData(data) {
   return request(config.baseApi + "/user/myorder/reviewOrder?uid=" + data.uid + "&token=" + config.token + "&page=" + data.page)
}


export function getReviewServiceData() {
   return request(config.baseApi + "/home/reviews/service?token=" + config.token)
}


export function addReviewData(data){
   return request(config.baseApi+"/home/reviews/add?token="+config.token,"post",data)
}