<template>
  <div class="switch">
    <label>
      Off
      <input type="checkbox" @input="onChange" :checked="show">
      <span class="lever"></span>
      On
    </label>
  </div>

</template>
<script>
export default {
  name: 'Switcher',
  props: ['checked'],
  data() {
    return {
      show: this.checked
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.checked)

    }
  }
}
</script>