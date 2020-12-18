<template>
  <div>
  <div class="list" :class="{empty: cars.length === 0}">
    <div v-if="cars.length">
      <div class="card"
           v-for="(car, key) in cars"
           :key="key"
           @click="$emit('select', car.id)"
      >
        <h2 class="card-title">{{ car.name }}</h2>
      </div>
    </div>
    <p v-else class="center">Нет. Добавьте</p>
  </div>
  </div>
</template>

<script>

export default {
  name: "carsList",
  props: ['cars'],
  data(){
    return{

    }
  }

}
</script>

<style>
.card {
  border-bottom: 1px solid #eee;
  padding: 1rem;
  transition: 300ms all ease;
  cursor: pointer;
  background: #fff;
}

.empty {
  padding: 1rem;
  background: #fff !important;
}

.card-title {
  padding: 1rem;
  text-align: center;
}

.card:hover {
  background: #eee;
}

.list {
  background: #fffeee;
}
</style>