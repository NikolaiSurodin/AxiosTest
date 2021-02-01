<template>
  <div>
    <form class="form">
      <h3>Редактировать:</h3>
      <div class="form-table">
        <div class="input-field">
          <input id="title" type="text" v-model="company.name">
          <label for="title">Company name</label>
          <span class="helper-text" data-error="Обязательно заполнить"></span>
        </div>
        <div class="input-field">
          <textarea id="description" class="area" v-model="company.about"></textarea>
          <label for="description">About</label>
        </div>
        <div class="input-field">
          <textarea id="address" class="area" v-model="company.address"></textarea>
          <label for="Address">Address</label>
        </div>
        <div class="card-action">
          <button type="button" class="btn" @click="upData">Обновить информацию</button>
          <router-link to="/company" class="right">Отмена</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'

export default {

  mixins: [validationMixin],
  name: "formCompany",
  data() {
    return {}
  },
  methods: {
    upData() {
      this.$store.dispatch('upDateCompany')
      this.$router.push('/company')
    }
  },
  validations: {
    name: {required}
  },
  computed: {
    company() {
      let company = this.$store.getters.companies.filter(el => el.id === this.$route.params['id'])
      return company.length ? company[0] : {}
    }
  }

}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}

.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}

.input {
  margin-bottom: 1rem;
}

.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}

.btn {
  width: 400px;
  display: flex;
  justify-content: space-around;
}

.area {
  height: 80px;
  width: 200px;
}

.form-table {
  height: 500px;
  width: 500px;
}

.area {
  width: 500px;
  height: 150px;
}
</style>