<template>
    <div class="page">
        <div class='sub-header'>
            <div class='back'></div>
            <div class='title'>修改密码</div>
            <div class="right-btn">保存</div>
        </div>
        <div class='main'>
            <div class='input-wrap' style="margin-top:0.3rem">
                <input type="password" placeholder="请输入不小于6位的密码" class='password'/>
                <div class='switch-wrap'>

                </div>
            </div>
            <div class='save-btn'>提交</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mod-password"
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
        padding-top: 1.02rem;
    }

    .main .tip {
        width: 100%;
        height: 1rem;
        background-color: #F3F5C4;
        color: #ac7700;
        font-size: 0.28rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }

    .main .tip .icon {
        width: 0.4rem;
        height: 0.4rem;
        background-image: url("../../../assets/images/user/mobile/tip.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 0.4rem;
        margin-right: 0.2rem;
    }

    .main .tip .text {
        width: auto;
        height: auto;
    }

    .main .input-wrap {
        width: 93%;
        height: 0.8rem;
        border: #c5cbcf solid 1px;
        border-radius: 4px;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        display: -webkit-flex;
    }

    .main .input-wrap .password {
        width: 75%;
        height: 100%;
        margin-left: 0.2rem;
        font-size: 0.28rem;
    }

    .main .input-wrap .switch-wrap {
        width: 20%;
        margin-top: 0.1rem;
    }

    .main .save-btn {
        width: 93%;
        height: 0.8rem;
        background-color: #E42321;
        font-size: 0.28rem;
        color: #FFFFFF;
        text-align: center;
        line-height: 0.8rem;
        margin: 0 auto;
        border-radius: 4px;
        margin-top: 0.2rem;
    }
</style>