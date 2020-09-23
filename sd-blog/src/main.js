import Vue from 'vue'
import App from './App.vue'
import {router} from './routers/index.js'
import vuetify from './plugins/vuetify';

require('./directives/index.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
