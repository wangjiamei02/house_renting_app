<template>
    <div id="box">
        <!-- <van-row type="flex" justify="end">
            <van-col span="3">
                <span>跳过{{count}}</span>
            </van-col>
        </van-row> -->
        <van-row type="flex" justify="center" :class="logo">
            <van-col span="10">
                <van-image :src="require('../assets/images/Splash logo.png')" />
            </van-col>
        </van-row>        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                logo:'logo',
                count:3
            }
        },
        created() {
            this.countDown() // 倒计时
        },
        methods: {
            countDown() {
            const TIME_COUNT = 3
            if (!this.timer) {
                this.count = TIME_COUNT
                this.timer = setInterval(() => {
                if (this.count > 1 && this.count <= TIME_COUNT) { //限制倒计时区间
                    this.count--
                } else {
                    clearInterval(this.timer)   //删除定时器
                    this.timer = null
                    //跳转的页面写在此处
                    this.$router.push({name:'guide'})
                }
                }, 1000)
            }
            },
        },
    }
</script>

<style lang="less" scoped>
#box {
  background-image: url('../assets/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
}
.logo {
    top: 40%;
    position: relative;
}

</style>