<template>
  <div id="box">
    <back-icon>步骤1-5</back-icon>
    <van-progress
      :percentage="20"
      stroke-width="2px"
      :show-pivot="false"
      track-color="white"
      color="linear-gradient(45deg, #0f73ee, #336af1)"
      :class="line"
    />
    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="14">
          <span>你的寻找目标是什么？</span>
        </van-col>
      </van-row>
      <div :class="content">
        <van-row type="flex" justify="space-between" :class="imagebox">
          <van-col span="11" v-for="(list, index) in lists" :key="index">
            <van-image :src="list.img" @click.native="imageEvent"></van-image>
            <p :class="listText">{{ list.text }}</p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import BackIcon from "./BackIcon.vue";
export default {
  components: { BackIcon },
  data() {
    return {
      center: "center",
      title: "title",
      line: "line",
      content: "content",
      imagebox: "imagebox",
      lists: [
        {
          img: require("../assets/images/Step1-1.png"),
          text: "一间房间",
        },
        {
          img: require("../assets/images/Step1-2.png"),
          text: "整栋房子",
        },
        {
          img: require("../assets/images/Step1-3.png"),
          text: "合租室友",
        },
        {
          img: require("../assets/images/Step1-4.png"),
          text: "租房客",
        },
      ],
      listText: "listText",
    };
  },
  methods: {
    imageEvent() {
      this.$router.push({ name: "steptwo" });
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
  margin-top: 12%;
  color: #020433;
  font-size: 32px;
  font-weight: 800;
}
.line {
  margin-top: 2%;
}
.content {
  margin-top: 20%;
}
.imagebox > :nth-child(4) p {
  margin-left: 14%;
}
.listText {
  margin-top: -19%;
  margin-left: 12%;
  position: absolute;
  color: white;
}
</style>