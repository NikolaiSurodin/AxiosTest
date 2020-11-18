<template>
  <form class="card auth-card">
    <div class="card-action">

      <button type="button" @click.prevent="GoNews">К новостям</button>
      <h1 align="center">Users</h1>
      <hr>
      <p>Страница: {{ currentPage }}</p>
      <loader v-if="loading"></loader>
      <ul v-else>
        <li v-for="(item,id) in items"
            :key="id">
          <router-link :to="`users/${item.id}#page=${currentPage}`">
            {{ item.username }}
          </router-link>
        </li>
      </ul>
      <button type="button" @click="Logout">Выйти из системы</button>
      <sliding-pagination
          v-model="page"
          :current="currentPage"
          :total="totalPages"
          @page-change="GetItemsList"
      ></sliding-pagination>
    </div>

  </form>
</template>
<script>
import loader from "@/components/loader"
import SlidingPagination from 'vue-sliding-pagination'
import paginationMixin from "@/components/mixins/paginationMixin";

export default {
  name: 'users',
  mixins:[paginationMixin],
  data() {
    return {
      email: '',
      password: '',
      token: '',
      urlPart:'admin/users'
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
  methods: {
    GoNews() {
      this.$router.push('/')

    },
    Logout() {
      this.$store.dispatch('Logout')
          .then(() => {
            this.$router.push('/login')
          })
    }

  }
}

</script>