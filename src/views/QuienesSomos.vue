<template>
<div>
  <div class="mt-5" id="tex">
    <b-row id="texto">
      <b-col md="6">
        <img src="../assets/Quinessomos.png" style="width:500px" height="330" alt="holi">
      </b-col>
      <b-col md="6" class="pt-3 pr-5">
        <h2 class="text-justify font-weight-bold">
          Rebu es una aplicacion que permite a los usuarios que necesitan transporte o envios se consigan fácilmente, 
          encontrar socios conductores que ofrecen este servicio, los cuales tratan a los clientes de la manera mas respetuosa y 
          cuenta con los precios mas accesibles en el mercado de aplicaciones moviles.
          </h2>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'QuienesSomos'
}
</script>

<style>
#tex{
  font-family: Oswald, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:black;
  display: flex;
  justify-content: center;
  align-items: center;
}
#texto{
  max-width: 1500px;
}
</style>