<template>
    <div class="flex justify-around items-center border-solid mt-10">
        <div id="map" class="-z-50"></div>
        <div id="list" class="bg-emerald-800">
            <div id="card-container" class="bg-emerald-800" v-for="(item, index) in packed_list[chunk_num]"
                :key="index">
                <a
                    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 mt-5">
                    <div id="card_top" class="flex justify-between items-center">
                        <h5 class="mb-2 font-bold tracking-tight text-gray-900">{{ item[0]["__7"] }}</h5>
                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-xs p-2.5 text-center inline-flex items-center mr-2">
                            <i class="pi pi-plus-circle"></i>
                        </button>
                    </div>
                    <div id="card_lieu" class="flex justify-between">
                        <div id="lieu" class="flex items-center">
                            <p>{{ checkSameCity(item) }}</p>
                            <el-link type="primary" class="ml-2">
                                <p class="link_carte">Voir sur la Carte</p>
                            </el-link>
                        </div>
                    </div>
                    <div id="card_formations" class="flex justify-around text-center overflow-auto">
                        <!-- Modal toggle -->
                        <button
                            class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                            type="button" @click="toggleModal(), sendActive(item)">
                            En savoir +
                        </button>
                    </div>
                    <div id="card_footer" class="flex justify-between">
                        <p>Structure: {{ item[0]['__1'] }}</p>
                        <p>{{ item[0][""] }}</p>
                    </div>
                </a>
            </div>
            <div class="flex justify-center items-center mt-2">
                <!-- Previous Button -->
                <a class="disable inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700" @click="chunk_num++">
                    Previous
                </a>

                <!-- Next Button -->
                <a class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700" @click="chunk_num--">
                    Next
                </a>
            </div>
        </div>
        <div id="defaultModal" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
            <div id="modal_size" class="relative p-4 h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow ">
                    <!-- Modal header -->
                    <div class="flex justify-between items-start p-4 rounded-t border-b">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900 ">
                                {{ active_school[0]['__7'] }}
                            </h3>
                            <div id="modal_head" class="flex justify-start text-xs items-center">
                                <i>{{ checkSameCity(active_school) }}</i>
                                <i>{{ active_school[0]['__1'] }}</i>
                            </div>
                        </div>

                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            @click="toggleModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <div class="demo-collapse">
                            <el-collapse v-model="activeName" accordion>
                                <el-collapse-item v-for="(item, index) in active_school" :key="index"
                                    :title="active_school[index]['__8']" @click="active_school_table = item">
                                    <div class="overflow-x-auto relative">
                                        <table class="w-full text-sm text-left text-gray-500">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="py-3 px-6">
                                                        Description
                                                    </th>
                                                    <th scope="col" class="py-3 px-6">
                                                        Objectifs
                                                    </th>
                                                    <th scope="col" class="py-3 px-6">
                                                        Validation des acquis ?
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b text-center">
                                                    <td class="py-4 px-6">
                                                        {{ item['__5'] }}
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        {{ item['__4'] }}
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        {{ item['__10'] }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
                        <button @click="toggleModal" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I
                            accept</button>
                        <button @click="toggleModal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import JSONdata from '../data/AZjson.json';
import _ from 'lodash';

export default {
    data() {
        return {
            raw_list: JSONdata,
            packed_list: [],
            // already_checked: [],
            // already_city: [],
            packed_num:0,
            active_school: ["hello"],
            active_school_table: [],
            chunk_num: 0,
            modal: ''
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
            // this.already_checked.push(val)
        },
        toggleModal() {
            this.modal.toggle();
        },
        sendActive(val) {
            this.active_school = val
        },
        checkSameCity(val) {
            this.already_city = []
            let the_city = ""
            for (let index = 0; index < val.length; index++) {
                if (this.already_city.includes(val[index]["__9"])) {
                }
                else {
                    the_city += ' ' + val[index]["__9"]
                    this.already_city.push(val[index]["__9"])
                }
            }
            return the_city

        },
    },
    mounted() {
        this.showmap()
        const targetEl = document.getElementById('defaultModal');
        this.modal = new Modal(targetEl);
    },
    created() {
        this.raw_list.shift();
        this.push_in_packed(this.raw_list[0]["__7"])
        let newidx = 0

        for (let index = 0; index < this.raw_list.length; index++) {
            // if (this.already_checked.includes(this.raw_list[index]["__7"])) {
            //     //pass 
            // }
            // else if (this.raw_list[index]["__7"] != "") {
            //     this.push_in_packed(this.raw_list[index]["__7"])
            // }
            // else if (this.raw_list[index]["__7"] == "") {
            //     if (this.already_city.includes(this.raw_list[index]["__9"])) {
            //         //pass 
            //     }
            //     else {
            //         let city_same = this.raw_list.filter((e) => e["__7"] === this.raw_list[index]["__7"])
            //         city_same = city_same.filter((e) => e["__9"] === this.raw_list[index]["__9"])
            //         this.packed_list.push(city_same)
            //         this.already_city.push(this.raw_list[index]["__9"])
            //     }
            // }
            console.log(this.raw_list[index]["__7"])
            if (this.raw_list[index]["__7"] == this.packed_list[newidx][0]["__7"]) {
                //pass
                console.log('same')
            }
            else
            {   
                const same = this.raw_list.filter((e) => e["__7"] === this.raw_list[index]["__7"])
                this.packed_list.push(same)
                newidx++
            }
        }
        let chunk = _.chunk(this.packed_list, 4);
        this.packed_list = chunk;
        console.log(this.packed_list)
    },
}
</script>
<style>
#map {
    height: 700px;
    width: 700px;
}

.link_carte {
    font-size: 0.7em;
}

#modal_head i {
    margin-left: 10px;
}

#modal_size {
    min-width: 60%;
    max-width: 80%;
}
</style>