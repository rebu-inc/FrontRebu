import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import LandingAdmin from '../views/LandingAdmin.vue'
import Landingcliente from '../views/Landingcliente.vue'

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
    path: '/Landingcliente',
    name: 'Landingcliente',
    component: Landingcliente
  },
  {
    path: '/Landing-Administrador',
    name: 'Landing-Administrador',
    component: () => import('../views/Landing-Administrador.vue'),
    children: [
      {
        path: '/AdminServicios',
        name: 'AdminServicios',
        component: () => import('../views/AdminServicios.vue')
      },
      {
        path: '/AdminOperadores',
        name: 'AdminOperadores',
        component: () => import('../views/AdminOperadores.vue'),
        children: [
          {
            path: '/RegistroAdmin',
            name: 'RegistroAdmin',
            component: () => import('../views/RegistroAdmin.vue')
          }
        ]
      },
      {
        path: '/AdminTickets',
        name: 'AdminTickets',
        component: () => import('../views/AdminTickets.vue')
      },
      {
        path: '/AdminReporte',
        name: 'AdminReporte',
        component: () => import('../views/AdminReporte.vue')
      }
    ]
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
  },
  {
    path: '/Landing-Cliente',
    name: 'Landing-Cliente',
    component: () => import('../views/Landing-Cliente.vue'),
    children: [
      {
        path: '/OperdorScervicios',
        name: 'OperdorServicios',
        component: () => import('../views/OperdorServicios.vue')
      }
    ]
  },
  {
    path: '/Landing-Cliente',
    name: 'Landing-Cliente',
    component: () => import('../views/Landing-Cliente.vue'),
    children: [
      {
        path: '/ClienteServicios',
        name: 'ClienteServicios',
        component: () => import('../views/ClienteServicios.vue')
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
