<template>
  <div class="Servicios">
    <div id="nav1" class="row">
      <div class="col-md-10">
        <b-input-group prepend="Buscar" >
          <b-form-input></b-form-input>
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
      <h1 align="center"><strong>Mis Tickets</strong></h1>
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
    <div class="row" id="botones" >
       <b-button @click="actualizar" id="actualizar" variant="danger">Actualizar</b-button>
    </div>
    <div class="preloader" v-if="showLogin1"></div>
    <div class="row" id="serv" v-if="showServ">
      <div class="accordion" role="tablist" id="acord" >
        <b-card no-body class="mb-1" v-for="(i, index) in filtrado" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="i.idTicket.toString()" variant="info">{{i.nombreServicio}} {{i.idTicket}}</b-button>
          </b-card-header>
          <b-collapse :id="i.idTicket.toString()" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Id Ticket: {{i.idTicket}}</b-card-text>
              <b-card-text>Id Servicio: {{i.idServicio}}</b-card-text>
              <b-card-text>Prestadora del Servicio: {{i.nombreEmpresaPrestadora}}</b-card-text>
              <b-card-text>Cliente: {{i.nombreEmpresaCliente}}</b-card-text>
              <b-card-text>Nombre Servicio: {{i.nombreServicio}}</b-card-text>
              <b-card-text>Descripción Ticket: {{i.descirpcionTicket}}</b-card-text>
              <b-card-text>Operador Asignado: {{i.nombreOperador}} {{i.apellidoOperador}}</b-card-text>
              <b-card-text>Fecha Solicitud del Servicio: {{i.fechaSolicitud}}</b-card-text>
              <b-card-text>Fecha inicio servicio: {{i.fechaInicio}}</b-card-text>
              <b-card-text>Fecha fin servicio: {{i.fechaFinalizacion}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      showServ: true,
      showCrea: false,
      items: [],
      showLogin1: false,
      showLogin2: false,
      menu: false,
      filtro: '',
      filtrado: []
    }
  },
  methods: {
    filtrar () {
      this.filtrado = []
      this.filtro = this.filtro.toLowerCase()
      for (const ticket of this.items) {
        const nombre = ticket.nombreServicio.toLowerCase()
        if (nombre.indexOf(this.filtro) !== -1) {
          this.filtrado.push(ticket)
        }
      }
      console.log(this.filtrado)
    },
    onClick () {
      localStorage.removeItem('token-operador')
      this.$router.push('/Login')
    },
    ver () {
      if (this.menu) {
        this.menu = false
      } else {
        this.menu = true
      }
    },
    actualizar (event) {
      this.showLogin1 = true
      this.showServ = true
      Axios.post(localStorage.getItem('url') + '/empleado/tickets/' + localStorage.getItem('IDpersona')
      ).then(response => {
        if (response.status === 200) {
          this.showAlert('success', 'Se actualizo la lista de sus tareas')
          console.log(response, 2)
          this.items = response.data
          this.filtrar()
        } else {
          this.showAlert()
        }
        this.showLogin1 = false
      }).catch(error => {
        if (error.response === 500) {
          this.showAlert('warning', error.response.data.error)
        } else {
          this.showAlert('warning', error.response.data.error)
        }
        this.showLogin2 = false
      })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (tipo, mensaje) {
      this.tipe = tipo
      this.mensaje = mensaje
      this.dismissCountDown = this.dismissSecs
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
