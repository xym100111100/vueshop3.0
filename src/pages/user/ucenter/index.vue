<template>
  <div>
    <div class="sub-header">
      <SubHeader title="个人中心" :isBack="false"></SubHeader>
    </div>
    <div class="user-info-wrap">
      <div class="head">
        <!--  这里切记要用require转成base64的格式，如果不加:变成表达式的形式就不用 -->
        <img :src="head?head:require('../../../assets/images/user/my/default-head.png')" alt />
      </div>
      <div class="nickname">昵称：{{username}}</div>
      <div class="points">我的积分：{{points}}</div>
    </div>
    <div class="order-name-wrap">
      <div class="order-name">全部订单</div>
      <div class="show-order">查看全部订单 &gt;</div>
    </div>
    <div class="order-status-wrap">
      <div class="item">
        <div class="icon wait"></div>
        <div class="text">待支付</div>
      </div>
      <div class="item">
        <div class="icon take"></div>
        <div class="text">待收货</div>
      </div>
      <div class="item">
        <div class="icon comment"></div>
        <div class="text">待评价</div>
      </div>
    </div>
    <div class="menu-list-wrap">
      <ul @click="$router.push('/user/profile')">
        <li>个人资料</li>
        <li></li>
      </ul>
      <ul @click="$router.push('/user/address')">
        <li>收货地址</li>
        <li></li>
      </ul>
      <ul @click="$router.push('/user/bind_cellphone')">
        <li>绑定手机</li>
        <li></li>
      </ul>
      <ul @click="$router.push('/user/mod_password')">
        <li>修改密码</li>
        <li></li>
      </ul>
      <ul @click="$router.push('/user/fav')">
        <li>我的收藏</li>
        <li></li>
      </ul>
      <div class="btn" @click=" isLogin?outLogin():goPage()">{{isLogin?'安全退出':'登录/注册'}}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import SubHeader from "../../../components/sub_header";
import { Dialog } from "vant";
Vue.use(Dialog);
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin,
      username: state => state.user.nickname,
      head: state => state.user.head,
      points: state => state.user.points
    })
  },
  created() {
    this.getUserInfo();
  },
  mounted() {
    document.title = this.$route.meta.title;
  },
  components: {
    SubHeader
  },
  methods: {
    ...mapActions({
      asynOutLogin: "user/outLogin",
      getUserInfo: "user/getUserInfo"
    }),
    goPage() {
      this.$router.push("/login");
    },
    outLogin() {
      Dialog.confirm({
        title: "",
        message: "是否退出"
      })
        .then(() => {
          this.asynOutLogin();
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.sub-header {
  width: 100%;
  height: 1rem;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  border-bottom: 1px solid #efefef;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
}
.sub-header .back {
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("../../../assets/images/home/goods/back.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.sub-header .title {
  width: 79%;
  height: auto;
  font-size: 0.32rem;
  text-align: center;
}
.sub-header .right-btn {
  width: auto;
  height: auto;
  font-size: 0.32rem;
}

.user-info-wrap {
  width: 100%;
  height: 2.8rem;
  background-image: url("../../../assets/images/user/my/mybg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  margin-top: 1.02rem;
  position: relative;
  z-index: 1;
}
.user-info-wrap .head {
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  z-index: 1;
  left: 5%;
  bottom: 15%;
}
.user-info-wrap .head img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.user-info-wrap .nickname {
  width: auto;
  height: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 1;
  left: 27%;
  bottom: 35%;
  font-size: 0.24rem;
  color: #ffffff;
}
.user-info-wrap .points {
  width: auto;
  height: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 1;
  left: 27%;
  bottom: 20%;
  font-size: 0.24rem;
  color: #ffffff;
}

.order-name-wrap {
  width: 100%;
  height: 0.8rem;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
  margin-bottom: 1px;
}
.order-name-wrap .order-name {
  font-size: 0.28rem;
  margin-left: 3%;
}
.order-name-wrap .show-order {
  font-size: 0.24rem;
  margin-right: 3%;
}

.order-status-wrap {
  width: 80%;
  height: 1.4rem;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding-left: 10%;
  padding-right: 10%;
}
.order-status-wrap .item {
  width: 1rem;
  height: auto;
}
.order-status-wrap .item .icon {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 auto;
}
.order-status-wrap .item .icon.wait {
  background-image: url("../../../assets/images/user/my/pay.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.order-status-wrap .item .icon.take {
  background-image: url("../../../assets/images/user/my/shouhuo.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.order-status-wrap .item .icon.comment {
  background-image: url("../../../assets/images/user/my/comment.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.order-status-wrap .item .text {
  width: 100%;
  font-size: 0.24rem;
  text-align: center;
}

.menu-list-wrap {
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  margin-top: 0.3rem;
}
.menu-list-wrap ul {
  width: 87%;
  height: 0.8rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding-left: 10%;
  padding-right: 3%;
}
.menu-list-wrap ul li:nth-child(1) {
  font-size: 0.32rem;
}
.menu-list-wrap ul li:nth-child(2) {
  width: 0.4rem;
  height: 0.4rem;
  background-image: url("../../../assets/images/common/right_arrow.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.menu-list-wrap .btn {
  width: 70%;
  height: 0.8rem;
  margin: 0 auto;
  background-color: #e51b19;
  border-radius: 5px;
  font-size: 0.32rem;
  color: #ffffff;
  text-align: center;
  line-height: 0.8rem;
  margin-top: 0.4rem;
}
</style>
