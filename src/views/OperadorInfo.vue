<template>
  <div align="center" class="pt-5 pl-5" id="RegistroAdmin">
    <b-card style="width:700px">

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
          id="input3"
          v-model="form.Clave"
          placeholder="Clave"
        ></b-form-input>
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
        <b-button class="mt-2" variant="primary" style="width:200px" @click="onSubmit"><br><strong>Actualizar</strong><br><br></b-button>
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
      show: true
    }
  },
  methods: {
    onSubmit (event) {
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
            alert('usuario actualizado')
            this.onReset(event)
          }
        }).catch(error => {
          if (error.response.status === 500) {
            alert('La cedula debe ser numérica, no ingrese letras')
          } else {
            alert('Error en la aplicación')
          }
        })
      event.preventDefault()
    }
  },
  mounted () {
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
      }).catch(error => {
        if (error.response.status === 500) {
          alert('La cedula debe ser numérica, no ingrese letras')
        } else {
          alert('Error en la aplicación')
        }
      })
  }
}
</script>
