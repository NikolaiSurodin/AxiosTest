<template>
  <div>
    <header-container/>
    <table>
      <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Направление разработки</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(dev, id) in developers"
          :key="id">
        <td>{{ dev.name }}</td>
        <td>{{ dev.age }}</td>
        <td>{{ dev.lang }}</td>
        <td>
          <button class="btn">Редактировать</button>
          <button class="card-image" type="button">
            <img src="@/assets/trash.png" height="30" width="30"/></button>
        </td>
      </tr>

      </tbody>
    </table>

    <button class="btn" type="button" @click="AddEmployee">добавить сотрудника</button>
    <router-link to="/company">Вернуться к компании</router-link>
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