<template>
  <nav>
    <div class="nav-wrapper #546e7a blue-grey darken-1">
      <router-link to="/task" class="brand-logo">TASK</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/task">Create task</router-link></li>
        <li><router-link to="/list">List</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
name: "navbar"
}
</script>

<style scoped>

</style>