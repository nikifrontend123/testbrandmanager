import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
  {
    path: "/asa",
    name: "FirstPage",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/",
    name: "CheckRadio",
    component: () => import("@/views/CheckRadio.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
