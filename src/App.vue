<template>
  <Navbar/>
  <div class="Container">
    <div>
    <HelloWorld msg="Welcome to Your Vue.js App" /></div>
    <Map />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Map,
  }
}
</script>

<style>
.Container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid black;
}
</style>
