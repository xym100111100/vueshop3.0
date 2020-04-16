import config from '../../assets/js/conf/config';
import { request } from '../../assets/js/utils/request';

export function addOrderData(data) {
   return request(config.baseApi + "/order/add?token=" + config.token, "post", data)
}

export function getOrderNumData(uid) {
   return request(config.baseApi + "/order/lastordernum?uid=" + uid + "&token=" + config.token)
}
