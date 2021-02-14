import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueImg from 'v-img'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueImg)
new Vue({
  render: h => h(App),
}).$mount('#app')
