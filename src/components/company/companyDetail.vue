<template>
  <div>
    <header-container/>
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
        <ul class="tabs tabs-fixed-width">
          <li class="tab">
            <router-link class="active" :to="`/company/${$route.params['id']}/employees`">Все сотрудники / Добавить
            </router-link>
          </li>
          <li class="tab" v-for="(department, key) in department"
              :key="key">
            <router-link class="active" :to="`/company/${$route.params['id']}/#${key}`">{{ department }}</router-link>
          </li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test4">Название компании: {{ companies.name }}</div>
        <div id="test5">Адрес: {{ companies.address }}</div>
        <div id="test6">ID: {{ companies.id }}</div>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(em, key) in employeeOnDepartments"
            :key="key"
        >
          {{ em.name }}

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderContainer from "@/components/App/headerContainer";
import Department from '@/servces/Department'

export default {
  name: "companyDetail",
  components: {HeaderContainer},
  data() {
    return {
      department: Department
    }
  },
  methods: {
    employeeOnDepartments() {
      if (this.$route.hash !== '') {
        return  this.employees.filter(el => el.department['key'] === this.$route.hash.replace('#', ''))
      }
      return this.employees
    }
  },
  computed: {
    companies() {
      let com = this.$store.getters.companies.filter(el => el.id === this.$route.params['id'])
      return com.length ? com[0] : {}
    },
    employees() {
      return this.$store.getters.employees.filter(el => el.company_id === this.$route.params['id'])
    }
  }
}
</script>

<style scoped>

</style>