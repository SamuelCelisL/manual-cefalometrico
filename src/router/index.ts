import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InicioWeb.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/inicio',
    },
    {
      path: '/inicio',
      name: 'Inicio',
      component: HomeView
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
