import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Header, Swipe, SwipeItem } from "mint-ui";
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import "./lib/css/mui.css";
import "./lib/css/icons-extra.css";

import $ from 'jquery';


Vue.prototype.$ = $;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
