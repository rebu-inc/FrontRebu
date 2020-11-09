<template>

  <div class="Servicios">
    <h1 align="center">Servicios prestados</h1>
    <div heigh="50%">
        <b-list-group >
  <b-list-group-item id= "boton1" @click="showModal" href="#"> Arreglo de Televisores <b-button align="right">enviar</b-button> </b-list-group-item>
  <b-list-group-item id= "boton2" @click="showModal" href="#">Arreglo de Computadores</b-list-group-item>
  <b-list-group-item id= "boton3" @click="showModal" href="#">Arreglo de Redes</b-list-group-item>
  <b-list-group-item id= "boton4" @click="showModal" href="#">Arreglo de Fachadas</b-list-group-item>
</b-list-group>
        <b-modal ref="my-modal">
      <div class="d-block text-center">
      </div>
      <b-button type ='submit' class="mt-2" variant="outline-warning" block @click="toggleModal">Solicitar Servicio</b-button>
    </b-modal>
    </div>
    </div>

</template>
<script>
import axios from 'axios'
export default {
  name: 'ClienteServicios',
  components: {},
  data () {
    return {
      form: {
        nitEmpresaSolicitando: '',
        nitEmpresaPrestadora: '',
        idServicio: '',
        descripcion: ''
      },
      show: true
    }
  },

  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      this.$refs['my-modal'].toggle('#toggle-btn')
      alert('Solicitud Exitosa')
    },
    onSubmit (event) {
      axios
        .post('http://localhost:4040/solicitud/servicio/', {
          nombre: this.form.nitEmpresaSolicitando,
          apellidos: this.form.nitEmpresaPrestadora,
          clave: this.form.idServicio,
          cedula: this.form.descripcion
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
          },
          auth: {
            nitEmpresaSolicitando: 'soft-eng-ii',
            nitEmpresaPrestadora: 'soft-eng-ii',
            idServicio: 'soft-eng-ii',
            descripcion: 'soft-eng-ii'
          }
        }
        ).then(response => {
          console.log(response)
          if (response.data.respuesta === 'Servicio no existe') {
            alert('Solicitud Fallida')
          } else {
            localStorage.setItem('token-servicio', response.data.access_token)
            alert('Solicitud Exitosa')
            this.onReset(event)
          }
        })
      event.preventDefault()
      alert('Solicitud Exitosasasasasa')
    }
  }
}
</script>
