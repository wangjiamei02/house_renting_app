<template>
  <div id="box">
      <back-icon></back-icon>
    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="24">
          <span>重置密码</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left" :class="content">
        <van-col span="24">
          <span>重置代码发送到您的电子邮件。请输入代码并创建新密码。</span>
        </van-col>
      </van-row>
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="resetcode"
            size="large"
            placeholder="重置代码"
            :clearable="true"
            :class="field"
          />
        </van-cell-group>
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="newpassword"
            size="large"
            placeholder="新的密码"
            :clearable="true"
            :class="field"
          />
        </van-cell-group>
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="checkpassword"
            size="large"
            placeholder="确认密码"
            :clearable="true"
            :class="field"
          />
        </van-cell-group>
      </div>
      <button-gradient @click.native="sendEvent">更改密码</button-gradient>
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
      resetcode:'',
      newpassword:'',
      checkpassword:'',
    };
  },
  methods: {
    sendEvent() {
      this.$router.push({ name: "resetsuccess" });
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
.inputBox > :nth-child(1) {
  margin-bottom: 5%;
}
.inputBox > :nth-child(2) {
  margin-bottom: 5%;
}
.cell {
  border: 2px #f0f0f0 solid;
  border-radius: 6px;
}
.field {
  background-color: transparent;
}
</style>