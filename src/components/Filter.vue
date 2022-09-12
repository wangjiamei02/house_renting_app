<template>
  <div id="box">
    <div :class="center">
      <!-- 顶部 -->
      <van-row type="flex" justify="space-between" :class="top">
        <van-col span="8">
          <van-icon name="cross" size="28" color="#020433" :class="backicon" />
        </van-col>
        <van-col span="8" :class="topTitle">
          <p>筛选</p>
        </van-col>
        <van-col span="8" :class="clear">
          <p>清除</p>
        </van-col>
      </van-row>

      <!-- 来源 -->
      <div>
        <van-row type="flex" justify="left" :class="mainTitle">
          <van-col span="14">
            <span>来源</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" :class="contentsArea">
          <van-col
            span="5"
            v-for="(source, index) in sources"
            :key="index"
            @click="changeSource(index)"
          >
            <div class="imgbox" :class="source.active == true ? 'active' : ''">
              <van-image width="36" height="36" :src="source.image" />
            </div>
            <p :class="source.active == true ? 'activefont' : ''">
              {{ source.title }}
            </p>
          </van-col>
        </van-row>

        <!-- 性别 -->
        <van-row type="flex" justify="left" :class="subTitle">
          <van-col span="14">
            <span>性别</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" :class="contentsAreatwo">
          <van-col
            span="5"
            v-for="(gender, index) in genders"
            :key="index"
            @click="changeGender(index)"
          >
            <div class="imgbox" :class="gender.active == true ? 'active' : ''">
              <van-image width="36" height="36" :src="gender.image" />
            </div>
            <p :class="gender.active == true ? 'activefont' : ''">
              {{ gender.title }}
            </p>
          </van-col>
        </van-row>

        <!-- 年龄 -->
        <van-row type="flex" justify="space-between" :class="subTitle">
          <van-col span="12">
            <span>年龄</span>
          </van-col>
          <van-col span="12" :class="age">
            <span>{{ ageone }} - {{ agetwo }}</span>
          </van-col>
        </van-row>
        <van-slider
          v-model="agedata"
          range
          :min="16"
          :max="65"
          bar-height="4px"
          active-color="#3d67f2"
          :class="slider"
          @change="ageSliderChange"
        >
          <!-- 自定义滑块按钮 -->
          <template #button>
            <div class="custom-button"></div>
          </template>
        </van-slider>
        <van-row type="flex" justify="space-between" :class="stepNum">
          <van-col span="12">
            <p>16</p>
          </van-col>
          <van-col span="12">
            <p>65</p>
          </van-col>
        </van-row>

        <!-- 职业 -->
        <van-row type="flex" justify="left" :class="subTitle">
          <van-col span="14">
            <span>职业</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" :class="contentsAreatwo">
          <van-col
            span="6"
            v-for="(vocation, index) in vocations"
            :key="index"
            @click="changeVocation(index)"
          >
            <div
              class="imgbox"
              :class="vocation.active == true ? 'active' : ''"
            >
              <van-image width="36" height="36" :src="vocation.image" />
            </div>
            <p :class="vocation.active == true ? 'activefont' : ''">
              {{ vocation.title }}
            </p>
          </van-col>
        </van-row>
      </div>

      <!-- 房间类型 -->
      <div>
        <van-row type="flex" justify="left" :class="mainTitle">
          <van-col span="14">
            <span>房间类型 </span>
          </van-col>
        </van-row>

        <van-row type="flex" justify="left" :class="sortrule">
          <van-col span="14">
            <p>排序按照</p>
          </van-col>
        </van-row>
        <van-tabs type="card" color="#0f73ee" :class="tabs">
          <van-tab
            v-for="(sort, index) in sortList"
            :key="index"
            :title="sort"
          ></van-tab>
        </van-tabs>

        <!-- 价格范围 -->
        <van-row type="flex" justify="space-between" :class="subTitle">
          <van-col span="12">
            <span>价格范围</span>
          </van-col>
          <van-col span="12" :class="age">
            <span>${{ moneyone }} - ${{ moneytwo }}</span>
          </van-col>
        </van-row>
        <van-slider
          v-model="money"
          :min="0"
          :max="5000"
          :step="100"
          range
          bar-height="4px"
          active-color="#3d67f2"
          :class="slider"
          @change="moneySliderChange"
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

        <!-- 卧室床 -->
        <van-row type="flex" justify="left" :class="subTitle">
          <van-col span="14">
            <span>卧室床</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" :class="contentsAreatwo">
          <van-col
            span="5"
            v-for="(room, index) in bedroom"
            :key="index"
            @click="changeRoom(index)"
          >
            <div class="imgbox" :class="room.active == true ? 'active' : ''">
              <van-image width="36" height="36" :src="room.image" />
            </div>
            <p :class="room.active == true ? 'activefont' : ''">
              {{ room.title }}
            </p>
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

        <!-- 租期 -->
        <van-row type="flex" justify="space-between" :class="subTitle">
          <van-col span="12">
            <span>租期</span>
          </van-col>
          <van-col span="12" :class="age">
            <span>{{ tenancyone }} - {{ tenancytwo }}个月</span>
          </van-col>
        </van-row>
        <van-slider
          v-model="tenancy"
          :min="1"
          :max="12"
          range
          bar-height="4px"
          active-color="#3d67f2"
          :class="slider"
          @change="tenancySliderChange"
        >
          <!-- 自定义滑块按钮 -->
          <template #button>
            <div class="custom-button"></div>
          </template>
        </van-slider>
        <van-row type="flex" justify="space-between" :class="stepNum">
          <van-col span="12">
            <p>0个月</p>
          </van-col>
          <van-col span="12">
            <p>1年以上</p>
          </van-col>
        </van-row>

        <!-- 配套设备 -->
        <van-row type="flex" justify="left" :class="subTitle">
          <van-col span="14">
            <span>配套设备</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" :class="facilitiebox">
          <van-col
            span="8"
            v-for="(facilitie, index) in facilities"
            :key="index"
            @click="changeFacilitie(index)"
          >
            <div
              class="imgbox"
              :class="facilitie.active == true ? 'active' : ''"
            >
              <van-image width="36" height="36" :src="facilitie.image" />
            </div>
            <p :class="facilitie.active == true ? 'activefont' : ''">
              {{ facilitie.title }}
            </p>
          </van-col>
        </van-row>

        <!-- 要求 -->
        <van-row type="flex" justify="left" :class="subTitle">
          <van-col span="14">
            <span>要求</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="left" :class="facilitiebox">
          <van-col
            span="8"
            v-for="(require, index) in requires"
            :key="index"
            @click="changeRequire(index)"
          >
            <div class="imgbox" :class="require.active == true ? 'active' : ''">
              <van-image width="36" height="36" :src="require.image" />
            </div>
            <p :class="require.active == true ? 'activefont' : ''">
              {{ require.title }}
            </p>
          </van-col>
        </van-row>
      </div>

    </div>
    <!-- 底部按钮 -->
    <div :class="bottomline"></div>
    <button-gradient
      :class="center"
      style="padding-bottom: 10%"
      @click.native="resultEvent"
      >查看结果 100+</button-gradient
    >
  </div>
