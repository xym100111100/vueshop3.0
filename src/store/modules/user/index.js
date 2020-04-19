import { loginData, updatePawData, updateCellphoneData, getUserInfoData, updateUserData, uploadHeadData, regUserData, safeUserData, safeOutLoginData, isRegData, checkVcodeData } from "../../../api/user";
let modules = {
    namespaced: true,
    state: {
        uid: localStorage['uid'] ? localStorage['uid'] : "",
        nickname: localStorage['nickname'] ? localStorage['nickname'] : "",
        isLogin: localStorage['isLogin'] ? Boolean(localStorage['isLogin']) : false,
        authToken: localStorage["authToken"] ? localStorage["authToken"] : "",
        head: localStorage["head"] ? localStorage["head"] : "",
        points: localStorage["points"] ? localStorage["points"] : 0,
    },
    getters: {//有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

    },
    mutations: {
        ["SET_LOGIN"](state, payload) {
            state.uid = payload.uid;
            state.nickname = payload.nickname;
            state.isLogin = payload.isLogin;
            state.authToken = payload.authToken;
            localStorage["uid"] = payload.uid;
            localStorage['nickname'] = payload.nickname;
            localStorage['isLogin'] = payload.isLogin;
            localStorage["authToken"] = payload.authToken;
        },
        ["OUT_LOGIN"](state) {
            state.uid = "";
            state.nickname = "";
            state.isLogin = false;
            state.authToken = "";
            state.head = "";
            state.points = 0
            localStorage.removeItem("uid");
            localStorage.removeItem("nickname");
            localStorage.removeItem("isLogin");
            localStorage.removeItem("authToken");
            localStorage.removeItem("cartData");
            localStorage.removeItem("head");
            localStorage.removeItem("points");
            sessionStorage.removeItem("addressId")
        },
        ["SET_USER_INFO"](state, payload) {
            state.head = payload.head;
            state.nickname = payload.nickname;
            state.points = payload.points;
            state.uid = payload.uid
            localStorage["head"] = payload.head;
            localStorage["points"] = payload.points;
            localStorage["nickname"] = payload.nickname;
            localStorage["uid"] = payload.uid;

        }
    },
    actions: {
        //会员登录
        login(conText, payload) {
            loginData(payload).then(res => {
                if (res.code === 200) {
                    conText.commit("SET_LOGIN", { uid: res.data.uid, nickname: res.data.nickname, isLogin: true, authToken: res.data.auth_token });
                }
                if (payload.success) {
                    payload.success(res)
                }
            })
        },
        //安全退出
        outLogin(conText) {
            safeOutLoginData({ uid: conText.state.uid }).then(res => {
                // console.log(res);
            });
            conText.rootState.cart.cartData = []
            conText.commit("OUT_LOGIN");
        },
        //会员安全认证
        safeUser(conText, payload) {
            // console.log(conText.state.uid);
            safeUserData({ uid: conText.state.uid, auth_token: conText.state.authToken }).then(res => {
                // console.log(res);
                if (res.code !== 200) {
                    conText.commit("OUT_LOGIN");
                }
                if (payload.success) {
                    payload.success(res)
                }
            });
        },
        checkVcode(conText, payload) {
            return checkVcodeData(payload.vcode).then((res) => {
                return res
            })
        },
        isReg(conText, payload) {
            return isRegData(payload.username).then((res) => {
                return res
            })
        },
        regUser(conText, payload) {
            regUserData(payload).then((res) => {
                console.log(res)
                if (payload && payload.success) {
                    payload.success(res)
                }
            })
        },
        getUserInfo(conText, payload) {
            getUserInfoData(conText.state.uid).then((res) => {
                if (res.code === 200) {
                    conText.commit("SET_USER_INFO", {
                        head: res.data.head,
                        points: res.data.points,
                        nickname: res.data.nickname,
                        authToken: res.data.authToken,
                        uid: res.data.uid
                    })
                }
                if (res.code === 200 && payload && payload.success) {
                    payload.success(res)
                }
            })
        },
        uploadHead(conText, payload) {
            uploadHeadData(payload).then((res) => {
                if (res.code === 200 && payload && payload.success) {
                    payload.success(res)
                }
            })
        },
        updateUser(conText, payload) {
            updateUserData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
                console.log(res)
                if (res.code === 200 && payload && payload.success) {
                    payload.success(res)
                }
            })
        },
        updateCellphone(conText, payload) {
            updateCellphoneData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
                if (res.code === 200 && payload && payload.success) {
                    payload.success(res)
                }
            })
        },
        updatePaw(conText, payload) {
            updatePawData({ ...payload, uid: conText.rootState.user.uid }).then((res) => {
                console.log(res)
                if (res.code === 200 && payload && payload.success) {
                    payload.success(res)
                }
            })
        }
    }
}
export default modules;