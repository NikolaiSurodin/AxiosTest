<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="popup__header">
          <slot></slot>
        </div>
        <div class="popup__content">
          <div>
            <input class="input" type="number" placeholder="Кол-во дней" v-model="days">
            <input class="input" type="number" placeholder="Кол-во часов" v-model="hours">
            <input class="input" type="number" placeholder="Ставка" v-model="rate">
            <b v-if="!salary">Введите данные для посчета</b>
            <b v-else> Зарплата: {{salary}}</b>
          </div>
        </div>
        <div class="popup__footer">
          <button
              class="btn-small" @click="salaryOk"
          > Рассчитать
          </button>
          <button
              class="btn red" @click="closePopup"
          > Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalaryPopup",
  props:['emp'],
  data() {
    return {
      hourPrice:800,
      days: null,
      hours: null,
      rate: null,
      salary: null
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    salaryOk(){
      //this.$emit('salaryOk')
      this.salary = this.days * this.hours * this.hourPrice * this.rate
    }
  }
}
</script>

<style scoped>
.popup_wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
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

</style>