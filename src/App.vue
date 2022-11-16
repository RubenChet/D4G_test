<template>
  <div class="header">Hello</div>
  <div class="Container">
    <div>
    <HelloWorld msg="Welcome to Your Vue.js App" /></div>
    <Map />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
