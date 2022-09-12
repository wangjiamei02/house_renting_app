<template>
    <div>
    <van-row type="flex" justify="center">
      <van-col span="24">
          <!--按钮路由跳转：   :to="{name:'entry'}"  -->
        <van-button :class="button" size="large" color="linear-gradient(45deg, #0f73ee, #c644fc)"
          >
          <slot></slot>
        </van-button>
      </van-col>
    </van-row>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            button:'button'
          }
        }
    }
</script>

<style lang="less" scoped>
.button {
  border-radius: 6px;
  font-weight: 400;
  margin-top: 7%;
    box-shadow: 0px 6px 20px 1px #e7e7e7;
  // 0px 10px 0px 0px #eede15; 
}
</style>