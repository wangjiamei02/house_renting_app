<template>
  <div id="box">
    <back-icon-black>问题3-5</back-icon-black>
    <div :class="center">
      <van-row type="flex" justify="center" :class="title">
        <van-col span="24">
          <span>对于养宠物你如何看？</span>
        </van-col>
      </van-row>

      <div :class="radiobox">
        <van-radio-group v-model="radio" @change="radioGroupEvent">
          <van-radio
            :name="room"
            :class="anradio"
            v-for="(room, index) in clearRoom"
            :key="index"
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
      clearRoom: ["请不要养宠物", "看是什么宠物", "自己不养，但不介意室友养，可以和平相处","我自己也养宠物"],
    };
  },
  methods: {
    radioGroupEvent(event) {
      console.log(event);
      const timer = setTimeout(() => {
        //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
        this.$router.push({
          name: "questionfour",
        });
        //延迟时间：3秒
      }, 3000);
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
      });
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url("../assets/images/Question 3.png");
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