<template>
  <div>
    <div v-if="editMode">
      <form-company
      :company="companies"
      />
    </div>
    <div v-else>
      <h2 style="text-align: center">Company List</h2>
      <table>
        <thead>
        <tr>
          <th>Название компании</th>
          <th>Численность</th>
          <th>Адрес</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(model,id) in companies"
            :key="id">
          <router-link :to="`company/${model.id}`">
            {{ model.name }}
          </router-link>
          <td>численность</td>
          <td>{{ model.address }}</td>
          <td>
            <button class="btn" @click="editMode= true">Редактировать</button>
            <button class="card-image" type="button">
              <img src="@/assets/trash.png" height="30px" width="30px" @click="DeleteCompany"/></button>
          </td>
        </tr>
        </tbody>
      </table>
      <div>
        <button class="btn" @click="createCompany">Создать компанию</button>
      </div>
    </div>

  </div>
</template>
<script>
import FormCompany from "@/components/company/formCompany";

export default {
  name: 'companyList',
  components: {FormCompany},
  companyList: [],
  data(){
    return{
      editMode: false
    }
  },

  methods: {
    createCompany() {
      this.$router.push('/__create')
    },
    DeleteCompany() {
      this.$store.dispatch('deleteCompany', this.id)
    }

  },
  computed: {
    companies() {
      return this.$store.getters.companies
    }
  }
}
</script>