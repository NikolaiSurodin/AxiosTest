<template>
  <div>
    <form class="row">
      <h3>edit you company</h3>
      <div class="input-field">
        <input id="title" type="text" class="validate" required v-model="company.name">
        <label for="title">Company name</label>
        <span class="helper-text" data-error="Обязательно заполнить"></span>
      </div>
      <div class="row">
        <div class="input-field">
          <textarea id="description" class="materialize-textarea" v-model="company.about"></textarea>
          <label for="description">About</label>
        </div>
        <div class="input-field">
          <textarea id="address" class="materialize-textarea" v-model="company.address"></textarea>
          <label for="Address">Address</label>
        </div>
      <div class="card-action">
        <button type="button" class="btn" @click="upData">Save</button>
        <router-link to="/company" class="right">Go out</router-link>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "formCompany",
  data(){
    return{
    }
  },
  methods:{
    upData(){
      this.$store.dispatch('upDateCompany')
      this.$router.push('/company')
    }
  },
  computed:{
    company() {
      let company = this.$store.getters.companies.filter(el => el.id === this.$route.params['id'])
      return company.length ? company[0] : {}
    }
  }

}
</script>

<style scoped>

</style>