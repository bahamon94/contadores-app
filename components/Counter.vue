<template>
  <div id="contador">
    <div class="wrapper">

      <div class="content">
        <BaseLabel v-if="!adding" text="Pruebas Brayan"/>
        <BaseTextInput size="xl" v-else v-model="nameCounter"/>
      </div>

      <div>
        <BaseButton variant="success-light" button-icon="minus"/>
        <BaseTextInput size="xs" type="number"/>
        <BaseButton variant="danger-light" button-icon="plus"/>
      </div>

      <div v-show="!adding">
        <BaseButton variant="transparent-danger" button-icon="trash-can" icon-size="2"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";


export default {
  name: "Contador",
  components: {
    BaseLabel: () => import('~/components/shared/BaseLabel'),
    BaseTextInput: () => import('~/components/shared/BaseTextInput'),
    BaseButton: () => import('~/components/shared/BaseButton') ,
  },
  props: {
    adding:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    nameCounter: ''
  }),
  methods: {
    ...mapMutations('counter',["addCounter"])
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

</style>
