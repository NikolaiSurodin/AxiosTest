<template>
  <div class="cars-list container">
    <h2>выберете марку</h2>
    <popup
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"

    >
      <p>{{cars}}</p>
    </popup>


    <ul v-for="(car, id) in cars"
        :key="id"
    >
      <li>
        <router-link :to="`cars/${car.id}`">
          {{ car.name }}
        </router-link>
        <button class="btn-small" @click="showPopupInfo">show info</button>
      </li>
    </ul>
  </div>
</template>

<script>
import cars from "@/components/cars/cars";
import popup from "@/components/cars/popup";
export default {
  name: "carsList",
  props:['car'],
  data() {
    return {
      cars,
      isInfoPopupVisible:false
    }
  },
  methods:{
    showPopupInfo(){
      this.isInfoPopupVisible = true
    },
    closeInfoPopup(){
      this.isInfoPopupVisible =false
    }
  },
  components:{
    popup
  }


}
</script>

<style scoped>

</style>