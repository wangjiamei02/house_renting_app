<template>
  <div>
    <van-swipe indicator-color="white">
      <van-swipe-item v-for="(swipe, index) in swipes" :key="index">
        <van-image width="100%" height="auto" :src="swipe" />
      </van-swipe-item>
    </van-swipe>

    <van-row type="flex" justify="space-between">
      <van-col span="17" :class="time">
        <van-image width="26" :src="require('../assets/images/time.png')" />
      </van-col>
      <van-col span="4" :class="wifi">
        <van-image :src="require('../assets/images/wifi.png')" />
      </van-col>
    </van-row>

    <van-row type="flex" justify="space-between" :class="tophandle">
      <van-col span="15">
        <van-image
          :src="require('../assets/images/back.png')"
          :class="backicon"
          @click="back"
        />
      </van-col>
      <van-col span="5">
        <van-image
          :src="require('../assets/images/share.png')"
          :class="backicon"
          @click="showShare = true"
        />
      </van-col>
      <van-col span="3">
        <van-image
          :src="require('../assets/images/landlord-spot.png')"
          :class="spoticon"
        />
      </van-col>
    </van-row>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="shareoptions"
      @select="onSelect"
    />

    <div :class="topbox">
      <van-row type="flex" justify="center">
        <van-col span="7">
          <van-image
            :src="require('../assets/images/landlord-headimg.png')"
            :class="headimg"
          />
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="16">
          <van-image :src="require('../assets/images/landlord-name.png')" />
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" :class="address">
        <van-col span="4">
          <p>房东</p>
        </van-col>
        <van-col span="3">
          <p>纽约</p>
        </van-col>
      </van-row>

      <div :class="borderline">
        <van-row type="flex" justify="left" :class="agetitle">
          <van-col span="10">
            <p>年龄</p>
          </van-col>
          <van-col span="12">
            <p>职位</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="left" :class="ageinfo">
          <van-col span="10">
            <p>36</p>
          </van-col>
          <van-col span="12">
            <p>设计师</p>
          </van-col>
        </van-row>
      </div>

      <div :class="borderline">
        <van-row type="flex" justify="left">
          <van-col span="24" :class="subTitle">
            <p>个人简介</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="left">
          <van-col span="24" :class="subContentSpace">
            <p>
              时尚摄影师目前立足于意大利。对各种新鲜事物非常感兴趣。我喜欢发现文化和新的道路，对世界充满好奇。我有很多房产，世界各地，喜欢...<span
                >Read more</span
              >
            </p>
          </van-col>
        </van-row>
      </div>

      <div :class="borderline">
        <van-row type="flex" justify="left">
          <van-col span="24" :class="subTitle">
            <p>社交关系</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="left">
          <van-col span="24" :class="subContentSpace">
            <p>看看你和Jeremy有什么联系</p>
          </van-col>
        </van-row>
        <div :class="relationship">
          <van-row type="flex" justify="center">
            <van-col span="24">
              <p>连接你的个人社交账户，即可发现你与他有什么联系关系</p>
            </van-col>
          </van-row>
          <van-row type="flex" justify="left">
            <van-col span="24">
              <button-gradient>连接</button-gradient>
            </van-col>
          </van-row>
        </div>
      </div>

      <div :class="borderline" v-for="(item, index) in info" :key="index">
        <van-row type="flex" justify="left" :class="subTitle">
          <van-col span="10">
            <p>{{ item.title }}</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="left" :class="ageinfo">
          <van-col span="12">
            <p>{{ item.content }}</p>
          </van-col>
        </van-row>
      </div>

      <div :class="borderline">
        <van-row type="flex" justify="left">
          <van-col span="24" :class="subTitle">
            <p>问题</p>
          </van-col>
        </van-row>
        <div
          :class="questionbox"
          v-for="(item, index) in question"
          :key="index"
        >
          <van-row type="flex" justify="left" :class="agetitle">
            <van-col span="24">
              <p>{{ item.title }}</p>
            </van-col>
          </van-row>
          <van-row type="flex" justify="left" :class="ageinfo">
            <van-col span="24">
              <p>{{ item.content }}</p>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>

    <div :class="recommendbox">
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>房间列表</p>
        </van-col>
      </van-row>
      <van-swipe :show-indicators="false" style="height: 20rem">
        <van-swipe-item
          v-for="(item, index) in recommend"
          :key="index"
          style="width: 220px"
        >
          <van-row type="flex" justify="left">
            <van-col span="24">
              <img :src="item.img" />
              <van-row type="flex" justify="left" :class="authentication">
                <van-col span="3">
                  <van-image
                    width="15"
                    :src="require('../assets/images/detail-green.png')"
                  />
                </van-col>
                <van-col span="8">
                  <span>已实名认证</span>
                </van-col>
                <van-col span="4">
                  <span>2房</span>
                </van-col>
              </van-row>
              <div :class="recommendinfo">
                <p>{{ item.text }}</p>
                <p>{{ item.money }}</p>
                <p>{{ item.time }}</p>
              </div>
            </van-col>
          </van-row>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div :class="bottombutton">
      <van-row type="flex" justify="space-between">
        <van-col span="4" :class="footer">
          <van-icon
            name="like-o"
            size="28"
            color="#fff"
            v-if="this.iconactive == false"
            :class="collection"
            @click="changeIcon"
          />
          <van-icon
            name="like"
            size="28"
            color="rgb(205 14 0)"
            v-if="this.iconactive == true"
            :class="collection"
            @click="changeIcon"
          />
        </van-col>
        <van-col span="19">
          <button-gradient>请求联系对方</button-gradient>
        </van-col>
      </van-row>
    </div>

    <div :class="footerline">
      <img src="../assets/images/footer-line.png" />
    </div>
  </div>
</template>

