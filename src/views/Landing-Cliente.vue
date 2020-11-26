<template>
  <div id="app">
    <div class="row">
      <div id="nav" class="col-md-3 col-sd-2 col-xs-1">
          <b-button-group vertical style="width:100%" size="lg">
            <b-button variant="danger"> <img src="../assets/ticketwork.png" height="90px" align="left"><br>¡Hola Cliente!<br></b-button>
            <b-button variant="danger" router-link tag="li" to="/ClienteServicios"><br><strong>Servicios</strong><br><br></b-button>
            <b-button variant="danger" router-link tag="li" to="/ClienteTickets"><br><strong>Tickets</strong><br><br></b-button>
          </b-button-group>
      </div>
      <div class="col-md-9 col-sd-6 col-xs-3" style="width:100%">
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
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing-Cliente',
  data () {
    return {
      menu: false
    }
  },
  methods: {
    onClick () {
      localStorage.removeItem('token-cliente')
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
  width:19%;
  max-width: 10000px;
  color: #EB6359;
}
#menuSalir {
  position: fixed;
}
#nav1 {
  list-style: none;
  padding:15px;
  background: #7DADE6;
  width:100%;
  max-width: 10000px;
}

#nav a {
  text-decoration: none;
  color: black;
  display: inline-block;
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
