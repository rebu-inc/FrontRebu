<template>
  <div class="Contacto">
    <br>
    <br>
    <div id="contacto">
      <h1>Let´s work together</h1>
      <div id="img-tex">
        <li id="img"><img src="../assets/repar.jpg" ></li>
        <li id="txt">
          <p id="txt1">Grupo</p>
          <p id="txt2">Rebu</p>
          <p id="txt1">Celular</p>
          <a id="txt2" href="https://api.whatsapp.com/send?phone=+573212660579&text=Hola" target="blakc">+57 3212660579</a>
          <p id="txt1">Email</p>
          <a id="txt2" href="mailto:jebalseroo@unal.edu.co?Subject=Interesado%20en%20el%20curso" target="black">hello@reallygreatsite.com</a>
        </li>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #contacto{
    background: rgb(20, 20, 20);
  }
  h1{
    color: white;
    padding: 2px;
    position: relative;
    right: 300px;
  }
  li{
    background:none;
    text-align: left;
    color: white;
  }
  li:hover{
    cursor: auto;
    background: none;
  }
  img{
    right: 200px;
    height: 100%;
    width:100%;
    max-width:500px;
    vertical-align:unset;
  }
  #txt1{
    margin: 5px;
    font-size:26px;
    color: #666769;
  }
  #txt2{
    text-decoration-line: none;
    margin: 5px;
    font-size:24px;
    color: #ffffff;
  }
</style>
