<template>
  <div>
    <h1>{{ this.newsDetail.title.en }} </h1>
    <button type="button" @click="goBack">Back</button>
    <p>Дата публикации новости: </p>
    {{ this.newsDetail.publish_date }}
    <p>Сегодня мы расскажем вам что:
    <p><span v-html="this.newsDetail.text.en"> </span></p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'newsDetail',
  data: () => ({
    newsDetail: [],
    errored: false
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