<template>
  <div ref="goods-classify-content" class="goods-content-main">
    <div>
      <!-- 这里不能放v-if，不然会找不到高度 -->
      <div v-show="goods.length > 0" class="goods-wrap" v-for="(item,index) in goods" :key="index">
        <div class="classify-name">{{item.title}}</div>
        <div class="goods-items-wrap">
          <ul v-for="(item2,index2) in item.goods" :key="index2">
            <li>
              <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item2.image" alt />
            </li>
            <li>{{item2.title}}</li>
          </ul>
        </div>
      </div>
      <div v-show="goods.length <= 0" class="no-data">没有商品数据!</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import IScroll from "../../../assets/js/libs/iscroll";
export default {
  methods: {
    scrollPreventDefault(e) {
      e.preventDefault();
    },
    ...mapActions({
      getGoodsData: "goods/getGoods"
    }),
    init(cid) {
      this.getGoodsData({
        cid: cid,
        success: () => {
          this.$nextTick(() => {
            this.myIScroll.refresh();
            this.$utils.lazyImg();
          });
        }
      });
    }
  },
  created() {
    this.cid = this.$route.cid ? this.$route.cid : "";
    this.init(this.cid);
  },
  beforeRouteUpdate(to, from, next) {
    this.cid = to.query.cid ? to.query.cid : "";
    this.init(this.cid);
    next();
  },
  computed: {
    ...mapState({
      goods: state => state.goods.goods
    })
  },
  mounted() {
    this.$refs["goods-classify-content"].addEventListener(
      "touchmove",
      this.scrollPreventDefault
    );
    this.myIScroll = new IScroll(this.$refs["goods-classify-content"], {
      scrollX: false,
      scrollY: true,
      preventDefault: false
    });
    this.myIScroll.on("scrollEnd", () => {
      // 这里是处理图片懒加载，但是该插件lazyImg是监听window的scroll事件，所以这里需要回调
      this.$utils.lazyImg();
    });
  },
  beforeDestroy() {
    this.$refs["goods-classify-content"].removeEventListener(
      "touchmove",
      this.scrollPreventDefault
    );
  }
};
</script>

<style scoped>
.goods-content-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.goods-wrap {
  width: 100%;
  height: auto;
}
.goods-wrap .classify-name {
  font-size: 0.28rem;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  overflow: hidden;
}
.goods-wrap .goods-items-wrap {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  padding-top: 0.2rem;
  overflow: hidden;
}
.goods-wrap .goods-items-wrap ul {
  width: 32%;
  height: auto;
  float: left;
  margin-left: 0.5%;
  margin-right: 0.5%;
  margin-bottom: 0.2rem;
}
.goods-wrap .goods-items-wrap ul li:nth-child(1) {
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
}
.goods-wrap .goods-items-wrap ul li:nth-child(1) img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.goods-wrap .goods-items-wrap ul li:nth-child(2) {
  width: 90%;
  height: 0.8rem;
  font-size: 0.24rem;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.2rem;
}
</style>
