<template>
<div>
  <navbar-header />
  <div class="">
    <div class="app-content">
      <div class="app-page">
        <div>
          <div class="page-title center">
            <h3>Admin App</h3>
            <h4>Добро пожаловать!</h4>
            <p>Выберете интересующий блок.</p>
          </div>
          <section>
            <div class="row">
              <div class="col s12 m6">
                <div>
                    <div class="card" @click="onUsers">
                      <h4>Game admin</h4>
                    </div>
                </div>
              </div>
              <div class="col s12 m6">
                <div>
                  <div class="card" @click="onCompany">
                    <h4>Company admin</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavbarHeader from "@/components/App/navbarHeader";
export default {
name: "main",
  components: {NavbarHeader },
  methods:{
    onUsers(){
      this.$router.push('/users')
    },
    onCompany(){
      this.$router.push('/company')
    }
  }
}
</script>

<style scoped>
.card {
  border-bottom: 1px solid #eee;
  padding: 1rem;
  transition: 300ms all ease;
  cursor: pointer;
  background: #fff;
}
</style>