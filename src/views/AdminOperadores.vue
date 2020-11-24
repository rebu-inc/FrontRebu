<template>
  <div class="AdminOperador">
     <b-button variant="danger" router-link tag="li" to="/RegistroAdmin" v-on:click="j = true"><br><strong>Registrar</strong><br><br></b-button>
     <div>
      <b-list-group v-for="(info,index) in tabla" :key="index">
         <b-list-group-item :id="info.nombre" href="#">{{info.nombre}}</b-list-group-item>
      </b-list-group>
    </div>
    <b-button type="submit" variant="primary" @click="actual">actualizar </b-button>
     <div v-if="j">
       <router-view></router-view>
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
      j: false,
      form: {
        idEmpresa: localStorage.getItem('IDEmpresa')
      },
      tabla: []
    }
  },
  methods: {
    ver (event) {
      this.j = 'juan'
    },
    actual () {
      this.onSubmit(event)
    },
    onSubmit (event) {
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
  }
}
</script>
