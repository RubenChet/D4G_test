<template>
  <nav class="flex bg-emerald-800 w-screen items-center">
    <!-- Left Navigation -->
    <div class="flex-1 flex justify-center mr-auto">
      <p>logo</p>
    </div>
    <!-- Logo -->
    <div class="mx-12">
      <p>logo</p>
    </div>
    <!-- Right Navigation -->
    <div class="flex-1 flex justify-center ml-auto">
      <a class="mx-2">LINK THREEE</a>
      <a class="mx-2">LINK FOOOUR</a>
    </div>
  </nav>
  <nav class="flex bg-emerald-800 w-screen items-center">
    <!-- Left Navigation -->
    <div class="flex-1 flex justify-center mr-auto">
      <div class="search">
        <input type="text" id="search-navbar"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search...">
      </div>
    </div>
    <!-- Logo -->
    <div class="mx-12 flex justify-center w-1/4">
      <ul class="flex justify-around w-full">
        <li v-for="(item, index) in nav_data" :key="index">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link text-white cursor-pointer">
              {{item.nom}}
            </span>
            <template #dropdown>
              <el-dropdown-menu v-for="(val, idx) in item.sections" :key="idx">
                <el-dropdown-item>{{val}}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <!-- Right Navigation -->
    <div class="flex-1 flex justify-center ml-auto">
      <a class="mx-2">LINK THREEE</a>
      <a class="mx-2">LINK FOOOUR</a>
    </div>
  </nav>
</template>
<script>

import navjson from '../data/nav.json'
export default {
  data() {
    return {
      nav_data: navjson,
    }
  },
  methods: {
    test(val){
      console.log(val)
    }
  },
}
</script>
<style scooped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>