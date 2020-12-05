<template>
  <div class="ClienteServicios">
    <div id="nav1" class="row">
      <div class="col-md-10">
        <b-input-group prepend="Buscar" >
          <b-form-input v-model="filtro" v-on:keyup="filtrar"></b-form-input>
          <b-input-group-append>
            <b-button variant="info">ir</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
      <div class="col-md-2">
        <div class="row">
          <b-avatar  button @click="ver" variant="info"></b-avatar>
        </div>
        <b-list-group v-if="menu" id="menuSalir">
          <b-list-group-item button  @click="onClick" >Logout</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div>
      <br>
      <h1 align="center"><strong>Servicios prestados</strong></h1>
      <br>
    </div>
    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant= this.tipe
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{mensaje}} ...
      </b-alert>
    </div>
    <div id="log" class="preloader" v-if="showLogin"></div>
    <div class="row" id="serv" >
      <div class="accordion" role="tablist" id="acord1" >
        <b-card no-body class="mb-1" v-for="(info, index) in filtrado" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="info.idservicios.toString()" variant="info">{{info.nombre}}</b-button>
          </b-card-header>
          <b-collapse :id="info.idservicios.toString()" invisible accordion="my-accordion" role="tabpanel">
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
    <div>
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
      tabla: [],
      showServ: true,
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      showLogin: false,
      menu: false,
      filtrado: [],
      filtro: ''
    }
  },

  methods: {
    filtrar () {
      this.filtrado = []
      this.filtro = this.filtro.toLowerCase()
      for (const servicio of this.tabla) {
        const nombre = servicio.nombre.toLowerCase()
        if (nombre.indexOf(this.filtro) !== -1) {
          this.filtrado.push(servicio)
        }
      }
    },
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
      this.showServ = true
      this.showLogin = true
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
          if (response.data.respuesta === 'Solicitud Fallida') {
            this.showAlert('warning', 'Solicitud Fallida')
          } else {
            this.showAlert('success', 'Solicitud Exitosa')
          }
          this.showLogin = false
        })
      event.preventDefault()
    },
    actualizar () {
      this.showLogin = true
      axios
        .get(localStorage.getItem('url') + '/empleado/cat_serv', {
        }
        ).then(response => {
          this.tabla = response.data
          this.showLogin = false
          this.filtrar()
        })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (tipo, mensaje) {
      this.tipe = tipo
      this.mensaje = mensaje
      this.dismissCountDown = this.dismissSecs
    },
    onClick () {
      localStorage.removeItem('token-cliente')
      this.$router.push('Login')
    },
    ver () {
      if (this.menu) {
        this.menu = false
      } else {
        this.menu = true
      }
    }
  },
  mounted () {
    this.actualizar()
  }
}
</script>
<style>
#acord1{
  width: 100%;
}
#serv{
  margin-left:0px;
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
@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
