// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './main.style'
import App from './app'
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
