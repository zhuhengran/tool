import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './vip.vue'
import makeExcel from './utils/makeExcel'
// import WebSql from './WebSql/WebSql'
import axios from 'axios'
Vue.prototype.$axios = axios
// Vue.use(WebSql)
Vue.use(Element)
Vue.use(makeExcel)

new Vue({
  render: h => h(App)
}).$mount('#app')

