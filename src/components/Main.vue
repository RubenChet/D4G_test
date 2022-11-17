<template>
    <div class="flex justify-around items-center border-solid border-2 border-black">
        <div id="map"></div>
        <div id="list" class="bg-emerald-800">
            <div id="card-container" class="bg-emerald-800 ">
                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions
                        2021</h5>
                    <div></div>
                    <p>Nom école</p>
                    <p>Ville</p>
                    <div></div>
                    <p class="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021
                        so far, in reverse chronological order.</p>
                </a>
            </div>
        </div>
    </div>
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