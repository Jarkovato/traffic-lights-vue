import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import TrafficLight from "../components/TrafficLight";

const routes = [
  {
    path: "",
    name: "main",
    component: TrafficLight,
    props: {start: 'red'},
  },
  {
    path: "/red",
    name: "red",
    component: TrafficLight,
    props: {start: 'red'},
  },
  {
    path: "/yellow",
    name: "yellow",
    component: TrafficLight,
    props: {start: 'yellow'},

  },
  {
    path: "/green",
    name: "green",
    component: TrafficLight,
    props: {start: 'green'},
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;