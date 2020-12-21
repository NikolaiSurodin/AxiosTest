<template>
  <div class="detail">
    <div class="car" v-if="cars">
      <h2>{{car.name}}</h2>
      <a href="#" @click.prevent="toggle">{{show ? 'Скрыть описание' : 'Показать описание'}}</a>
      <p v-if="show">{{cars.models.name}}</p>
      <button class="btn remove" @click="$emit('remove', cars.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carsDetail",
  props:['cars'],
  data(){
    return{
      show:false
    }
  },
  methods:{
    toggle(){
      this.show = !this.show
    }
  },
  watch:{
    car(){
      this.show = false
    }
  }
}
</script>

<style scoped>
.car {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.car p {
  font-size: .8rem;
  margin-bottom: .5rem;
}

.car a, .car h2 {
  margin-bottom: .5rem;
}
</style>