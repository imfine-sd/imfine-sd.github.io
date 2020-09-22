import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import {router} from './routers/index.js'

require('./directives/index.js')

Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
