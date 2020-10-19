<template>
  <div  id="app">
    <router-view></router-view>
    <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
  </div>
</template>
<style  scoped>
  #app{
      background:white;
      height: 100%;
      width: 100%;
  }
</style>
