<template>
  <div>
    <div class="card-action">
      <h1 align="center">Game admin account</h1>
      <hr>
      <div class="card item">
        В данном разделе предствлены игроки проекта.
        Выберете пользователя для просмотра и редактирования профиля:
      </div>
      <p>Страница: {{ currentPage }}</p>
      <loader v-if="loading"></loader>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,id) in items"
            :key="id">
          <td>
            <router-link :to="`users/${item.id}#page=${currentPage}`">
              {{ item.username }}
            </router-link>
          </td>
          <td>
            {{ item.email }}
          </td>
        </tr>
        </tbody>
      </table>
      <div class="pagination">
        <sliding-pagination
            v-model="page"
            :current="currentPage"
            :total="totalPages"
            @page-change="GetItemsList"
        ></sliding-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import loader from "@/components/App/loader"
import SlidingPagination from 'vue-sliding-pagination'
import paginationMixin from "@/components/mixins/paginationMixin";

export default {
  name: 'usersList',
  mixins: [paginationMixin],
  data() {
    return {
      urlPart: 'admin/users'
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
    Logout() {
      this.$root.$emit('logout')
    }

  }
}

</script>
<style scoped>
p {
  margin-left: 30px;
}

ul {
  margin-left: 20px;
}

.card {
  height: 130px;
  width: 400px;
}

</style>