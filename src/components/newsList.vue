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
      <p>Чтобы посмотреть игроков нажмите: </p>
      <button type="button" @click="GoUsers"> Users</button>
    </div>
    <sliding-pagination
        :current="currentPage"
        :total="totalPages"
        @page-change="GetNewsList"
    ></sliding-pagination>
  </div>

</template>
<script>
import axios from 'axios'
import loader from "@/components/loader"
import SlidingPagination from 'vue-sliding-pagination'

export default {
  name: 'newsList',

  data: () => ({
    news: [],
    loading: true,
    errored: false,
    currentPage:0,
    totalPages:0
  }),
  components: {
    loader, SlidingPagination
  },
  mounted() {
    this.GetNewsList(this.currentPage)
  },
  methods: {
    GoUsers() {
      this.$router.push('/login')
    },
    GetNewsList(page) {
      this.currentPage = page
      axios
          .get('https://sel-api.justplay.gg/api/v1/frontend/news', {page: this.currentPage})
          .then(response => {
            this.news = response.data.data
            this.currentPage = response.data.meta.current_page
            this.totalPages = response.data.meta.last_page
            console.log()
            this.loading = false
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    }
  }
}
</script>
