<template>
  <div class="AdminOperador">
     <b-button variant="danger" router-link tag="li" to="/RegistroAdmin" v-on:click="j = true"><br><strong>Registrar</strong><br><br></b-button>
     <div>
      <b-list-group v-for="(dat,info,index) in tabla" :key="index">
         <b-list-group-item :id="dat.nombre" href="#">{{dat.nombre}}</b-list-group-item>
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
      this.actualizar(event)
    },
    actualizar (event) {
      axios
        .get(localStorage.getItem('url') + '/solicitud/operadores/', {
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
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
