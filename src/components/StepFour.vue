<template>
  <div id="box">
    <back-icon>步骤4-5</back-icon>

    <!-- 进度条 -->
    <!-- <van-sticky :offset-top="100"> -->
    <van-progress
      :percentage="80"
      stroke-width="2px"
      :show-pivot="false"
      track-color="white"
      color="linear-gradient(45deg, #0f73ee, #a14df9)"
      :class="line"
    />
    <!-- </van-sticky> -->

    <div :class="center">
      <van-row type="flex" justify="left" :class="title">
        <van-col span="14">
          <span>创建你的个人账户</span>
        </van-col>
      </van-row>

      <!-- 姓名 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="name"
            size="large"
            placeholder="全名"
            :class="field"
          />
        </van-cell-group>
      </div>

      <!-- 性别选项卡 -->
      <van-row type="flex" justify="left" :class="gender">
        <van-col span="14">
          <p>性别</p>
        </van-col>
      </van-row>
      <van-tabs type="card" color="#0f73ee">
        <van-tab
          v-for="(gender, index) in genderList"
          :key="index"
          :title="gender"
        ></van-tab>
      </van-tabs>

      <!-- 出生日期 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="birth"
            size="large"
            placeholder="出生日期"
            :class="field"
            right-icon="notes-o"
            @click="dateshow = true"
          />
        </van-cell-group>
      </div>
      <van-calendar color="#0f73ee" v-model="dateshow" @confirm="onConfirm" />

      <!-- 联系电话 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="iphone"
            size="large"
            placeholder="联系电话"
            type="tel"
            :class="field"
            @click="iphoneshow = true"
          />
        </van-cell-group>
      </div>
      <van-number-keyboard
        v-model="iphone"
        :show="iphoneshow"
        @blur="iphoneshow = false"
        @input="onIphone"
      />

      <!-- 邮箱地址 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="email"
            size="large"
            placeholder="邮箱地址"
            :class="field"
          />
        </van-cell-group>
      </div>

      <!-- 密码 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="password"
            size="large"
            placeholder="密码"
            type="password"
            :class="field"
            @click="iphoneshow = true"
          />
        </van-cell-group>
      </div>

      <!-- 确认密码 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="checkpassword"
            size="large"
            placeholder="确认密码"
            type="password"
            :class="field"
            @click="iphoneshow = true"
          />
        </van-cell-group>
      </div>

      <!-- 职业 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="vocation"
            size="large"
            placeholder="你的职业是什么？"
            :class="field"
          />
        </van-cell-group>
      </div>

      <!-- 职业 -->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="workplace"
            size="large"
            placeholder="工作地点"
            :class="field"
          />
        </van-cell-group>
      </div>

      <!-- 个人简介-->
      <div :class="inputBox">
        <van-cell-group :border="false" :class="cell">
          <van-field
            v-model="synopsis"
            size="large"
            rows="1"
            autosize
            type="textarea"
            placeholder="个人简介"
            :class="field"
          />
        </van-cell-group>
      </div>

      <!-- 个人照片 -->
      <van-row type="flex" justify="left" :class="photo">
        <van-col span="14">
          <p>个人照片<span>（最大数量5）</span></p>
        </van-col>
      </van-row>
      <!-- 个人照片 -->
      <!-- multiple:是否开启图片多选，部分安卓机型不支持 -->
      <!-- max-count:文件上传数量限制 -->
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="5"
        :after-read="afterRead"
      />
    </div>
    <!-- 按钮 -->
    <div :class="bottomline"></div>
    <button-gradient :class="center" style="padding-bottom: 10%;" @click.native="nextEvent"
      >下一步</button-gradient
    >
  </div>
</template>

<script>
import BackIcon from "./BackIcon.vue";
import ButtonGradient from "./ButtonGradient.vue";
export default {
  components: { BackIcon, ButtonGradient },
  data() {
    return {
      line: "line",
      center: "center",
      title: "title",
      inputBox: "inputBox",
      cell: "cell",
      field: "field",
      name: "",
      gender: "gender",
      genderList: ["男士", "女士", "保密"],
      birth: "",
      dateshow: false,
      iphone: "",
      iphoneshow: false,
      email: "",
      password: "",
      checkpassword: "",
      vocation: "",
      workplace: "",
      synopsis: "",
      photo: "photo",
      fileList: [
        { url: require("../assets/images/Step4-1.png") },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: require("../assets/images/Step4-2.png") },
      ],
      bottomline: "bottomline",
    };
  },
  methods: {
    //格式化日期
    formatDate(birth) {
      return `${
        birth.getMonth() + 1
      }月${birth.getDate()}日，${birth.getFullYear()}`;
    },
    //日期选择完成后会触发 confirm 事件
    onConfirm(birth) {
      this.dateshow = false;
      this.birth = this.formatDate(birth);
    },
    //数字键盘输入的值
    onIphone(value) {
      console.log(value);
      this.iphone = value;
    },
    //文件读取完成后的回调函数
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      console.log(file);
      setTimeout(() => {
        file.status = "done";
        file.message = "上传成功";
      }, 1000);
    },
    //下一步按钮
    nextEvent() {
        this.$router.push({name:'stepfive'})
    }
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
.title {
  margin-top: 12%;
  color: #020433;
  font-size: 32px;
  font-weight: 800;
}
.line {
  margin-top: 2%;
}
.inputBox {
  margin-top: 6%;
}
.cell {
  border: 2px #f0f0f0 solid;
  border-radius: 6px;
}
.field {
  background-color: transparent;
}
.gender {
  color: #020433;
  font-weight: 900;
}
.photo {
  margin-top: 2%;
  p {
    color: #020433;
    font-weight: 900;
  }
  span {
    color: #fc2f39;
    font-size: 14px;
  }
}

.bottomline {
  background-image: linear-gradient(#f4f4f6, #eeeef1);
  height: 3px;
  margin-top: 2%;
}
</style>