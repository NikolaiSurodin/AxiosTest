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
        <div class="chart">
          <p style="text-align: center">Диаграмма соотношение численности по отделам</p>
          <canvas ref="canvas"/>
        </div>
        <div class="info">
          <p>Название компании: {{ companies.name }}</p>
          <p>Адрес: {{ companies.address }}</p>
          <p>ID: {{ companies.id }}</p>
        </div>

      </div>
      <div>
        <button class="btn-small" @click="toCompanies">Назад</button>
      </div>
    </div>
    <!--  чтобы не ругалось в методе, пока роут не определен -->
    <div class="col" v-if="employees">
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
import {Pie} from 'vue-chartjs'

export default {
  name: 'companyDetail',
  extends: Pie,
  data() {
    return {
      department: Department,
      label:[],
      chartData:[]
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
    empChartLabel() {
      for (let dep in this.department) {
        this.label.push(dep)
        this.chartData.push(this.employees.length)
      }
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
  },
  beforeMount() {
    this.empChartLabel()
  },
  mounted() {
    console.log(this.employeeOnDepartments().length)
    this.renderChart({
      labels: this.label,
      datasets: [{
        label: 'Количесво сотрудников отдела',
        data:this.chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    })


  }
}
</script>

<style scoped>
.chart {
  height: 500px;
  width: 500px;
  position: center;
  margin-left: 500px;
  margin-top: auto;
}

.col {
  max-width: 550px;
}

.info {
  margin-top: auto;
  display: block;
}
</style>