<template>
  <div class="layout">
    <navbar-header/>
    <router-view/>
  </div>
</template>

<script>
import navbarHeader from "@/components/App/navbarHeader";

export default {
  name: "layout",
  components: {
    navbarHeader
  }
}
</script>

<style scoped>

</style>