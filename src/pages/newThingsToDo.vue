<template>
<h1>Day 1</h1>
<form>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">City:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="" value="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Date:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 1:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="" value="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 2:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 3:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="" value="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 4:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 5:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="" value="">
    </div>
  </div>
   <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 6:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 7:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="" value="">
    </div>
  </div>
<div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 8:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>

  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 9:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div><div class="form-group row">
    <label class="col-sm-2 col-form-label">Sight 10:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>.<br>
<div class="form-group row">
    <label class="col-sm-2 col-form-label">Link to google maps:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>
<br>
 <button>
      <router-link :to="{ path: '/newthingstodo'}"> <h1>Add a new day</h1> </router-link>
    </button>
</form>

</template>

<script>

</script>


<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>