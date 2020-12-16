<template>
  <div>
    <navbar/>
    <h1>LIST TASK</h1>

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
      <tr v-for="(task, idx) in tasks"
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
  components: {Navbar},
  computed: {
    tasks() {
      return this.$store.getters.tasks

    }
  },
  methods:{
    taskDetail(id){
      this.$router.push(`/task/${id} `)
    }
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