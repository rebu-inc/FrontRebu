<template>
  <div class="Servicios">
    <div class="row" id="botones" >
       <b-button @click="actualizar" id="actualizar" variant="danger">Actualizar</b-button>
       <b-button @click="crear" id="Crear" variant="danger">Crear</b-button>
    </div>
    <div align="center" class="pt-5 pl-5" id="nuevoServicio" v-if="showCrea">
      <b-card style="width:700px">

        <h3>REGISTRO</h3>

      <b-form  class="pt-2">

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
        <b-button  @click="submit" variant="primary">Submit</b-button>
        <b-button @click="Reset" class="m-2" variant="danger">Reset</b-button>
        <b-button  @click="cerrar" variant="primary">Cancelar</b-button>
      </b-form>
    </b-card>
    </div>

    <div class="row" id="serv" v-if="showServ">
      <div class="accordion" role="tablist" >
        <b-card no-body class="mb-1" v-for="(i, index) in items" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="i.mensaje" variant="info">{{i.mensaje}}</b-button>
          </b-card-header>
          <b-collapse :id="i.mensaje" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
      showServ: true,
      showCrea: false,
      items: [
        { mensaje: 'Foo' },
        { mensaje: 'Bar' },
        { mensaje: 'Baajshr' }
      ]
    }
  },
  methods: {
    actualizar (event) {
      this.showServ = true
      this.showCrea = false
      alert('actualizo')
    },
    submit (event) {
      alert('creado')
      this.Reset(event)
    },
    crear (event) {
      this.showServ = false
      this.showCrea = true
    },
    cerrar (event) {
      this.showServ = true
      this.showCrea = false
    },
    Reset (evt) {
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

</script>>
<style>
#serv{
  margin-left:0px;
}
#card{
  width: 600px;
}
#actualizar{
  background: white;
  color: black;
  border-color: #087589;
}

</style>
