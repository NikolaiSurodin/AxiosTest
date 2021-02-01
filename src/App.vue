<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <router-view />
  </div>
</template>

<script>
import {store} from "@/store";
export default {
  name: 'App',
  // на mounted поздно, т.к. роутер вью уже был тоже смонтирован, что приводило к ошибке, хотя токен был установлен аксиосу, но уже после попытки запроса польззоователей.
  // либо created либо beforeMount
  beforeMount() {
    store.dispatch('checkAuth')
    .then(() =>{
    })
  },
  mounted() {
    this.$root.$on('logout', ()=> {
      this.$store.dispatch('Logout')
          .then(() => {
            this.$router.push('/')
          })
    })
  },
  computed:{
    layout(){
      return(this.$route.meta.layout)
    }
  }
}
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

</style>

