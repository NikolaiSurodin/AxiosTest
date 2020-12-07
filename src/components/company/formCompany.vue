<template>
<div>
  <form>
    <h3>edit you company</h3>
    <div class="row" >
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <input class="card-title" placeholder="Название компании">
            <input type="text" class="card-title" placeholder="Адрес">
            <input type="text" class="card-title" placeholder="Составить описание компании">
          </div>
          <div class="card-action">
            <button type="submit" class="btn">Save</button>
            <router-link to="/company" class="right">Go out</router-link>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
name: "formCompany",
  props:['company']

}
</script>

<style scoped>

</style>