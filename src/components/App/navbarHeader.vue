<template>
  <div>
    <nav>
      <div class="nav-wrapper #546e7a blue-grey darken-1">
        <div class="fixed right">
          <img src="@/assets/logo_start.png" height="60" width="80"/>
        </div>
        <div v-if="isLoggedIn">
          <button class="btn text-lighten-10 right" style="margin-right: 10px; margin-top: 10px" type="button" @click="Logout">Выйти</button>
        </div>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="#">Sass</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "navbarHeader",
  data() {
    return {
      date: new Date(),
      interval: null,
      isOpen:false
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    Logout() {
      this.$root.$emit('logout')
    },
    isNews() {
      return this.$route.path.indexOf('/news') > -1
    },
    isUser() {
      return this.$route.path.indexOf('/users') > -1
    }
  },
  mounted() {
    this.date = new Date().toDateString()
  }
}

</script>

<style scoped>

</style>