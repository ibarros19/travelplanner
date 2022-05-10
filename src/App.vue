<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup


</script>

<template>

   <router-link :to="{ path: '/'}"><img class="airplane" alt="App logo" src="./assets//airplane.jpeg" /></router-link>
 

<router-view />


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
text-align: center;
}

.airplane {
  width: 100%;
}
</style>
