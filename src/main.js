import Vue from "vue";
import { store } from "./store";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
