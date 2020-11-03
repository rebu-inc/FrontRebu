<template><div id="app2">
  <div id="nav2">
      <router-link tag="li" id="li1" to="/"> <img src="../assets/ticketwork.png" height="90px" align="center"></router-link>
      <router-link tag="li" to="/QuienesSomos" >Quienes somos </router-link>
      <router-link tag="li" to="/Servicios">Servicios</router-link>
      <router-link tag="li" to="/Contacto">Contacto</router-link>
      <router-link tag="li" to="/Registro">Registro</router-link>
      <router-link tag="li" to="/Login">login</router-link>
    </div>
    <router-view/>
    <div id = "con1">
      <div id  = "log">
        <li><h1>Contactenos</h1></li>
        <li><a href="https://www.facebook.com/" target="_blank" > <img src="../assets/facebook.png" height="20px"></a></li>
        <li><a href="https://www.instagram.com/" target="_blank" > <img src="../assets/instagram.png" height="20px"></a></li>
        <li><a href="https://www.twitter.com/" target="_blank" > <img src="../assets/twitter.png" height="20px"></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=+573212660579&text=Hola" target="_blank" > <img src="../assets/whatsapp.png" height="20px"></a></li>
        <li><a href="mailto:jebalseroo@unal.edu.co?Subject=Interesado%20en%20el%20curso" target="_blank" > <img src="../assets/Mail.png" height="20px"></a></li>
        <li><a id="ter" href="https://drive.google.com/drive/folders/10XPMfEa8Hyuu5BZT9-lRzrPjWY-ruIjz?usp=sharing" target="_blank"> Terminos y condiciones </a></li>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
#app2 {
  font-family: Oswald, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav2 {
  list-style: none;
  padding: 0px;
  background: #f4e0de;
  width: 100%;
  max-width: 10000px;
  margin: center;
  font-size: 26px;
  justify-content: center;
}

#nav2 a {
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
#con1{
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
