<template>
  <form class="card auth-card">
    <header-container/>
    <p v v-if="error" class="helper-text">Введите правильные данные</p>
    <div v-else class="card-content">
      <h1>Login</h1>
      <p>Введите данные для входа:
      </p>
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
           class="btn" type="submit" @click.prevent="SubmitLogin"
        >Войти
        </button>
      </div>

    </div>
  </form>
</template>

<script>

import HeaderContainer from "@/components/App/headerContainer";
export default {
  name: 'login',
  components: {HeaderContainer},
  data() {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  created() {
    if (this.$store.getters.isLoggedIn){
      this.$router.push('/users')
    }
  },
  methods: {
    //метод на кнопку идет запрос на токен
    SubmitLogin() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('SubmitLogin', data)
          .then(() => this.$router.push('/users'))
          .catch((error) => {
            console.log(error)
            this.error = true
          })
    },

  }
}

</script>