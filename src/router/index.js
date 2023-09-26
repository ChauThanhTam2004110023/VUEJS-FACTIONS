import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";
import LoginComponent from "../components/LoginComponent.vue";

const routes = [
  {
    path: "/",
    components: { default: HeaderComponent },
  },
  {
    path: "/login",
    components: { default: LoginComponent },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
