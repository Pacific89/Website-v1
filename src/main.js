import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueImg from 'v-img'
import VueParticlesBg from "particles-bg-vue";

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueImg)
Vue.use(VueParticlesBg)
new Vue({
  render: h => h(App),
}).$mount('#app')
