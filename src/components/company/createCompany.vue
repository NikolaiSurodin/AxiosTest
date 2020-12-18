<template>
  <form @submit.prevent="checkForm">
    <h3>Create you company</h3>
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <input class="form-control" placeholder="Название компании"
                   :class="$v.model.$error ? 'is-invalid' : ''"
                   v-model.trim="model.name"
            >
            <p class="invalid" v-if="$v.model.$dirty && !$v.model.minLength "> Ошибка! минимально число 1 </p>
            <p class="invalid" v-if="$v.model.$dirty && !$v.model.required "> Ошибка! обязательно поле </p>
            <input type="text" class="card-title" placeholder="Адрес" v-model="model.address">
            <input type="text" class="card-title" placeholder="Составить описание компании" v-model="model.about">
          </div>
          <div class="card-action">
            <button type="submit" class="btn-primary">Save</button>
            <button @click="GoOut" class=" btn red right">Go out</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: "createCompany",
  data() {
    return {
      model: {
        name: '',
        address: '',
        about: '',
        id: ''
      }
    }

  },
  validations: {
    model: {
      name: {required, minLength: minLength(1)}
    }
  },

  methods: {
    CreateCompany() {

      this.$store.dispatch('createCompany', this.model)
      this.$router.push('/company')
      console.log(this.model)
    },
    checkForm() {
      this.$v.model.$touch()
      if (!this.$v.model.$error) {
        console.log('Валидация успешно')
        this.$store.dispatch('createCompany', this.model)
        this.$router.push('/company')
        console.log(this.model)
      }


    },

    GoOut() {
      this.$router.push('/company')
    }
  }
}
</script>

<style scoped>

</style>