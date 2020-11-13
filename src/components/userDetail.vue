<template>
  <div>

    <div v-if="errored" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div v-else>
      Пользователь: <p style="color: green"> {{ this.userDetail.username }}</p>
      <p> Почта: => {{ this.userDetail.email }} </p>
      <p> Дата регистрации: => {{ this.userDetail.created_at }} </p>
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
        .get('https://sel-api.justplay.gg/api/v1/admin/users/{id}?expand=profile,settings,files'.replace('{id}', this.$route.params['id']))
        .then(response => {
          this.userDetail = response.data
          console.log(this.userDetail)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
  }


}
</script>