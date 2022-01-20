<template>
<div>
  <div class="mt-5" id="tex">
    <b-row id="texto">
      <b-col md="6" class="pt-5 pl-5">
        <h2 class="text-justify font-weight-bold">
          En Rebu ofrecemos servicios que te brindan una mejor solución a la necesidades cotidianas y 
          permite entregas a la mayor brevedad posible, rebu cuenta con el mejor talento humano capacitado para brindar un servicio excepcional.
        </h2>
      </b-col>
      <b-col md="6" class="pt-3">
        <img src="../assets/delivery.jpg" style="width:500px" height="330" alt="holi1">
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
console.log(localStorage.getItem('hola'))
export default {
  name: 'Delivery'
}
</script>

<style>
#tex{
  font-family: Oswald, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  display: flex;
  justify-content: center;
  align-items: center;
}
#texto{
  max-width: 1500px;
}
</style>