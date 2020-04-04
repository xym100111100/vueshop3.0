<template>
  <div class="page">
    <div :class="{header:true, scroll:isScrollTop}">
      <div class="classify-icon"></div>
      <div class="search-wrap">
        <div class="search-icon"></div>
        <div class="text">请输入商品名称</div>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="banner-wrap">
      <div class="swiper-container" ref="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="//vueshop.glbuys.com/uploadfiles/1524206455.jpg" alt="滚动栏图片" />
          </div>
          <div class="swiper-slide">
            <img src="//vueshop.glbuys.com/uploadfiles/1524206455.jpg" alt="滚动栏图片" />
          </div>
          <div class="swiper-slide">
            <img src="//vueshop.glbuys.com/uploadfiles/1524206455.jpg" alt="滚动栏图片" />
          </div>
        </div>
        <div class="swiper-pagination" ref="swiper-pagination" ></div>
      </div>

      <!-- 使用两个//会自动拼接网站的http或https -->
    </div>
    <div class="quick-nav">
      <ul class="item">
        <li>
          <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt />
        </li>
        <li>潮流女装</li>
      </ul>
      <ul class="item">
        <li>
          <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt />
        </li>
        <li>潮流女装</li>
      </ul>
      <ul class="item">
        <li>
          <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt />
        </li>
        <li>潮流女装</li>
      </ul>
      <ul class="item">
        <li>
          <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt />
        </li>
        <li>潮流女装</li>
      </ul>
    </div>
    <div class="goods-main">
      <div class="classify-name color-0">—— 潮流女装 ——</div>
      <div class="goods-row-1">
        <div class="goods-column">
          <div class="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
          <div class="goods-tip">精品打折</div>
          <div class="goods-price bg-color-0">128元</div>
          <div class="goods-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt />
          </div>
        </div>
        <div class="goods-column">
          <div class="goods-list">
            <div class="goods-list-title">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
            <div class="goods-list-tip">品质精挑</div>
            <div class="goods-list-image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt />
            </div>
          </div>
          <div class="goods-list">
            <div class="goods-list-title">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
            <div class="goods-list-tip">品质精挑</div>
            <div class="goods-list-image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="goods-row-2">
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
      </div>
    </div>
    <div class="goods-main">
      <div class="classify-name color-1">—— 品牌男装 ——</div>
      <div class="goods-row-1">
        <div class="goods-column-2">
          <div class="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
          <div class="goods-tip">火爆开售</div>
          <div class="goods-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt />
          </div>
        </div>
        <div class="goods-column-2">
          <div class="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
          <div class="goods-tip">火爆开售</div>
          <div class="goods-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt />
          </div>
        </div>
      </div>
      <div class="goods-row-2">
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
      </div>
    </div>
    <div class="goods-main">
      <div class="classify-name color-2">—— 电脑办公 ——</div>
      <div class="goods-row-1">
        <div class="goods-column">
          <div class="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
          <div class="goods-tip">精品打折</div>
          <div class="goods-price bg-color-2">128元</div>
          <div class="goods-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt />
          </div>
        </div>
        <div class="goods-column">
          <div class="goods-list">
            <div class="goods-list-title">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
            <div class="goods-list-tip">品质精挑</div>
            <div class="goods-list-image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt />
            </div>
          </div>
          <div class="goods-list">
            <div class="goods-list-title">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
            <div class="goods-list-tip">品质精挑</div>
            <div class="goods-list-image">
              <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="goods-row-2">
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
        <div class="goods-list">
          <div class="goods-list-title">小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
          <div class="goods-list-image">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt />
          </div>
          <div class="goods-list-price">¥288</div>
          <div class="price-line">¥568</div>
        </div>
      </div>
    </div>
    <div class="goods-recom-nav">
      <div class="line"></div>
      <div class="recom-wrap">
        <div class="icon"></div>
        <div class="text">为您推荐</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="goods-recm">
      <div class="goods-list">
        <div class="goods-image">
          <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt />
        </div>
        <div class="goods-title">ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</div>
        <div class="goods-price">¥399</div>
      </div>
      <div class="goods-list">
        <div class="goods-image">
          <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt />
        </div>
        <div class="goods-title">ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</div>
        <div class="goods-price">¥399</div>
      </div>
      <div class="goods-list">
        <div class="goods-image">
          <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt />
        </div>
        <div class="goods-title">ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女</div>
        <div class="goods-price">¥399</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../../assets/js/libs/swiper";
