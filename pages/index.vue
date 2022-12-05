<template>
  <section>
    <lazy-orders v-if="hasSelectSort"/>
    <Counter
      v-for="counter in allCounters"
      :key="counter.id"
      :counter="counter"
    />

    <BaseButton
      variant="primary"
      text="Create counter"
      v-if="!hasCounter"
      class="add-counter"
      @clicked="openCreateCounter"
    />

  </section>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import modalServices from "~/services/Modal.services";
import RegisterCounter from "~/components/RegisterCounter";

export default {
  name: 'IndexPage',
  components: {
    BaseButton: () => import('@/components/shared/BaseButton'),
  },

  computed: {
    ...mapGetters({
      hasCounter: 'counter/countCounters',
      hasSelectSort: "counter/hasSorterSelect",
      allCounters: 'counter/getCounters',
      order: "counter/orderSort"
    }),
  },

  methods: {
    openCreateCounter() {
      modalServices.Open(RegisterCounter)
    },

    ...mapActions("counter", ["orderCounters"])
  },
  watch: {
    order() {
      this.orderCounters()
    }
  }
}
</script>
<style lang="scss">
@import "assets/css/mixins.scss";

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-counter {
  width: 20%;
}

</style>
