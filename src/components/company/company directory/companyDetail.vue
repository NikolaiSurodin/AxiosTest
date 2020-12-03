<template>
  <div>
    <header-container />
    <div class="card">
      <div class="card-content">
        <p>Здесь заполним инфой компании</p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a class="active" href="#test4">Переход ко всем сотрудникам</a></li>
          <li class="tab"><a class="active" href="#test5">Только к фронтам</a></li>
          <li class="tab"><a class="active" href="#test6">Только к бекам</a></li>
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
  components: {HeaderContainer},
  companyDetail:{},
  props:[],
}
</script>

<style scoped>

</style>