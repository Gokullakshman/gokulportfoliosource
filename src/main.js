import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' 
import "vue-toastification/dist/index.css";

import AOS from 'aos';         // JavaScript functionality
import 'aos/dist/aos.css';  

import VueGoodLinks from 'vue-good-links';

// import the styles 
import 'vue-good-links/dist/vue-good-links.css'; 
import store from "./store.js";

Vue.use(VueGoodLinks);

AOS.init();                   // Initialize AOS

Vue.config.productionTip = false
Vue.prototype.$drawer=false
Vue.prototype.$nav='About'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
