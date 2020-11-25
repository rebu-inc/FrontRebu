<template>
  <div class="AdminOperador">
     <b-button variant="danger" router-link tag="li" to="/RegistroAdmin" v-on:click="j = true"><br><strong>Registrar</strong><br><br></b-button>
     <div>
      <b-list-group v-for="(info,index) in tabla" :key="index">
         <b-list-group-item :id="info.nombre" href="#">{{info.nombre}} </b-list-group-item>
      </b-list-group>
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
      tabla: []
    }
  },
  methods: {
    actual () {
      this.onSubmit(event)
    },
    onSubmit (event) {
      this.showLogin = true
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
