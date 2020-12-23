<template>
  <div class="container">
    <form>
      <p v v-if="error" class="helper-text">Введите правильные данные</p>
      <div v-else class="card-content">
        <h1>Login</h1>
        <p>Введите данные для входа:
        </p>
        <div class="row">
          <div class="input-field ">
            <input
                id="email"
                type="text"
                v-model="email"
            >
            <label for="email">Email</label>
          </div>
          <div class="input-field">
            <input
                id="password"
                type="password"
                v-model="password"
            >
            <label for="password">Пароль</label>
          </div>
          <div>
          </div>

          <p></p>
          <button
              class="btn" type="submit" @click.prevent="SubmitLogin"
          >Войти
          </button>
        </div>

      </div>
    </form>
  </div>

</template>

<script>

export default {
  name: 'login',
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
          .then(() => this.$router.push('/index'))
          .catch((error) => {
            console.log(error)
            this.error = true
          })
    },

  }
}
</script>