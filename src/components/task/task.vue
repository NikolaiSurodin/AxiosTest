<template>
  <div>
    <navbar/>
    <div class="row">
      <div class="col s6 offset-s3">
        <h1> Добавить задачу</h1>
        <form @submit.prevent="AddTask">
          <div class="input-field ">
            <input v-model="title" id="title" type="text" class="validate" required>
            <label for="title">First Name</label>
            <span class="helper-text" data-error="Обязательно заполнить"></span>
          </div>
          <div class="row">
            <div class="input-field">
              <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
              <label for="description">Описание</label>
              <span class="character-counter" style="float: right; font-size: 12px">{{ description.length }}/2048</span>
            </div>
          </div>
          <input type="text" ref="datepicker">
          <button class="btn" type="submit">Добавить задачу</button>
        </form>
      </div>
      </div>

  </div>
</template>

<script>

import Navbar from "@/components/task/navbar";

export default {
  name: "task",
  components: {Navbar},
  data() {
    return {
      description: '',
      title: '',
      date:null
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format:'dd mmm, yyyy',
      defaultDate: new Date(),
      setDefaultDate:true
    })

  },
  methods:{
    AddTask(){
      let task = {
        title: this.title,
        description: this.description,
        id: Date.now().toString(),
        status:'В процессе..',
        date:this.date.date
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>

</style>