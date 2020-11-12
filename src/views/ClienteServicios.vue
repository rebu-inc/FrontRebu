<template>

  <div class="Servicios">
    <h1 align="center">Servicios prestados</h1>
    <div heigh="50%">
      <b-list-group v-for="(dat,index) in tabla" :key="index">
         <b-list-group-item :id="dat.nombre" @click="showModal(index)" href="#">{{dat.nombre}}{{index}}</b-list-group-item>
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
      i: 0,
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
    showModal (index) {
      console.log(index)
      this.i = index
      console.log(this.i)
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
      console.log(parseInt(localStorage.getItem('nitES'), 10))
      console.log(this.tabla[this.i].empres)
      console.log(this.tabla[this.i].idservicios)
      console.log(this.tabla[this.i].descripcion)
      axios
        .post(localStorage.getItem('url') + '/solicitud/servicio/', {
          nitEmpresaSolicitando: parseInt(localStorage.getItem('nitES'), 10),
          nitEmpresaPrestadora: this.tabla[this.i].empres,
          idServicio: this.tabla[this.i].idservicios,
          descripcion: this.tabla[this.i].descripcion
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
          if (response.data.respuesta === 'Solicitud Fallida') {
            alert('Solicitud Fallida')
          } else {
            alert('Solicitud Exitosa')
          }
        })
      event.preventDefault()
    },
    actualizar (event) {
      axios
        .get(localStorage.getItem('url') + '/empleado/cat_serv', {
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        ).then(response => {
          this.tabla = response.data
          console.log(response)
          alert('Actualizado')
        })
      event.preventDefault()
    }
  }
}
</script>
