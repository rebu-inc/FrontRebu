<template>

  <div class="Servicios">
    <h1 align="center"><strong>Servicios prestados</strong></h1>
    <div heigh="50%">
      <!--<b-list-group v-for="(dat,index) in tabla" :key="index">
         <b-list-group-item :id="dat.nombre" @click="showModal(index)" href="#">{{dat.nombre}}</b-list-group-item>
      </b-list-group> -->
      <div>
        <div class="row" id="serv" v-if="showServ" align="center">
          <div class="accordion" role="tablist" id="acord" >
            <b-card no-body class="mb-1" v-for="(info, index) in tabla" :key="index">
              <b-card-header header-tag="header" class="p-1" role="tab">
             <b-button block v-b-toggle="info.nombre.toString()" variant="info">{{info.nombre}}</b-button>
            </b-card-header>
            <b-collapse :id="info.nombre.toString()" invisible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text>Descripcion: {{info.descripcion}}</b-card-text>
            </b-card-body>
            <div class="Cliente-Tickets">
              <b-button  class="mt-2"  block @click="showModal(index)" href="#">Solicitar Servicio</b-button>
            </div>
            </b-collapse>
        </b-card>
      </div>
    </div>
     <!--</b-list-group> -->
      </div>

      <b-button type="submit" variant="primary" @click="actual">actualizar </b-button>

      <b-modal ref="my-modal">
       <div class="d-block text-center"></div>
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
        descripcion: '',
        idUsuario: 0
      },
      tabla: [{
      }],
      showServ: true
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
      console.log(parseInt(localStorage.getItem('IDpersona'), 10))
      this.showServ = true
      axios
        .post(localStorage.getItem('url') + '/solicitud/servicio/', {
          nitEmpresaSolicitando: parseInt(localStorage.getItem('nitES'), 10),
          nitEmpresaPrestadora: this.tabla[this.i].empres,
          idServicio: this.tabla[this.i].idservicios,
          descripcion: this.tabla[this.i].descripcion,
          idUsuario: parseInt(localStorage.getItem('IDpersona'), 10)
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
        })
      event.preventDefault()
    }
  },
  mounted () {
    this.actualizar()
  }
}
</script>
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
.row{
  margin-left: 0px;
  margin-right: 0px;
}
#acord{
  width: 100%;
}
#log{
  text-align: center;
  align-items: center;
}
.preloader {
  width: 70px;
  height: 70px;
  display: inline-block;
  border: 10px solid #eee;
  border-top: 10px solid rgb(79, 120, 255);
  border-radius: 50%;
  animation-name: girar;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
