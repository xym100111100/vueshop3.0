<template>
  <div class="page">
    <SubHeader title="我的收藏"></SubHeader>
    <div class="main">
      <div class="goods-list" v-for="(item,index) in  favs" :key="index">
        <div @click="$router.push('/goods/details/item?gid='+item.gid)" class="image">
          <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item.image" />
        </div>
        <div class="title">{{item.title}}</div>
        <div class="price">¥{{item.price}}</div>
        <div class="btn-wrap">
          <div class="btn" @click="$router.push('/goods/details/item?gid='+item.gid)">购买</div>
          <div class="btn" @click="delFav({fid:item.fid,index})">删除</div>
        </div>
      </div>
    </div>
    <div class="no-data" v-show="favs.length<=0?true:false">您还没有收藏商品！</div>
  </div>
</template>

<script>
import SubHeader from "../../../components/sub_header";
import UpRefresh from "../../../assets/js/libs/uprefresh";
import { mapActions, mapState } from "vuex";
import { Toast, Dialog } from "vant";
export default {
  name: "fav",
  components: {
    SubHeader
  },
  created() {
    this.getFavs({
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
              this.getFavPage({
                gid: this.gid,
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
  },
  computed: {
    ...mapState({
      favs: state => state.goods.favs
    })
  },
  methods: {
    ...mapActions({
      getFavs: "goods/getFavs",
      getFavPage: "goods/getFavPage",
      asyncDelFav: "goods/delFav"
    }),
    delFav(val) {
      Dialog.confirm({
        title: "",
        message: "确认删除"
      })
        .then(() => {
          this.asyncDelFav({
            ...val,
            success: res => {
              if (res.code === 200) {
                Toast("删除成功");
              }
            }
          });
        })
        .catch(() => {});
    }
  },
  beforeDestroy() {
    this.pullUp.uneventSrcoll();
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
}

.main {
  width: 100%;
  padding-top: 1.2rem;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}

.main .goods-list {
  width: 48%;
  height: 5.8rem;
  margin-bottom: 0.3rem;
  overflow: hidden;
}

.main .goods-list .image {
  width: 3.36rem;
  height: 3.35rem;
  margin: 0 auto;
}

.main .goods-list .image img {
  width: 100%;
  height: 100%;
  border: 0 none;
}

.main .goods-list .title {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
  font-size: 0.28rem;
  margin-top: 0.2rem;
}

.main .goods-list .price {
  font-size: 0.28rem;
  color: #f93036;
  margin-top: 0.2rem;
}

.main .goods-list .btn-wrap {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  margin-top: 0.2rem;
}

.main .goods-list .btn-wrap .btn {
  width: 1.04rem;
  height: 0.52rem;
  border: 1px solid #f93036;
  font-size: 0.28rem;
  color: #f93036;
  border-radius: 4px;
  text-align: center;
  line-height: 0.52rem;
}
</style>