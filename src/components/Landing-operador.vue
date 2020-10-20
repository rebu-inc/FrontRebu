<template>
  <div class="Landing-operador">
      <div >
          <b-navbar toggleable="lg"  variant="info">
            <b-navbar-brand href="#">Operador Agregar Nombre</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav >
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      </div>
      <div class="row">
          <div class="col-md-2">
              <b-list-group>
                <b-list-group-item button>Ticket</b-list-group-item>
                <b-list-group-item button>Reporte</b-list-group-item>
                <b-list-group-item button>Trabajos</b-list-group-item>
              </b-list-group>
          </div>
          <div class="col-md-10">
              <b-card>
                <Ticket msg=" "/>
                <Reporte msg=" "/>
                <Trabajos msg=" "/>
              </b-card>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Ticket from '@/components/Ticket.vue'
import Reporte from '@/components/Reporte.vue'
import Trabajos from '@/components/Trabajos.vue'

export default {
  name: 'Landing-operador',
  components: {
    Ticket,
    Reporte,
    Trabajos
  }
}
</script>

<style>
    .bg-info{
        background: #087589;
    }
    li {
        background: none;
        padding: 10px;
    }
    .list-group-item {
    position: relative;
    display: block;
    padding: 29px;
    background-color: rgb(207, 27, 27);
    border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
