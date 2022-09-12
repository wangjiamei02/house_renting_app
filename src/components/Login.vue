<template>
  <div id="box">
    <back-icon></back-icon>
    <div :class="center">
      <div :class="title">
        <van-row
          type="flex"
          justify="left"
          v-for="text in titleText"
          :key="text"
        >
          <van-col span="24">
            <span>{{ text }}</span>
          </van-col>
        </van-row>
      </div>
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="user"
            size="large"
            placeholder="用户名"
            :clearable="true"
            :class="field"
          />
        </van-cell-group>
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="password"
            size="large"
            placeholder="密码"
            :clearable="true"
            :class="field"
          />
        </van-cell-group>
      </div>
      <van-row type="flex" justify="end" :class="forgetpass">
        <van-col span="6">
          <span @click="forgetEvent">忘记密码？</span>
        </van-col>
      </van-row>
      <button-gradient @click.native="loginEvent">登录</button-gradient>
      <van-row type="flex" justify="center" :class="faceText">
        <van-col span="12">
          <p><span>新！</span>用FaceID快速登录</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" :class="faceImg">
        <van-col span="4">
          <van-image :src="require('../assets/images/Login face.png')" />
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" :class="bottomText">
        <van-col span="12">
          <p>还没有账号？<span>马上注册</span></p>
        </van-col>
      </van-row>
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
      titleText: ["你好，", "欢迎回来！"],
      user: "",
      password: "",
      inputBox: "inputBox",
      forgetpass: "forgetpass",
      cell: "cell",
      field: "field",
      faceText: "faceText",
      bottomText: "bottomText",
      faceImg: "faceImg",
    };
  },
  methods: {
    loginEvent() {
      this.$router.push({ name: "stepone" });
    },
    forgetEvent() {
      this.$router.push({ name: "forgotpassword" });
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
  span {
    color: #020433;
    font-size: 32px;
    font-weight: 800;
  }
}
.inputBox {
  margin-top: 10%;
}
.inputBox > :nth-child(1) {
  margin-bottom: 5%;
}
.forgetpass {
  color: #404b69;
  text-align: right;
  font-weight: 500;
  margin-top: 5%;
  cursor: pointer;
}
.cell {
  border: 2px #f0f0f0 solid;
  border-radius: 6px;
}
.field {
  background-color: transparent;
}
.faceText {
  margin-top: 7%;
  margin-bottom: 4%;
  text-align: center;
  p {
    color: #020433;
    font-weight: 500;
  }
  span {
    color: #ff4949;
    font-weight: 500;
  }
}
.faceImg {
  text-align: center;
}
.bottomText {
  margin-top: 32%;
  text-align: center;
  p {
    color: #020433;
    font-weight: 500;
  }
  span {
    color: #0f73ee;
    font-weight: 500;
  }
}
</style>