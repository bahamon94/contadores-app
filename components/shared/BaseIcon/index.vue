<template>
  <font-awesome-icon v-if="!!icon" :icon="icon" :class="`fa-${size}x`"/>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: '1'
    }
  }
}
</script>

<style scoped>

</style>
