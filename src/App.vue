<template>
  <Navbar />
  <Map />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
  }
}
</script>

<style>
</style>
