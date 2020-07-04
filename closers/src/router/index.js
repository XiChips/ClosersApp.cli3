import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Member from "@/views/Member.vue";
import Search from "@/views/Search.vue";
import Shopcar from "@/views/Shopcar.vue";
import NewsList from "@/components/NewsList.vue";
import Collections from "@/components/Collections.vue";
import Shopping from "@/components/Shopping.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Home",
    path: "/home",
    component: Home
  },
  {
    path: "/Member",
    name: "Member",
    component: Member
  },
  {
    path: "/Search",
    name: "Search",
    component: Search
  },
  {
    path: "/Shopcar",
    name: "Shopcar",
    component: Shopcar
  },
  {
    path: "/home/NewsList",
    name: "NewsList",
    component: NewsList
  },
  {
    path: "/home/Collections",
    name: "Collections",
    component: Collections
  },
  {
    path: "/home/Shopping",
    name: "Shopping",
    component: Shopping
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
