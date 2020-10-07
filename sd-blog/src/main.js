import Vue from 'vue'
import App from './App.vue'
import {router} from './routers/index.js'
import vuetify from './plugins/vuetify';
import store from './store/index.js'
import VueQRCodeComponent from 'vue-qr-generator'

require('./directives/index.js')

Vue.config.productionTip = false
Vue.component('qr-code', VueQRCodeComponent)

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
