<template>
  <div class="footer">
    <div class="container">
      © 2020
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'footerContainer'
}
</script>
<style>
.footer{
  background-color: #434445;
  height: 60px;
  text-align: center;
  font-size: 20px;
  margin: 0;

  padding-bottom:5px;
  color: #a4a4a4;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  flex-basis: available;
}
</style>