<template>
    <div>
        <!-- <van-sticky> -->
        <van-row type="flex" justify="left">
            <van-col span="4">
                <van-icon name="down" size="30" color="#ffffff" :class="backicon" @click="back"/>
            </van-col>
            <van-col span="16" :class="title">
                <slot></slot>
            </van-col>
        </van-row>
        <!-- </van-sticky> -->

    </div>
</template>

<script>
    export default {
        data() {
            return {
                backicon:'backicon',
                title:'title'
                
            }
        },
        methods:{
            back() {
                //$router.back()后退一步记录
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
.backicon {
    transform:rotate(90deg);
    margin-top: 86%;
    margin-left: 30%;
}
.title {
    margin-top: 15%;
    color: #ffffff;
    text-align: center;
}
</style>