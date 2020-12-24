<template>

  <div>
    <router-view/>
    <div class="footer-copyright">
      <footer-container/>
    </div>

  </div>

</template>


<script>

import footerContainer from "@/components/App/footerContainer";
export default {
  name: 'news',
  components: {
    footerContainer
  }
}
</script>
