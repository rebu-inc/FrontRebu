<template>
  <div align="center" class="pt-5 pl-5">
    <b-card style="width:700px">

      <h3>REGISTRO</h3>

    <b-form action="mailto:ticketwork@gmail.com" method="post" enctype="text/plain" @submit="onSubmit" @reset="onReset" v-if="show" class="pt-2">

      <b-form-group
       label-cols="1"
       label-cols-lg="4"
       label="Nombre empresa:"
       label-for="input-default"
       style="width:550px"
      >
        <b-form-input inline
          id="input-default"
          v-model="form.nombre"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group
       label-cols="4"
       label-cols-lg="4"
       label="Nit empresa"
       label-for="input-default"
       style="width:550px"
      >
        <b-form-input
          id="input-default"
          v-model="form.nit"
          required
          placeholder="Nit"
        ></b-form-input>
      </b-form-group>

      <b-form-group style="width:550px"
        label-cols="4"
        label-cols-lg="4"
        label="E-mail:"
        label-for="input-default"
      >
        <b-form-input
          id="input-default"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="4"
        label-cols-lg="4"
        label="Teléfono:"
        label-for="input-default"
        style="width:550px"
      >
        <b-form-input
          id="input-default"
          v-model="form.telefono"
          required
          placeholder="Teléfono"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="Prestadora">Prestadora</b-form-checkbox>
          <b-form-checkbox value="Solicitante">Solicitante</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button  type="submit" variant="primary" >Submit</b-button>
      <b-button class="m-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nombre: '',
        nit: '',
        email: '',
        telefono: '',
        checked: []
      },
      show: true
    }
  }
}
</script>
