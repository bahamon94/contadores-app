<template>
  <header id="app-header" class="app-header">
    <BaseSelect
      v-show="countCounters"
      @selected="applySort"
      :options="optionsSelect"
      placeholder="sort by"
    />

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
import {mapGetters, mapMutations} from "vuex";
import {OPTIONS_SORT_BY} from "~/constants";


export default {
  name: 'HeaderApp',
  components: {
    BaseSelect: ()=> import('@/components/shared/BaseSelect'),
    BaseButton: () => import('~/components/shared/BaseButton'),
    RegisterCounterModal,
  },
  methods: {
    openModal() {
      ModalServices.Open(RegisterCounterModal)
    },

    applySort(option) {
      this.setSort(option)
    },

    ...mapMutations({ setSort: 'counter/setSortBy' }),
  },
  computed: {
    ...mapGetters('counter', ["allowAdd", "countCounters"]),
    optionsSelect() {
      return OPTIONS_SORT_BY
    }
  }
}
</script>
<style scoped lang="scss">
header {
  background-color: var(--color-neutral);
  box-shadow: 0 3px 5px 0 var(--color-neutral);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}
</style>
