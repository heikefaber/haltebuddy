import Vue from "vue";
import VueRouter from "vue-router";

import Profile from "../views/Profile.vue";
import Quays from "../views/Quays.vue";
import Home from "../views/Home.vue";
import QuayDetail from "../views/QuayDetail.vue";
import QuayMap from "../views/QuayMap.vue";
import Route from "../views/Route.vue";
import Halteknop from "../views/Halteknop.vue";
import HalteknopLanding from "../views/HalteknopLanding.vue";
import LandingPage from "../views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeProfile",
    component: Profile,
  },
  {
    path: "/quays",
    name: "Quays",
    component: Quays,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/quay-map",
    name: "QuayMap",
    component: QuayMap,
  },
  {
    path: "/route",
    name: "Route",
    component: Route,
  },
  {
    path: "/quay/:quaycode",
    component: QuayDetail,
    name: "QuayDetail",
  },
  {
    path: "/quaylink/:quaycode",
    component: QuayDetail,
    name: "QuayDetailLinked",
  },
  {
    path: "/halteknop",
    name: "HalteknopPage",
    component: Halteknop,
  },
  {
    path: "/halteknop/:page",
    name: "Halteknop",
    component: Halteknop,
  },
  {
    path: "/halteknop-landing/:page",
    name: "HalteknopLanding",
    component: HalteknopLanding,
  },
  {
    path: "/route/:page",
    name: "RoutePage",
    component: Route,
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    component: LandingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
