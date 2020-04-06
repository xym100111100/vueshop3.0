<template>
  <div class="page">
    <div class="search-header">
      <div class="back" @click="goBack()"></div>
      <div class="search">请输入宝贝名称</div>
    </div>
    <div class="goods-main">
      <div ref="scroll-classify" class="classify-wrap">
        <div>
          <div
            @click="replacePage('/goods/classify/item?cid='+item.cid,index)"
            ref="item"
            :class="{'classify-item':true, active:item.active}"
            v-for="(item,index) in classifys"
            :key="index"
          >{{item.title}}</div>
        </div>
      </div>
      <div class="goods-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from "../../../assets/js/libs/iscroll";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions({
      getClassifyData: "goods/getClassify"
    }),
    ...mapMutations({
      SELECT_ITEM: "goods/SELECT_ITEM"
    }),
    replacePage(url, index) {
      this.$router.replace(url);
      this.selectItem(index);
    },
    goBack() {
      this.$router.go(-1);
    },
    scrollPreventDefault(e) {
      e.preventDefault();
    },
    selectItem(index) {
      // 点击后滚动到某个位置(x,y,time,style)
      let topHeight = this.$refs["item"][0].offsetHeight * index;
      let halHeight = parseInt(this.$refs["scroll-classify"].offsetHeight / 3);
      let bottomHeight = parseInt(
        this.$refs["scroll-classify"].scrollHeight - topHeight
      );
      if (
        topHeight > halHeight &&
        bottomHeight > this.$refs["scroll-classify"].offsetHeight
      ) {
        this.myIScroll.scrollTo(
          0,
          -topHeight,
          2000,
          IScroll.utils.ease.elastic
        );
      }

      this.SELECT_ITEM({ index });
    }
  },
  created() {
    this.getClassifyData({
      success: () => {
        this.$nextTick(() => {
          this.myIScroll.refresh();
        });
      }
    });
  },
  computed: {
    ...mapState({
      classifys: state => state.goods.classifys
    })
  },
  mounted() {
    document.title = this.$route.meta.title;
    this.$refs["scroll-classify"].addEventListener(
      "touchmove",
      this.scrollPreventDefault
    );
    this.myIScroll = new IScroll(this.$refs["scroll-classify"], {
      scrollX: false,
      scrollY: true,
      preventDefault: false
    });
  },
  beforeDestroy() {
    this.$refs["scroll-classify"].removeEventListener(
      "touchmove",
      this.scrollPreventDefault
    );
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.query.cid);
    next();
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.search-header {
  width: 100%;
  height: 1rem;
  background: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  border-bottom: 1px solid #efefef;
}
.search-header .back {
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("../../../assets/images/home/goods/back.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.search-header .search {
  width: 80%;
  height: 0.69rem;
  border: solid 1px #b2b2b2;
  border-radius: 0.1rem;
  font-size: 0.28rem;
  color: #626262;
  line-height: 0.69rem;
  padding-left: 0.2rem;
}

.goods-main {
  width: 100%;
  height: 92.5vh;
  display: flex;
  display: -webkit-flex;
}
.goods-main .classify-wrap {
  width: 1.72rem;
  height: 100%;
  overflow: hidden;
  margin-right: 3%;
  position: relative;
  z-index: 1;
}
.goods-main .classify-wrap .classify-item {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #efefef;
  background-color: #ffffff;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.8rem;
  overflow: hidden;
}
.goods-main .classify-wrap .classify-item.active {
  color: #ff0000;
}
.goods-main .goods-content {
  width: 71%;
  height: 100%;
}
</style>
