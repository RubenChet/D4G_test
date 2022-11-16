<template>
    <div id="map"></div>
</template>

<script>
export default {
    mounted() {
        var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
}
</script>
<style>
#map {
    height: 600px;
    width: 600px;
}
</style>