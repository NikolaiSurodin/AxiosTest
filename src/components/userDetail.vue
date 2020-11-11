<template>
  <div v-if="errored" class="alert">
    Мы не смогли загрузить новости, попробуйсте позже!
    <div>

    </div>
  </div>


</template>
<script>
import axios from 'axios'

export default {
  name: 'userDetail',
  data: () => ({
    userDetail: [],
    errored: false
  }),
  mounted() {
    axios
        .get('https://sel-api.justplay.gg/api/v1/admin/users/{id}?expand=settings,profile.files,gameaccounts'.replace('{id}', this.$route.params['id']))
        .then(response => {
          this.userDetail = response.data
          console.log(this.userDetail)
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