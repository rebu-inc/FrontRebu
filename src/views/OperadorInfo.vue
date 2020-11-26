<template>
  <div align="center" class="pt-5 pl-5" id="RegistroAdmin">
    <div>
    </div>
    <div class="preloader" v-if="showLogin5"></div>
    <div class="preloader" v-if="showLogin7"></div>
    <br>
    <b-card style="width:700px">
        <b-alert
        :show="dismissCountDown"
        dismissible
        :variant= this.tipe
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{mensaje}}
      </b-alert>

      <h3>Mi información</h3>

    <b-form v-if="show" class="pt-2">

      <b-form-group
       label-cols="1"
       label-cols-lg="4"
       label="Nombre:"
       label-for="input1"
       style="width:550px"
      >
        <b-form-input inline
          id="input1"
          v-model="form.nombre"
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group
       label-cols="4"
       label-cols-lg="4"
       label="Apellidos"
       label-for="input2"
       style="width:550px"
      >
        <b-form-input
          id="input2"
          v-model="form.Apellidos"
          placeholder="Apellidos"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        label="Clave:"
        label-for="input3"
        style="width:550px"
      >
        <b-form-input
          id="password"
          v-model="form.Clave"
          disabled="disabled"
          type="password"
          placeholder="Clave"
          name="password"
          class="form-control"
          data-toggle="password"
        >
       </b-form-input>
      </b-form-group>
      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        type="number"
        label="Cedula:"
        label-for="input4"
        style="width:550px"
      >
        <b-form-input
          id="input4"
          v-model="form.Cedula"
          disabled="disabled"
          placeholder="Cédula"
        ></b-form-input>
      </b-form-group>

      <b-form-group style="width:550px"
        label-cols="4"
        label-cols-lg="4"
        label="Usuario:"
        label-for="input5"
      >
        <b-form-input
          id="input5"
          v-model="form.Usuario"
          placeholder="Usuario"
          disabled="disabled"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        label="Correo:"
        label-for="input6"
        style="width:550px"
      >
        <b-form-input
          id="input6"
          v-model="form.Correo"
          type='email'
          placeholder="Correo"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </b-card>
      <div class="AdminOperador">
        <b-button class="mt-2" variant="primary" style="width:700px" @click="onSubmit"><br><strong>Actualizar</strong><br><br></b-button>
       </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RegistroAdmin.vue',
  components: {},
  data () {
    return {
      form: {
        nombre: '',
        Apellidos: '',
        Clave: '',
        Cedula: '',
        Usuario: '',
        Correo: ''
      },
      type: 'password',
      btnText: 'Show Password',
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      showLogin5: false,
      showLogin7: false,
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      this.showLogin7 = true
      axios
        .post(localStorage.getItem('url') + '/empleado/actualizar/' + localStorage.getItem('IDpersona'), {
          nombre: this.form.nombre,
          apellidos: this.form.Apellidos,
          clave: this.form.Clave,
          cedula: this.form.Cedula,
          usuario: this.form.Usuario,
          rol: 'operador',
          correo: this.form.Correo
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
          },
          auth: {
            nombre: 'soft-eng-ii',
            Apellidos: 'soft-eng-ii',
            Clave: 'secret',
            Cedula: 'secret',
            Usuario: 'soft-eng-ii',
            Correo: 'soft-eng-ii'
          }
        }
        ).then(response => {
          console.log(response)
          if (response.data.respuesta === 'Usuario Ya Existe') {
            alert('Error en registro, la cédula ingresada ya esta registrada')
          } else {
            localStorage.setItem('token-actualizar', response.data.access_token)
            this.showAlert('success', 'Su información fue actualizada')
          }
          this.showLogin7 = false
        }).catch(error => {
          if (error.response.status === 500) {
            alert('Error en la aplicación')
          } else {
            alert('Error en la aplicación')
          }
          this.showLogin7 = false
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
    },
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
        this.btnText = 'Hide Password'
      } else {
        this.type = 'password'
        this.btnText = 'Show Password'
      }
    }
  },
  mounted () {
    this.showLogin5 = true
    axios
      .post(localStorage.getItem('url') + '/empleado/info/' + localStorage.getItem('IDpersona')
      ).then(response => {
        console.log(response)
        this.form.nombre = response.data.Nombre
        this.form.Apellidos = response.data.Apellidos
        this.form.Clave = response.data.Clave
        this.form.Cedula = response.data.Cedula
        this.form.Usuario = response.data.Usuario
        this.form.Correo = response.data.Correo
        this.showLogin5 = false
      }).catch(error => {
        if (error.response.status === 500) {
          alert('Error en la aplicación')
        } else {
          alert('Error en la aplicación')
        }
      })
  }
}
</script>
<style >
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