</template>

<script>
import ButtonGradient from "./ButtonGradient.vue";
export default {
  components: { ButtonGradient },
  data() {
    return {
      center: "center",
      top: "top",
      backicon: "backicon",
      topTitle: "topTitle",
      clear: "clear",
      mainTitle: "mainTitle",
      sources: [
        {
          title: "租客",
          image: require("../assets/images/laiyuan-1.png"),
          active: false,
        },
        {
          title: "房东",
          image: require("../assets/images/laiyuan-2.png"),
          active: false,
        },
      ],
      genders: [
        {
          title: "男士",
          image: require("../assets/images/xingbie-1.png"),
          active: false,
        },
        {
          title: "女士",
          image: require("../assets/images/xingbie-2.png"),
          active: false,
        },
      ],
      vocations: [
        {
          title: "在职人员",
          image: require("../assets/images/zhiye-1.png"),
          active: false,
        },
        {
          title: "学生",
          image: require("../assets/images/zhiye-2.png"),
          active: false,
        },
      ],
      bedroom: [
        {
          title: "双人床",
          image: require("../assets/images/woshichuang-1.png"),
          active: false,
        },
        {
          title: "单人床",
          image: require("../assets/images/woshichuang-2.png"),
          active: false,
        },
      ],
      facilities: [
        {
          title: "洗衣机",
          image: require("../assets/images/sheshi-1.png"),
          active: false,
        },
        {
          title: "Wifi",
          image: require("../assets/images/sheshi-2.png"),
          active: false,
        },
        {
          title: "家具齐全",
          image: require("../assets/images/sheshi-3.png"),
          active: false,
        },
        {
          title: "电梯房",
          image: require("../assets/images/sheshi-4.png"),
          active: false,
        },
        {
          title: "门卫",
          image: require("../assets/images/sheshi-5.png"),
          active: false,
        },
        {
          title: "空调",
          image: require("../assets/images/sheshi-6.png"),
          active: false,
        },
        {
          title: "暖气",
          image: require("../assets/images/sheshi-7.png"),
          active: false,
        },
        {
          title: "按月交租",
          image: require("../assets/images/sheshi-8.png"),
          active: false,
        },
        {
          title: "健身馆",
          image: require("../assets/images/sheshi-9.png"),
          active: false,
        },
        {
          title: "TV",
          image: require("../assets/images/sheshi-10.png"),
          active: false,
        },
        {
          title: "私人浴室",
          image: require("../assets/images/sheshi-11.png"),
          active: false,
        },
        {
          title: "阳台",
          image: require("../assets/images/sheshi-12.png"),
          active: false,
        },
        {
          title: "宠物狗",
          image: require("../assets/images/sheshi-13.png"),
          active: false,
        },
        {
          title: "宠物猫",
          image: require("../assets/images/sheshi-14.png"),
          active: false,
        },
        {
          title: "其他宠物",
          image: require("../assets/images/sheshi-15.png"),
          active: false,
        },
      ],
      requires: [
        {
          title: "不能吸烟",
          image: require("../assets/images/yaoqiu-1.png"),
          active: false,
        },
        {
          title: "不养宠物",
          image: require("../assets/images/yaoqiu-2.png"),
          active: false,
        },
        {
          title: "不吸毒",
          image: require("../assets/images/yaoqiu-3.png"),
          active: false,
        },
        {
          title: "不喝酒",
          image: require("../assets/images/yaoqiu-4.png"),
          active: false,
        },
        {
          title: "可养狗",
          image: require("../assets/images/yaoqiu-5.png"),
          active: false,
        },
        {
          title: "可养猫",
          image: require("../assets/images/yaoqiu-6.png"),
          active: false,
        },
        {
          title: "可养宠物",
          image: require("../assets/images/yaoqiu-7.png"),
          active: false,
        },
        {
          title: "接受夫妻租",
          image: require("../assets/images/yaoqiu-8.png"),
        },
      ],
      changeList: [],
      contentsArea: "contentsArea",
      subTitle: "subTitle",
      contentsAreatwo: "contentsAreatwo",
      facilitiebox: "facilitiebox",
      age: "age",
      agedata: [24, 32],
      ageone: 24,
      agetwo: 32,
      stepNum: "stepNum",
      slider: "slider",
      sortrule: "sortrule",
      sortList: ["匹配度", "价格", "最近时间"],
      money: [600, 2500],
      tabs: "tabs",
      inputBox: "inputBox",
      cell: "cell",
      field: "field",
      dateshow: false,
      date: "",
      tenancy: [3, 6],
      tenancyone: 3,
      tenancytwo: 6,
      imgbox: "imgbox",
      bottomline: "bottomline",
    };
  },
  computed: {
    // 价格范围滑块格式化
    moneyone: {
      get() {
        return this.money[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      },
      set() {},
    },
    moneytwo: {
      get() {
        return this.money[1].toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      },
      set() {},
    },
  },
  methods: {
    ageSliderChange(value) {
      console.log(value);
      this.ageone = value[0];
      this.agetwo = value[1];
    },
    moneySliderChange(value) {
      console.log(value);
      this.moneyone = value[0];
      this.moneytwo = value[1];
    },
    tenancySliderChange(value) {
      console.log(value);
      this.tenancyone = value[0];
      this.tenancytwo = value[1];
    },
    //格式化日期
    formatDate(date) {
      return `${
        date.getMonth() + 1
      }月${date.getDate()}日，${date.getFullYear()}`;
    },
    //日期选择完成后会触发 confirm 事件
    onConfirm(date) {
      this.dateshow = false;
      this.date = this.formatDate(date);
    },
    //查看结果按钮
    resultEvent() {
      this.$router.push({ name: "detail" });
    },
    changeSource(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.sources[i].active = !this.sources[i].active;
      // 把 lists 数组中 active 为 true 的项添加到 changeList 数组中
      this.changeList.push(this.sources.filter((item) => item.active == true));
      console.log(this.changeList);
    },
    changeGender(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.genders[i].active = !this.genders[i].active;
      // 把 lists 数组中 active 为 true 的项添加到 changeList 数组中
      this.changeList.push(this.genders.filter((item) => item.active == true));
      console.log(this.changeList);
    },
    changeVocation(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.vocations[i].active = !this.vocations[i].active;
      // 把 lists 数组中 active 为 true 的项添加到 changeList 数组中
      this.changeList.push(
        this.vocations.filter((item) => item.active == true)
      );
      console.log(this.changeList);
    },
    changeRoom(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.bedroom[i].active = !this.bedroom[i].active;
      // 把 lists 数组中 active 为 true 的项添加到 changeList 数组中
      this.changeList.push(this.bedroom.filter((item) => item.active == true));
      console.log(this.changeList);
    },
    changeFacilitie(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.facilities[i].active = !this.facilities[i].active;
      // 把 lists 数组中 active 为 true 的项添加到 changeList 数组中
      this.changeList.push(
        this.facilities.filter((item) => item.active == true)
      );
      console.log(this.changeList);
    },
    changeRequire(i) {
      // 点击某一项的 active 取反为 true 再次点击又会取反为 false
      this.requires[i].active = !this.requires[i].active;
      // 把 lists 数组中 active 为 true 的项添加到 changeList 数组中
      this.changeList.push(this.requires.filter((item) => item.active == true));
      console.log(this.changeList);
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
  overflow: auto;
}
.center {
  padding-left: 6%;
  padding-right: 6%;
}
.top {
  margin-top: 13%;
}
.backicon {
  margin-top: 13%;
}
.topTitle {
  color: #020433;
  font-weight: 800;
  text-align: center;
  font-size: 17px;
}
.clear {
  text-align: end;
  color: #0f73ee;
  font-weight: 800;
  margin-top: 1%;
}
.mainTitle {
  margin-top: 6%;
  color: #020433;
  font-size: 32px;
  font-weight: 800;
}
.contentsArea {
  text-align: center;
  margin-top: 10%;
  margin-left: 12%;
  margin-right: 12%;
  p {
    // color: #020433;
    font-size: 14px;
    font-weight: 600;
    margin-left: 14%;
  }
}
.contentsAreatwo {
  text-align: center;
  margin-top: 6%;
  margin-left: 12%;
  margin-right: 12%;
  p {
    // color: #020433;
    font-size: 14px;
    font-weight: 600;
    margin-left: 14%;
  }
}
.facilitiebox {
  text-align: center;
  margin-top: 5%;
  margin-left: -4%;
  margin-right: -4%;
  p {
    // color: #020433;
    font-size: 14px;
    font-weight: 600;
  }
}
.subTitle {
  font-size: 19px;
  font-weight: 800;
  margin-top: 5%;
  color: #020433;
}
.age {
  text-align: end;
  font-size: 16px;
  font-weight: 700;
  margin-top: 1%;
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
    color: #95a0b6;
    font-size: 14px;
  }
}
.stepNum > :nth-child(2) {
  text-align: end;
}
.slider {
  margin-top: 10%;
}
.sortrule {
  color: #020433;
//   font-weight: bold;
  margin-top: 6%;
}
.tabs {
  margin-bottom: 12%;
}
.inputBox {
  margin-top: 6%;
  margin-bottom: 12%;
}
.cell {
  border: 2px #f0f0f0 solid;
  border-radius: 6px;
}
.field {
  background-color: transparent;
}

.imgbox {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  margin: 0 auto;
}
.bottomline {
  background-image: linear-gradient(#f4f4f6, #eeeef1);
  height: 2px;
  margin-top: 4%;
}
.active {
  background: #0f73ee;
}
.activefont {
  color: #0f73ee;
}
</style>
