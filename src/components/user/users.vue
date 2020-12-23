<template>
  <div>
    <header-container/>
    <div class="card-action">
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
      <sliding-pagination
          v-model="page"
          :current="currentPage"
          :total="totalPages"
          @page-change="GetItemsList"
      ></sliding-pagination>
      <div>
        <footer-container/>
      </div>
    </div>

  </div>
</template>
<script>
import loader from "@/components/App/loader"
import SlidingPagination from 'vue-sliding-pagination'
import paginationMixin from "@/components/mixins/paginationMixin";
import FooterContainer from "@/components/App/footerContainer";
import HeaderContainer from "@/components/App/headerContainer";

export default {
  name: 'users',
  mixins: [paginationMixin],
  data() {
    return {
      urlPart: 'admin/users'
    }
  },
  components: {
    HeaderContainer,
    FooterContainer,
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

</style>