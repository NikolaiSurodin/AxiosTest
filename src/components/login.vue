<template>
  <form class="card auth-card">

    <div class="card-content" v-if="!token">
      <h1>Rigistration</h1>
      <p></p>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model="email"
        >
        <label for="email">Email</label>
      </div>
      <p></p>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model="password"
        >
        <label for="password">Пароль</label>
      </div>
      <div>
        <p></p>
        <button
            type="submit" @click.prevent="SubmitLogin"
        >Войти
        </button>
      </div>
      <div  v-if="error" class="alert">Неверно! Проверьте данные!</div>
    </div>

    <div class="card-action" v-else>
      <button type="submit" @click.prevent="GoNews">переход к новостям</button>
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
  name: 'login',
  data() {
    return {
      users: [],
      email: '',
      password: '',
      token: '',
      error: false,
      loader:false
    }
  },
  methods: {
    SubmitLogin() {

      axios.post('https://sel-api.justplay.gg/token/auth', {
        email: this.email,
        password: this.password
      })
          .then(response => {
            this.token = response.data.token
            axios.get('https://sel-api.justplay.gg/api/v1/admin/users', {
              headers: {'Authorization': `Bearer ${this.token}`}

            })
                .then(response => {
                  this.users = response.data.data
                })
          })
          .catch(e => {
            console.log(e)
            this.error = true
          })

    },
    GoNews() {
      if (this.token) {
        this.$router.push('/')
      }
    }
  }
}
</script>