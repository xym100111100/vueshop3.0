<template>
  <div>
    <div class="order-list">
      <div class="ordernum-wrap">
        <div class="ordernum">订单编号：123456</div>
        <div class="status">已收货</div>
      </div>
      <div class="item-list">
        <div class="image">
          <img src="../../../assets/images/common/lazyImg.jpg" alt />
        </div>
        <div class="title">名字</div>
        <div class="amount">x 20</div>
      </div>
      <div class="total-wrap">
        <div class="total">实付金额：¥150.6</div>
        <div class="status-wrap">
          <div class="status-btn">取消订单</div>
          <div class="status-btn">去付款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UpRefresh from "../../../assets/js/libs/uprefresh";
import { Dialog } from "vant";
export default {
  name: "order-list"
};
</script>

<style scoped>
.order-list {
  width: 100%;
  height: auto;
}

.order-list .ordernum-wrap {
  width: 96%;
  height: 0.8rem;
  border-bottom: #efefef 1px solid;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
  -webkit-align-items: center;
}

.order-list .ordernum-wrap .ordernum,
.order-list .ordernum-wrap .status {
  width: auto;
  height: auto;
  font-size: 0.28rem;
}

.item-list {
  width: 100%;
  height: 1.6rem;
  border-bottom: #efefef 1px solid;
  position: relative;
  z-index: 1;
}

.item-list .image {
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  z-index: 1;
  left: 2%;
  top: 0.2rem;
}

.item-list .image img {
  width: 100%;
  height: 100%;
}

.item-list .title {
  width: 72%;
  height: auto;
  font-size: 0.28rem;
  position: absolute;
  z-index: 1;
  left: 22%;
  top: 0.2rem;
}

.item-list .amount {
  width: auto;
  height: auto;
  position: absolute;
  z-index: 1;
  right: 2%;
  bottom: 0.2rem;
  font-size: 0.24rem;
  color: #909090;
}

.total-wrap {
  width: 96%;
  height: 0.8rem;
  border-bottom: 1px solid #f17f1f;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
}

.total-wrap .total {
  font-size: 0.28rem;
}

.total-wrap .status-btn {
  font-size: 0.24rem;
  width: 1.24rem;
  height: 0.52rem;
  line-height: 0.52rem;
  text-align: center;
  border: 1px solid #f15353;
  border-radius: 4px;
  margin-left: 0.2rem;
}

.total-wrap .status-wrap {
  display: flex;
  width: auto;
  justify-content: flex-end;
}
</style>