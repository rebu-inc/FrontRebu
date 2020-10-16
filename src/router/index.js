import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/Inicio',
        name: 'Inicio',
        component: () => import('../views/Inicio.vue')
      },
      {
        path: '/QuienesSomos',
        name: 'QuienesSomos',
        component: () => import('../views/QuienesSomos.vue')
      },
      {
        path: '/Contacto',
        name: 'Contacto',
        component: () => import('../views/Contacto.vue')
      },
      {
        path: '/Servicios',
        name: 'Servicios',
        component: () => import('../views/Servicios.vue')
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/Registro',
        name: 'Registro',
        component: () => import('../views/Registro.vue')
      }
    ]
  },
  {
    path: '/Landing',
    name: 'Landing',
    component: () => import('../views/Landing.vue'),
    children: [
      {
        path: '/Landing-operador',
        name: 'Landing-operador',
        component: () => import('../views/Landing-operador.vue')
      },
      {
        path: '/Landing-Administrador',
        name: 'Landing-Administrador',
        component: () => import('../views/Landing-Administrador.vue')
      },
      {
        path: '/Landing-Cliente',
        name: 'Landing-Cliente',
        component: () => import('../views/Landing-Cliente.vue')
      }

    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
