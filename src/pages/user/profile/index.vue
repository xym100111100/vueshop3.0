<template>
  <div class="page">
    <SubHeader title="个人资料" :isSave="true" @submit="submit()"></SubHeader>
    <div class="main">
      <ul class="head">
        <li>头像</li>
        <li>
          <img  alt />
          <input ref="headfile" type="file"  />
        </li>
      </ul>
      <ul class="list">
        <li>昵称</li>
        <li>
          <input type="text" placeholder="请设置昵称"  />
        </li>
        <li class="arrow"></li>
      </ul>
      <ul class="list">
        <li>性别</li>
        <li>
          <input
            type="text"
            placeholder="请选择性别"
            readonly
          />
        </li>
        <li class="arrow"></li>
      </ul>
    </div>
    <van-action-sheet
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
  components: {
    SubHeader
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
