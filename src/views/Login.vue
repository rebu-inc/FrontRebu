<template>
    <b-container fluid>
        <div align="center" class="pt-5 pl-5">
            <b-card style="width:710px">
                <form @submit="login">
                    <h3>¡Bienvenido/a!</h3>
                    <b-col class="my-4">
                        <b-row sm="9">
                            <b-col align-self="start">
                                <img src="../assets/Usuario.png" style="width:50px" alt="holi">
                            </b-col>
                            <b-col >
                                <b-form-input style="width:550px" id="input-none" :state="null" placeholder="e-mail"
                                 class="form-control form-control-lg" v-model="username" required="" ></b-form-input>
                            </b-col>
                        </b-row>
                        <h1></h1>
                        <b-row sm="3" class="mt-2 mb-4">
                            <b-col align-self="start">
                                <img src="../assets/Contraseña.png" style="width:50px" alt="holi">
                            </b-col>
                            <b-col>
                                <b-form-input style="width:550px" id="input-none" :state="null" placeholder="Contraseña"
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
      username: '',
      password: ''
    }
  },
  methods: {
    login (event) {
      axios
        .post('http://localhost:4040/login/principal', {
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
          if (response.status !== 'Usuario O Contraseña Erroneo') {
            alert('Error en la autenticación')
          } else {
            this.$router.push('/Landing')
          }
        })
      event.preventDefault()
    },
    login2 (event) {
      if (this.username === 'jairo' | this.username === 'julio') {
        this.$router.push('/Landing')
      } else if (this.username === 'cliente') {
      } else if (this.username === 'compumundo' | this.username === 'samsung') {
        this.$router.push('/LandingAdmin')
      } else {
        alert('Error de usuario o contraseña')
      }
    }
  }
}
</script>