export default {
  name: "index",
  data() {
    return {
      isScrollTop: true
    };
  },
  created() {
    window.addEventListener("scroll", this.eventScrollTop);
    // 不需要渲染到页面的全局变量就放在这里面
    this.isScroll = true;
  },
  mounted() {
    new Swiper(this.$refs["swiper-container"], {
      autoplay: 1000,
      pagination: this.$refs["swiper-pagination"],
      paginationClickable :true,
      autoplayDisableOnInteraction : false,

    });
  },
  methods: {
    eventScrollTop() {
      // 这个document.body.scrollTop是ie和 Safari
      // 这个document.documentElement.scrollTop谷歌
      // 这个是性能问题，必须是用this.isScroll全局变量搞定
      let isScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (isScrollTop >= 150) {
        if (this.isScroll) {
          this.isScroll = false;
          console.log(true);
          this.isScrollTop = true;
        }
      } else {
        if (this.isScroll === false) {
          console.log(false);
          this.isScroll = true;
          this.isScrollTop = false;
        }
      }
    }
  },

  destroyed() {
    // 卸载监听时间，但是keep-alive的页面需要使用下面的
    window.removeEventListener("scroll", this.eventScrollTop);
  },
  activated() {
    // 这里也是因为keep-alive的原因，不只是要在created中监听，这里也要，否则切换回来监听事件会无法监听
    // 与下面的deactivated是用来做keep-alive的
    window.addEventListener("scroll", this.eventScrollTop);
  },
  deactivated() {
    window.removeEventListener("scroll", this.eventScrollTop);
  }
};
</script>

