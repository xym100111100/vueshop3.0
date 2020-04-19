<template>
  <div class="page">
    <SubHeader title="个人资料" :isSave="true" @submit="submit()"></SubHeader>
    <div class="main">
      <ul class="head">
        <li>头像</li>
        <li>
          <img :src="head?head:require('../../../assets/images/user/my/default-head.png')" alt />
          <input @change="uploadHead" ref="headfile" type="file" />
        </li>
      </ul>
      <ul class="list">
        <li>昵称</li>
        <li>
          <input type="text" v-model="nickname" placeholder="请设置昵称" />
        </li>
        <li class="arrow"></li>
      </ul>
      <ul class="list">
        <li>性别</li>
        <li>
          <input v-model="showGender" @click="show=true" type="text" placeholder="请选择性别" readonly />
        </li>
        <li class="arrow"></li>
      </ul>
    </div>
    <van-action-sheet
      @select="onSelect"
      :actions="actions"
      v-model="show"
      cancel-text="取消"
      title="请选择性别"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet, Toast } from "vant";
import { mapActions } from "vuex";
import SubHeader from "../../../components/sub_header";
Vue.use(ActionSheet);
export default {
  data() {
    return {
      head: "",
      show: false,
      showGender: "",
      gender: "",
      actions: [{ name: "男" }, { name: "女" }],
      nickname: "",
      headData: ""
    };
  },
  created() {
    this.getUserInfo({
      success: res => {
        this.nickname = res.data.nickname;
        this.showGender = res.data.gender === "1" ? "男" : "女";
        this.head = res.data.head;
        this.gender = res.data.gender;
      }
    });
  },
  components: {
    SubHeader
  },
  methods: {
    ...mapActions({
      syncUploadHead: "user/uploadHead",
      updateUser: "user/updateUser",
      getUserInfo: "user/getUserInfo"
    }),
    uploadHead(e) {
      if (e.target.files[0]) {
        this.syncUploadHead({
          headfile: e.target.files[0],
          success: res => {
            this.head =
              "http://vueshop.glbuys.com/userfiles/head/" + res.data.msbox;
            this.headData = res.data.msbox;
          }
        });
      }
    },
    submit() {
      if (this.nickname.match(/^\s*$/)) {
        Toast("请输入昵称");
        return;
      }
      if (this.showGender.match(/^\s*$/)) {
        Toast("请选择性别");
        return;
      }
      this.updateUser({
        gender: this.gender,
        head: this.headData,
        nickname: this.nickname,
        success: res => {
          if(res.code === 200){
            this.$router.go(-1)
          }
        }
      });
    },
    onSelect(val) {
      this.show = false;
      this.showGender = val.name;
      this.gender = val.name === "男" ? "1" : "2";
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
}
.main {
  width: 100%;
  margin-top: 1.02rem;
}
.main ul.head {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.main ul.head li:nth-child(1) {
  font-size: 0.28rem;
  margin-left: 5%;
}
.main ul.head li:nth-child(2) {
  width: 1rem;
  height: 1rem;
  margin-right: 10%;
  position: relative;
  z-index: 1;
}
.main ul.head li:nth-child(2) img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.main ul.head li:nth-child(2) input {
  width: 100%;
  height: 95%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  opacity: 0;
}
.main ul.list {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  font-size: 0.28rem;
}
.main ul.list li:nth-child(1) {
  margin-left: 5%;
}
.main ul.list li:nth-child(2) {
  width: 50%;
  height: 100%;
  margin-left: 20%;
}
.main ul.list li:nth-child(2) input {
  width: 100%;
  height: 95%;
  text-align: right;
  font-size: 0.28rem;
}
.main ul.list li.arrow {
  width: 0.4rem;
  height: 0.4rem;
  background-image: url("../../../assets/images/common/right_arrow.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 3%;
}
</style>
