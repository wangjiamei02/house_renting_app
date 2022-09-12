<template>
  <div>
    <van-radio-group v-model="radio">
      <van-radio name="1">
        单选框 1
        <template #icon="props">
          <img class="icon" :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-radio>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
        radio:'1',
      icon:"icon",
      activeIcon: require("../assets/images/radio active.png"),
      inactiveIcon: require("../assets/images/radio inactive.png"),
    };
  },
};
</script>

<style lang="less" scoped>
.icon {
    height: 20px;
  }
</style>