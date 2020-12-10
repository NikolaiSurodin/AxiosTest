<template>
  <div>
    <header-container/>
    <div class="card">
      <div class="card-content">
        <div v-if="companies.about">
          {{companies.about}}
        </div>
        <div v-else>
          Информация недоступна
        </div>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab">
            <router-link class="active" :to="`/company/${$route.params['id']}/employees`">Все сотрудники
            </router-link>
          </li>
          <li class="tab">
            <router-link class="active" :to="`/company/${$route.params['id']}/frontDev`">FrontEnd</router-link>
          </li>
          <li class="tab">
            <router-link class="active" :to="`/company/${$route.params['id']}/backDev`">BackEnd</router-link>
          </li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">

        <div id="test4">Название компании: {{companies.name}}</div>
        <div id="test5">Адрес: {{companies.address}}</div>
        <div id="test6">ID: {{companies.id}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContainer from "@/components/App/headerContainer";

export default {
  name: "companyDetail",
  components: {HeaderContainer},

  computed: {
    companies() {
      let com =  this.$store.getters.companies.filter(el => el.id === this.$route.params['id'])
      return com.length ? com[0] : {}

    }
  }
}
</script>

<style scoped>

</style>