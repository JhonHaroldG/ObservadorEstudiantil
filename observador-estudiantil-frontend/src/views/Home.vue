<template>
  <div>
    <b-card
      overlay
      title="Menú"
      :img-src="require('../assets/menu/image-menu.jpg')"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 200rem;"
      class="mb-8"
    >
    <Menu />
      <b-card-text>
      </b-card-text>

      <b-button href="#" variant="primary"></b-button>
    </b-card>
  </div>
</template>





<script>
  import Menu from '../components/Menu'

  export default {
    name: 'Home',

    components: {
      Menu,
    },
  }
</script>
