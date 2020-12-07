<template>
  <div class="card-view">
    <header-container/>
    <div v-if="error" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div class="card-action" v-if="editMode">
      <user-form
          :user="userDetail"

      ></user-form>
    </div>
    <div v-else>
      <div v-if="userDetail.hasOwnProperty('id')">
        User: <h3 class="user_detail"> {{ this.userDetail.username }}</h3>
        <p> email: => {{ this.userDetail.email }} </p>
        <p> First Name: => {{ this.userDetail.profile.first_name }} </p>
        <p> Last Name: => {{ this.userDetail.profile.last_name }} </p>
        <p> Your mobile ph: => {{ this.userDetail.profile.molile }} </p>
        <button class="btn" type="button" @click="editMode= true">Редактировать профиль</button>
      </div>

    </div>
    <footer-container/>
  </div>

</template>
<script>
import axios from 'axios'
import HeaderContainer from "@/components/App/headerContainer";
import FooterContainer from "@/components/App/footerContainer";
import userForm from "@/components/userForm";


export default {
  name: 'userDetail',
  components: {FooterContainer, HeaderContainer, userForm},
  data: () => ({
    userDetail: {},
    profile: {},
    error: false,
    editMode: false
  }),
  methods: {
    GetUser() {
      axios
          .get('https://sel-api.justplay.gg/api/v1/admin/users/{id}?expand=profile,settings'.replace('{id}', this.$route.params['id']))
          .then(response => {
            this.userDetail = response.data
            console.log(this.userDetail)
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    },
    OnSave() {
      this.editMode = false
      this.GetUser()
    }
  },
  mounted() {
    this.GetUser()
    this.$root.$on('save', () => {
      this.OnSave()
    })

  }


}
</script>
<style>
.user_detail {
  color: green;
  margin-left: 30px;
}

p {
  margin-left: 30px;
}
</style>