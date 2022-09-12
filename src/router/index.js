import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:{
      name:'welcome',
     },     
  },
  //欢迎页
  {
    path: '/welcome', 
    name:'welcome',
    component:() => import('@c/Welcome.vue'),
  },
  //引导页
  {
    path: '/guide',
    name: 'guide',
    component:() => import('@c/Guide.vue'),
  },
  //登录页
  {
    path: '/login', 
    name:'login',
    component:() => import('@c/Login.vue'),
  },
  //忘记密码页
  {
    path: '/forgot_password',
    name: 'forgotpassword',
    component:() => import('@c/ForgotPassword.vue'),
  },
  //重置密码页
  {
    path: '/reset_assword', 
    name:'resetpassword',
    component:() => import('@c/ResetPassword.vue'),
  },
  //重置密码成功页
  {
    path: '/reset_success',
    name: 'resetsuccess',
    component:() => import('@c/ResetSuccess.vue'),
  },
  //步骤一
  {
    path: '/step_one',
    name: 'stepone',
    component:() => import('@c/StepOne.vue'),
  },
  //步骤二
  {
    path: '/step_two',
    name: 'steptwo',
    component:() => import('@c/StepTwo.vue'),
  },
  //步骤三
  {
    path: '/step_three',
    name: 'stepthree',
    component:() => import('@c/StepThree.vue'),
  },
  //步骤四
  {
    path: '/step_four',
    name: 'stepfour',
    component:() => import('@c/StepFour.vue'),
  },
  //步骤五
  {
    path: '/step_five',
    name: 'stepfive',
    component:() => import('@c/StepFive.vue'),
  },
  //欢迎使用页
  {
    path: '/complete',
    name: 'complete',
    component:() => import('@c/Complete.vue'),
  },
  //问题一
  {
    path: '/question_one',
    name: 'questionone',
    component:() => import('@c/QuestionOne.vue'),
  },
  //问题二
  {
    path: '/question_two',
    name: 'questiontwo',
    component:() => import('@c/QuestionTwo.vue'),
  },
  //问题三
  {
    path: '/question_three',
    name: 'questionthree',
    component:() => import('@c/QuestionThree.vue'),
  },
  //问题四
  {
    path: '/question_four',
    name: 'questionfour',
    component:() => import('@c/QuestionFour.vue'),
  },
  //问题五
  {
    path: '/question_five',
    name: 'questionfive',
    component:() => import('@c/QuestionFive.vue'),
  },
  //问题完成
  {
    path: '/question_success',
    name: 'questionsuccess',
    component:() => import('@c/QuestionSuccess.vue'),
  },
  //筛选
  {
    path: '/filter',
    name: 'filter',
    component:() => import('@c/Filter.vue'),
  },
  //租户、房东详细信息
  {
    path: '/detail',
    name: 'detail',
    component:() => import('@c/Detail.vue'),
  },
  // 房东详细信息
  {
    path: '/landlord',
    name: 'landlord',
    component:() => import('@c/Landlord.vue'),
  },
  //租户详细信息
  {
    path: '/tenant',
    name: 'tenant',
    component:() => import('@c/Tenant.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//解决重复点击导航时，控制台出现报错 
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
