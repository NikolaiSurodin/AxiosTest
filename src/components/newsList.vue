<template>
  <div>
    <h1>News</h1>

    <div v-if="errored" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div>
      <ul>
        <li v-for="(n, id) in news"
            :key="id" >
          <router-link :to="`${n.id}`" >
            {{ n.slug }}
          </router-link>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'newsList',

  data: () => ({
    news: [],
    errored: false
  }),
  mounted() {
    axios
        .get('https://sel-api.justplay.gg/api/v1/frontend/news')
        .then(response => {this.news = response.data.data
        console.log()
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  }
}
</script>