<template>
  <div class="page">
    <SubHeader title="会员注册"></SubHeader>
    <div class="main">
      <div class="inputs">
        <input v-model="vcode" type="text" placeholder="验证码" />
        <div class="vcode-img">
          <img @click="getCode($event)" :src="showCode" />
        </div>
      </div>
      <div class="cellphone-wrap">
        <div class="cellphone">
          <input v-model="username" @input="checkUsername" type="tel" placeholder="请输入手机号" />
        </div>
        <div :class="{'code-btn':true,success:isSendMsgCode}" @click="getMsgCode">{{msgCodetext}}</div>
      </div>
      <div class="code-wrap">
        <input v-model="msgCode" type="text" placeholder="请输入短信验证码" />
      </div>
      <div class="password-wrap">
        <div class="password">
          <input v-model="password" :type="isOpen?'text':'password'" placeholder="请输入密码" />
        </div>
        <div class="switch-wrap">
          <van-switch v-model="isOpen" active-color="#EB1625" />
        </div>
      </div>
      <div class="sure-btn" @click="submit">注册</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import { Toast, Switch } from "vant";
import SubHeader from "../../../components/sub_header";
Vue.use(Toast);
Vue.use(Switch);
export default {
  data() {
    return {
      showCode:
        this.$config.baseApi + "/vcode/chkcode?token=" + this.$config.token,
      vcode: "",
      username: "",
      isOpen: false,
      password: "",
      msgCode: "",
      isSendMsgCode: false,
      msgCodetext: "获取手机验证码"
    };
  },
  components: {
    SubHeader
  },
  created() {
    this.timer = null;
  },
  methods: {
    ...mapActions({
      checkVcode: "user/checkVcode",
      isReg: "user/isReg",
      regUser: "user/regUser"
    }),
    getCode(e) {
      // 后面的时间戳是为了没有缓存
      e.target.src =
        this.$config.baseApi +
        "/vcode/chkcode?token=" +
        this.$config.token +
        "&random=" +
        new Date().getTime();
    },
    async submit() {
      if (this.vcode.match(/^\s*$/)) {
        Toast("请输入验证码");
        return;
      }
      if (this.msgCode.match(/^\s*$/)) {
        Toast("请输入短信验证码");
        return;
      }
      if (this.username.match(/^\s*$/)) {
        Toast("请输入手机号");
        return;
      }
      if (this.password.match(/^\s*$/)) {
        Toast("请输入密码");
        return;
      }

      // 这里的写法注意，除了加async，await，还有store哪里也要变成返回的形式。
      await this.checkVcode({ vcode: this.vcode });
      await this.isReg({ username: this.username });
      await this.regUser({
        vcode: this.vcode,
        cellphone: this.username,
        password: 123456,
        success: res => {
          console.log(res);
          if (this.$route.query.from === "reg") {
            this.$router.go(-3);
          } else {
            this.$router.go(-1);
          }
        }
      });
    },
    getMsgCode() {
      if (this.isSendMsgCode) {
        let time = 10;
        this.isSendMsgCode = false;
        this.msgCodetext = "重新获取(" + time + ")";
        this.timer = setInterval(() => {
          if (time > 0) {
            time -= 1;
            this.msgCodetext = "重新获取(" + time + ")";
          } else {
            clearInterval(this.timer);
            this.isSendMsgCode = true;
            this.msgCodetext = "获取手机验证码";
          }
        }, 1000);
      }
    },
    checkUsername() {
      if (this.username.length === 11) {
        this.isSendMsgCode = true;
      } else {
        this.isSendMsgCode = false;
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
}
.main {
  width: 100%;
  padding-top: 1.4rem;
}
.cellphone-wrap {
  width: 90%;
  height: 0.84rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  margin-top: 0.4rem;
}
.cellphone-wrap .cellphone {
  width: 62%;
  height: 100%;
  border: #efefef solid 1px;
  border-radius: 2px;
}
.cellphone-wrap .cellphone input,
.code-wrap input,
.password-wrap .password input {
  width: 92%;
  height: 95%;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}
.cellphone-wrap .code-btn {
  width: 35%;
  height: 0.82rem;
  background: #eaeaea;
  color: #717376;
  border: #eaeaea solid 1px;
  border-radius: 2px;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.82rem;
}
.cellphone-wrap .code-btn.success {
  background: #ffffff;
  border: 1px solid #eb1625;
  color: #eb1625;
}
.code-wrap {
  width: 90%;
  height: 0.84rem;
  margin: 0 auto;
  border-radius: 2px;
  border: #efefef solid 1px;
  margin-top: 0.4rem;
}
.password-wrap {
  width: 90%;
  height: 0.84rem;
  margin: 0 auto;
  border-radius: 2px;
  border: #efefef solid 1px;
  margin-top: 0.4rem;
  display: flex;
  display: -webkit-flex;
}
.password-wrap .password {
  width: 80%;
  height: 100%;
}
.password-wrap .switch-wrap {
  width: 20%;
  margin-top: 0.1rem;
}
.sure-btn {
  width: 85%;
  height: 0.8rem;
  margin: 0 auto;
  background: #eb1625;
  font-size: 0.36rem;
  color: #ffffff;
  line-height: 0.8rem;
  text-align: center;
  margin-top: 0.4rem;
  border-radius: 4px;
}
.fastreg-wrap {
  width: 85%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  font-size: 0.24rem;
  margin: 0 auto;
  margin-top: 0.3rem;
}
.fastreg-wrap img {
  width: 0.32rem;
  height: 0.32rem;
  vertical-align: middle;
}

.inputs {
  width: 90%;
  height: 0.84rem;
  border: #efefef solid 1px;
  border-radius: 2px;
  background: #ffffff;
  margin: 0 auto;
  line-height: 0.84rem;
  padding-left: 0.2rem;
  font-size: 0.28rem;
  position: relative;
  box-sizing: border-box;
}
.inputs .vcode-img {
  width: 20%;
  height: 60%;
  position: absolute;
  right: 0px;
  top: 20%;
  border-left: 1px solid #efefef;
  text-align: center;
}
.inputs .vcode-img img {
  width: 80%;
  height: 100%;
}
.inputs input {
  width: 80%;
  height: 88%;
}
</style>
