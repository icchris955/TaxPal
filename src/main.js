import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { BootstrapVue } from 'bootstrap-vue'

// Add the compositionAPI for vuejs2
import vueCompositionAPI from '@vue/composition-api'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(vueCompositionAPI)
Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
