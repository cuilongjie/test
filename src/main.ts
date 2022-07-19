import Vue from "vue";
import ElementUI from 'element-ui';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small' });
Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
