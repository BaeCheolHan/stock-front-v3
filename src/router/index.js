import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index/Index.vue";
import SnsLoginRedirect from "@/views/sns/SnsLoginRedirect.vue";

const routes = [
  { path: "/", name: "Index", component: Index },
  {
    path: "/:snsType/redirect",
    name: "snsLoginRedirect",
    component: SnsLoginRedirect,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
