<template>
  <div>
    <header-container />
  <div class="container">
    <add-car :on-add="addCar"/>
    <div class="columns">
      <cars-list @select="selectCar" :cars="cars"/>
      <cars-detail :car="current" @remove="removeCar"/>
    </div>
  </div>
  </div>
</template>

<script>
import CarsList from "@/components/cars/carsList";
import CarsDetail from "@/components/cars/carsDetail";
import AddCar from "@/components/cars/addCar";
import HeaderContainer from "@/components/App/headerContainer";


export default {
  name: "cars",
  components: {HeaderContainer, AddCar, CarsDetail, CarsList},
  data() {
    return {
      cars: [],
      current: null
    }
  },
  methods: {
    addCar(car) { // добавление машины, мы знаем что он будет принимать car
      this.cars.push(car)
      console.log(this.cars)
    },
    selectCar(id) {
      this.current = this.cars.find(c => c.id === id)
    },
    removeCar(id) {
      this.current = null
      this.cars = this.cars.filter(c => c.id !== id)
    }
  }

}
</script>

<style scoped>


* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #222;
}

a {
  text-decoration: none;
  color: darkblue;
  transition: .3s all ease;
}

.center {
  text-align: center;
}

a:hover {
  cursor: pointer;
  opacity: .7;
  text-decoration: underline;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
}

.columns {
  display: flex;
}

.detail, .list {
  width: 50%;
  border: 1px solid #eee;
}

.list {
  border-right: 0;
}

.btn {
  border-radius: 5px;
  background: darkblue;
  color: #fff;
  padding: 6px 14px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #eee;
  color: black;
  cursor: not-allowed;
}

.btn.remove {
  background: darkred;
}

.btn.secondary {
  background: grey;
}
</style>