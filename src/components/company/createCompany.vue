<template>
  <div>
    <header-container/>
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
              <p class="invalid" v-if="$v.model.$dirty && !$v.model.minLength  && !$v.model.required">Обязательное поле,
                минимально 1 символ</p>

              <textarea class="materialize-textarea" placeholder="Адрес"
                        :class="$v.model.$error ? 'is-invalid' : ''"
                        v-model.trim="model.address"
              ></textarea>
              <p class="invalid" v-if="$v.model.$dirty && !$v.model.required">Введите адрес компании</p>

              <input type="text" class="card-title" placeholder="Составить описание компании"
                     :class="$v.model.$error ? 'is-invalid' : ''"
                     v-model.trim="model.about">
              <p v-if="$v.model.$dirty && !$v.model.required">Составьте описание</p>
            </div>
            <div class="card-action">
              <button type="submit" class="btn green">Save</button>
              <button @click="GoOut" class=" btn red right">Go out</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {minLength, required} from 'vuelidate/lib/validators'
import HeaderContainer from "@/components/App/headerContainer";

export default {
  components: {HeaderContainer},
  mixins: [validationMixin],
  name: "createCompany",
  data() {
    return {
      model: {
        name: '',
        address: '',
        about: '',
        id: ''
      },
    }

  },
  validations: {
    model: {
      name: {required, minLength: minLength(1)},
      address: {required},
      about: {required}
    }
  },

  methods: {
    checkForm() {
      this.$v.model.$touch()
      if (!this.$v.model.$error) {
        this.$store.dispatch('createCompany', this.model)
        this.$router.push('/company')
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