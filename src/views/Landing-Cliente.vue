<template><div id="app">
    <div class="row">
      <div id="nav">
          <b-button-group vertical style="width:270px" size="lg">
            <b-button variant="danger"> <img src="../assets/ticketwork.png" height="90px" align="left"><br>¡Hola Cliente!<br></b-button>
            <b-button variant="danger" router-link tag="li" to="/ClienteServicios"><br><strong>Servicios</strong><br><br></b-button>
            <b-button variant="danger" router-link tag="li" to="/AdminOperadores"><br><strong>Tickets</strong><br><br></b-button>
            <b-button variant="danger" router-link tag="li" to="/AdminTickets"><br><strong>Quejas y reclamos</strong><br><br></b-button>
          </b-button-group>
      </div>
        <div class="col" style="width:10px">
            <div id="nav1">
              <b-input-group prepend="Buscar" style="width:1000px">
                <b-form-input></b-form-input>
                <b-input-group-append>
                  <b-button variant="info">ir</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
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
  background: #f4e0de;
  width:19%;
  max-width: 10000px;
  color: #EB6359;
}

#nav1 {
  list-style: none;
  padding:15px;
  background: #7DADE6;
  width:220%;
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
