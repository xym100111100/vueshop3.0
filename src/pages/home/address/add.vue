<template>
  <div class="page">
    <SubHeader title="选择收货地址"></SubHeader>
    <div class="main">
      <ul>
        <li>收货人</li>
        <li>
          <input v-model="username" type="text" placeholder="收货人姓名" />
        </li>
      </ul>
      <ul>
        <li>联系方式</li>
        <li>
          <input v-model="cellphone" type="text" placeholder="联系人手机号" />
        </li>
      </ul>
      <ul>
        <li>所在地区</li>
        <li>
          <input
            type="text"
            v-model="showArea"
            @click="isShow=true"
            placeholder="请选择收货地址"
            class="area"
            readonly
          />
        </li>
      </ul>
      <ul>
        <li>详细地址</li>
        <li>
          <input v-model="address" type="text" placeholder="街道详细地址" />
        </li>
      </ul>
      <ul>
        <li>设置为默认地址</li>
        <li>
          <input v-model="isdefault" type="checkbox" checked />
        </li>
      </ul>
      <button type="button" class="submit-save" @click="sureSubmit">保存</button>
    </div>
    <van-popup v-model="isShow">
      <van-area :area-list="dataList" @cancel="isShow=false" @confirm="selectArea" />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import SubHeader from "../../../components/sub_header";
import dataList from "../../../assets/data/area";
import { Toast, Area, Popup } from "vant";
import { mapActions, mapState } from "vuex";
Vue.use(Area);
Vue.use(Popup);
export default {
  name: "address-add",
  data() {
    return {
      dataList,
      isShow: false,
      showArea: "",
      username: "",
      cellphone: "",
      address: "",
      isdefault: true,
      areaData: []
    };
  },
  created() {
    // 防止网速过慢两次提交
    this.isSubmit = true;
  },
  components: {
    SubHeader
  },
  computed: {
    ...mapState({
      uid: state => state.user.uid
    })
  },
  mounted() {
    document.title = this.$route.meta.title;
  },
  methods: {
    ...mapActions({
      addAddress: "address/addAddress"
    }),
    selectArea(val) {
      this.isShow = false;
      let data = [];
      if (val.length > 0) {
        for (let i = 0; i < val.length; i++) {
          data.push(val[i].name);
        }
        this.areaData = data;
      }
      this.showArea = data.join(" ");
    },
    sureSubmit() {
      if (this.showArea.match(/^\s*$/)) {
        Toast("请输入收件人地区");
        return;
      }
      if (this.username.match(/^\s*$/)) {
        Toast("请输入收件人姓名");
        return;
      }
      if (this.cellphone.match(/^\s*$/)) {
        Toast("请输入收件人手机");
        return;
      }
      if (this.address.match(/^\s*$/)) {
        Toast("请输入收件人地址");
        return;
      }
      if (this.isSubmit) {
        this.isSubmit = false;
        this.addAddress({
          uid: this.uid,
          name: this.username,
          cellphone: this.cellphone,
          province: this.areaData[0],
          city: this.areaData[1],
          area: this.areaData[2],
          address: this.address,
          isdefault: this.isdefault ? "1" : "0",
          success: res => {
            if (res.code === 200) {
              Toast({
                duration: 2000,
                message: "添加成功",
                onClose: () => {
                  this.$router.go(-1);
                }
              });
            }
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
}

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

.main {
  width: 100%;
  margin-top: 1rem;
}

.main ul {
  width: 100%;
  height: 1.02rem;
  border-bottom: #efefef 1px solid;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}

.main ul li {
  font-size: 0.32rem;
  margin-left: 0.3rem;
}

.main ul li:nth-child(2) {
  width: 62%;
  height: 100%;
}

.main ul li input[type="text"] {
  width: 100%;
  height: 95%;
  font-size: 0.32rem;
}

.main ul li .area {
  font-size: 0.28rem !important;
}

.main ul li input[type="checkbox"] {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.3rem;
}

.main .submit-save {
  width: 85%;
  height: 0.8rem;
  background-color: #fcb40a;
  border-radius: 4px;
  margin: 0 auto;
  display: block;
  border: 0 none;
  outline: none;
  font-size: 0.32rem;
  color: #ffffff;
  margin-top: 0.4rem;
}
</style>