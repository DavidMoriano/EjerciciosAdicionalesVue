import AcercaDeView from '@/views/acercaDeView.vue'
import ArticulosView from '../views/articulosView.vue'
import InicioView from '@/views/inicioView.vue'



import { createRouter, createWebHistory } from 'vue-router'
import ArticuloElegidoView from '@/views/articuloElegidoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView
    },
    {
      path: "/articulos",
      name: "Artículos",
      component: ArticulosView
    },
    {
      path: "/acercaDe",
      name: "Informacion",
      component: AcercaDeView
    }, 
    {
      path: "/articulo/:id",
      name: "ArticuloConcreto",
      component: ArticuloElegidoView
    }

  ],
})

export default router
