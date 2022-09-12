<template>
  <div id="box">
    <div :class="center">
      <van-row type="flex" justify="center" :class="title">
        <van-col span="24">
          <span>欢迎使用Stacy！</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" :class="content">
        <van-col span="17">
          <span>现在我们有5个问题可以帮助你与同心室友相匹配</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="14">
          <van-button :class="button" size="large" @click="LoginNow"
            >马上开始
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
      this.$router.push({name:'questionone'})
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url("../assets/images/Setup Complete background.png");
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
  margin-top: 18%;
}
</style>