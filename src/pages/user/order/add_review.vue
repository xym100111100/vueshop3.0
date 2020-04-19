<template>
  <div class="page">
    <SubHeader title="评价"></SubHeader>

    <div class="main">
      <ul class="service" v-for="(item,index) in services" :key="index">
        <li>{{item.title}}</li>
        <li>
          <div
            :class="{stars:true, active:item2.active}"
            v-for="(item2,index2) in item.scores"
            :key="index2"
            @click="SET_REVIEW_SCORE({index,index2,value:item2.value})"
          ></div>
        </li>
      </ul>
      <div class="content-wrap">
        <textarea v-model="context" placeholder="来分享你的消费感受吧!"></textarea>
      </div>
      <button class="submit" type="button" @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import SubHeader from "../../../components/sub_header";
import { mapActions, mapState, mapMutations } from "vuex";
import { Toast } from "vant";
export default {
  name: "add-review",
  data() {
    return {
      context: "",
      gid: this.$route.query.gid ? this.$route.query.gid : "",
      ordernum: this.$route.query.ordernum ? this.$route.query.ordernum : ""
    };
  },
  components: {
    SubHeader
  },
  created() {
    this.$utils.safeUser(this);
    this.getReviewService();
    this.isSubmit = true;
  },
  methods: {
    submit() {
      let rsData = [];
      if (this.context.match(/^\s*$/)) {
        Toast("请输入评价内容");
        return;
      }
      if (this.isSubmit) {
        this.isSubmit = false;
        if (this.services.length > 0) {
          for (let i = 0; i < this.services.length; i++) {
            rsData.push({
              gid: this.gid,
              myid: this.uid,
              rsid: this.services[i].rsid,
              score: this.services[i].score
            });
          }
        }
        this.addReview({
          gid: this.gid,
          content: this.context,
          ordernum: this.ordernum,
          rsdata: JSON.stringify(rsData),
          success: res => {
            if (res.code === 200) {
              Toast({
                duration: 1000,
                message: "提交成功",
                onClose: () => {
                  this.$router.go(-1);
                }
              });
            }
          }
        });
      }
    },
    ...mapMutations({
      SET_REVIEW_SCORE: "order/SET_REVIEW_SCORE"
    }),
    ...mapActions({
      getReviewService: "order/getReviewService",
      addReview: "order/addReview"
    })
  },
  computed: {
    ...mapState({
      services: state => state.order.services,
      uid: state => state.user.uid
    })
  },
  mounted() {
    document.title = this.$route.meta.title;
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
  padding-top: 1.02rem;
}

.service {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}

.service li:nth-child(1) {
  font-size: 0.32rem;
  margin-left: 3%;
  margin-right: 15%;
}

.service li:nth-child(2) {
  display: flex;
  display: -webkit-flex;
}

.service .stars {
  width: 0.4rem;
  height: 0.4rem;
  background-image: url("../../../assets/images/user/orders/stars1.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.3rem;
}

.service .stars.active {
  background-image: url("../../../assets/images/user/orders/stars2.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.content-wrap {
  width: 100%;
  height: 4rem;
  text-align: center;
  overflow: hidden;
}

.content-wrap textarea {
  width: 95%;
  height: 90%;
  font-size: 0.32rem;
  margin-top: 0.3rem;
  outline: none;
  border: 0 none;
  resize: none;
}

.submit {
  width: 90%;
  height: 0.8rem;
  background-color: #e51b19;
  font-size: 0.28rem;
  color: #ffffff;
  text-align: center;
  line-height: 0.8rem;
  border: 0 none;
  border-radius: 4px;
  outline: none;
  margin: 0 auto;
  display: block;
  margin-top: 0.3rem;
}
</style>