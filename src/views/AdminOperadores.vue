<template>
  <div class="AdminOperador">
     <b-button variant="danger" router-link tag="li" to="/RegistroAdmin" v-on:click="j = true"><br><strong>Registrar</strong><br><br></b-button>

      <!---->
      <div>
      <div class="row" id="serv" v-if="showServ">
      <div class="accordion" role="tablist" id="acord" >
        <b-card no-body class="mb-1" v-for="(info, index) in tabla" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="info.nombre.toString()" variant="info">{{info.nombre}}</b-button>
          </b-card-header>
          <b-collapse :id="info.nombre.toString()" invisible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Apellidos: {{info.apellidos}}</b-card-text>
              <b-card-text>Correo: {{ info.correo }}</b-card-text>
              <b-card-text>cedula: {{ info.cedula }}</b-card-text>
              <b-card-text>Usuario: {{ info.usuario }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

          <!---->
      </div>
    </div>
      <b-button type="submit" variant="primary" @click="actual">actualizar </b-button>
       <div id="log" class="preloader" v-if="showLogin"></div>
       </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminOperadores',
  components: {},
  data () {
    return {
      showLogin: false,
      form: {
        idEmpresa: localStorage.getItem('IDEmpresa')
      },
      tabla: [],
      showServ: true
    }
  },
  methods: {
    actual () {
      this.onSubmit(event)
    },
    onSubmit (event) {
      this.showLogin = true
      this.showServ = true
      axios
        .post(localStorage.getItem('url') + '/solicitud/operadores/', {
          idEmpresa: localStorage.getItem('IDEmpresa')
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
          this.tabla = response.data
          this.showLogin = false
        })
      event.preventDefault()
    },
    actualizar (event) {
      axios
        .get(localStorage.getItem('url') + '/solicitud/operadores/', {
        },
        {
        }
        ).then(response => {
          if (response.status === 200) {
            this.showAlert('success', 'Actualizado')
            this.tabla = response.data
          } else {
            this.showAlert()
          }
          this.tabla = response.data
          console.log(response)
          alert('Actualizado')
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
