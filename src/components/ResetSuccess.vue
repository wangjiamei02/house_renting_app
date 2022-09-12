<template>
  <div id="box">
    <div :class="center">
      <van-row type="flex" justify="center" :class="title">
        <van-col span="10">
          <span>成功！</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" :class="content">
        <van-col span="24">
          <span>您已成功更改密码。登录时请使用新密码。</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="14">
          <van-button :class="button" size="large" @click="LoginNow"
            >马上登录
          </van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: "center",
      title: "title",
      content: "content",
      button: "button",
    };
  },
  methods: {
    LoginNow() {
      this.$router.push({name:'login'})
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url("../assets/images/Reset Success background.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
}
.center {
  margin-top: 110%;
}
.title {
    margin-top: 12%;
    color: #ffffff;
    font-size: 32px;
    text-align: center;
}
.content {
  color: #ffffff;
  margin-top: 3%;
  text-align: center;
  font-size: 15px;
}
.button {
  border-radius: 6px;
  font-weight: 800;
  margin-top: 26%;
}
</style>