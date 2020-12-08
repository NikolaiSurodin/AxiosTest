<template>
  <div>
    <header-container />
    <div class="card">
      <div class="card-content">
        <p>{{ 'Описание компании ' }}</p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><router-link class="active" to="/developers">Переход ко всем сотрудникам</router-link></li>
          <li class="tab"><router-link class="active" to="/frontDev">FrontEnd</router-link></li>
          <li class="tab"><router-link class="active" to="/backDev">BackEnd</router-link></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test4">Инфа</div>
        <div id="test5">Инфа</div>
        <div id="test6">Инфа</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContainer from "@/components/App/headerContainer";
export default {
  name: "companyDetail",
  components: {HeaderContainer}
}
</script>

<style scoped>

</style>