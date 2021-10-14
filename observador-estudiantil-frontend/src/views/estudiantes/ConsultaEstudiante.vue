<template>
    <div class="ConsultaEstudiante">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6"><h1>Observador estudiantil</h1></div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <label>Nombre</label>
                <p>{{estudiante.nombre}}</p>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <label>identificación</label>
                <p>{{estudiante.identificacion}}</p>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-2"><label>Observaciones</label></div>
            <div class="col-md-8">
                <textarea v-model="observaciones" placeholder="Agregar observaciones al estudiante"></textarea>
            </div>
            <div class="col-md-2">
                <v-btn @click="agregarObservacion(observaciones)">Agregar</v-btn>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table id="observaciones">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Observación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(observacion, index) in estudiante.observaciones" :key="observacion">
                        <td>{{index + 1}}</td>
                        <td>{{observacion}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
            </div>
            <div class="col-md-2">
                <v-btn @click="guardar()">Guardar</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ConsultaEstudiante",
    data: () => ({
        estudiante: {},
        observaciones: ""
    }),
    created() {
        axios.get(`http://localhost:3000/estudiantes/${this.$route.params.id}`)
        .then(response => {
            this.estudiante = response.data
        })
        .catch(error => console.log(error));
    },
    methods: {
        agregarObservacion(observacion) {
            this.estudiante.observaciones.push(observacion);
        },
        guardar() {
            axios.put(`http://localhost:3000/estudiantes/${this.estudiante._id}`, this.estudiante)
            .then(response => { 
                console.log(response);
                this.$router.push({ path: `/estudiante` })
            })
            .catch(error => console.log(error));
        }
    },
}
</script>

<style src="./ConsultarEstudiante.scss" lang="scss"></style>