<template>
  <div id="box">
    <back-icon>步骤2-5</back-icon>
    <van-progress
      :percentage="40"
      stroke-width="2px"
      :show-pivot="false"
      track-color="white"
      color="linear-gradient(45deg, #0f73ee, #5860f4)"
      :class="line"
    />
    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="12">
          <span>你想在哪里寻找？</span>
        </van-col>
      </van-row>
      <div :class="content">
        <van-row type="flex" justify="space-between">
          <van-col
            span="11"
            v-for="(list, index) in lists"
            :key="index"
            @click.native="imageEvent"
          >
            <van-image :src="list.img" @click.native="imageEvent"></van-image>
            <p :class="listTitle">{{ list.title }}</p>
            <p :class="listContent">{{ list.content }}</p>
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
      lists: [
        {
          img: require("../assets/images/Step2-1.png"),
          title: "伦敦",
          content: "英国",
        },
        {
          img: require("../assets/images/Step2-2.png"),
          title: "巴黎",
          content: "法国",
        },
        {
          img: require("../assets/images/Step2-3.png"),
          title: "纽约",
          content: "美国",
        },
        {
          img: require("../assets/images/Step2-4.png"),
          title: "波士顿",
          content: "美国",
        },
      ],
      listTitle: "listTitle",
      listContent: "listContent",
    };
  },
  methods: {
    imageEvent() {
      this.$router.push({ name: "stepthree" });
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
  margin-top: 8%;
}
.listTitle {
  color: #020433;
  font-size: 18px;
  font-weight: 800;
  margin-top: 5%;
  margin-left: 6%;
}
.listContent {
  color: #757b8e;
  margin-top: -11%;
  font-size: 14px;
  margin-left: 6%;
}
</style>