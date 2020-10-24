<template>
  <div align="center" class="pt-5 pl-5" id="RegistroAdmin">
    <b-card style="width:700px">

      <h3>REGISTRO</h3>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pt-2">

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
          required
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
          required
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
          required
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
          required
          placeholder="Cedula"
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
          required
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
          required
          placeholder="Correo"
        ></b-form-input>
      </b-form-group>

      <b-button  type="submit" variant="primary">Submit</b-button>
      <b-button class="m-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
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
        .post('http://localhost:4040/registro/reg_empleado', {
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
            localStorage.setItem('token-registro', response.data.access_token)
            alert('Usuario Registrado')
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
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.nombre = ''
      this.form.Apellidos = ''
      this.form.Clave = ''
      this.form.Cedula = ''
      this.form.Usuario = ''
      this.form.Correo = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
