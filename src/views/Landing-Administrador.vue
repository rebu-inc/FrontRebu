<template><div id="app1">
  <div class="row">
    <div id="nav3">
      <b-button-group vertical style="width:270px" size="lg">
        <b-button variant="danger"> <img src="../assets/ticketwork.png" height="90px" align="left"><br>¡Hola Administrador!<br></b-button>
        <b-button variant="danger" router-link tag="li" to="/AdminServicios"><br><strong>Servicios</strong><br><br></b-button>
        <b-button variant="danger" router-link tag="li" to="/AdminOperadores"><br><strong>Operadores</strong><br><br></b-button>
        <b-button variant="danger" router-link tag="li" to="/AdminTickets"><br><strong>Tickets</strong><br><br></b-button>
        <b-button variant="danger" router-link tag="li" to="/AdminClientes"><br><strong>Clientes</strong><br><br></b-button>
        <b-button variant="danger" router-link tag="li" to="/AdminReporte"><br><strong>Reporte</strong><br><br></b-button>
      </b-button-group>
      </div>
        <div class="col" style="width:10px">
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
              <b-list-group v-if="menu" id="menu-salir">
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
  name: 'Landing-Administrador',
  data () {
    return {
      menu: false
    }
  },
  methods: {
    onClick () {
      localStorage.clear()
      this.$router.push('/Login')
    },
    ver () {
      if (this.menu) {
        this.menu = false
      } else {
        this.menu = true
      }
    }
  },
  beforeCreate () {
    console.log('jash')
    if (!localStorage.getItem('token-Admin')) {
      this.$router.push('/Login')
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
#menu-salir{
  position:fixed;
}
#nav3 {
  list-style: none;
  padding:0px;
  background: #f4e0de;
  width:19%;
  max-width: 10000px;
  color: #EB6359;
}

#nav1 {
  list-style: none;
  padding:15px;
  background: #7DADE6;
  width:100%;
  max-width: 10000px;
}

#nav3 a {
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
  position: relative;
  width: 10%;
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
