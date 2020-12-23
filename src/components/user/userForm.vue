<template>

  <div class="user_card">
    <b>Email</b>
    <input type="text" placeholder="email" v-model="user.email">
    <b>You name</b>
    <input type="text" placeholder="you name" v-model="user.profile.first_name">
    <b>You Last</b>
    <input type="text" placeholder="you last_name" v-model="user.profile.last_name">
    <b>You phone</b>
    <input type="text" placeholder="you phone" v-model="user.profile.molile">
    <div class="al">
      <button type="button" class="btn" @click="saveUser">save</button>

      <button type="button" class="btn" style="color: brown" @click="backUsers">Back to users</button>

    </div>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'userForm',
  props: ['user'],
  data() {
    return {}
  },
  methods: {
    backUsers() {
      this.$router.go(-1)
    },
    saveUser() {
      axios
          .patch('https://sel-api.justplay.gg/api/v1/admin/users/{id}'.replace('{id}', this.user.id), this.user)
          .then(() => {
                this.$root.$emit('save')
              }
          )
          .catch()
    }
  }
}
</script>
<style scoped>
.user_card {
  margin-left: 20px;
}

</style>