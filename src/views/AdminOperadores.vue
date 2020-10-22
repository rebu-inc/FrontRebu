<template>
  <div class="AdminOperador">
     <b-button variant="danger" router-link tag="li" to="/RegistroAdmin" v-on:click="j = true"><br><strong>Registrar</strong><br><br></b-button>
     <div v-if="j">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      j: false
    }
  },
  methods: {
    ver (event) {
      this.j = 'juan'
    }
  }
}
</script>
