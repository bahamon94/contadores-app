<template>
  <font-awesome-icon :icon="['fas', icon ]" :class="`fa-${size}x`"/>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
      required: false,
      default: 'js'
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
