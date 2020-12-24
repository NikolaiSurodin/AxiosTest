<template>
  <div>
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
                    <div>
                      <button class="btn black" style="color: white" @click="showPopupInfo">информация о разделе</button>
                    </div>
                  </div>
                </div>
                <div class="col s12 m6">
                  <div>
                    <div class="card" @click="onCompany">
                      <h4>Company admin</h4>
                    </div>
                    <div class="right">
                      <button class="btn black" style="color: white" type="button" @click="showPopupInfo">информация о разделе</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <popup-info
            v-if="isInfoPopupVisible"
            @closePopup="closeInfoPopup"
            >
              <p>информация</p>
            </popup-info>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import popupInfo from "@/components/login/popupInfo";
export default {
  name: "main",
  data(){
    return{
      isInfoPopupVisible: false
    }
  },
  components:{
    popupInfo
  },
  methods: {
    onUsers() {
      this.$router.push('/users')
    },
    onCompany() {
      this.$router.push('/company')
    },
    showPopupInfo(){
      this.isInfoPopupVisible = true
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false
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