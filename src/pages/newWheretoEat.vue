<template><form>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">City:</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="" value="">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">Traditional foods to try:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="">
    </div>
  </div>

  <br>
 <button>
      <router-link :to="{ path: '/newwheretoeat'}"> <h1>Add +</h1> </router-link>
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