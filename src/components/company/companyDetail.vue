<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div v-if="companies.about">
          {{ companies.about }}
        </div>
        <div v-else>
          Информация недоступна
        </div>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width 30px">
          <li class="tab">
            <router-link class="active" :to="`/company/${$route.params['id']}/employees`">Все сотрудники / Добавить
            </router-link>
          </li>
          <li class="tab" v-for="(dep, key) in department"
              :key="key">
            <router-link class="active" :to="`/company/${$route.params['id']}/#${key}`">{{ dep }}</router-link>
          </li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test4">Название компании: {{ companies.name }}</div>
        <div id="test5">Адрес: {{ companies.address }}</div>
        <div id="test6">ID: {{ companies.id }}</div>
      </div>
      <div>
        <button class="btn-small" @click="toCompanies">Назад</button>
      </div>
    </div>
    <!--  чтобы не ругалось в методе, пока роут не определен -->
    <div v-if="employees">
      <!-- МЕТОД!!! function() -->
      <ul v-for="(emp, key) in employeeOnDepartments()"
          :key="key">
        <li>
          {{ emp.name }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import Department from '@/servces/Department'

export default {
  name: 'companyDetail',
  data() {
    return {
      department: Department
    }
  },
  methods: {
    // то должен быть метод! не computed, computed кешируется!
    employeeOnDepartments() {
      if (this.$route.hash !== '') {
        // не понял зачем в сотрудниках значение отдела вместо ключа, но тогда фильтр нужен такой.
        return this.employees.filter(el => el.department === this.department[this.$route.hash.replace('#', '')])
      }
      return this.employees
    },
    toCompanies() {
      this.$router.push('/company')
    },
  },
  computed: {
    companies() {
      let com = this.$store.getters.companies.filter(el => el.id === this.$route.params['id'])
      return com.length ? com[0] : {}
    },
    employees() {
      return this.$store.getters.employees.filter(el => el.company_id === this.$route.params['id'])
    },
  }
}
</script>

<style scoped>

</style>