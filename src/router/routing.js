import { createRouter, createWebHistory } from "vue-router";
import CounterView from "../views/CounterView";
import NotFound from "../views/NotFound";

const routes = [
  {
    path:"/counter",
    name: "CounterView",
    component: CounterView
  },
  {
    path: "/",
    redirect: "/counter"
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;