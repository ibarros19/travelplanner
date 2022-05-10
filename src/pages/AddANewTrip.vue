<script>

</script>

<template>

<router-link :to="{ path: '/newflight'}"><h2>Flights</h2></router-link>
<router-link :to="{ path: '/newhotel'}"><h2>Hotels</h2></router-link>
<router-link :to="{ path: '/newcarrental'}"><h2>Car Rentals</h2></router-link>
<router-link :to="{ path: '/newthingstodo'}"><h2>Things to do</h2></router-link>
<router-link :to="{ path: '/newwheretoeat'}"><h2>Traditional local foods</h2></router-link>
<router-link :to="{ path: '/newlinks'}"><h2>Links</h2></router-link>


</template>

<style>
h2 {
    background-color:#f5a95d;
      text-decoration: none;
  color: black;
}

</style>