<template>
  <div class="Servcios">
    <div id="nav" class="row">
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
    <h1>This is an AdminReporte page</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menu: false
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
    }
  }
}

</script>
