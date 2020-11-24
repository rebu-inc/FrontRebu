<template>
  <div class="Servicios">
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
       <b-button @click="crear" id="Crear" variant="danger">Crear</b-button>
    </div>
    <div class="preloader" v-if="showLogin1"></div>
    <div align="center" class="pt-5 pl-5" id="nuevoServicio" v-if="showCrea">
      <b-card style="width:700px">
        <h3>REGISTRO</h3>
      <b-form  class="pt-2">
         <b-form-group
          label-cols="4"
          label-cols-lg="4"
          label="Nombre:"
          label-for="input2"
          style="width:550px"
          >
          <b-form-input
            id="input2"
            v-model="form.nombre"
            required
            placeholder="nombre"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols="1"
          label-cols-lg="4"
          label="Descripcion:"
          label-for="input1"
          style="width:550px"
          >
          <b-form-textarea
            id="textarea"
            v-model="form.Descripcion"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        <div class="preloader" v-if="showLogin2"></div>
        </b-form-group>
        <b-button  @click="crear_servicio" variant="primary" v-if="!showLogin2">Submit</b-button>
        <b-button @click="Reset" class="m-2" variant="danger" v-if="!showLogin2">Reset</b-button>
        <b-button  @click="cerrar" variant="primary" v-if="!showLogin2">Cancelar</b-button>
      </b-form>
    </b-card>
    </div>

    <div class="row" id="serv" v-if="showServ">
      <div class="accordion" role="tablist" id="acord" >
        <b-card no-body class="mb-1" v-for="(i, index) in items" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="i.idservicios.toString()" variant="info">{{i.nombre}}</b-button>
          </b-card-header>
          <b-collapse :id="i.idservicios.toString()" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Id: {{i.idservicios}}</b-card-text>
              <b-card-text>Descripcion: {{ i.descripcion }}</b-card-text>
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
      form: {
        nombre: '',
        Descripcion: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      showServ: true,
      showCrea: false,
      items: [],
      showLogin1: false,
      showLogin2: false
    }
  },
  methods: {
    actualizar (event) {
      this.showLogin1 = true
      this.showServ = true
      this.showCrea = false
      Axios.post(localStorage.getItem('url') + '/empleado/serv_empresa/' + localStorage.getItem('IDEmpresa')
      ).then(response => {
        if (response.status === 200) {
          this.showAlert('success', 'Fue actualizado el listado de eventos')
          this.items = response.data
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
    submit (event) {
      alert('creado')
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
      this.form.Descripcion = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    crear_servicio () {
      this.showLogin2 = true
      Axios
        .post(localStorage.getItem('url') + '/registro/reg_serv', {
          descripcion: this.form.Descripcion,
          nombre: this.form.nombre,
          idpersona: localStorage.getItem('IDpersona')
        }, // Body
        {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
          }
        }
        ).then(response => {
          if (response.status === 200) {
            this.showAlert('success', 'el servicio fue creado')
          } else {
            this.showAlert()
          }
          this.showLogin2 = false
          this.Reset(event)
        }).catch(error => {
          console.log(error.response.data.error)
          if (error.response === 500) {
            this.showAlert('warning', error.response.data.error)
          } else {
            this.showAlert('warning', error.response.data.error)
          }
          this.showLogin2 = false
        })
      event.preventDefault()
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
