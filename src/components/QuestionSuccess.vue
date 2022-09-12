<template>
  <div id="box">
    <div :class="center">
      <van-row type="flex" justify="center" :class="title">
        <van-col span="24">
          <span>非常好！</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" :class="content">
        <van-col span="22">
          <span>我们已经根据你的反馈信息，为你推荐了合适的用户给你，请返回首页查看</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="14">
          <van-button :class="button" size="large" @click="LoginNow"
            >好的，马上查看
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
      this.$router.push({name:'filter'})
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
  margin-top: 18%;
}
</style>