<template>
  <div>
    <div class="header">
      <h4>
        Подробная информация
      </h4>
    </div>
    <div class="card">
      <div class="card-content-header">
        <b>{{ employees[0].name }}</b>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test4">Имя: {{ employees[0].name }}</div>
        <div id="test5">Фамилия: {{ employees[0].SurName }}</div>
        <div id="test6">Возраст: {{ employees[0].age }}</div>
        <div id="test7">Адрес регистрации: {{ employees[0].address }}</div>
        <div id="test8">Должность: {{ employees[0].position }}</div>
        <div id="test9">Зарплата:{{ employees[0].salary }}</div>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <router-link class="tab" :to="`/company/${this.$route.params['id']}/employees`">Вернуться</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeDetail",
  data() {
    return {
      emp: {}
    }
  },
  computed: {
    employees() {
      return this.$store.getters.employees.filter(el => el.id === this.$route.params['em_id'])
    },
    salary() {
      return this.$store.getters.salary.filter(el => el.id === this.employees.id)
    }
  },
  mounted() {
    console.log(this.employees[0].id)
  }
}
</script>

<style scoped>
.card {
  width: 500px;
  height: 500px;
  position: center;
  display: block;
  margin: auto;
  margin-top: 50px;
}

.card-content-header {
  text-align: center;
  height: 30px;
}

.header {
  text-align: center;
  text-shadow: black;
}

.card-tabs {

}
</style>