<template>
  <div>
    <h3>Create you employee</h3>
    <form @submit.prevent="SaveEmployee">
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <input class="card-title" placeholder="Имя"
                     :class="$v.employee.$error ? 'is-invalid' : '' "
                     v-model.trim="employee.name">
              <p style="color: red" class="invalid" v-if="$v.employee.$dirty && !$v.employee.name.required">Поле обязательно!</p>

              <input type="text" class="card-title" placeholder="Фамилия" v-model="employee.SurName">
              <p class="invalid" v-if="$v.employee.$dirty && !$v.employee.SurName.required">Поле обязательно!</p>

              <input type="number" class="card-title" placeholder="Возраст"
                     :class="$v.employee.$error ? 'is-invalid' : '' "
                     v-model.trim="employee.age">

              <p class="invalid" v-if="$v.employee.$dirty && !$v.employee.between && !$v.employee.age.required">
                Возраст от {{ $v.employee.age.$params.between.min }} до {{ $v.employee.age.$params.between.max }}
              </p>

              <input class="card-title" type="text" placeholder="Адрес проживания" v-model="employee.address">
              <p class="invalid" v-if="$v.employee.$dirty && !$v.employee.required">Укажите адрес</p>

              <input type="text" class="card-title" placeholder="Должность" v-model="employee.position">
            </div>
            <form>
              <p class="small-text"> Выберете отдел: </p>
              <p v-for="(dep, key) in depart"
                 :key="key">
                <label>
                  <input name="group1" type="radio" :value="dep" checked v-model="employee.department"/>
                  <span>{{ depart[key] }}</span>
                </label>
              </p>
            </form>
            <div class="card-action">
              <button type="submit" class="btn">Save</button>
              <router-link :to="`/company/${this.$route.params['id']}/employees`" class="right">Go out</router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import departments from "@/servces/Department";
import {required, between} from 'vuelidate/lib/validators'
import {validationMixin} from "vuelidate";

export default {
  name: "createEmployee",
  mixins: [validationMixin],
  data() {
    return {
      employee: {
        name: '',
        age: '',
        gender:'',
        SurName:'',
        address:'',
        position: '',
        type: '',
        company_id: '',
        department: this.depart
      },
      depart: departments // складываем в переменную импортированный объект. Для дальнейшего использования в шаблоне
    }
  },
  validations: {
    employee: {
      name: {required},
      age: {
        required,
        between: between(18, 60)
      },
      SurName: {required}
    }
  },
  methods: {
    SaveEmployee() {
      this.$v.employee.$touch()
      if (!this.$v.employee.$error) {
        this.employee.company_id = this.$route.params['id']
        this.$store.dispatch('createEmployee', this.employee)
        this.$router.push(`/company/${this.$route.params['id']}/employees`)
      }

    }
  }
}
</script>

<style scoped>

</style>