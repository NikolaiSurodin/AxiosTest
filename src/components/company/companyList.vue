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
          <b>Компании в разработке:</b>
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
                <button class="card-image" @click="showPopup(model.id)">
                  <img src="../../assets/eye.png" height="30" width="50"/></button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div>
          <popup-info
              v-if="popupVisible"
              @closePopup="showPopup"
          >
            <p>{{ comp[0].about }}</p>
          </popup-info>
        </div>
        <div>
          <button class="btn" @click="createCompany">Добавить новую компанию</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormCompany from "@/components/company/formCompany";
import PopupInfo from "@/components/login/popupInfo";

export default {
  name: 'companyList',
  components: {PopupInfo, FormCompany},
  companyList: [],
  data() {
    return {
      editMode: false,
      popupVisible: false,
      comp:null

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
    },
    showPopup(id) {
      this.popupVisible = !this.popupVisible
      this.comp = this.$store.getters.companies.filter(el => el.id === id)
    }
  },
  computed: {
    companies() {
      return this.$store.getters.companies
    }
  }
}
</script>
