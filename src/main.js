import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' 
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import AOS from 'aos';         // JavaScript functionality
import 'aos/dist/aos.css';  

import VueGoodLinks from 'vue-good-links';

// import the styles 
import 'vue-good-links/dist/vue-good-links.css';

Vue.use(VueGoodLinks);

AOS.init();                   // Initialize AOS



Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.config.productionTip = false
Vue.prototype.$drawer=false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
