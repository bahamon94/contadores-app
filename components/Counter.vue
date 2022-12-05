<template>
  <div id="contador">
    <div class="wrapper">
      <div class="content">
        <BaseLabel :text="counter.name"/>
      </div>

      <div>
        <BaseButton
          variant="success-light"
          button-icon="minus"
          @clicked="changeValue(false)"
          :disabled="!allowDecrement"
        />
        <BaseTextInput
          size="xs"
          type="number"
          :value="counter.value"
          readonly
        />
        <BaseButton
          variant="danger-light"
          button-icon="plus"
          @clicked="changeValue(true)"
          :disabled="!allowIncrement"
        />
      </div>

      <div>
        <BaseButton
          variant="transparent-danger"
          button-icon="trash"
          icon-size="2"
          @clicked="deleteCounter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";


export default {
  name: "Counter",
  components: {
    BaseLabel: () => import('~/components/shared/BaseLabel'),
    BaseTextInput: () => import('~/components/shared/BaseTextInput'),
    BaseButton: () => import('~/components/shared/BaseButton'),
  },
  props: {
    counter: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({allCounters: "counter/getCounters"}),
    idCounter () {
      const {id} = this.counter
      return id
    },
    allowIncrement () {
      return this.$validNumberMax(this.counter.value)
    },
    allowDecrement() {
      return this.$validNumberMin(this.counter.value)

    }
  },
  methods:{
    deleteCounter() {
      this.removeCounter(this.idCounter)
    },
    changeValue(action) {
      this.setValueCounter({action, id: this.idCounter})
    },

    ...mapMutations({
      removeCounter: 'counter/deleteOneCounter',
      setValueCounter: 'counter/changerValueCounter'
    })
  }

}
</script>

<style scoped lang="scss">
@import "assets/css/mixins";

#contador {
  padding: 0 3rem;
}

.wrapper {
  align-items: center;
  background-color: var(--color-base);
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 var(--color-neutral);
  display: grid;
  grid-template-columns: 4fr 1fr .5fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
  margin: 1rem 0;

  div {
    font-size: 1rem;
    padding: .5em;
    text-align: center;
  }

  .content {
    color: var(--color-light);
    padding: .5rem;
    margin-left: 1rem;
    text-align: start;
    font-weight: 600;
  }
}

@include media('md') {
  .wrapper {
    grid-template-columns: 2fr 2fr .5fr;
  }
}

@include media('sm') {
  .wrapper {
    display: flex;
    flex-direction: column;
  }
}

</style>
