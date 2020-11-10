<template>

  <div class="Servicios">
    <h1 align="center">Servicios prestados</h1>
    <div heigh="50%">
        <b-list-group v-for="(dat,index) in tabla" :key="index">
  <b-list-group-item  :id="dat.nombre" @click="showModal" href="#">{{dat.nombre}}</b-list-group-item>
</b-list-group>
         <b-button type="submit" variant="primary" @click="actual">actualizar </b-button>
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
        nitEmpresaSolicitando: 0,
        nitEmpresaPrestadora: 0,
        idServicio: 0,
        descripcion: ''
      },
      tabla: [{
      }]
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
      this.onSubmit(event)
    },
    actual () {
      this.actualizar(event)
    },
    onSubmit (event) {
      axios
        .post(localStorage.setItem('url') + '/solicitud/servicio/', {
          nitEmpresaSolicitando: this.form.nitEmpresaSolicitando,
          nitEmpresaPrestadora: this.form.nitEmpresaPrestadora,
          idServicio: this.form.idServicio,
          descripcion: this.form.descripcion
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
          }
        }
        ).then(response => {
          console.log(response)
          if (response.data.respuesta === 'Servicio no existe') {
            alert('Solicitud Fallida')
          } else {
            localStorage.setItem('token-servicio', response.data.access_token)
            alert('Solicitud Exitosa')
          }
        })
      event.preventDefault()
    },
    actualizar (event) {
      axios
        .get(localStorage.setItem('url') + '/empleado/cat_serv', {
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        ).then(response => {
          this.tabla = response.data
          console.log(response)
          alert('Solicitud Exitosaaaaaaaaaaaaaaaaaaa')
        })
      event.preventDefault()
    }
  }
}
</script>
