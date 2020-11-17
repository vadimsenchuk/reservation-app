import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import Locale from "element-ui/lib/locale/lang/en";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI, { Locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
