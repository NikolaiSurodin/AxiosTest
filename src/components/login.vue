<template>
  <form class="card auth-card">

    <div class="card-content">
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
        <p> </p>
        <button
            type="submit" @click.prevent="SubmitLogin"
        >Войти
        </button>
      </div>

    </div>
  </form>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
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
    }
  }
}

</script>