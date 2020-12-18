<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>{{ task.title }}</h1>
      <form @submit.prevent="UpDataTask">
        <div class="row">
          <div class="input-field">
            <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
            <label for="description">Описание</label>
            <span class="character-counter" style="float: right; font-size: 12px">{{ description.length }}/2048</span>
          </div>
        </div>
        <input type="text" ref="datepicker">
        <div v-if="task.status !== 'Задача выполнена'">
          <button class="btn red" type="submit" style="margin-right: 20rem">Изменить задачу</button>
          <button class="btn green" type="button" @click="completeTask">Завершить задачу!</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "taskDetail",
  computed: {
    task() {
      return this.$store.getters.taskById(this.$route.params.id)
    }
  },
  data() {
    return {
      description: '',
      date: null
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd mmm, yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    })
    this.description = this.task.description
  },
  methods: {
    UpDataTask() {
      this.$store.dispatch('upDateTask', {
        id: this.task.id,
        description: this.task.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>

</style>