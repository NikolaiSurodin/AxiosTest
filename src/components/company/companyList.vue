<template>
  <div>
    <h2 style="text-align: center">Company List</h2>
    <div>
      <ul>
        <li v-for="(model,id) in companies"
            :key="id">
          <router-link :to="`company/${model.id}`">
            {{ model.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <button class="btn" @click="editCompany">Создать компанию</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'companyList',
  companyList: {},
  methods: {
    editCompany() {
      this.$router.push('/__create')
    }
  },
  computed: {
    companies() {
      return this.$store.getters.companies
    }
  }
}
</script>