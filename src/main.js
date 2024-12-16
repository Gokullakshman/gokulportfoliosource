import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' 
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
