<template>
  <div>
    <van-row type="flex" justify="space-between">
      <van-col span="17" :class="time">
        <van-image
          width="26"
          :src="require('../assets/images/time-black.png')"
        />
      </van-col>
      <van-col span="4" :class="wifi">
        <van-image :src="require('../assets/images/wifi-black.png')" />
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="6">
        <van-image
          :src="require('../assets/images/tenant-headimg.png')"
          :class="headimg"
        />
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="14">
        <van-image :src="require('../assets/images/tenant-name.png')" />
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" :class="address">
      <van-col span="4">
        <p>租客</p>
      </van-col>
      <van-col span="3">
        <p>纽约</p>
      </van-col>
    </van-row>
    <div :class="contentcontainer">
      <div :class="contentbox" v-for="(item, index) in content" :key="index">
        <div :class="contentitem">
          <div>
            <img :src="item.imgleft" />
            <p>{{ item.textleft }}</p>
          </div>
        </div>
        <div :class="contentitem">
          <div>
            <img :src="item.imgright" />
            <p>{{ item.textright }}</p>
          </div>
        </div>
      </div>
    </div>

    <div >
      <van-row type="flex" justify="space-between" :class="footerbox">
        <van-col span="4">
          <van-image
            :class="footericon"
            :src="require('../assets/images/tenant-bottom-one.png')"
            width="1.6rem"
          />
        </van-col>
        <van-col span="4">
          <van-image
            :class="footericon"
            :src="require('../assets/images/tenant-bottom-two.png')"
            width="1.7rem"
          />
        </van-col>
        <van-col span="4">
          <van-image
            :class="footericon"
            :src="require('../assets/images/tenant-bottom-three.png')"
            width="2.2rem"
            
          />
        </van-col>
        <van-col span="4">
          <van-image
            :class="footericon"
            :src="require('../assets/images/tenant-bottom-four.png')"
            width="1.4rem"
            height="1.6rem"
          />
        </van-col>
        <van-col span="2">
          <van-image
            :class="footerblueicon"
            :src="require('../assets/images/tenant-bottom-five.png')"
            width="1.4rem"
          />
        </van-col>
      </van-row>
    </div>
    <div :class="footerline">
      <img src="../assets/images/footer-line.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "time",
      wifi: "wifi",
      headimg: "headimg",
      address: "address",
      contentcontainer: "contentcontainer",
      contentbox: "contentbox",
      contentitem: "contentitem",
      content: [
        {
          imgleft: require("../assets/images/tenant-one.png"),
          textleft: "发布新的广告",
          imgright: require("../assets/images/tenant-two.png"),
          textright: "发布我的房间",
        },
        {
          imgleft: require("../assets/images/tenant-three.png"),
          textleft: "切换到房东模式",
          imgright: require("../assets/images/tenant-four.png"),
          textright: "邀请朋友和其他人",
        },
        {
          imgleft: require("../assets/images/tenant-five.png"),
          textleft: "帮助中心",
          imgright: require("../assets/images/tenant-six.png"),
          textright: "设置",
        },
      ],
      footerbox: "footerbox",
      footericon: "footericon",
      footerblueicon: "footerblueicon",
      footerline: "footerline",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
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
  margin-top: 60%;
  margin-bottom: 20%;
}
.address {
  color: #404b69;
  margin-top: -2%;
}
.contentcontainer > :nth-child(2) {
  padding: 0 6% 6% 6%;
}
.contentcontainer > :nth-child(3) {
  padding: 0 6% 8% 6%;
}
.contentbox {
  background: #f7f9ff;
  height: auto;
  padding: 6%;
  display: flex;
  justify-content: space-between;
}
.contentitem {
  background: white;
  height: 8.37rem;
  width: 10rem;
  border-radius: 4%;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 2%);
  img {
    width: 2.5rem;
    margin: 0 auto;
    display: table-caption;
  }
  p {
    color: #020433;
    font-weight: 500;
    text-align: center;
  }
}
.contentitem > :nth-child(1) {
  margin: 16% auto;
  width: 40%;
}
.footerbox {
  padding-left: 6%;
  padding-right: 6%;
  box-shadow: -2px -2px 4px 1px #ebedf5;
  img {
    width: 1.8rem;
  }
}
.footerbox >:nth-child(3) .footericon  {
        padding-top: 12%;
}
.footericon {
  padding-top: 30%;
}
.footerblueicon {
  padding-top: 64%;
}
.footerline {
  display: flex;
  justify-content: center;
  img {
    margin-top: 8%;
    margin-bottom: 3%;
    width: 36%;
  }
}
</style>