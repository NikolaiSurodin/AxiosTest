<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="header-content">
          <b v-if="!salaryModel.salary">Введите данные для посчета</b>
          <b v-else> Зарплата: {{ salaryModel.salary }}</b>
        </div>
        <div class="popup__header">

          <slot></slot>
        </div>
        <div class="popup__content">

          <div>
            <input class="input" type="number" placeholder="Кол-во дней" v-model="salaryModel.days">
            <input class="input" type="number" placeholder="Кол-во часов" v-model="salaryModel.hours">
            <input class="input" type="number" placeholder="Ставка" v-model="salaryModel.rate">
          </div>
        </div>
        <div class="popup__footer">
          <button
              class="btn-small" @click="salaryOk"
          > Рассчитать
          </button>
          <button
              class="btn" @click="saveSalary"
          > Сохранить
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
  props: ['emp'],
  data() {
    return {
      salaryModel: {
        hourPrice: 200,
        days: null,
        hours: null,
        rate: null,
        salary: null
      }

    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    salaryOk() {
      //this.$emit('salaryOk')
      this.salaryModel.salary = this.salaryModel.days * this.salaryModel.hours * this.salaryModel.hourPrice * this.salaryModel.rate
    },
    saveSalary() {
      this.$emit('saveSalary')
      this.$store.dispatch('createSalary', this.salaryModel)
      console.log(this.$store.getters.salary)
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

.header-content {
  text-align: center;
}

</style>