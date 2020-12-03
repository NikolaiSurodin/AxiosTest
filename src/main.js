import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import {store} from "@/store";
import axios from 'axios';
import wysiwyg from "vue-wysiwyg";
import Vuelidate from "vuelidate";

Vue.use(wysiwyg, {});
Vue.use(Vuelidate)


Vue.config.productionTip = false

Vue.prototype.$http = axios;
// тут тоже можно было использовать установку авторизации, и оно бы как бы работало бы
// но 1) опять был токен без Бирера, 2) так делать не хорошо, потому что не по понятиям :D
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
