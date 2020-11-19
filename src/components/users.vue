<template>
  <form class="card auth-card">
   <header-container />
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

  </form>
</template>
<script>
import loader from "@/components/loader"
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
    GoNews() {
      this.$router.push('/news')

    },
    Logout(){
      this.$root.$emit('logout')
    }

  }
}

</script>
<style scoped>
.header {
  border-width: 0.19px;
  border-color: #b5b7ba;
  border-style: solid;
  background-color: #dfdfdf;
  height: 60px;
  padding-top: 20px;

}

</style>