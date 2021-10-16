<template>
  <div class="menu">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-3">
          <label><button class="boton" onclick="location.href='/estudiante'"><img alt="login logo" src="../assets/menu/Redactar.png" /></button><br>
          <b>Redactar</b><br>
          En esta opción podras realizar observaciones a cada uno de los estudiantes</label>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-3">
          <label><button class="boton"><img alt="login logo" src="../assets/menu/admin.png" /></button><br>
          <b>Administrar</b><br>
          En esta opción podras gestionar usuarios y contraseñas</label>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.boton{
    padding: 0;
    border: 0;
    background: none;
}

</style>
