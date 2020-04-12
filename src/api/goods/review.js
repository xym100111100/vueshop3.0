import config from '../../assets/js/conf/config'
import { request } from '../../assets/js/utils/request'

export function getReviewData(gid = "") {
   let url = config.baseApi + "/home/reviews/index?gid=" + gid + "&type=details&token=" + config.token;
   return request(url)
}


export function getReviewPage(data) {
   let page = data.page ? data.page : 1;
   let gid = data.gid ? data.gid : "";
   let url = config.baseApi + "/home/reviews/index?gid=" + gid + "&page=" + page + "&token=" + config.token;
   console.log(url)
   return request(url)
}