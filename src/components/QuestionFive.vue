<template>
  <div id="box">
    <back-icon-black>问题5-5</back-icon-black>
    <div :class="center">
      <van-row type="flex" justify="center" :class="title">
        <van-col span="24">
          <span>你的兴趣是什么？</span>
        </van-col>
      </van-row>
      <div :class="list">
        <div
          class="item"
          :class="item.active == true ? 'active' : ''"
          @click="changeItem(index)"
          v-for="(item, index) in lists"
          :key="index"
        >
          {{ item.title }}
        </div>
      </div>
      <van-row type="flex" justify="center">
        <van-col span="24">
          <van-button :class="button" size="large" @click="finish"
            >完成
          </van-button>
        </van-col>
      </van-row>
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
      lists: [
        { title: "美食", active: false },
        { title: "体育&健身", active: false },
        { title: "派对", active: false },
        { title: "看书阅读", active: false },
        { title: "夜生活", active: false },
        { title: "听音乐", active: false },
        { title: "旅游", active: false },
        { title: "玩游戏", active: false },
        { title: "看电视", active: false },
      ],
      changeList: [],
      list: "list",
      active: "active",
      button: "button",
    };
  },
  methods: {
    finish() {
      this.$router.push({ name: "questionsuccess" });
    },
    changeItem(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.lists[i].active = !this.lists[i].active;
      // 把 lists 数组中 active 为 true 的项放在 changeList 数组中
      this.changeList = this.lists.filter((item) => item.active == true);
      console.log(this.changeList);
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url("../assets/images/Question 5.png");
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
.list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8%;
  margin-left: 2%;
}
.item {
  color: #fff;
  padding: 0.7rem 1.3rem;
  border: 1px solid #fff;
  border-radius: 6px;
  margin: 0.3rem 0;
  margin-right: 0.7rem;
}
.active {
  background: #fff;
  color: #000;
  font-weight: 500;
}
.button {
  border-radius: 6px;
  font-weight: 800;
  margin-top: 41%;
}
</style>