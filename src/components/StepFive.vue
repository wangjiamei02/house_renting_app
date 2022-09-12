<template>
  <div id="box">
    <back-icon>步骤5-5</back-icon>

     <!-- 进度条 -->
    <van-progress
      :percentage="100"
      stroke-width="2px"
      :show-pivot="false"
      track-color="white"
      color="linear-gradient(45deg, #0f73ee, #c644fc)"
      :class="line"
    />

    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="8">
          <span>验证码</span>
        </van-col>
      </van-row>

      <van-row type="flex" justify="left" :class="content">
        <van-col span="13">
          <p>我们给你发了一个接入码请在下面输入</p>
        </van-col>
      </van-row>

      <van-password-input
        :value="code"
        :gutter="10"
        :mask="false"
        :focused="showKeyboard"
        :class="codeinput"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="code"
        :show="showKeyboard"
        @blur="showKeyboard = false"
        @input="onIphone"
      />

      <van-row type="flex" justify="center" :class="info">
        <van-col span="19">
          <p>这有助于我们对每个用户进行身份验证</p>
        </van-col>
      </van-row>

      <van-row type="flex" justify="conter" :class="bottomText">
        <van-col span="24">
          <p>没有接收到验证码？<span>重新发送</span></p>
        </van-col>
      </van-row>

    </div>
   <div :class="bottomline"></div>
    <button-gradient :class="center" @click.native="nextEvent">下一步</button-gradient>
  </div>
</template>

<script>
import BackIcon from "./BackIcon.vue";
import ButtonGradient from './ButtonGradient.vue';
export default {
  components: { BackIcon, ButtonGradient },
  data() {
    return {
      line: "line",
      center: "center",
      title: "title",
      content: "content",
      code: "",
      showKeyboard: false,
      codeinput: "codeinput",
      info:"info",
      bottomText:"bottomText",
      bottomline:'bottomline'
    };
  },
  methods: {
    //数字键盘输入的值
    onIphone(value) {
      console.log(value);
      this.code = value;
    },
    nextEvent() {
      this.$router.push({name:'complete'})
    }
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
  margin-top: 12%;
  color: #020433;
  font-size: 32px;
  font-weight: 800;
}
.line {
  margin-top: 2%;
}
.content {
  color: #595a6e;
  font-weight: 500;
}
.codeinput {
  margin-top: 20%;
  li {
    font-size: 32px;
    font-weight: 700;
    color: #020433;
    border-bottom: 3px solid #f0f0f0;
  }
}
.info {
    color: #757b8e;    
    font-size: 14px;
    text-align: center;
    margin-top: 2%;
    font-weight: 500;
}
.bottomText {
  margin-top: 14%;
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
.bottomline {
    background-image: linear-gradient(#f4f4f6, #eeeef1);
    height: 2px;
    margin-top: 48%;
}
</style>