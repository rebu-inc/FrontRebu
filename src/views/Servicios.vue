<template>
  <div class="Servicios">
      <h1>Nuestros Servicios</h1>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item vh-100 active">
                <img class="d-block w-100" src="https://picsum.photos/500/300/?image=20" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="display">Con TicketCode puedes mantener un seguiminto de los servicios prestados por su empresa, y los operadores destinados a realizarlas, esto mediante un moderno sistema de tickets que le permitira gestionar de forma eficiente todos sus procesos.</h1>
                </div>
            </div>
            <div class="carousel-item vh-100">
                <img class="d-block w-100" src="https://picsum.photos/500/300/?image=20" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                </div>
            </div>
            <div class="carousel-item vh-100">
                <img class="d-block w-100" src="https://picsum.photos/500/300/?image=20" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, repellendus.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    </div>
  </div>
</template>
<style scoped>

.carousel-item {
  position: relative;
  /*display: none;*/
  float: left;
  width: 100%;
  margin-right: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}
.carousel-inner img {
  margin: auto;
}
.carousel-caption {
    position: absolute;
    right: 15%;
    top: 100px; /* Cambiar bottom por top y los píxeles que necesites */
    left: 15%;
    bottom: 50%;
    z-index: 1;
    padding-top: 150px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Añadir para conseguir el fondo con opacidad */
}
</style>
