<template>
  <div>
    <form>
      <h3>Create you employee</h3>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <input class="card-title" placeholder="Имя" v-model="employee.name">
              <input type="number" class="card-title" placeholder="Возраст" v-model="employee.age">
              <input type="text" class="card-title" placeholder="Должность" v-model="employee.position">
            </div>
            <form @submit.prevent="SaveEmployee">
              <p class="small-text"> Выберете отдел: </p>
              <p v-for="(dep, key) in depart"
                 :key="key">
                <label>
                  <input name="group1" type="radio" :value="dep" checked v-model="employee.department"/>
                  <span>{{depart[key]}}</span>
                </label>
              </p>
            </form>
            <div class="card-action">
              <button type="button" class="btn" @click="SaveEmployee">Save</button>
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

export default {
  name: "createEmployee",
  data() {
    return {
      employee: {
        name: '',
        age: '',
        position: '',
        type: '',
        company_id: '',
        department:this.depart
      },
      depart:departments // складываем в переменную импортированный объект. Для дальнейшего использования в шаблоне
    }
  },
  methods: {
    SaveEmployee() {
      this.employee.company_id = this.$route.params['id']
      this.$store.dispatch('createEmployee', this.employee)
      this.$router.push(`/company/${this.$route.params['id']}/employees`)
    }
  }
}
</script>

<style scoped>

</style>