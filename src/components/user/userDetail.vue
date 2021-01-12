<template>
  <div class="card-view">
    <div v-if="error" class="alert">
      Мы не смогли загрузить новости, попробуйсте позже!
    </div>
    <div class="card-action" v-if="editMode">
      <user-form
          :user="userDetail"
      ></user-form>
    </div>
    <div class="row" v-else>
      <div v-if="userDetail.hasOwnProperty('id')">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              <h4>User name:</h4>
              {{ this.userDetail.username }}</span><br>
            <h4>User data</h4>

            <p> email:  {{ this.userDetail.email }} </p>
            <p> First Name: {{ this.userDetail.profile.first_name }} </p>
            <p> Last Name: {{ this.userDetail.profile.last_name }} </p>
            <p> Your mobile ph:  {{ this.userDetail.profile.molile }} </p>
          </div>
          <div class="card-action">
            <button class="btn" type="button" @click="editMode= true">Редактировать профиль</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import userForm from "@/components/user/userForm";

export default {
  name: 'userDetail',
  components: {userForm},
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