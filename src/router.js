import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/pages/HomePage.vue";
import Podcasts from './components/pages/Podcasts.vue'
import Projects from "./components/pages/Projects.vue";
import Resume from "./components/pages/Resume.vue";
import Experience from "./components/pages/Experience.vue";
import Education from "./components/pages/Education.vue";
import Stats from "./components/pages/Stats.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/home", component: HomePage },
    { path: "/stats", component: Stats },
    { path: "/podcasts", component: Podcasts },
    { path: "/experience", component: Experience },
    { path: "/education", component: Education },
    { path: "/projects", component: Projects },
    { path: "/resume", component: Resume },
    { path: "/:notFound(.*)", component: HomePage },
  ],
});

export default router;