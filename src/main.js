import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router'

import { carousel, carouselItem } from 'element-ui';
Vue.use(carousel);
Vue.use(carouselItem);
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')