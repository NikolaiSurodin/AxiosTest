<template>
  <div class="car-detail">
   <div v-if="cars">
     <h1>{{car.name}}</h1>
     <img
      :src="car.img"
     >
     <div class="section">
       <p>Модели:</p>
       {{car.models}}
     </div>
   </div>
  </div>
</template>

<script>
import cars from "@/components/cars/cars";
export default {
  name: "carDetail",
  data(){
    return{
      cars
    }
  },
  created() {
    const car = cars.find(car => car.id === this.$route.params.id)
    if (car){
      this.car = car
    }
  }
}
</script>

<style scoped>

</style>