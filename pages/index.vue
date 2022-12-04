<template>
  <section>
  <Counter
    v-for="counter in allCounters"
    :key="counter.id"
    :counter="counter"
  />
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'IndexPage',
  computed: mapGetters({ allCounters: 'counter/getCounters' }),
}
</script>
<style lang="scss">
@import "assets/css/mixins.scss";

</style>
