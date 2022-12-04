<template>
  <BaseModal>
      <counter adding/>
  </BaseModal>
</template>

<script>
export default {
  name: "RegisterCounter",
  components: {
    BaseModal: () => import('@/components/shared/BaseModal')
  }

}
</script>

<style scoped>

</style>
