<template>
  <div>
    <div
      class="order-list"
      v-for="(item,index) in reviews"
      @click="$router.push('/user/order/details?ordernum='+item.ordernum)"
      :key="index"
    >
      <div class="ordernum-wrap">
        <div class="ordernum">订单编号：{{item.ordernum}}</div>
        <div class="status">{{item.status==="2"&&"已收货"}}</div>
      </div>
      <div class="item-list" v-for="(item2,index2) in item.goods" :key="index2">
        <div class="image">
          <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item2.image" alt />
        </div>
        <div class="title">{{item2.title}}</div>
        <div class="amount">x {{item2.amount}}</div>
        <div
          class="status-btn"
          @click.stop="$router.push('/user/order/add_review?ordernum='+item.ordernum+'&gid='+item2.gid)"
        >{{item2.status==="0"?"评价":"追加评价"}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UpRefresh from "../../../assets/js/libs/uprefresh";
export default {
  name: "order-reivew",
  created() {
    this.init();
  },
  computed: {
    ...mapState({
      reviews: state => state.order.reviews
    })
  },
  methods: {
    ...mapActions({
      getReviewOrder: "order/getReviewOrder",
      getReviewOrderPage: "order/getReviewOrderPage"
    }),
    init() {
      this.getReviewOrder({
        page: 1,
        success: pagenum => {
          this.$nextTick(() => {
            this.pullUp = new UpRefresh();
            this.$utils.lazyImg();
            this.pullUp.init(
              {
                curPage: 1,
                maxPage: parseInt(pagenum),
                offsetBottom: 100
              },
              page => {
                this.getReviewOrderPage({
                  page,
                  success: () => {
                    this.$utils.lazyImg();
                  }
                });
              }
            );
          });
        }
      });
    }
  },
  beforeDestroy() {
    this.pullUp.uneventSrcoll();
  }
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
  height: 2.4rem;
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
  max-height: 0.8rem;
  overflow: hidden;
}

.item-list .amount {
  width: auto;
  height: auto;
  position: absolute;
  z-index: 1;
  right: 2%;
  bottom: 0.8rem;
  font-size: 0.24rem;
  color: #909090;
}

.item-list .status-btn {
  font-size: 0.24rem;
  width: 1.24rem;
  height: 0.52rem;
  line-height: 0.52rem;
  text-align: center;
  border: 1px solid #f15353;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  right: 2%;
  bottom: 0.2rem;
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
</style>