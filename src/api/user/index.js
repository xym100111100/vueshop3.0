import config from "../../assets/js/conf/config";
import { request } from "../../assets/js/utils/request";

//会员登录
export function loginData(data) {
    return request(config.baseApi + "/home/user/pwdlogin?token=" + config.token, "post", data)
}

//会员安全认证
export function safeUserData(data) {
    return request(config.baseApi + "/home/user/safe?token=" + config.token, "post", data)
}

//安全退出
export function safeOutLoginData(data) {
    return request(config.baseApi + "/home/user/safeout?token=" + config.token, "post", data)
}

// 检测图文验证码是否正确
export function checkVcodeData(vcode) {
    return request(config.baseApi + "/home/user/checkvcode?token=" + config.token, "post", { vcode })

}

export function isRegData(username) {
    return request(config.baseApi + "/home/user/isreg?token=" + config.token, "post", { username })
}

export function regUserData(data) {
    return request(config.baseApi + "/home/user/reg?token=" + config.token, "post", { data })
}

export function getUserInfoData(uid) {
    // 这里参数的写法有点不一样，但是和上面的get方法一个意思
    return request(config.baseApi + "/user/myinfo/userinfo/uid/" + uid + "?token=" + config.token)
}

export function uploadHeadData(data) {
    return request(config.baseApi + "/user/myinfo/formdatahead?token=" + config.token, "file", data)
}

export function updateUserData(data) {
    return request(config.baseApi + "/user/myinfo/updateuser?token=" + config.token, "post", data)
}

export function updateCellphoneData(data) {
    return request(config.baseApi + "/user/myinfo/updatecellphone?token=" + config.token, "post", data)
}


export function updatePawData(data) {
    return request(config.baseApi + "/user/myinfo/modpwd?token=" + config.token, "post", data)
}