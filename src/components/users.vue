<template>
  <form class="card auth-card">
    <div class="card-action">

      <button type="button" @click.prevent="GoNews">переход к новостям</button>
      <ul>
        <h1>Users</h1>
        <hr>
        <loader v-if="loading"></loader>
        <li v-else v-for="(item,index) in users"
            :key="index">
          {{ item.username }}
        </li>
      </ul>
      <button type="button" @click="Logout">Выйти из системы</button>
    </div>

  </form>
</template>
<script>
import axios from 'axios'
import loader from "@/components/loader";

export default {
  name: 'users',
  data() {
    return {
      users: [],
      email: '',
      password: '',
      token: '',
      error: false,
      loading:true
    }
  },
  components:{
    loader
  },
computed:{
isLoggedIn:function (){
  return this.$store.getters.isLoggedIn
}
},
  mounted() {

      axios
          .get('https://sel-api.justplay.gg/api/v1/admin/users', {

          })
          .then(response => {
            this.users = response.data.data
            this.loading = false
          })
          .catch(e => {
            console.log(e)
            this.error = true
          })

  },
  methods: {
    GoNews() {

        this.$router.push('/')

    },
    Logout(){
      this.$store.dispatch('Logout')
      .then(() => {
        this.$router.push('/login')
      } )
    }

  }
}

</script>