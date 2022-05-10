<script setup>
import { ref } from 'vue'


defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
<div class="container">
  <div class="newtrip">  
    <button>
      <router-link :to="{ path: '/addanewtrip'}"> <h1>Start a new trip</h1> </router-link>
    </button>
    </div>

  <div class="dropdown">
  <select name="dropdown">
    <option value="">Choose a trip</option>
    <option value="">Euro Trip 2022<router-link :to="{ path: '/eurotrip2022'}"> </router-link></option>

</select></div></div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.container {
  display:inline-block;
}
.dropdown {
  margin-top: 25px;

}
.newtrip {
  margin-top: 25px;
}
</style>
