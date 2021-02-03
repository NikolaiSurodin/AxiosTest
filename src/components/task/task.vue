<template>
  <div>
    <div class="row">
      <div class="col s6 offset-s3">
        <h5 style="text-align: center"> Добавить задачу</h5>
        <form @submit.prevent="AddTask">
          <div class="input-field ">
            <input v-model="title" id="title" type="text" class="validate" required>
            <label for="title">Название</label>
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

export default {
  name: "task",
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

    }
  }
}
</script>

<style scoped>
.row {
  background:silver;
  max-width: 800px;

}

.popup {
  padding: 150px;
  position: center;
  top: 500px;
  width: 700px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}

.popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  text-align: center;
}
</style>