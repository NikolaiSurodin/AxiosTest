<template>
  <form class="card auth-card">
    <div class="card-action">

      <button type="button" @click.prevent="GoNews">переход к новостям</button>
      <h1>Users</h1>
      <hr>
      <loader v-if="loading"></loader>
      <ul v-else>
        <li v-for="(item,id) in users"
            :key="id">
          <router-link :to="`users/${item.id}`">
            {{ item.username }}
          </router-link>
        </li>
      </ul>
      <button type="button" @click="Logout">Выйти из системы</button>
      <sliding-pagination
          v-model="page"
          :current="currentPage"
          :total="totalPages"
          @page-change="GetUserList"
      ></sliding-pagination>
    </div>

  </form>
</template>
<script>
import axios from 'axios'
import loader from "@/components/loader"
import SlidingPagination from 'vue-sliding-pagination'

export default {
  name: 'users',
  data() {
    return {
      users: [],
      email: '',
      password: '',
      token: '',
      error: false,
      loading: true,
      currentPage: 1,
      page: 1,
      totalPages: 22
    }
  },
  components: {
    loader, SlidingPagination
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  mounted() {
    this.GetUserList(this.currentPage)
  },
  methods: {
    GoNews() {
      this.$router.push('/')
    },
    Logout() {
      this.$store.dispatch('Logout')
          .then(() => {
            this.$router.push('/login')
          })
    },
    GetUserList(page){
      this.$router.push(`${this.$route.path}#page=${page}`)
      this.currentPage = page
      axios
          .get('https://sel-api.justplay.gg/api/v1/admin/users', {params: {page: this.currentPage}})
          .then(response => {
            this.users = response.data.data
            this.currentPage = response.data.meta.current_page
            this.totalPages = response.data.meta.last_page
            this.loading = false
          })
          .catch(e => {
            console.log(e)
            this.error = true
          })

    }

  }
}

</script>