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
    <div class="row" v-else>
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              <p style="text-align: right">{{ this.newsDetail.publish_date }}</p>
              <h4>news title:</h4>
              {{ this.newsDetail.title.en }}</span><br>
            <h4>news text</h4>
            <p><span v-html="this.newsDetail.text.en"> </span></p>
          </div>
          <div class="card-action">
            <button class="btn" type="button" style="margin-right: 10px" @click="goBack">Back</button>
            <button type="button" class="btn" @click="editNews=true">Редактировать</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
import NewsForm from "@/components/news/newsForm";

export default {
  name: 'newsDetail',
  components: {NewsForm},
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