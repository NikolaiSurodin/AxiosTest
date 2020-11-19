<template>
  <div>
    <div v-if="errored" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div class="user" v-else>
      Пользователь: <p class="user_detail"> {{ this.userDetail.username }}</p>
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
<style>
.header{
  border-width: 0.14px;
  border-color: #b5b7ba;
  border-style: solid;
  background-color: #dfdfdf;
  height: 50px;
  text-align: center;
  padding-top: 20px;
}
.user_detail{
color: green;
  margin-left: 30px;
}
.user{
  margin-left: 30px;
  margin-top: 10px;
}
</style>