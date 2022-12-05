<template>
  <section>
    <lazy-orders v-if="hasSelectSort"/>

    <TransitionGroup
      name="list"
      tag="ul"
    >
    <Counter
      v-for="counter in allCounters"
      :key="counter.id"
      :counter="counter"
    />
    </TransitionGroup>

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
import {mapActions, mapGetters} from "vuex";
import modalServices from "~/services/Modal.services";
import RegisterCounter from "~/components/RegisterCounter";
import {setLocalStorage} from "~/utils";

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
      order: "counter/orderSort",
      sorter: "counter/sortBy"
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
    },
    sorter() {
      if (this.order) this.orderCounters()
    },
    allCounter(values) {
      console.log('cambio de counter')
      setLocalStorage('counters', values)
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
