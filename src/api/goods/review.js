import config from '../../assets/js/conf/config'
import { request } from '../../assets/js/utils/request'

export function getReviewData(gid = "") {
   let url = config.baseApi + "/home/reviews/index?gid=" + gid + "&type=details&token=" + config.token;
   return request(url)
}