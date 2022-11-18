<template>
  <Navbar />
  <Map />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Map from './components/Map.vue'
// import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Map,
    // Main,
  }
}
</script>

<style>
</style>
