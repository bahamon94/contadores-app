<template>
  <header id="app-header" class="app-header">
    <h3>Header</h3>
    <base-button
      variant="success-light"
      text="Add Counter"
      @clicked="openModal"
      :disabled="allowAdd"
    />
  </header>
</template>
<script>
import ModalServices from "~/services/Modal.services";
import RegisterCounterModal from '~/components/RegisterCounter'
import BaseButton from "~/components/shared/BaseButton";
import {mapGetters} from "vuex";

export default {
  name: 'HeaderApp',
  components: {RegisterCounterModal, BaseButton},
  methods: {
    openModal() {
      ModalServices.Open(RegisterCounterModal)
    }
  },
  computed: mapGetters('counter', ["allowAdd"])
}
</script>
<style scoped lang="scss">
header {
  background-color: var(--color-neutral);
  box-shadow: 0 3px 5px 0 var(--color-neutral);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
