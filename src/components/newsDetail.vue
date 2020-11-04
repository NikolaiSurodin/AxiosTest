<template>
  <div>
{{$route.params.id}}
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name:'newsDetail',
  data: () => ({
    newsDetail:[],
    errored:false,
    props:['id']
  }),
  async mounted() {
   await axios
        .get('/api/v1/frontend/news/{id}')
        .then(response => {
          console.log(this.data)
          this.newsDetail = response.data})
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  }
}
</script>