<template>
  <div>
    <header-container/>
    <table>
      <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Должность</th>
        <th></th>
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
        <td>
          <button class="btn">Редактировать</button>
          <button class="card-image" type="button" @click="DeleteEmployee(em.id)">
            <img src="@/assets/trash.png" height="30" width="30"/></button>
        </td>
      </tr>
      </tbody>
    </table>
    <p>{{ 'Общая численность работников: ' + employees.length }}</p>
    <button class="btn" type="button" @click="AddEmployee">добавить сотрудника</button>
    <router-link :to="`/company/${$route.params['id']}`">Вернуться к компании</router-link>
  </div>
</template>
<script>
import HeaderContainer from "@/components/App/headerContainer";

export default {
  name: 'employees',
  components: {HeaderContainer},
  data() {
    return {}
  },
  methods: {
    AddEmployee() {
      this.$router.push(`/company/${this.$route.params['id']}/employees/__create`)

    },
    DeleteEmployee(id) {
      this.$store.dispatch('deleteEmployee', id)
    }

  },
  computed: {
    employees() {
      return this.$store.getters.employees.filter(el => el.company_id === this.$route.params['id'])
    }
  }
}
</script>