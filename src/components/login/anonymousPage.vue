<template>
<div>
  <div class="main-page">
    <img src="../../assets/logo_start.png" height="196" width="257"/>
    <h1>
      Admin application
    </h1>
    <button type="button" class="btn btn-outline-light" style="margin-bottom: 10px" @click="$router.push('/login')">Войти</button>
    <button type="button" class="btn btn-outline-light" @click="$router.push('/login')">Зарегистироваться</button>
  </div>
  <footer-container />
</div>
</template>

<script>
import FooterContainer from "@/components/App/footerContainer";
export default {
name: "anonymousPage",
  components: {FooterContainer}
}
</script>

<style scoped>
 .main-page {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background-color: white;

 h1 {
   color: #ffffff;
   font-size: 70px;
   margin-bottom: 20px;
 }

 }

</style>
