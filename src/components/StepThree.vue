<template>
  <div id="box">
    <back-icon>步骤3-5</back-icon>
    <!-- 进度条 -->
    <van-progress
      :percentage="60"
      stroke-width="2px"
      :show-pivot="false"
      track-color="white"
      color="linear-gradient(45deg, #0f73ee, #7c57f6)"
      :class="line"
    />
    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="14">
          <span>你的最高花费是多少？</span>
        </van-col>
      </van-row>
      <div :class="content">
        <van-row type="flex" justify="left">
          <van-col span="14">
            <p :class="mouth">
              <span>${{ moneyValue }}</span
              >每月
            </p>
          </van-col>
        </van-row>

        <van-slider
          v-model="money"
          :min="0"
          :max="5000"
          :step="100"
          bar-height="4px"
          active-color="#0f73ee"
        >
          <!-- 自定义滑块按钮 -->
          <template #button>
            <div class="custom-button"></div>
          </template>
        </van-slider>

        <van-row type="flex" justify="space-between" :class="stepNum">
          <van-col span="12">
            <p>$0</p>
          </van-col>
          <van-col span="12">
            <p>$5,000</p>
          </van-col>
        </van-row>

        <van-row type="flex" justify="left" :class="intodate">
          <van-col span="14">
            <span>你的入住日期是什么？</span>
          </van-col>
        </van-row>

      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="date"
            size="large"
            placeholder="入住日期"
            :class="field"
            right-icon="notes-o"
            @click="dateshow = true"
          />
        </van-cell-group>
      </div>
      <van-calendar color="#0f73ee" v-model="dateshow" @confirm="onConfirm" />
      </div>
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
      center: "center",
      title: "title",
      intodate:"intodate",
      line: "line",
      content: "content",
      money: 2500,
      num: "num",
      mouth: "mouth",
      stepNum:"stepNum",
      inputBox: "inputBox",
      cell: "cell",
      field: "field",
      date:"",
      dateshow: false,
      bottomline:'bottomline'
    };
  },
  computed:{
    moneyValue:function() {
        return this.money.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
    }
  },
  methods: {
    //格式化日期
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日，${date.getFullYear()}`;
    },
    //日期选择完成后会触发 confirm 事件
    onConfirm(date) {
      this.dateshow = false;
      this.date = this.formatDate(date);
    },
    //下一步按钮
    nextEvent() {
        this.$router.push({name:'stepfour'})
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
.intodate {
  margin-top: 8%;
  color: #020433;
  font-size: 30px;
  font-weight: 800; 
}
.line {
  margin-top: 2%;
}
.content {
  margin-top: 8%;
  margin-bottom: 52%;
}
.mouth {
  color: #020433;
  margin-top: -8%;
  margin-bottom: 16%;
  span {
    color: #0f73ee;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-right: 2%;
  }
}

.custom-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  box-shadow: 0 2px 0 #eaeaea;
}
.stepNum {
    margin-top: -1%;
    p {
       color: #404b69; 
    }
}
.stepNum>:nth-child(2) {
    text-align: end;
}
.inputBox {
  margin-top: 6%;
}
.cell {
  border: 2px #f0f0f0 solid;
  border-radius: 6px;
}
.field {
  background-color: transparent;
}
.bottomline {
    background-image: linear-gradient(#f4f4f6, #eeeef1);
    height: 2px;
    margin-top: 3%;
}
</style>