<style scoped>
@import "../../../assets/css/common/swiper.css";
.page {
  /* 这里必须定义，这样后面好找问题 ,而且可以撑开与底部的距离*/
  width: 100%;
  height: 100%;
  margin-bottom: 1.4rem;
}
.header {
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  /* hsla 即色相、饱和度、亮度、透明度（英语：Hue, Saturation, Lightness, Alpha */
  /**表示渐变由rgba(90, 51, 51, 0.2) 到  hsla(0, 0%, 100%, 0) */
  background: linear-gradient(rgba(90, 51, 51, 0.2), hsla(0, 0%, 100%, 0));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.header.scroll {
  background: linear-gradient(#eb1625, hsla(0, 0%, 100%, 0));
}
.header .classify-icon {
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../../../assets/images/common/class.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.header .search-wrap {
  width: 5.26rem;
  height: 0.52rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
}
.header .search-wrap .search-icon {
  width: 0.44rem;
  height: 0.44rem;
  background-image: url("../../../assets/images/common/search.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 0.2rem;
}
.header .search-wrap .text {
  font-size: 0.32rem;
  color: #ffffff;
}
.header .login {
  width: auto;
  height: 0.44rem;
  font-size: 0.32rem;
  color: #ffffff;
}
.banner-wrap {
  width: 100%;
  height: 3.66rem;
}
.banner-wrap img {
  height: 100%;
  width: 100%;
}
.quick-nav {
  width: 100%;
  height: 1.6rem;
  background-color: #ffffff;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0.2rem;
  box-sizing: border-box;
}
.quick-nav .item {
  width: 1.4rem;
}
.quick-nav .item li:nth-child(1) {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
}
.quick-nav .item li:nth-child(1) img {
  height: 100%;
  width: 100%;
}
.quick-nav .item li:nth-child(2) {
  font-size: 0.28rem;
  color: #7b7f82;
  text-align: center;
  margin-top: 0 0.2rem;
}
.goods-main {
  height: 7.36rem;
  width: 100%;
  background-color: #ffffff;
  margin-top: 0.2rem;
}

.goods-main .classify-name {
  width: 100%;
  height: 0.64rem;
  border-bottom: 1px solid #efefef;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.64rem;
}

/* color-0 这个中带数字的命名是为了做for循环对应索引 */
.goods-main .classify-name.color-0 {
  color: #f73b61;
}
.goods-main .classify-name.color-1 {
  color: #fe6719;
}
.goods-main .classify-name.color-2 {
  color: #5fc600;
}
.goods-main .goods-row-1 {
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #efefef;
  display: flex;
}
.goods-main .goods-row-1 .goods-column,
.goods-main .goods-row-1 .goods-column-2 {
  width: 50%;
  height: 100%;
  border-right: 1px solid #efefef;
  position: relative;
}

.goods-main .goods-row-1 .goods-column .goods-title {
  width: 91%;
  height: 0.32rem;
  overflow: hidden;
  position: absolute;
  left: 0.2rem;
  font-size: 0.28rem;
  font-weight: bold;
  top: 0.1rem;
}
.goods-main .goods-row-1 .goods-column .goods-tip {
  width: auto;
  height: auto;
  font-size: 0.28rem;
  left: 0.2rem;
  top: 0.6rem;
  position: absolute;
  color: #cb385d;
}
.goods-main .goods-row-1 .goods-column .goods-price {
  width: auto;
  height: 0.4rem;
  border-radius: 8px;
  position: absolute;
  right: 1rem;
  top: 0.6rem;
  color: #ffffff;
  font-size: 0.28rem;
}
.goods-main .goods-row-1 .goods-column .goods-price.bg-color-0 {
  background: #f21d4f;
}
.goods-main .goods-row-1 .goods-column .goods-price.bg-color-2 {
  background: #5fc600;
}

.goods-main .goods-row-1 .goods-column .goods-image {
  width: 3rem;
  height: 2rem;
  position: absolute;
  bottom: 0.3rem;
  left: 0.35rem;
}
.goods-main .goods-row-1 .goods-column .goods-image img {
  height: 100%;
  width: 100%;
}

.goods-main .goods-row-1 .goods-column .goods-list {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #efefef;
  position: relative;
}
.goods-main .goods-row-1 .goods-column .goods-list-title {
  width: 2.04rem;
  height: 0.32rem;
  font-size: 0.28rem;
  position: absolute;
  overflow: hidden;
  font-weight: bold;
  left: 0.2rem;
  top: 0.1rem;
}

.goods-main .goods-row-1 .goods-column .goods-list-tip {
  height: auto;
  width: auto;
  font-size: 0.28rem;
  left: 0.2rem;
  position: absolute;
  top: 0.5rem;
  color: #7b7f82;
}

.goods-main .goods-row-1 .goods-column .goods-list-image {
  height: 1.2rem;
  width: 1.2rem;
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
}
.goods-main .goods-row-1 .goods-column .goods-list-image img {
  height: 100%;
  width: 100%;
}
.goods-main .goods-row-2 {
  width: 100%;
  height: 3.2rem;
  display: flex;
}
.goods-main .goods-row-2 .goods-list {
  width: 25%;
  height: 100%;
  border-right: 1px solid #efefef;
  box-sizing: border-box;
}
.goods-main .goods-row-2 .goods-list .goods-list-title {
  height: 0.4rem;
  width: 100%;
  font-size: 0.28rem;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
}
.goods-main .goods-row-2 .goods-list .goods-list-image {
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.goods-main .goods-row-2 .goods-list .goods-list-image img {
  height: 100%;
  width: 100%;
}

.goods-main .goods-row-2 .goods-list .goods-list-price {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 0.28rem;
  margin-top: 0.1rem;
  color: #d32a4e;
}
.goods-main .goods-row-2 .goods-list .price-line {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 0.28rem;
  margin-top: 0.1rem;
  color: #7b7f82;
  text-decoration: line-through;
}

/* 第二个box，注意还有上面同时设置的 */

.goods-main .goods-row-1 .goods-column-2 .goods-title {
  width: 98%;
  height: 0.32rem;
  overflow: hidden;
  font-size: 0.28rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.1rem;
}
.goods-main .goods-row-1 .goods-column-2 .goods-tip {
  width: auto;
  height: auto;
  font-size: 0.28rem;
  color: #7b7f82;
  text-align: center;
  margin-top: 0.1rem;
}

.goods-main .goods-row-1 .goods-column-2 .goods-image {
  width: 1.8rem;
  height: 2rem;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.goods-main .goods-row-1 .goods-column-2 .goods-image img {
  height: 100%;
  width: 100%;
}

.goods-recom-nav {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods-recom-nav .line {
  width: 35%;
  background-color: #d4d4d4;
  height: 1px;
}
.goods-recom-nav .recom-wrap {
  width: 2.1rem;
  height: 0.48rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.goods-recom-nav .recom-wrap .icon {
  height: 0.4rem;
  width: 0.4rem;
  background-image: url("../../../assets/images/home/index/recom.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.goods-recom-nav .recom-wrap .text {
  width: auto;
  height: auto;
  font-size: 0.32rem;
}
.goods-recm {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.goods-recm .goods-list {
  width: 48%;
  height: 4.5rem;
  background-color: #ffffff;
  margin-top: 0.2rem;
}
.goods-recm .goods-list .goods-image {
  height: 2.8rem;
  width: 2.8rem;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.goods-recm .goods-list .goods-image img {
  height: 100%;
  width: 100%;
}
.goods-recm .goods-list .goods-title {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
  font-size: 0.28rem;
  margin-top: 0.1rem;
}
.goods-recm .goods-list .goods-price {
  width: auto;
  height: auto;
  font-size: 0.28rem;
  color: #d32a4e;
  margin-top: 0.1rem;
}
</style>