<template>
    <div>
        <h1>Actualizar datos del Estudiante</h1>
        <table>
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
                <th>Agregar Estudiante</th>
                </tr>
            </thead>
            <tbody>
                <td><input type="text" class="campotext" v-model="estudiante.nombre"></td>
                <td><input type="text" class="campotext" v-model="estudiante.identificacion"></td>
                <td><input type="number" class="campotext" v-model="estudiante.edad"></td>
                <td><input type="number" class="campotext" v-model="estudiante.celular"></td>
                <td><input type="number" class="campotext" v-model="estudiante.promedio"></td>
                <td><input type="text" class="campotext" v-model="estudiante.grado"></td>
                <td><input type="text" class="campotext" v-model="estudiante.genero"></td>
                <td><input type="text" class="campotext" v-model="estudiante.direccion"></td>
                <td><input type="text" class="campotext" v-model="estudiante.padre.nombre"></td>
                <td><input type="number" class="campotext" v-model="estudiante.padre.telefono"></td>
                <td><input type="text" class="campotext" v-model="estudiante.madre.nombre"></td>
                <td><input type="number" class="campotext" v-model="estudiante.madre.telefono"></td>
                <td><v-btn @click="actualizar()" onclick="location.href='/estudiante'">Actualizar</v-btn></td>
            </tbody>
        </table>
    </div>    
</template>

<script>
import axios from "axios";
export default{
    data(){
        return{
            estudiante: {
               padre: {

               },
               madre: {

               }
            }
        }
    },

    methods: {
        actualizar(){
            axios.put(`http://localhost:3000/estudiantes/actualizarEstudinate/${this.$route.params.id}`, this.estudiante).then(
                () => console.log("Estudiante actualizado")
            );
        }
    },    
        created() {
            let apiURL = `http://localhost:3000/estudiantes/buscarEstudiante/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.estudiante = res.data;
                //console.log(res, data)
            });
        }
    
}
</script>

<style src="./BuscarEstudiante.scss" lang="scss"></style>