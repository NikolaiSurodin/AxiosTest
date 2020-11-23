<template>
  <div>
    <h1 align="center">News</h1>
    <hr>
    <p align="center">Страница № {{ currentPage }}</p>
    <div v-if="error" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div>
      <ul>
        <loader v-if="loading"/>
        <li v-else v-for="(n, id) in items"
            :key="id">
          <router-link :to="`news/${n.id}`">
            {{ n.slug }}
          </router-link>
        </li>
      </ul>
    </div>
    <sliding-pagination
        v-model="page"
        :current="currentPage"
        :total="totalPages"
        @page-change="GetItemsList"
    ></sliding-pagination>
  </div>

</template>
<script>

import SlidingPagination from 'vue-sliding-pagination'
import paginationMixin from "@/components/mixins/paginationMixin";

export default {
  name: 'newsList',
  mixins: [paginationMixin],
  data() {
    return {
      urlPart: 'frontend/news'
    }
  },
  components: {
    SlidingPagination
  },
  methods: {
    GoUsers() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
ul {
  margin-left: 30px;
}


</style>
