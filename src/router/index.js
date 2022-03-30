import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProjectsView from "../views/projects/ProjectsView.vue";
import CreateProjectView from "../views/projects/CreateProjectView.vue";
import EditProjectView from "../views/projects/EditProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Anasayfa",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "Projeler",
      component: ProjectsView,
    },
    {
      path: "/projects/create",
      name: "Proje oluştur",
      component: CreateProjectView,
    },
    {
      path: "/projects/:id/edit",
      name: "Proje Düzenle",
      component: EditProjectView,
    },
    {
      path: "/login",
      name: "Giriş Yap",
      component: LoginView,
    },
    {
      path: "/register",
      name: "Kayıt Ol",
      component: RegisterView,
    },
  ],
});

export default router;
