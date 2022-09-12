<template>
  <div id="box">
    <!-- :autoplay="3000" -->
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
        <van-icon
          name="like-o"
          size="28"
          color="#fff"
          v-if="this.iconactive == false"
          class="collection"
          @click="changeIcon"
        />
        <van-icon
          name="like"
          size="28"
          color="rgb(205 14 0)"
          v-if="this.iconactive == true"
          class="collection"
          @click="changeIcon"
        />
      </van-col>
    </van-row>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="shareoptions"
      @select="onSelect"
    />

    <div :class="center">
      <van-row type="flex" justify="left" :class="authentication">
        <van-col span="2">
          <van-image
            width="15"
            :src="require('../assets/images/detail-green.png')"
          />
        </van-col>
        <van-col span="6">
          <span>已实名认证</span>
        </van-col>
      </van-row>

      <van-row type="flex" justify="left" :class="title">
        <van-col span="24">
          <span>环球购物广场附近卡罗尔花园1间双人房出租</span>
        </van-col>
      </van-row>

      <van-row type="flex" justify="left">
        <van-col span="8" :class="money">
          <p><span>$800</span>每月</p>
        </van-col>
        <van-col span="8" :class="deposit">
          <p>（$700押金）</p>
        </van-col>
      </van-row>
      <div :class="iconbox">
        <van-row type="flex" justify="space-around">
          <van-col span="13" :class="icon">
            <van-image width="16" height="18" :src="twopeople.image" />
            <span>{{ twopeople.text }}</span>
          </van-col>
          <van-col span="8" :class="icon">
            <van-image width="18" height="14" :src="bedroom.image" />
            <span>{{ bedroom.text }}</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="13" :class="icon">
            <van-image width="14" height="18" :src="room.image" />
            <span>{{ room.text }}</span>
          </van-col>
          <van-col span="8" :class="icon">
            <van-image width="17" height="19" :src="showerroom.image" />
            <span>{{ showerroom.text }}</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <van-row type="flex" justify="center">
      <van-col span="24">
        <van-image
          width="100%"
          height="auto"
          :src="require('../assets/images/detail-fangdong.png')"
          @click="landlordinfo"
        />
      </van-col>
    </van-row>

    <div :class="content">
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>租期</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subContent">
          <p>6月1日，2018</p>
          <p>最少租期一年</p>
        </van-col>
      </van-row>

      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>寻找</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subContent">
          <p>以下条件租客</p>
          <p>男性或女性在 24-32岁 之间</p>
        </van-col>
      </van-row>

      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>描述</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subContentSpace">
          <p>空间：</p>
          <p>-</p>
          <p>
            位于布鲁克林市中心的新豪华高层建筑。双房，朝南，建筑面积为60平方米，小区电梯房。地理位置方便，直接在杰伊街地铁科与...<span
              >查看更多</span
            >
          </p>
        </van-col>
      </van-row>
    </div>

    <div :class="subContentFacilitie">
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>配套设备</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between" :class="facilitiesbox">
        <van-col span="3" v-for="(facilitie, index) in facilities" :key="index">
          <van-image width="36" height="36" :src="facilitie.image" />
        </van-col>
        <van-col span="3">
          <span>+ 8</span>
        </van-col>
      </van-row>
    </div>

    <div :class="subContentRequire">
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>要求</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left" gutter="60" :class="facilitiesbox">
        <van-col
          span="3"
          gutter="20"
          v-for="(require, index) in requires"
          :key="index"
        >
          <van-image width="36" height="36" :src="require.image" />
        </van-col>
      </van-row>
    </div>

    <div>
      <div class="center">
        <van-row type="flex" justify="left" :class="addresstitle">
          <van-col span="24">
            <p>地址</p>
          </van-col>
        </van-row>
        <van-row type="flex" justify="left" :class="address">
          <van-col span="24">
            <p>西部林街，布鲁克林区，纽约市</p>
          </van-col>
        </van-row>
      </div>
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/images/detail-address.png" style="width: 100%" />
        </van-col>
      </van-row>
    </div>

    <div :class="center">
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>评论</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subContentSpace">
          <img src="../assets/images/detail-zuke.png" :class="commentimg" @click="tenantinfo" />
          <p :class="comment">
            很棒的位置，非常干净，适合我们两个父母的家庭和两个成年的孩子和他们的伙伴。我们没有使用任何危害身体健康的墙漆，空气很清新的...<span
              >查看更多</span
            >
          </p>
        </van-col>
      </van-row>
    </div>

    <div :class="recommendbox">
      <van-row type="flex" justify="left">
        <van-col span="24" :class="subTitle">
          <p>相似推荐</p>
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

    <div :class="footerbox">
      <van-row type="flex" justify="space-between">
        <van-col span="10" :class="footer">
          <p><span>$800</span>每月</p>
          <p>（$700 押金）</p>
        </van-col>
        <van-col span="14">
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
      swipes: [
        require("../assets/images/detail-swipe.png"),
        require("../assets/images/detail-swipe.png"),
        require("../assets/images/detail-swipe.png"),
        require("../assets/images/detail-swipe.png"),
        require("../assets/images/detail-swipe.png"),
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
      authentication: "authentication",
      title: "title",
      money: "money",
      deposit: "deposit",
      twopeople: {
        image: require("../assets/images/detail-twopeople.png"),
        text: "最多两人租",
      },
      bedroom: {
        image: require("../assets/images/detail-bedroom.png"),
        text: "2个床",
      },
      room: {
        image: require("../assets/images/detail-tworoom.png"),
        text: "2间卧室",
      },
      showerroom: {
        image: require("../assets/images/detail-yushi.png"),
        text: "1间浴室",
      },
      iconbox: "iconbox",
      icon: "icon",
      collection: "collection",
      iconactive: false,
      content: "content",
      subTitle: "subTitle",
      subContent: "subContent",
      subContentSpace: "subContentSpace",
      facilities: [
        {
          image: require("../assets/images/sheshi-1.png"),
        },
        {
          image: require("../assets/images/sheshi-2.png"),
        },
        {
          image: require("../assets/images/sheshi-3.png"),
        },
        {
          image: require("../assets/images/sheshi-4.png"),
        },
        {
          image: require("../assets/images/sheshi-7.png"),
        },
      ],
      facilitiesbox: "facilitiesbox",
      subContentFacilitie: "subContentFacilitie",
      requires: [
        {
          title: "不喝酒",
          image: require("../assets/images/yaoqiu-4.png"),
          active: false,
        },
        {
          title: "不吸毒",
          image: require("../assets/images/yaoqiu-3.png"),
          active: false,
        },
        {
          title: "可养狗",
          image: require("../assets/images/yaoqiu-5.png"),
          active: false,
        },
        {
          title: "接受夫妻租",
          image: require("../assets/images/yaoqiu-8.png"),
        },
      ],
      subContentRequire: "subContentRequire",
      addresstitle: "addresstitle",
      address: "address",
      commentimg: "commentimg",
      comment: "comment",
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
      footerbox:"footerbox",
      footer: "footer",
      footerline: "footerline",
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
    landlordinfo() {
        this.$router.push({name:'landlord'})
    },
    tenantinfo() {
        this.$router.push({name:'tenant'})
    }
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
.collection {
  width: 1.6rem;
  margin-left: 6.3%;
  position: absolute;
  top: 6.2%;
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
.center {
  padding-left: 6%;
  padding-right: 6%;
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
.title {
  color: #020433;
  font-size: 26px;
  font-weight: 900;
}
.money {
  color: #020433;
  font-weight: 500;
  span {
    font-size: 28px;
    font-weight: 700;
    margin-right: 6%;
  }
}
.deposit {
  color: #404b69;
  padding-top: 2.6%;
  margin-left: -4%;
}
.iconbox {
  margin-top: 7%;
  margin-bottom: 2%;
}
.icon {
  margin-bottom: 8%;
  span {
    margin-left: 6%;
  }
}
.content {
  padding-left: 6%;
}
.subTitle {
  font-weight: 900;
  font-size: 20px;
  margin-top: 2%;
}
.subContent {
  border-bottom: 1px solid #f2edee;
  height: auto;
  margin-top: -5%;
}
.subContent > :last-child {
  margin-top: -2%;
  margin-bottom: 7%;
}
.subContentSpace {
  border-bottom: 1px solid #f2edee;
  height: auto;
  margin-top: -5%;
  padding-right: 6%;
  span {
    color: #0f73ee;
  }
}
.subContentSpace > :nth-child(2) {
  margin-top: -3%;
}
.subContentSpace > :nth-child(3) {
  margin-top: -2%;
  margin-bottom: 7%;
}
.subContentFacilitie {
  padding-left: 6%;
  height: auto;
  margin-top: 1%;
  margin-bottom: 7%;
}
.facilitiesbox {
  display: flex;
  margin-top: 1%;
  padding-right: 6%;
  padding-bottom: 5%;
  border-bottom: 1px solid #f2edee;
  span {
    color: #0f73ee;
    font-size: 28px;
    display: inline-block;
    margin-top: 11%;
  }
}
.subContentRequire {
  padding-left: 6%;
  height: auto;
  margin-top: -6%;
  margin-bottom: 7%;
}
.addresstitle {
  font-weight: 900;
  font-size: 20px;
  margin-top: -4%;
}
.address {
  margin-top: -5%;
}
.commentimg {
  width: 60%;
  padding-bottom: 8%;
  margin-top: 7%;
}
.comment {
  margin-bottom: 7%;
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
.footerbox {
  padding-left: 6%;
  padding-right: 6%;
  box-shadow: -2px -2px 4px 1px #ebedf5;
}
.footer {
  span {
    color: #020433;
    font-size: 19px;
    font-weight: 800;
    margin-right: 4%;
  }
}
.footer > :nth-child(1) {
  font-size: 14px;
  color: #404b69;
}
.footer > :nth-child(2) {
  font-size: 14px;
  color: #404b69;
  margin-top: -6%;
  margin-left: -5%;
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
</style>