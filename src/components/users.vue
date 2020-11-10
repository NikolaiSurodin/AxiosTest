<template>
  <form class="card auth-card">

    <div class="card-action">
      <button type="button" @click.prevent="GoNews">переход к новостям</button>
      <ul>
        <h1>Users</h1>
        <li v-for="(item,index) in users"
            :key="index">
          {{ item.username }}
        </li>
      </ul>
    </div>

  </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'users',
  data() {
    return {
      users: [],
      email: '',
      password: '',
      token: '',
      error: false
    }
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

  }
}

</script>