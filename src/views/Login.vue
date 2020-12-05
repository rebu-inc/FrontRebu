<template>
  <b-container>
    <div align="center" class="pt-5 pl-5">
      <b-card style="width:710px">
        <form @submit="login">
          <h3>¡Bienvenido/a!</h3>
          <div>
            <b-alert
              :show="dismissCountDown"
              dismissible
              :variant= this.tipe
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged"
            >
              {{mensaje}} ...
            </b-alert>
          </div>
          <b-col class="my-4">
            <b-row sm="9">
              <b-col sm="2" >
                <img src="../assets/Usuario.png" style="width:50px" alt="holi">
              </b-col>
              <b-col sm="10">
                <b-form-input  id="input-user" :state="null" placeholder="Usuario"
                  class="form-control form-control-lg" v-model="username" required="" ></b-form-input>
              </b-col>
            </b-row>
            <h1></h1>
            <b-row sm="3" class="mt-2 mb-4">
              <b-col sm="2">
                <img src="../assets/Contraseña.png" style="width:50px" alt="holi">
              </b-col>
              <b-col sm="10">
                <b-form-input id="input-contrasena" :state="null" placeholder="Contraseña"
                  type="password" class="form-control form-control-lg" v-model="password" required></b-form-input>
              </b-col>
              <b-col class="pt-2">
                <button type="submit" style="width:465px" class="btn btn-dark btn-lg btn-block" v-if="!showLogin">Ingresar</button>
              </b-col>
            </b-row>
            <div class="preloader" v-if="showLogin"></div>
            <h1></h1>
            <b-row sm="3" class="pl-5">
              <p class="forgot-password text-center" style="width:290px" >
                <router-link to="/forgot-password">¿Olvidaste tu contraseña?</router-link>
              </p>
            </b-row>
          </b-col>
        </form>
      </b-card>
    </div>
  </b-container>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login.vue',
  components: {},
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      username: '',
      password: '',
      showLogin: false
    }
  },
  methods: {
    login (event) {
      this.showLogin = true
      axios
        .post(localStorage.getItem('url') + '/login/principal', {
          usuario: this.username,
          contrasena: this.password
        }, // Body
        {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
          },
          auth: {
            username: 'soft-eng-ii',
            password: 'secret'
          }
        }
        ).then(response => {
          console.log(response)
          localStorage.setItem('IDpersona', response.data.idPersona)
          localStorage.setItem('IDEmpresa', response.data.idEmpresa)
          localStorage.setItem('nitES', response.data.idEmpresa)
          if (response.data.respuesta === 'Usuario O Contraseña Erroneo') {
            this.showAlert('danger', response.data.respuesta)
            this.showLogin = false
          } else {
            if (response.data.rol === 'admin') {
              localStorage.setItem('token-Admin', response.data.access_token)
              this.username = ''
              this.password = ''
              this.$router.push('LandingAdmin')
            } else if (response.data.rol === 'operador') {
              this.username = ''
              this.password = ''
              localStorage.setItem('token-operador', response.data.access_token)
              this.$router.push('Landing')
            } else if (response.data.rol === 'cliente') {
              this.username = ''
              this.password = ''
              localStorage.setItem('token-cliente', response.data.access_token)
              this.$router.push('LandingCliente')
            }
            this.showLogin = false
          }
          this.showLogin = false
        })
      event.preventDefault()
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (tipo, mensaje) {
      this.tipe = tipo
      this.mensaje = mensaje
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
<style>
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.card-body{
  padding: 20px;
}
.preloader {
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid rgb(79, 120, 255);
  border-radius: 50%;
  animation-name: girar;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
