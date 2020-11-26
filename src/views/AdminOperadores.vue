<template>
  <div class="AdminOperador">
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
     <b-button variant="primary" @click="actual"><br><strong>Actualizar</strong><br><br></b-button>
     <b-button variant="danger" v-on:click="showreg = !showreg"><br><strong>Registrar</strong><br><br></b-button>
       <router-view></router-view>
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
       <div id="log" class="preloader" v-if="showLogin"></div>
         <div v-if="showreg" align="center" class="pt-5 pl-5" id="RegistroAdmin">
    <b-card style="width:700px">
        <b-alert
        :show="dismissCountDown"
        dismissible
        :variant= this.tipe
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{mensaje}}
      </b-alert>

      <h3>REGISTRO</h3>

    <b-form @submit="actualizar" @reset="onReset" v-if="show" class="pt-2">

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
      <b-button  type="submit" variant="primary">Submit</b-button>
      <b-button class="m-2" type="reset" variant="danger">Reset</b-button>
      <div class="preloader" v-if="showLogin7"></div>
    </b-form>
  </b-card>
  </div>
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
        idEmpresa: localStorage.getItem('IDEmpresa'),
        nombre: '',
        Apellidos: '',
        Clave: '',
        Cedula: '',
        Usuario: '',
        Correo: ''
      },
      type: 'password',
      btnText: 'Show Password',
      dismissSecs: 5,
      dismissCountDown: 0,
      tipe: '',
      mensaje: '',
      show: true,
      tabla: [],
      menu: false,
      showServ: true,
      showreg: false,
      showLogin7: false
    }
  },
  methods: {
    onClick () {
      localStorage.removeItem('token-Admin')
      this.$router.push('/Login')
    },
    ver () {
      if (this.menu) {
        this.menu = false
      } else {
        this.menu = true
      }
    },
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
    },
    actualizar (event) {
      this.showLogin7 = true
      axios
        .post('http://localhost:4040/registro/reg_empleado', {
          nombre: this.form.nombre,
          apellidos: this.form.Apellidos,
          clave: this.form.Clave,
          cedula: this.form.Cedula,
          usuario: this.form.Usuario,
          rol: 'operador',
          correo: this.form.Correo
        }
        ).then(response => {
          console.log(response)
          if (response.data.respuesta === 'Usuario Ya Existe') {
            alert('Error en registro, la cédula ingresada ya esta registrada')
          } else {
            localStorage.setItem('token-registro', response.data.access_token)
            alert('Usuario Registrado')
            this.onReset(event)
          }
          this.showLogin7 = false
        }).catch(error => {
          if (error.response.status === 500) {
            this.showAlert('success', 'Operador Registrado')
            this.onReset(event)
          } else {
            alert('Error en la aplicación')
          }
          this.showLogin7 = false
        })
      event.preventDefault()
    },
    onReset (evt) {
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
    this.onSubmit()
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
