<template>
  <form @submit.prevent="CreateCompany">
    <h3>Create you company</h3>
    <div class="row" >
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <input class="card-title" placeholder="Название компании" v-model="model.name">
            <input type="text" class="card-title" placeholder="Адрес" v-model="model.address">
            <input type="text" class="card-title" placeholder="Составить описание компании" v-model="model.about">
          </div>
          <div class="card-action">
            <button type="submit" class="btn" @click="CreateCompany" >Save</button>
            <router-link to="/company" class=" btn red right">Go out</router-link>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: "createCompany",
  data() {
    return {
      model: {
        name: '',
        address: '',
        about: '',
        id:''
      }
    }

  },
  methods: {
    CreateCompany() {
      this.$store.dispatch('createCompany', this.model)
      this.$router.push('/company')
      console.log(this.model)
    }
  }
}
</script>

<style scoped>

</style>