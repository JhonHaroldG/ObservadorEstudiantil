<template>
    <div>
        <h1> Ingresar Estudiante Nuevo </h1>
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
                <td><v-btn @click="agregar()" onclick="location.href='/estudiante'">Agregar</v-btn></td>
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
                nombre: "",
                identificacion: "",
                edad: 0,
                celular: 0,
                promedio: 0.0,
                grado: "", 
                genero: "",
                dirección: "",
                padre: {
                    nombre: "",
                    telefono: 0,
                },
                madre:{
                    nombre: "",
                    telefono: 0,
                }
            }
        }
    },

    methods: {
        agregar(){
            axios.post("http://localhost:3000/estudiantes/crearEstudiante", this.estudiante).then(
                () => console.log("Estudiante Agregado")
            );
        }
    }
}
</script>

<style src="./BuscarEstudiante.scss" lang="scss"></style>