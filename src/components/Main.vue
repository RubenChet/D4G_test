<template>
    <div class="flex justify-around items-center border-solid border-2 border-black">
        <div id="map"></div>
        <div id="list" class="bg-emerald-800">
            <div id="card-container" class="bg-emerald-800" v-for="(item, index) in packed_list" :key="index">
                <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                    <div id="card_top" class="flex justify-between items-center">
                        <h5 class="mb-2 font-bold tracking-tight text-gray-900">{{ item[0]["__7"] }}</h5>
                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-xs p-2.5 text-center inline-flex items-center mr-2">
                            <i class="pi pi-plus-circle"></i>
                        </button>
                    </div>
                    <div id="card_lieu" class="flex justify-between">
                        <div id="lieu" class="flex items-center">
                            <p>{{ item[0]['__9'] }}</p>
                            <button type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-xs p-2.5 text-center inline-flex items-center mr-2">
                                <i class="pi pi-map-marker"></i>
                            </button>
                        </div>
                    </div>
                    <p>Types de formation</p>
                    <div id="card_footer" class="flex justify-between">
                        <p>Structure: {{ item[0]['__1'] }}</p>
                        <p>{{ item[0][""] }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import JSONdata from '../data/AZjson.json';

export default {
    data() {
        return {
            raw_list: JSONdata,
            packed_list: [],
            already_checked: [],
            already_city: [],
        }
    },
    methods: {
        showmap() {
            var map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        },
        push_in_packed(val) {
            const same = this.raw_list.filter((e) => e["__7"] === val)
            this.packed_list.push(same)
            this.already_checked.push(val)
        }
    },
    mounted() {
        this.already_city=[]
        this.already_checked=[]
        this.showmap()
        this.raw_list.shift();
        console.log(this.raw_list.length)
        for (let index = 0; index < this.raw_list.length; index++) {
            if (this.already_checked.includes(this.raw_list[index]["__7"])) {
                //pass 
            }
            else if (this.raw_list[index]["__7"] != "") {
                this.push_in_packed(this.raw_list[index]["__7"])
            }
            else if (this.raw_list[index]["__7"] == "") {
                if (this.already_city.includes(this.raw_list[index]["__9"])) {
                    //pass 
                }
                else {
                    let city_same = this.raw_list.filter((e) => e["__7"] === this.raw_list[index]["__7"])
                    city_same = city_same.filter((e) => e["__9"] === this.raw_list[index]["__9"])
                    this.packed_list.push(city_same)
                    this.already_city.push(this.raw_list[index]["__9"])
                }
            }
        }
        console.log(this.packed_list)
    },
}
</script>
<style>
#map {
    height: 600px;
    width: 600px;
}
</style>