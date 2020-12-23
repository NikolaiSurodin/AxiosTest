<template lang="html">
  <div>
    <div class="container">
      <div v-if="editMode">
        <form-company
            :company="companies"
        />
      </div>
      <div v-else>
        <h2 style="text-align: center">Company List</h2>
        <hr>
        <p>
          Ваши компании:
        </p>
        <table>
          <thead>
          <tr>
            <th>Название компании</th>
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

            <td>{{ model.address }}</td>
            <td>
              <div>
                <button class="btn" style="margin-right: 30px" @click="editCompany(model.id)">Редактировать</button>
                <button class="card-image" type="button">
                  <img src="@/assets/trash.png" height="30px" width="30px" @click="DeleteCompany(model.id)"/></button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div>
          <button class="btn" @click="createCompany">Добавить новую компанию</button>
        </div>
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
  data() {
    return {
      editMode: false
    }
  },

  methods: {
    createCompany() {
      this.$router.push('/company/__create')
    },
    DeleteCompany(id) {
      this.$store.dispatch('deleteCompany', id)
    },
    editCompany(id) {
      this.$router.push(`/company/${id}/edit`)
    }
  },
  computed: {
    companies() {
      return this.$store.getters.companies
    }
  }
}
</script>
