<template>
    <b-container fluid>
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
                            <b-col align-self="start">
                                <img src="../assets/Usuario.png" style="width:50px" alt="holi">
                            </b-col>
                            <b-col >
                                <b-form-input style="width:550px" id="input-user" :state="null" placeholder="Usuario"
                                 class="form-control form-control-lg" v-model="username" required="" ></b-form-input>
                            </b-col>
                        </b-row>
                        <h1></h1>
                        <b-row sm="3" class="mt-2 mb-4">
                            <b-col align-self="start">
                                <img src="../assets/Contraseña.png" style="width:50px" alt="holi">
                            </b-col>
                            <b-col>
                                <b-form-input style="width:550px" id="input-contrasena" :state="null" placeholder="Contraseña"
                                type="password" class="form-control form-control-lg" v-model="password" required></b-form-input>
                            </b-col>
                            <b-col class="pt-2">
                                <button type="submit" style="width:465px" class="btn btn-dark btn-lg btn-block">Ingresar</button>
                            </b-col>
                        </b-row>

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
      password: ''
    }
  },
  methods: {
    login (event) {
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
          localStorage.setItem('IDpersona', response.data.idPersona)
          localStorage.setItem('IDEmpresa', response.data.idEmpresa)
          localStorage.setItem('nitES', response.data.idEmpresa)
          if (response.data.respuesta === 'Usuario O Contraseña Erroneo') {
            this.showAlert('danger', response.data.respuesta)
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
          }
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
