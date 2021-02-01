<template lang="html">
  <div>

    <div class="container">
      <div v-if="editMode">
        <form-company
            :company="companies"
        />
      </div>
      <div v-else>
        <h2 style="text-align: center">Ваши компании</h2>
        <div>
          <button class="btn" @click="currency">{{ coursesVisible ? 'Скрыть' : 'Показать курс' }}
            <i class="material-icons">attach_money</i>
          </button>

          <div class="right" v-if="coursesVisible"
          >
            <ul v-for="(r, index) in rates"
                :key="index">
              <li>
                {{ index }}: {{ r }}
              </li>
            </ul>
          </div>
        </div>
        <hr>
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
          <button class="btn" @click="createCompany">
            Добавить новую компанию
          </button>
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
      coursesVisible: false,
      comp: null,
      res: '',
      rates: ''
    }
  },
  methods: {
    createCompany() {
      this.$router.push('/company/__create')
    },
    DeleteCompany(id) {
      this.$store.dispatch('deleteCompany', id)
      this.$message('Компания удалена!')
    },
    editCompany(id) {
      this.$router.push(`/company/${id}/edit`)
    },
    showPopup(id) {
      this.popupVisible = !this.popupVisible
      this.comp = this.$store.getters.companies.filter(el => el.id === id)
    },
    async currency() {
      this.coursesVisible = !this.coursesVisible
      let url = 'http://data.fixer.io/api/latest?access_key=61737834c3b1ec51c81ff69e67511336&symbols=USD,EUR,RUB'
      let response = await fetch(url)
      this.res = await response.json()
      this.rates = this.res.rates
      console.log(this.res)
    }
  },
  computed: {
    companies() {
      return this.$store.getters.companies
    },
  }
}
</script>
