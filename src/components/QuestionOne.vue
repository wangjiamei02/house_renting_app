<template>
  <div id="box">
    <back-icon-black>问题1-5</back-icon-black>
    <div :class="center">
      <van-row type="flex" justify="center" :class="title">
        <van-col span="24">
          <span>你多久打扫一次房间？</span>
        </van-col>
      </van-row>

      <div :class="radiobox">
        <van-radio-group v-model="radio" @change="radioGroupEvent">
          <van-radio
            :name="room"
            :class="anradio"
            v-for="(room, index) in clearRoom"
            :key="index"
            @click="radioEvent"
          >
            {{ room }}
            <template #icon="props">
              <img
                class="icon"
                :src="props.checked ? activeIcon : inactiveIcon"
              />
            </template>
          </van-radio>
        </van-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import BackIconBlack from "./BackIconBlack.vue";
export default {
  components: { BackIconBlack },
  data() {
    return {
      center: "center",
      title: "title",
      radio: "",
      activeIcon: require("../assets/images/radio active.png"),
      inactiveIcon: require("../assets/images/radio inactive.png"),
      icon: "icon",
      radiobox: "radiobox",
      anradio: "anradio",
      clearRoom: ["从不", "每月一次", "每周一次", "一两天一次"],
    };
  },
  methods: {
    // RadioGroup Events：当绑定值变化时触发的事件
    // 回调参数为：name
    radioGroupEvent(event) {
      console.log(event);
      const timer = setTimeout(() => {
        //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
        this.$router.push({
          name: "questiontwo",
        });
        //延迟时间：3秒
      }, 2000);
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
      });
    },
    radioEvent() {},
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url("../assets/images/Question 1.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
}
.center {
  margin-top: 86%;
  padding-left: 8%;
  padding-right: 8%;
}
.title {
  margin-top: -14%;
  color: #ffffff;
  font-size: 19px;
  text-align: center;
}
.icon {
  height: 28px;
  margin-top: -11%;
  margin-right: 0.6rem;
}
.radiobox {
  margin-top: 14%;
}
.anradio {
  background: white;
  height: 2rem;
  border-radius: 6px;
  padding: 4%;
  margin-bottom: 6%;
}
.anradio > :last-child {
  color: #020433;
  font-size: 15px;
}
</style>