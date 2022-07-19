import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home.vue";
import Test1 from "../views/01_祖孙传值/test.vue";
import Test2 from "../views/02_if判断问题/if判断.vue";
import Progress from "../views/03_progress/progress.vue";
import Differ from "../views/04_deffer/differ.vue";
import Cron from "../views/05_cron/cron.vue";
import TableTree from "../views/06_tableTree/tableTree.vue";
import BaseFormTable from "../views/07_baseFormtable/baseFormtable.vue";
import TableTest from "../views/08_tableTest/tableTest.vue";
import Xss from "../views/09_xss/xss.vue";
import Ts from "../views/10_ts/ts.vue";
import ThisScope from "../views/11_vue中this作用域问题/thisScope.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/1",
    name: "parameter",
    component: Test1,
  },
  {
    path: "/2",
    name: "if",
    component: Test2,
  },
  {
    path: "/3",
    name: "progress",
    component: Progress,
  },
  {
    path: "/4",
    name: "deffer",
    component: Differ,
  },
  {
    path: "/5",
    name: "cron",
    component: Cron,
  },
  {
    path: "/6",
    name: "tableTree",
    component: TableTree,
  },
  {
    path: "/7",
    name: "baseFormTable",
    component: BaseFormTable,
  },
  {
    path: "/8",
    name: "tableTest",
    component: TableTest,
  },
  {
    path: "/9",
    name: "xss",
    component: Xss,
  },
  {
    path: "/10",
    name: "ts",
    component: Ts,
  },
  {
    path: "/11",
    name: "thisScope",
    component: ThisScope,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
