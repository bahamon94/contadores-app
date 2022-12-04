<template>
  <section>
  <Counter v-for="a in allCounters" :key="a"/>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters('counter', ['getCounters']),
    allCounters () {
      return this.getCounters
    }
  }
}
</script>
<style lang="scss">
@import "assets/css/mixins.scss";

</style>
