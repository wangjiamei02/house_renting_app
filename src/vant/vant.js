/**
 * vant 的一些组件的使用
 * 用到什么组件就注册一下 
 */
/**
 * vant 的一些组件的使用
 */
 import Vue from 'vue'
 import { Lazyload, Swipe, SwipeItem, NoticeBar, Image as VanImage,Row,Col,Tab,Tabs,
    Button,Icon,Popup,Area,Field,ActionSheet,NumberKeyboard,Cell,CellGroup,Progress,Slider,
    Calendar,Sticky,Uploader,PasswordInput,RadioGroup,Radio,Checkbox,CheckboxGroup,ShareSheet,
    Toast,Badge
} from 'vant'
 Vue.use(Lazyload) //布局
 Vue.use(Swipe) //轮播
 Vue.use(SwipeItem) //轮播的项
 Vue.use(NoticeBar) //通知栏
 Vue.use(VanImage) //图片
 Vue.use(Row) //行
 Vue.use(Col) //列
 Vue.use(Tab) //标签页的项
 Vue.use(Tabs) //标签页
 Vue.use(Button) //按钮
 Vue.use(Icon) //图标
 Vue.use(Popup) //弹出层
 Vue.use(Area) //省市区选择
 Vue.use(Field) //输入框
 Vue.use(ActionSheet) //动作面板
 Vue.use(NumberKeyboard) //数字键盘
 Vue.use(Cell); //单元格
 Vue.use(CellGroup); //单元格的项
 Vue.use(Progress); //进度条
 Vue.use(Slider); //滑块
 Vue.use(Calendar); //日历
 Vue.use(Sticky); //粘性布局
 Vue.use(Uploader); //文件上传
 Vue.use(PasswordInput); //密码输入框
 Vue.use(Radio);  //单选框的项
Vue.use(RadioGroup); //单选框
Vue.use(Checkbox); //复选框的项
Vue.use(CheckboxGroup); //复选框
Vue.use(ShareSheet);  //分享面板
Vue.use(Toast); //轻提示
Vue.use(Badge); //徽标
