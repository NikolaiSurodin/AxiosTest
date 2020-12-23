<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Car name</span>
          <slot></slot>
        </div>
        <div class="card-action">
         <button class="btn-small" @click="closePopup">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props:['car'],
  data(){
    return{

    }
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">

</style>