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
    <div class="button" style="margin-top: 30px">
      <button type="button" class="btn" @click="SaveNews">Save</button>
      <button type="button" class="btn red" style="margin-left: 10px" @click="GoNews">Back</button>
    </div>
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
  }
}
</script>
<style scoped>
.card-action {
  margin-left: 30px;
}
</style>