<script>
import ButtonGradient from "./ButtonGradient.vue";
export default {
  components: { ButtonGradient },
  data() {
    return {
      tophandle: "tophandle",
      backicon: "backicon",
      collection: "collection",
      spoticon: "spoticon",
      topbox:"topbox",
      swipes: [
        require("../assets/images/landlord-swipe.png"),
        require("../assets/images/landlord-swipe.png"),
        require("../assets/images/landlord-swipe.png"),
        require("../assets/images/landlord-swipe.png"),
        require("../assets/images/landlord-swipe.png"),
      ],
      time: "time",
      wifi: "wifi",
      showShare: false,
      shareoptions: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      center: "center",
      headimg: "headimg",
      address: "address",
      borderline: "borderline",
      agetitle: "agetitle",
      ageinfo: "ageinfo",
      subTitle: "subTitle",
      subContentSpace: "subContentSpace",
      relationship: "relationship",
      info: [
        {
          title: "语言",
          content: "英语 - 法语",
        },
        {
          title: "喜欢的地区",
          content: "纽约",
        },
        {
          title: "兴趣爱好",
          content: "旅行 - 电影 - 阅读...",
        },
      ],
      questionbox: "questionbox",
      question: [
        {
          title: "你多久打扫一次房间？",
          content: "每隔几天",
        },
        {
          title: "你吸烟吗？",
          content: "是的",
        },
        {
          title: "你觉得宠物怎么样？",
          content: "我和一只宠物一起生活！",
        },
        {
          title: "如何看待带客人过来？",
          content: "只能白天过来",
        },
      ],
      authentication: "authentication",
      recommend: [
        {
          img: require("../assets/images/detail-leftroom.png"),
          text: "非常漂亮的两房户型，独立卫生间，1间房限制求合租。",
          money: "$650 每月",
          time: "目前有效 6个月租期",
        },
        {
          img: require("../assets/images/detail-rightroom.png"),
          text: "非常漂亮的两房户型，独立卫生间，1间房限制求合租。",
          money: "$800 每月",
          time: "目前有效 6个月租期",
        },
      ],
      recommendbox: "recommendbox",
      recommendinfo: "recommendinfo",
      footer: "footer",
      footerline: "footerline",
      center: "center",
      collection: "collection",
      iconactive: false,
      bottombutton:"bottombutton"
    };
  },
  methods: {
    back() {
      //$router.back()后退一步记录
      this.$router.back();
    },
    // 点击分享选项时触发	回调参数 option: Option, index: number
    onSelect(option) {
      console.log(option.name);
      this.showShare = false;
    },
    changeIcon() {
      this.iconactive = !this.iconactive;
    },
  },
};
</script>

<style lang="less" scoped>
.backicon {
  width: 1.6rem;
  margin-left: 6.2%;
  position: absolute;
  top: 6.2%;
  margin-top: 1%;
}
.tophandle :nth-child(2) div {
  width: 1.3rem;
}
.spoticon {
  width: 1.6rem;
  margin-left: 6.3%;
  position: absolute;
  top: 7.6%;
  right: 6.2%;
}
.time {
  position: absolute;
  top: 0;
  margin-top: 4%;
  margin-left: 8%;
}
.wifi {
  position: absolute;
  top: 0;
  right: 4%;
  margin-top: 4%;
}
.headimg {
  margin-top: 22%;
  margin-bottom: 20%;
}
.address {
  color: #404b69;
  font-weight: 500;
  margin-top: -2%;
}
.borderline {
  border-bottom: 1px solid #f2edee;
}
.agetitle {
  color: #020433;
  font-weight: 900;
}
.ageinfo {
  margin-top: -4%;
  margin-bottom: 2%;
}
.subTitle {
  font-weight: 900;
  font-size: 20px;
  margin-top: 2%;
}
.subContentSpace {
  height: auto;
  margin-top: -5%;
  padding-right: 6%;
  p {
    padding-bottom: 3%;
    color: #020433;
  }
  span {
    color: #0f73ee;
    font-weight: 500;
  }
}
.relationship {
  background: #f7f9ff;
  border-radius: 6%;
  margin-right: 6%;
  padding: 1% 6% 6% 6%;
  margin-bottom: 7%;
  p {
    font-size: 14px;
    color: #404b69;
    font-weight: 500;
  }
}
.questionbox {
  margin-top: -4%;
}
.questionbox > :nth-child(2) {
  margin-top: -7%;
}
.authentication {
  margin: 7% 0 3% 0;
  span {
    color: #08c299;
    font-size: 12px;
    font-weight: 500;
    margin-left: -5%;
  }
}
.recommendbox {
  padding-left: 6%;
  img {
    height: 30%;
    margin-right: 6%;
  }
}
.recommendinfo > :nth-child(1) {
  color: #020433;
  font-size: 17px;
  font-weight: 600;
  margin-top: -1%;
}
.recommendinfo > :nth-child(2) {
  color: #020433;
  font-size: 16px;
  font-weight: 600;
  margin-top: -4%;
}
.recommendinfo > :nth-child(3) {
  color: #404b69;
  font-size: 14px;
  font-weight: 500;
  margin-top: -4%;
}
.footer {
  width: 3.1rem;
  height: 3.1rem;
  background: #95a0b6;
  margin-top: 5.6%;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topbox {
    margin-left: 6%;
    margin-right: 6%;
}
.center {
  margin-left: 6%;
}
.collection {
  width: 1.6rem;
  margin-right: 3.5%;
}

.footerline {
  display: flex;
  justify-content: center;
  img {
    margin-top: 4%;
    margin-bottom: 3%;
    width: 36%;
  }
}
.bottombutton {
    padding: 0 6% 3% 6%;
    border-top: 3px solid #f0f0f3;
}
</style>