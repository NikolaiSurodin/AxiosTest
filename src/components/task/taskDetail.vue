<template>
  <div>
    {{task.title}}
  </div>
</template>

<script>
export default {
  name: "taskDetail",
  computed: {
    task() {
      return this.$store.getters.tasks.filter(t => t.id === this.$route.params['id'] )
    }
  }
}
</script>

<style scoped>

</style>