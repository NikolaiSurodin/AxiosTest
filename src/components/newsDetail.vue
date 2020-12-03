<template>
  <div>
    <div v-if="error" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div class="card-action" v-if="editNews">
      <news-form
          :news=newsDetail
      ></news-form>
    </div>
    <div v-else>
      <header-container/>
      <h1>{{ this.newsDetail.title.en }} </h1>
      <button class="btn" type="button" @click="goBack">Back</button>
      <p>Дата публикации новости: </p>
      {{ this.newsDetail.publish_date }}
      <p>Сегодня мы расскажем вам что:
      <p><span v-html="this.newsDetail.text.en"> </span></p>
      <button type="button" class="btn" @click="editNews=true">Редактировать</button>
      <footer-container/>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import HeaderContainer from "@/components/App/headerContainer";
import FooterContainer from "@/components/App/footerContainer";
import NewsForm from "@/components/newsForm";

export default {
  name: 'newsDetail',
  components: {NewsForm, FooterContainer, HeaderContainer},
  data: () => ({
    newsDetail: {},
    error: false,
    editNews: false
  }),
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    GetNews() {
      axios
          .get('https://sel-api.justplay.gg/api/v1/admin/news/{id}'.replace('{id}', this.$route.params['id']))
          .then(response => {
            this.newsDetail = response.data
            console.log(this.newsDetail)
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    },
    onSave() {
      this.editNews = false
      this.GetNews()
    }
  },
  mounted() {
    this.GetNews()
    this.$root.$on('save_news', () => {
      this.onSave()
    })

  }
}
</script>