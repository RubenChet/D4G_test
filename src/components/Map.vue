<template lang="">
    <div>
        <div id="map" class="-z-50"></div>
        
    </div>
</template>
<script>
export default {
    methods: {
        showmap() {
            var map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        },
    },
    mounted() {
        this.showmap()
    },
}
</script>
<style lang="">
    
</style>