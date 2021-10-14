<template>
  <div class="BuscarEstudiante">
<div class="row"></div>
   <div class="col-md-3"></div>
      <div class="col-md-5">
        <h1>Buscar estudiantes <v-btn @click="buscar()" class="mx-15" small color="red">Buscar</v-btn></h1>
      </div>
      <div class="col-md-4"></div>

    <table id="firstTable">
      
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Documento</th>
      <th>Telefono</th>
      <th>Diligenciar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="estudiante in estudiantes" :key="estudiante._id">
      <td>{{estudiante.nombre}}</td>
      <td>{{estudiante.identificacion}}</td>
      <td>{{estudiante.celular}}</td>
      <td><b-icon-book @click="llenarObservador(estudiante._id)"></b-icon-book></td>
    </tr>
  </tbody>
</table>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "BuscarEstudiante",
  data: () => ({
    estudiantes: []
  }),
  created() {
    axios.get("http://localhost:3000/estudiantes")
      .then(response => {
          this.estudiantes = response.data 
      })
      .catch(error => console.log(error));
    },
  methods: {
    buscar() {
      axios.get("http://localhost:3000/estudiantes")
      .then(response => {
          this.estudiantes = response.data 
      })
      .catch(error => console.log(error));
    },
    llenarObservador(id) {
      this.$router.push({ path: `/consulta-estudiante/${id}` })
      // this.$router.push('/consulta-estudiante');
    },
  },
};
</script>

<style src="./BuscarEstudiante.scss" lang="scss"></style>