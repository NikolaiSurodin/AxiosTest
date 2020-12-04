<template>
  <div>
    <header-container/>
    <div v-for="(dev, id) in developers"
         :key="id">
      <router-link :to="`developers/${dev.id}`"></router-link>
      {{ dev.name }}

    </div>
    <button class="btn" type="button" @click="AddEmployee">добавить сотрудника</button>
  </div>
</template>
<script>
import HeaderContainer from "@/components/App/headerContainer";

export default {
  name: 'developers',
  components: {HeaderContainer},
  data() {
    return {}
  },
  methods: {
    AddEmployee() {
      this.$router.push('/developers/__create')

    }

  },
  computed: {
    developers() {
      return this.$store.getters.developers
    }
  }
}
</script>