<template>
  <div align="center" class="pt-5 pl-5" id="RegistroAdmin">
    <b-card style="width:700px">

      <h3>REGISTRO</h3>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pt-2">

      <b-form-group
       label-cols="1"
       label-cols-lg="4"
       label="Nombre:"
       label-for="input-default"
       style="width:550px"
      >
        <b-form-input inline
          id="input-default"
          v-model="form.nombre"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group
       label-cols="4"
       label-cols-lg="4"
       label="Apellidos"
       label-for="input-default"
       style="width:550px"
      >
        <b-form-input
          id="input-default"
          v-model="form.Apellidos"
          required
          placeholder="Apellidos"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        label="Clave:"
        label-for="input-default"
        style="width:550px"
      >
        <b-form-input
          id="input-default"
          v-model="form.Clave"
          required
          placeholder="Clave"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        label="Cedula:"
        label-for="input-default"
        style="width:550px"
      >
        <b-form-input
          id="input-default"
          v-model="form.Cedula"
          required
          placeholder="Cedula"
        ></b-form-input>
      </b-form-group>

      <b-form-group style="width:550px"
        label-cols="4"
        label-cols-lg="4"
        label="Usuario:"
        label-for="input-default"
      >
        <b-form-input
          id="input-default"
          v-model="form.Usuario"
          required
          placeholder="Usuario"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        label="Correo:"
        label-for="input-default"
        style="width:550px"
      >
        <b-form-input
          id="input-default"
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
    onSubmit (evt) {
      if (this.form.nombre === 'Julio' && this.form.Apellidos === 'aguirre rojas' && this.form.Clave === 'A123' && this.form.Cedula === '1014698563' && this.form.Usuario === 'DonPedro' && this.form.Correo === 'DonPedro@unal.com') {
        evt.preventDefault()
        alert('El empleado ya esta resgistrado en la plataforma')
      } else {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        alert('Usuario Registrado')
      }
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
