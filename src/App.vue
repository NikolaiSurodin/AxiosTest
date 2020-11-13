<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


import {store} from "@/store";

export default {
  name: 'App',
  mounted() {
    store.dispatch('checkAuth')
    .then(() =>{

    })


  }
}
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
</style>

