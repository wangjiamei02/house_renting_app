<template>
    <div>
        <!-- <van-sticky> -->
        <van-row type="flex" justify="left">
            <van-col span="4">
                <van-icon name="down" size="32" color="#020433" :class="backicon" @click="back"/>
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
    margin-top: 100%;
    margin-left: 40%;
}
.title {
    margin-top: 18%;
    color: #020433;
    font-weight: 600;
    text-align: center;
}
</style>