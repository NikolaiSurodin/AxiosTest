<template>

  <div v-if="error" class="alert">
    Мы не смогли загрузить новости, попробуйсте позже!
  </div>
  <div v-else>
    <header-container />
    <h1>{{ this.newsDetail.title.en }} </h1>
    <button  class="btn" type="button" @click="goBack">Back</button>
    <p>Дата публикации новости: </p>
    {{ this.newsDetail.publish_date }}
    <p>Сегодня мы расскажем вам что:
    <p><span v-html="this.newsDetail.text.en"> </span></p>
  </div>
</template>
<script>
import axios from 'axios'
import HeaderContainer from "@/components/App/headerContainer";

export default {
  name: 'newsDetail',
  components: {HeaderContainer},
  data: () => ({
    newsDetail: [],
    error: false
  }),
  mounted() {
    axios
        .get('https://sel-api.justplay.gg/api/v1/frontend/news/{id}'.replace('{id}', this.$route.params['id']))
        .then(response => {
          this.newsDetail = response.data
          console.log(this.newsDetail)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  },
  methods: {

    goBack() {
      this.$router.go(-1)
    },
  }

}
</script>