<template>
  <form class="form" @submit.prevent="submit">
    <h1>Добавить</h1>
    <div v-if="show">
      <div class="input">
        <input type="text" placeholder="Название" v-model="name">
      </div>
      <div class="input">
        <input type="text" placeholder="Описание" v-model="description">
      </div>
    </div>
    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Создать</button>
      <button class="btn secondary" type="button" @click="toggle">{{ show ? 'Убрать' : 'Показать' }} форму</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "addCar",
  props: ['onAdd'],
  data() {
    return {
      name: '',
      description: '',
      show: true
    }
  },
  methods: {
    toggle() { //переключатель
      this.show = !this.show
    },
    submit() {
      const car = {
        name: this.name,
        description: this.description,
        id: Date.now().toString()
      }
      this.name = ''
      this.description = ''
      this.onAdd(car)
    }
  },
  computed: {
    valid() {
      return this.name && this.description
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}

.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}

.input {
  margin-bottom: 1rem;
}

.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}

.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>