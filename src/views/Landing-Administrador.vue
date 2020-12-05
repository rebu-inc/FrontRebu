<template>
  <div id="app" >
    <div class="row">
      <div id="nav" class="col-md-3 col-sd-2 col-xs-1">
        <b-button-group vertical style="width:100%" size="lg">
          <b-button variant="danger"> <img src="../assets/ticketwork.png" height="90px" align="left"><br>¡Hola Administrador!<br></b-button>
          <b-button variant="danger" router-link tag="li" to="/AdminServicios"><br><strong>Servicios</strong><br><br></b-button>
          <b-button variant="danger" router-link tag="li" to="/AdminOperadores"><br><strong>Operadores</strong><br><br></b-button>
          <b-button variant="danger" router-link tag="li" to="/AdminTickets"><br><strong>Tickets</strong><br><br></b-button>
        </b-button-group>
      </div>
      <div class="col-md-9 col-sd-6 col-xs-3" style="width:100%">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing-Administrador',
  data () {
    return {
    }
  },
  methods: {
  },
  beforeCreate () {
    if (!localStorage.getItem('token-Admin')) {
      this.$router.push('Login')
    }
  }
}
</script>

<style>
#app {
  font-family: Oswald, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
}
#nav {
  list-style: none;
  padding:0px;
  background: #dc3545;
  width:100%;
  max-width: 10000px;
  color: #EB6359;
  height: 100%;
}
#menuSalir {
  position: fixed;
}
#nav1 {
  list-style: none;
  padding:0px;
  background: #7DADE6;
  width:100%;
  max-width: 10000px;
}

li {
  text-decoration: none;
  background: #ffffff;
  display: inline-block;
  padding: 29px;
  cursor:pointer;
}
li:hover{
  background: none;
  color: #e40409;
}
#li1{
  padding: 0px;
  background: none;
}
#li1:hover{
  background: none;
}
#con{
  background: #087589;
  position: relative;
  width: 100%;
  bottom:0;
  color: black;
  position:fixed;
}

#log li{
  background: none;
  padding: 10px;
}

#log li h1{
  padding: 0px;
  height: 10px;
}
#log li:hover{
  background: none;
  color: black;
}
#log li:hover{
  background: none;
  color: black;
  cursor:text;
}
#ter{
  font-size: 30px;
  color:black;
}
#ter:visited{
  color:black;
}
</style>
