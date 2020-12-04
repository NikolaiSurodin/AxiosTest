<template>
  <div>
    <form>
      <h3>Create you employee</h3>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <input class="card-title" placeholder="Имя" v-model="developer.name">
              <input type="number" class="card-title" placeholder="Возраст" v-model="developer.age">
              <input type="text" class="card-title" placeholder="Язык программирования" v-model="developer.lang">
            </div>
            <form>
              <p>
                <label>
                  <input type="checkbox"/>
                  <span>Frontend</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" checked="checked"/>
                  <span>Backend</span>
                </label>
              </p>

            </form>
            <div class="card-action">
              <button type="submit" class="btn" @click="SaveDev">Save</button>
              <router-link to="/developers" class="right">Go out</router-link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "createDeveloper",
  data(){
    return{
      developer:{
        name:'',
        age:'',
        lang:''
      }
    }
  },
  methods:{
    SaveDev(){
      this.$store.dispatch('createDev', this.developer)
      this.$router.push('/developers')
    }

  }
}
</script>

<style scoped>

</style>