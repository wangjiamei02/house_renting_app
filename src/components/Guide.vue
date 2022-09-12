<template>
  <div id="box">
    <van-swipe @change="changeSwipe" :class="swipe">
      <van-swipe-item v-for="(data, index) in datas" :key="index">
        <van-row type="flex" justify="center" :class="logo">
          <van-col span="24">
            <img v-lazy="data.image" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" :class="title">
          <van-col span="19">
            <p>{{ data.title }}</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" :class="content">
          <van-col span="22">
            <p>{{ data.content }}</p>
          </van-col>
        </van-row>
      </van-swipe-item>
      <template #indicator>
        <ul class="indicators indicator">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="{ active: checkActive(index) }"
          ></li>
        </ul>
      </template>
    </van-swipe>
    <!-- 引导页3-按钮 -->
    <van-row type="flex" justify="center">
      <van-col span="20">
          <!--按钮路由跳转：   :to="{name:'entry'}"  -->
        <van-button :class="button" size="large" color="linear-gradient(45deg, #0f73ee, #c644fc)" @click="startNow"
          >马上开始
        </van-button>
      </van-col>
    </van-row>
        <van-row type="flex" justify="center" :class="login">
          <van-col span="5">
            <p>登录账户</p>
          </van-col>
        </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "logo",
      datas: [
        {
          image: require("../assets/images/Onboarding_1 logo.png"),
          title: "寻找居住地方",
          content: "打开我们的APP即可方便快捷找到合适你居住的地方，房源众多。",
        },
        {
          image: require("../assets/images/Onboarding_2 logo.png"),
          title: "匹配合适的合租对象",
          content: "告诉我们你的兴趣爱好，我们将匹配合适您一起居住的合租对象。",
        },
        {
          image: require("../assets/images/Onboarding_3 logo.png"),
          title: "志同道合的人",
          content: "和像你一样的人一起生活。",
        },
      ],
      list: [1, 1, 1],
      current: 0, // 默认指示器被激活的样式显示为索引为 0 的那一项
      title: "title",
      content: "content",
      button: "button",
      start: false,
      login:'login',
      swipe:'swipe'
    };
  },

  methods: {
    // swipe 轮播图事件
    // 每一页轮播结束后触发  回调参数：index,当前页的索引
    changeSwipe(index) {
      this.current = index; // 把指示器被激活的样式设置为当前页的 index
      if (index === this.list.length - 1) { // 引导页3的按钮显示
        this.start = true;
      } else {
        this.start = false;
      }
      console.log(index);
    },
    // // 轮播图指示器被激活时的类名
    checkActive(index) {
      return index === this.current; // current 为监听的轮播 index
    },
    //马上开始按钮跳转
    startNow(){
      this.$router.push({name:'login'})
    }
  },
};
</script>

<style lang="less" scoped>
#box {
  background-image: url('../assets/images/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 750px 1624px;
  width: 750px;
  height: 1624px;
}
.logo {
    // width: 100%;
    // height: 100%;
//   padding-top: 34%;
}
.swipe {
  margin-bottom: 5%;
}
.title {
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  margin-top: -18%;
}
.content {
  font-size: 30px;
  color: #404b69;
  text-align: center;
  margin-top: -8%;
  margin-bottom: 7%;
}
.button {
  border-radius: 12px;
  height: 100px;
  font-size: 32px;
  font-weight: 500;
  float: left;
  margin-top: 12%;
  box-shadow: 0 6px 20px 0 #dcdcdc;
}
.login {
    color: #404b69;
    font-size: 32px;
    font-weight: 500;
    margin-top: 5%;
    text-align: center;
}
//自定义轮播图指示器
.indicators {
  position: absolute;
  bottom: 5px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
}
.indicator li {
  display: inline;
  width: 12px;
  height: 12px;
  background-color: none;
  border-radius: 50%;
  border: 3px solid #0f73ee;
//   opacity: 0.3;
  transition: opacity 0.5s,
    //@animation-duration-fast
    background-color 0.5s; //@animation-duration-fast

  &:not(:last-child) {
    margin-right: 14px;
  }

  &.active {
    background-color: #0f73ee;
    opacity: 1;
  }
}
</style>