<template>
  <div class="BuscarEstudiante">
<div class="row"></div>
   <div class="col-md-3"></div>
      <div class="col-md-5">
        <h1>Buscar estudiantes <br><v-btn @click="buscar()" class="mx-15" small color="red">Buscar</v-btn>
        <v-btn class="mx-15" small color="red" onclick="location.href='/crear'">Agregar Estudiante</v-btn>
        </h1>
      </div>
      <div class="col-md-4"></div>

    <table id="firstTable">
      
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Documento</th>
      <th>Edad</th>
      <th>Celular</th>
      <th>Promedio</th>
      <th>Grado</th>
      <th>Genero</th>
      <th>Dirección</th>
      <th>Padre</th>
      <th>Celular del padre</th>
      <th>Madre</th>
      <th>Celular del madre</th>
      <th>Diligenciar</th>
      <th>Eliminar</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="estudiante in estudiantes" :key="estudiante._id">
      <td>{{estudiante.nombre}}</td>
      <td>{{estudiante.identificacion}}</td>
      <td>{{estudiante.edad}}</td>
      <td>{{estudiante.celular}}</td>
      <td>{{estudiante.promedio}}</td>
      <td>{{estudiante.grado}}</td>
      <td>{{estudiante.genero}}</td>
      <td>{{estudiante.direccion}}</td>
      <td>{{estudiante.padre.nombre}}</td>
      <td>{{estudiante.padre.telefono}}</td>
      <td>{{estudiante.madre.nombre}}</td>
      <td>{{estudiante.madre.telefono}}</td>
      <td><b-icon-book @click="llenarObservador(estudiante._id)"></b-icon-book></td>
      <td><v-btn onclick="document.location.reload();" @click="deleteEstudiante(estudiante._id)">Eliminar</v-btn></td>
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
  /*created() {
    axios.get("http://localhost:3000/estudiantes")
      .then(response => {
          this.estudiantes = response.data 
      })
      .catch(error => console.log(error));
    },*/
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
    deleteEstudiante(id){
      axios.delete("http://localhost:3000/estudiantes/borrarEstudiante/" + id).then(
        () => {
                let indexOfArrayItem = this.estudiante.findIndex((i) => i._id == id);
                this.estudiante.splice(indexOfArrayItem);
              }
      )
    },
  },
};
</script>

<style src="./BuscarEstudiante.scss" lang="scss"></style>