<template>

  <div>
    <header-container/>
    <router-view/>
    <div class="footer-copyright">
      <footer-container/>
    </div>

  </div>

</template>


<script>

import footerContainer from "@/components/App/footerContainer";
import HeaderContainer from "@/components/App/headerContainer";

export default {
  name: 'news',
  components: {
    HeaderContainer,
    footerContainer
  }
}
</script>
