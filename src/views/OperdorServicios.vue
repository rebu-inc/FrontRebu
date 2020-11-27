<template>
  <div class="Servicios">
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
    <div>
      <h1 align="center"><strong>Mis Tickets</strong></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Landing-Operador',
  data () {
    return {
      menu: false
    }
  },
  methods: {
    onClick () {
      localStorage.removeItem('token-operador')
      this.$router.push('Login')
    },
    ver () {
      if (this.menu) {
        this.menu = false
      } else {
        this.menu = true
      }
    }
  }
}
</script>
