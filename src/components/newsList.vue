<template>
  <div>

    <h1>News</h1>
    <hr>
    <div v-if="errored" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div>
      <ul>
        <loader v-if="loading"/>
        <li v-else v-for="(n, id) in news"
            :key="id">
          <router-link :to="`news/${n.id}`">
            {{ n.slug }}
          </router-link>
        </li>
      </ul>
      <p>Чтобы посмотреть игроков нажмите </p>
      <button type="button" @click="GoUsers"> Users</button>
    </div>

  </div>

</template>
<script>
import axios from 'axios'
import loader from "@/components/loader"

export default {
  name: 'newsList',

  data: () => ({
    news: [],
    loading: true,
    errored: false
  }),
  components: {
    loader
  },
  mounted() {
    axios
        .get('https://sel-api.justplay.gg/api/v1/frontend/news')
        .then(response => {
          this.news = response.data.data
          console.log()
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  },
  methods: {
    GoUsers() {
      this.$router.push('/login')
    }
  }
}
</script>