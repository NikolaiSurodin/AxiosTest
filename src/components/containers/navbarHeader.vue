<template>
  <div>
    <nav>
      <div class="nav-wrapper #546e7a blue-grey darken-1">
        <div class="fixed right">
          <img src="@/assets/logo_start.png" height="60" width="80"/>
        </div>
        <div v-if="isLoggedIn">
          <button class="btn text-lighten-10 right" style="margin-right: 10px; margin-top: 10px" type="button"
                  @click="Logout">Выйти
          </button>
        </div>
        <div v-if="isIndex()">
          <ul class="left hide-on-med-and-down">
            <li><a href="#">Sass</a></li>
            <li>
              <router-link to="#">INFO</router-link>
            </li>
            <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
          </ul>
        </div>
        <div v-if="isUser()">
          <ul class="left hide-on-med-and-down">
            <li>
              <router-link to="/index">На главную</router-link>
            </li>
            <li>
              <router-link to="/news">Посмотреть Новости</router-link>
            </li>
            <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
          </ul>
        </div>
        <div v-if="isNews()">
          <ul class="left hide-on-med-and-down">
            <li>
              <router-link to="/index">На главную</router-link>
            </li>
            <li>
              <router-link to="/users">Посмотреть Игроков</router-link>
            </li>
            <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
          </ul>
        </div>
        <div v-if="isCompany()">
          <ul class="left hide-on-med-and-down">
            <li>
              <router-link to="/index">На главную</router-link>
            </li>
            <li>
              <router-link to="/company">Компании в разработке</router-link>
            </li>
          </ul>
        </div>
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
      isOpen: false,
      isInfoPopupVisible:false
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
    },
    isIndex() {
      return this.$route.path.indexOf('/index') > -1
    },
    isCompany() {
      return this.$route.path.indexOf('/company') > -1
    }
  }
}

</script>

<style scoped>

</style>