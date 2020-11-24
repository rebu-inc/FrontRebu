<template>
  <div class="AdminOperador">
     <b-button variant="danger" router-link tag="li" to="/RegistroAdmin" v-on:click="j = true"><br><strong>Registrar</strong><br><br></b-button>
     <div>
        <b-list-group  v-for="(dat,info,index) in tabla" :key="index">
          <b-list-group-item :id="dat.Operadores" href="#">{{operadores}}</b-list-group-item>
        </b-list-group>
    </div>
     <div v-if="j">
       <router-view></router-view>
     </div>
     <div> <b-button type="submit" variant="primary" @click="actual">actualizar </b-button></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminOperadores',
  components: {},
  data () {
    return {
      i: 0,
      form: {
        idEmpresa: 0
      },
      tabla: [{

      }]
    }
  },

  methods: {
    actual () {
      this.actualizar(event)
      console.log()
    },
    onSubmit (event) {
      console.log(parseInt(localStorage.getItem('IDEmpresa'), 10))
      axios
        .post(localStorage.getItem('url') + '/solicitud/operadores', {
          idEmpresa: parseInt(localStorage.getItem('IDEmpresa'), 10)
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
          console.log()
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
        .get(localStorage.getItem('url') + '/solicitud/operadores', {
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
