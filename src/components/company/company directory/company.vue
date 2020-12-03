<template>
  <div>
    <header-container/>
    <router-view />
  </div>
</template>
<script>
import headerContainer from "@/components/App/headerContainer";


export default {
  name: 'company',
  components: {headerContainer},
  data() {
    return {}
  }
}
</script>

