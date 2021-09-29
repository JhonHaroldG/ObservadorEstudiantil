<template>
  <div class="login">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>Observador estudiantil virtual</h1>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <p>
          Esta herramienta le facilitará el seguimiento de sus estudiantes.
          cualquier docente podrá realizar observaciones simultanéas y en tiempo
          real.
        </p>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-2">
        <img alt="login logo" src="../../assets/login/image-Login.png" />
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-2">
        <div class="row login-form">
          <input
            type="text"
            name="usuario"
            v-model="input.usuario"
            placeholder="Usuario"
          />
        </div>
        <div class="row">
          <input
            type="password"
            name="contrasena"
            v-model="input.contrasena"
            placeholder="Contraseña"
          />
        </div>
        <div class="row">
          <button class="btn btn-primary" type="button" v-on:click="login()">Ingresar</button>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      input: {
        usuario: "",
        contrasena: "",
      },
    };
  },
  methods: {
    login() {
      this.$emit("authenticated", true);
      axios.post("http://localhost:3000/seguridad/autenticacion", {"usuario":this.input.usuario, "contrasena":this.input.contrasena})
      .then(response => {
        if (response.data == null) {
          this.mensaje = "El usuario o clave son erroneos";
        } else {
          this.mensaje = "Autenticación exitosa";
          this.$router.replace({ name: "Home" });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.row .login-form {
    margin-top: 50%;
}
</style>