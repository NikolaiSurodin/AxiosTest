<template>
  <div class="layout">
    <navbar-header/>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer-copyright">
      <footer-container />
    </div>
  </div>
</template>

<script>
import navbarHeader from "@/components/App/navbarHeader";
import FooterContainer from "@/components/App/footerContainer";

export default {
  name: "layout",
  components: {
    FooterContainer,
    navbarHeader
  }
}
</script>

<style scoped>
.content{
  height: 100%;
}
.footer-copyright{
  height: 80%;
}
</style>