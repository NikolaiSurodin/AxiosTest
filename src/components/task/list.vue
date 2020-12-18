<template>
  <div>
    <navbar/>
    <h1>LIST TASK</h1>
    <div class="row">
      <div class="input-field col s3">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Выберете фильтр..</option>
          <option value="В процессе..">В процессе..</option>
          <option value="Задача просрочена!">Просроченые задачи</option>
          <option value="Задача выполнена">Выполненные задачи</option>
        </select>
      </div>
    </div>
    <button class="btn-small green" v-if="filter" @click="filter = null">Сбросить фильтр</button>
    <hr>

    <table>
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
      <tr v-for="(task, idx) in tasksFilter"
          :key="idx"
      >
        <td>{{ idx + 1 }}</td>
        <td>{{ task.title }}</td>
        <td>{{ new Date(task.date).toLocaleDateString() }}</td>
        <td class="td">
          <div class="text">{{ task.description }}</div>
        </td>
        <td>{{ task.status }}</td>
        <td>
          <button tag="button" class="btn btn-small" @click="taskDetail(task.id)">Открыть</button>
        </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import Navbar from "@/components/task/navbar";

export default {
  name: "list",
  data() {
    return {
      filter: null
    }
  },
  components: {Navbar},
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    tasksFilter() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  methods: {
    taskDetail(id) {
      this.$router.push(`/task/${id}`)
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    M.FormSelect.init(this.$refs.select)
  }
}
</script>

<style scoped>
.td {
  max-width: 400px;
}

.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>