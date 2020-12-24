<template>
  <div>
    <div class="popup_wrapper">
      <div class='popup'>
        <div class="popup__header">
          <span>Popup name</span>
        </div>
        <div class="popup__content">

          <slot></slot>
        </div>
        <div class="popup__footer">
          <button
              class="submit_btn" @click="closePopup"
          > ok
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popupInfo",
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.popup {
  padding: 50px;
  position: fixed;
  top: 100px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;

  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit_btn {
    padding: 8px;
    color: #ffffff;
    background: #26ae68;
  }
}
</style>