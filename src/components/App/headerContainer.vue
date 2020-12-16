<template>
  <div class="header #546e7a blue-grey darken-1" >
    <div class="container">
      <div v-if="isLoggedIn">
        <button class="btn text-lighten-10 right" type="button" @click="Logout">Выйти</button>
      </div>
      <div v-if="!isUser()">
        <router-link class="left" to="/users">К users</router-link>
      </div>
      <div v-if="!isNews()">
        <router-link class="left" to="/news">Посмотреть новости</router-link>
      </div>
      <div>
        <router-link to="/company" class="left"><img src="@/assets/logo.png" height="30" width="30"/></router-link>
        <router-link to="/cars" > 🚔 </router-link>
      </div>
      <span class="black-text">{{ date  }}</span>

    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'headerContainer',
  data() {
    return {
      date: new Date(),
      interval: null
    }
  },
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
    isUser() {
      return this.$route.path.indexOf('/users') > -1
    }
  },
  mounted() {
    this.interval = setInterval(()=>{
      this.date = new Date()
    }, 1000)

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