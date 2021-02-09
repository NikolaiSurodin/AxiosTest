<template>
  <div>
    <div class="container">
      <h3>Общий список</h3>
      <table class="input-field col s6">
        <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Должность</th>
          <th>Зарплата</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(em, id) in employees"
            :key="id">
          <router-link :to="`employees/${em.id}`">
            {{ em.name }}
          </router-link>
          <td>{{ em.age }}</td>
          <td>{{ em.position }}</td>
          <td></td>
          <td>
            <button class="btn" @click="EditEmployee(em.id)">Редактировать</button>
            <button class="btn small" @click="showSalaryTable(em.id)">Рассчитать зарплату</button>
            <button class="card-image" type="button" @click="DeleteEmployee(em.id)">
              <img src="@/assets/trash.png" height="30" width="30"/></button>
          </td>
        </tr>
        </tbody>
      </table>
      <p>{{ 'Общая численность работников: ' + employees.length }}</p>
      <button class="btn green" style="margin-right: 10px" type="button" @click="AddEmployee">добавить сотрудника
      </button>
      <router-link :to="`/company/${$route.params['id']}`" class="btn-small ">Вернуться к компании</router-link>
    </div>
    <salary-popup
        v-if="showSalary"
        @closePopup="showSalaryTable"
        @saveSalary="saveSalary"
    >
      <p>Рассчитать зарплату для сотрудника: {{ employee[0].name }}</p>
    </salary-popup>
  </div>
</template>
<script>

import SalaryPopup from "@/components/company/employees/salaryPopup";

export default {
  name: 'employees',
  components: {SalaryPopup},
  data() {
    return {
      showSalary: false,
      employee: null,
      salary: null
    }
  },
  methods: {
    AddEmployee() {
      this.$router.push(`/company/${this.$route.params['id']}/employees/__create`)

    },
    DeleteEmployee(id) {
      this.$store.dispatch('deleteEmployee', id)
      this.$message('Сотрудник удален!')
    },
    EditEmployee(em_id) {
      this.$router.push(`/company/${this.$route.params['id']}/employees/${em_id}/edit`)
    },
    showSalaryTable(em_id) {
      this.showSalary = !this.showSalary
      this.employee = this.$store.getters.employees.filter(el => el.id === em_id)
      return this.employee.length ? this.employee[0] : null
    },
    saveSalary(em_id) {
      this.$store.dispatch('createSalary', em_id)
      this.showSalary = !this.showSalary
    }
  },
  computed: {
    employees() {
      return this.$store.getters.employees.filter(el => el.company_id === this.$route.params['id'])
    }
  }
}
</script>