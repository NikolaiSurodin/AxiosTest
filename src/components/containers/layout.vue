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
import navbarHeader from "@/components/containers/navbarHeader";
import FooterContainer from "@/components/containers/footerContainer";

export default {
  name: "layout",
  components: {
    FooterContainer,
    navbarHeader
  }
}
</script>
<style scoped>
:root {
  --footer-height: 60px;
}
.content{
  position: relative;
  min-height: calc(83vh - var(--footer-height, 30px));
  padding-bottom: var(--footer-height, 60px);
}
.footer-copyright{
  background-color: slategray;
  text-align: center;
  display: block;
  width: 100%;
  height: 50px;
  //position: absolute;
  left: 0;
  margin-top: 50px;
 position: relative;
}
</style>