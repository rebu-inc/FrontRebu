import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'

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
    component: Landing,
    children: [
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
  },
  {
    path: '/Landing-operador',
    name: 'Landing-operador',
    component: () => import('../views/Landing-operador.vue'),
    children: [
      {
        path: '/OperdorScervicios',
        name: 'OperdorServicios',
        component: () => import('../views/OperdorServicios.vue')
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
