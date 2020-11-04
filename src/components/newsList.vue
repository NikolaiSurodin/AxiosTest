<template>
  <div>
    <h1>News</h1>

    <div v-if="errored" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div>
      <ul>
        <li>
          <router-link to="newsDetail" v-for="(n, id) in news"
                       :key="id">
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
    news: {},
    errored: false,
    props:['id']
  }),
  async mounted() {
    axios
        .get('https://sel-api.justplay.gg/api/v1/frontend/news?page=1')
        .then(response => this.news = response.data.data)
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  }
}
</script>