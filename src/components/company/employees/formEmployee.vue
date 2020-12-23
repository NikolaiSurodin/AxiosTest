<template>
  <div>
    <header-container />
    <form>
      <h3>Редактировать данные сотрудника:</h3>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <input class="card-title" placeholder="Имя" v-model="employees.name" >
              <input type="number" class="card-title" placeholder="Возраст" v-model="employees.age">
              <input type="text" class="card-title" placeholder="Должность" v-model="employees.position">
            </div>
            <form @submit.prevent="UpDateEmployee">
              <p v-for="(dep, key) in depart"
                 :key="key">
                <label>
                  <input name="group1" type="radio" :value="dep" checked/>
                  <span>{{depart[key]}}</span>
                </label>
              </p>
            </form>
            <div class="card-action">
              <button type="button" class="btn" @click="upDateEmployee">Обновить</button>
              <router-link :to="`/company/${this.$route.params['id']}/employees`" class="right">Отмена</router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import departments from "@/servces/Department";
import HeaderContainer from "@/components/App/headerContainer";
export default {
  name: "formEmployee",
  components: {HeaderContainer},
  data() {
    return {
      depart:departments
    }
  },
  methods: {
    upDateEmployee(id) {
      this.$store.dispatch('updateEmployee', id)
      this.$router.push(`/company/${this.$route.params['id']}/employees`)

    }
  },
  computed:{
    employees(){
      let employee = this.$store.getters.employees.filter(el => el.id === this.$route.params['em_id'])
      return employee.length ? employee[0] : {}
    }
  }
}
</script>

<style scoped>

</style>