<template>
  <div id="box">
      <back-icon></back-icon>
    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="24">
          <span>忘记密码？</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left" :class="content">
        <van-col span="24">
          <span>请在下面输入您的电子邮件已接收密码重置邮件</span>
        </van-col>
      </van-row>
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="email"
            size="large"
            placeholder="邮箱地址"
            :clearable="true"
            :class="field"
          />
        </van-cell-group>
      </div>
      <button-gradient @click.native="sendEvent">发送</button-gradient>
    </div>
  </div>
</template>

<script>
import BackIcon from "./BackIcon.vue";
import ButtonGradient from "./ButtonGradient.vue";
export default {
  components: { BackIcon, ButtonGradient },
  data() {
    return {
      center: "center",
      title: "title",
      content: "content",
      inputBox: "inputBox",
      cell: "cell",
      field: "field",
      email: "",
    };
  },
  methods: {
    sendEvent() {
      this.$router.push({ name: "resetpassword" });
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url("../assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
}
.center {
  padding-left: 6%;
  padding-right: 6%;
}
.title {
  margin-top: 15%;
  color: #020433;
  font-size: 32px;
  font-weight: 800;
}
.content {
  color: #404b69;
  margin-top: 5%;
}
.inputBox {
  margin-top: 22%;
}
.cell {
  border: 2px #f0f0f0 solid;
  border-radius: 6px;
}
.field {
  background-color: transparent;
}
</style>