import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import LandingAdmin from '../views/LandingAdmin.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
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
    component: Landing
  },
  {
    path: '/LandingAdmin',
    name: 'LandingAdmin',
    component: LandingAdmin
  },
  {
    path: '/Landing-Administrador',
    name: 'Landing-Administrador',
    component: () => import('../views/Landing-Administrador.vue')
  },
  {
    path: '/Landing-operador',
    name: 'Landing-operador',
    component: () => import('../views/Landing-operador.vue'),
    children: [
      {
        path: '/OperadorInfo',
        name: 'OperadorInfo',
        component: () => import('../views/OperadorInfo.vue')
      },
      {
        path: '/OperdorScervicios',
        name: 'OperdorServicios',
        component: () => import('../views/OperdorServicios.vue')
      },
      {
        path: '/OperadorActualizar',
        name: 'OOperadorActualizar',
        component: () => import('../views/OperadorActualizar.vue')
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
