<template>
  <section>
  <Counter
    v-for="counter in allCounters"
    :key="counter.id"
    :counter="counter"
  />

    <BaseButton
      variant="primary"
      text="Create counter"
      v-if="allCounters"
      class="add-counter"
      @clicked="openCreateCounter"
    />

  </section>
</template>

<script>
import { mapGetters } from "vuex";
import modalServices from "~/services/Modal.services";
import RegisterCounter from "~/components/RegisterCounter";

export default {
  name: 'IndexPage',
  components: {
    BaseButton: ()=> import('@/components/shared/BaseButton')
  },

  computed: mapGetters({ allCounters: 'counter/getCounters' }),
  methods: {
    openCreateCounter(){
      modalServices.Open(RegisterCounter)
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
