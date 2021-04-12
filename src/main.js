import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PostIt from "./components/PostIt.vue";

Vue.component('PostIt',  PostIt )

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
