<template>
  <div>
    <h1 style="text-align: center">Задачи для компании</h1>
    <h4 style="text-align: center">Задачи для "{{ company.name }}"</h4>
    <hr>
    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Дата завершения</th>
        <th>Описание</th>
        <th>Статус</th>
        <th>Открыть</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, index) in tasks"
      :key="index"
      >
        <td>{{index + 1}}.</td>
        <td>{{task.title}}</td>
        <td>{{new Date(task.date).toLocaleDateString()}}</td>
        <td class="td"><div class="text">{{task.description}}</div></td>
        <td>{{task.status}}</td>
        <td class="td">
          <div class="text"></div>
        </td>
        <td></td>
        <td>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <p>Поставленых задач нет.</p>
    </div>
    <div v-if="addTaskVisible">
      <task/>
    </div>
    <button class="btn" @click="addToTask">{{ addTaskVisible ? 'Скрыть форму' : 'Добавить' }}</button>
  </div>
</template>

<script>
import Task from "@/components/task/task";

export default {
  name: "list",
  components: {Task},
  data() {
    return {
      addTaskVisible: false
    }
  },
  methods: {
    addToTask() {
      this.addTaskVisible = !this.addTaskVisible
    },
  },
  computed: {
    company() {
      let company = this.$store.getters.companies.filter(el => el.id === this.$route.params['id'])
      return company.length ? company[0] : {}
    },
    tasks() {
      return this.$store.getters.tasks

    }
  }
}

</script>

<style scoped>
.td {
  max-width: 360px;
}

.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>