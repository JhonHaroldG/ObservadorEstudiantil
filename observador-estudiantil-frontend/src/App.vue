<template>
  <div id="app">
    <section id="bg-menu">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="nav">
              <router-link to="/">Inicio</router-link> |
              <router-link to="/about">Acerca</router-link> |
              <router-link to="/estudiante">Estudiantes</router-link> |
              <router-link to="/login">Ingresar</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style src="./App.scss" lang="scss">