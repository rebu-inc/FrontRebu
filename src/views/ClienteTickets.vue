<template>
  <div class="Tickets">
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
    <div id="log" class="preloader" v-if="showLogin"></div>
    <div class="row" id="serv" >
      <div class="accordion" role="tablist" id="acord" >
        <b-card no-body class="mb-1" v-for="(i, index) in items" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="i.idTicket.toString()" variant="info">{{i.nombreServicio}} {{i.idTicket}}</b-button>
          </b-card-header>
          <b-collapse :id="i.idTicket.toString()" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Id Ticket: {{i.idTicket}}</b-card-text>
              <b-card-text>Id Servicio: {{i.idServicio}}</b-card-text>
              <b-card-text>Nit Empresa Prestadora: {{i.nitEmpresaPrestadora}}</b-card-text>
              <b-card-text>Nombre Empresa Prestadora: {{i.nombreEmpresaPrestadora}}</b-card-text>
              <b-card-text>Operador Responsable: {{i.nombreOperador}}</b-card-text>
              <b-card-text>Descripcion: {{ i.descirpcionTicket}}</b-card-text>
            </b-card-body>
            <div class="Cliente-Tickets">
              <b-button  class="mt-2"  block @click="Despdf(index)">Descargar pdf</b-button>
            </div>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>

</template>
<script>
import jsPDF from 'jspdf'
import Axios from 'axios'
export default {
  name: 'Cliente-Tickets',
  components: {},
  data () {
    return {
      items: [],
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      showLogin: true
    }
  },
  methods: {
    Despdf (index) {
      var doc = jsPDF()
      doc.text('TickerWork', 95, 10, 'left', 'ideographic')
      doc.text('Id Ticket:', 10, 30, 'left', 'ideographic')
      doc.text(this.items[index].idTicket.toString(), 110, 30, 'left', 'ideographic')
      doc.text('Id Servicio:', 10, 40, 'left', 'ideographic')
      doc.text(this.items[index].idServicio.toString(), 110, 40, 'left', 'ideographic')
      doc.text('Nombre del Servicio:', 10, 50, 'left', 'ideographic')
      doc.text(this.items[index].nombreServicio.toString(), 110, 50, 'left', 'ideographic')
      doc.text('Nit Empresa Prestadora:', 10, 60, 'left', 'ideographic')
      doc.text(this.items[index].nitEmpresaPrestadora.toString(), 110, 60, 'left', 'ideographic')
      doc.text('Nombre Empresa Prestadora:', 10, 70, 'left', 'ideographic')
      doc.text(this.items[index].nombreEmpresaPrestadora.toString(), 110, 70, 'left', 'ideographic')
      doc.text('Nit Empresa Cliente:', 10, 80, 'left', 'ideographic')
      doc.text(this.items[index].nitEmpresaCliente.toString(), 110, 80, 'left', 'ideographic')
      doc.text('Nombre Empresa Cliente:', 10, 90, 'left', 'ideographic')
      doc.text(this.items[index].nombreEmpresaCliente.toString(), 110, 90, 'left', 'ideographic')
      doc.text('Nombre del Cliente:', 10, 100, 'left', 'ideographic')
      doc.text(this.items[index].nombrePersonaCliente.toString(), 110, 100, 'left', 'ideographic')
      doc.text('Nombre del Encargado:', 10, 110, 'left', 'ideographic')
      doc.text(this.items[index].nombreOperador.toString(), 110, 110, 'left', 'ideographic')
      doc.text('Descripcion:', 10, 120, 'left', 'ideographic')
      doc.text(this.items[index].descirpcionTicket.toString(), 110, 120, 'left', 'ideographic')
      doc.save(this.items[index].idTicket.toString() + '.pdf')
    },
    actualizar () {
      this.showLogin = true
      Axios.post(localStorage.getItem('url') + '/empleado/mis_tickets', {
        id: localStorage.getItem('IDpersona')
      }
      ).then(response => {
        if (response.status === 200) {
          this.showAlert('success', 'Fueron actualizados los tickets ')
          this.items = response.data
          this.showLogin = false
        } else {
          this.showAlert()
        }
      }).catch(error => {
        if (error.response === 500) {
          this.showAlert('warning', error.response.data.error)
        } else {
          this.showAlert('warning', error.response.data.error)
        }
        this.showLogin = false
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
