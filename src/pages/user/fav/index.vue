<template>
    <div class="page">
        <div class='sub-header'>
            <div class='back'></div>
            <div class='title'>我的收藏</div>
            <div class="right-btn">保存</div>
        </div>
        <div class='main'>
            <div class='goods-list'>
                <div class='image'>
                    <img src="../../../assets/images/common/lazyImg.jpg" alt=""/>
                </div>
                <div class='title'>潮流女装</div>
                <div class='price'>¥200</div>
                <div class='btn-wrap'>
                    <div class='btn'>购买</div>
                    <div class='btn'>删除</div>
                </div>
            </div>
        </div>
        <div class="no-data" v-show="false">您还没有收藏商品！</div>
    </div>
</template>

<script>
    export default {
        name: "fav"
    }
</script>

<style scoped>
    .sub-header {
        width: 100%;
        height: 1rem;
        background-color: #FFFFFF;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        border-bottom: 1px solid #EFEFEF;
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

    .page {
        width: 100%;
        min-height: 100vh;
        background-color: #FFFFFF;
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
        color: #F93036;
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
        border: 1px solid #F93036;
        font-size: 0.28rem;
        color: #F93036;
        border-radius: 4px;
        text-align: center;
        line-height: 0.52rem;
    }
</style>