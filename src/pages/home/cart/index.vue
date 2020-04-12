<template>
  <div class="cart-main">
    <SubHeader title="购物车"></SubHeader>
    <div class="cart-list">
      <div class="select-btn active"></div>
      <div class="image-wrap">
        <div class="image">
          <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" />
        </div>
        <div class="del">删除</div>
      </div>
      <div class="goods-wrap">
        <div class="goods-title">鞋子</div>
        <div class="goods-attr">
          <span>
            颜色：
            <template>红色</template>
          </span>
        </div>
        <div class="buy-wrap">
          <div class="price">¥30</div>
          <div class="amount-input-wrap">
            <div class="btn dec">-</div>
            <div class="amount-input">
              <input type="tel" value="10" />
            </div>
            <div class="btn inc">+</div>
          </div>
        </div>
      </div>
    </div>
    <div class="orderend-wrap">
      <div class="select-area">
        <div class="select-wrap">
          <div class="select-btn"></div>
          <div class="select-text">全选</div>
        </div>
        <div class="total">
          运费：
          <span>¥10</span>&nbsp;&nbsp;合计：
          <span>¥20</span>
        </div>
      </div>
      <div class="orderend-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import SubHeader from "../../../components/sub_header";

export default {
  data() {
    return {
      isAllSelect: true
    };
  },
  created() {},
  mounted() {
    document.title = this.$route.meta.title;
  },
  computed: {},
  components: {
    SubHeader
  },
  methods: {}
};
</script>

<style scoped>
.cart-main {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2.2rem;
}

.cart-main .cart-list {
  width: 100%;
  height: 2.2rem;
  background-color: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  margin-top: 0.1rem;
}

.cart-main .cart-list .select-btn {
  width: 0.4rem;
  height: 0.4rem;
  border: #efefef solid 1px;
  border-radius: 100%;
  margin-left: 0.2rem;
  margin-right: 0.3rem;
}

.cart-main .cart-list .select-btn.active {
  background-image: url("../../../assets/images/home/cart/checkmark.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: #ffffff solid 1px;
}

.cart-main .cart-list .image-wrap {
  width: 1.2rem;
  margin-right: 0.3rem;
}

.cart-main .cart-list .image-wrap .image {
  width: 100%;
  height: 1.2rem;
}

.cart-main .cart-list .image-wrap .image img {
  width: 100%;
  height: 100%;
}

.cart-main .cart-list .image-wrap .del {
  width: 100%;
  text-align: center;
  font-size: 0.24rem;
  color: #b5b5b5;
  margin-top: 0.2rem;
}

.cart-main .cart-list .goods-wrap {
  width: 64%;
  font-size: 0.24rem;
}

.cart-main .cart-list .goods-wrap .goods-title {
  width: 100%;
}

.cart-main .cart-list .goods-wrap .goods-attr {
  width: 100%;
  margin-top: 0.1rem;
}

.cart-main .cart-list .goods-wrap .goods-attr span {
  padding-right: 0.3rem;
}

.cart-main .cart-list .goods-wrap .buy-wrap {
  width: 100%;
  height: 0.8rem;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
}

.cart-main .cart-list .goods-wrap .buy-wrap .price {
  font-size: 0.28rem;
  color: #cc0004;
  margin-top: 0.2rem;
}

.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap {
  width: 2.04rem;
  height: 0.5rem;
  border: 1px solid #000000;
  margin-right: 0.2rem;
  border-radius: 0.08rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}

.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .btn {
  width: 0.6rem;
  height: 0.4rem;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.4rem;
}

.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .btn.active {
  color: #b5b5b5;
}

.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .dec {
  border-right: 1px solid #000000;
}

.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .amount-input {
  width: 0.76rem;
  height: 100%;
}

.cart-main
  .cart-list
  .goods-wrap
  .buy-wrap
  .amount-input-wrap
  .amount-input
  input {
  width: 100%;
  height: 92%;
  text-align: center;
}

.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap .inc {
  border-left: 1px solid #000000;
}

.orderend-wrap {
  width: 100%;
  height: 1rem;
  background: #ffffff;
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 1.2rem;
  border-top: 1px solid #efefef;
  display: flex;
  display: -webkit-flex;
}

.orderend-wrap .select-area {
  width: auto;
  height: 100%;
  flex: 3;
  -webkit-flex: 3;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
}

.orderend-wrap .select-area .select-wrap {
  width: auto;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}

.orderend-wrap .select-area .select-wrap .select-text {
  font-size: 0.24rem;
}

.orderend-wrap .select-area .select-wrap .select-btn {
  width: 0.4rem;
  height: 0.4rem;
  border: #efefef solid 1px;
  border-radius: 100%;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
}

.orderend-wrap .select-area .select-wrap .select-btn.active {
  background-image: url("../../../assets/images/home/cart/checkmark.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: #ffffff solid 1px;
}

.orderend-wrap .orderend-btn {
  width: auto;
  height: 100%;
  flex: 1;
  -webkit-flex: 1;
  background: #cc0004;
  font-size: 0.32rem;
  color: #ffffff;
  text-align: center;
  line-height: 1rem;
}

.orderend-wrap .orderend-btn.disable {
  background: #bfbfbf;
}

.orderend-wrap .total {
  font-size: 0.24rem;
  margin-right: 0.2rem;
}

.orderend-wrap .total span {
  color: #cc0004;
}
</style>
