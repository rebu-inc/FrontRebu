<template>
  <div class="Servicios">
    <div class="row" id="botones" >
       <b-button @click="actualizar" v-if="showbotton" id="actualizar" variant="danger">Actualizar</b-button>
       <b-button @click="crear" id="Crear" variant="danger">Crear</b-button>
    </div>
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
        </b-form-group>
        <b-button  @click="crear_servicio" variant="primary">Submit</b-button>
        <b-button @click="Reset" class="m-2" variant="danger">Reset</b-button>
        <b-button  @click="Reset" variant="primary">Cancelar</b-button>
      </b-form>
    </b-card>
    </div>

    <div class="row" id="serv" v-if="showServ">
      <div class="accordion" role="tablist" id="acord" >
        <b-card no-body class="mb-1" v-for="(i, index) in items" :key="index">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="i.id" variant="info">{{i.Empresa}} {{i.Servicio}}</b-button>
          </b-card-header>
          <b-collapse :id="i.id" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{i.id}}</b-card-text>
              <b-card-text>{{ i.Informacion }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
console.log(localStorage.getItem('hola'))
export default {
  data () {
    return {
      form: {
        nombre: '',
        Descripcion: '',
        idPersona: localStorage.getItem('IDpersona')
      },
      showServ: false,
      showbotton: false,
      showCrea: true,
      items: [
        { Empresa: 'Foo', Servicio: 'limpiar', Informacion: 'aksja kasj aksj hakajs kajs kasj kasj aksj aksj aksj ', id: '12345' },
        { Empresa: 'Bar', Servicio: 'limpiar', Informacion: 'asjghajsh', id: '12346' },
        { Empresa: 'Baajshr', Servicio: 'limpiar', Informacion: 'ashgajs', id: '12347' }
      ]
    }
  },
  methods: {
    actualizar (event) {
      this.showServ = true
      this.showCrea = false
      alert('actualizo')
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
            alert('Servicio creado')
          } else {
            alert('Servicio No creado')
          }
          console.log(response)
        })
      event.preventDefault()
      this.Reset(event)
    }
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

</style>
