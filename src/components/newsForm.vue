<template>
  <div>
    <div class="card-action">
      <b>Edit Slug</b>
      <input class="input" type="text" placeholder="Slug" v-model="news.slug">
      <b>Edit News</b>
      <input class="input" type="text" placeholder="Title" v-model="news.title.en">
      <b>Edit text news</b>
    </div>
    <switcher v-model="show"/>
    <div v-if="show">
      <wysiwyg v-model="news.text.en"/>
    </div>
    <button type="button" class="btn" @click="SaveNews">Save</button>
    <button type="button" class="btn" style="color: #ff0000" @click="GoNews">Back</button>

  </div>
</template>
<script>
import axios from "axios";
import switcher from "@/components/App/switcher";

export default {
  name: 'newsForm',
  data() {
    return {
      show: false
    }
  },
  components: {switcher},
  props: ['news'],
  methods: {
    GoNews() {
      this.$router.go(-1)
    },
    SaveNews() {
      axios
          .patch('https://sel-api.justplay.gg/api/v1/admin/news/{id}'.replace('{id}', this.news.id), this.news)
          .then(
              this.$root.$emit('save_news')
          )

    }
  },
  watch: {}
}
</script>
<style scoped>
.card-action {
  margin-left: 30px;
}
</style>