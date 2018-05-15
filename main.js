import Vue from 'vue'
import ElementUI from 'element-ui'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import qgCommon from './common/js/qgCommon.js'
import App from './App.vue'
require("./assets/css/main.css");
/*require("./assets/js/main");
require("./assets/js/util");
require("./assets/js/skel.min");
require("./assets/js/jquery.min");*/
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(qgCommon)

new Vue({
  el: '#app',
  render: h => h(App)
})
