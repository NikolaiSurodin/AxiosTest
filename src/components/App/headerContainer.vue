<template>
  <div class="header">
    <div class="container">
      <div v-if="isLoggedIn">
        <button class="btn text-lighten-1 right" type="button" @click="Logout">Выйти из системы</button>
      </div>
      <div v-if="!isUser">
        <router-link class="left" to="/users">К users</router-link>
      </div>
      <div v-if="!isNews">
        <router-link class="left" to="/news">Посмотреть новости</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'headerContainer',
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    Logout() {
      this.$root.$emit('logout')
    },
    isNews() {
      return this.$route.path.indexOf('/news') > -1
    },
    isUser(){
      return this.$route.path.indexOf('/users') > -1
    }
  },
  mounted() {
    console.log(this.isUser())
    console.log(this.isNews())
  }
}
</script>
<style scoped>
.header {
  border-width: 0.14px;
  border-color: #b5b7ba;
  border-style: solid;
  background-color: #dfdfdf;
  height: 60px;
  text-align: center;
  padding-top: 20px;
}


</style>