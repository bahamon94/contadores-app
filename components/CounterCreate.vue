<template>

  <div class="form-group">
    <fieldset>
      <legend>Create counter</legend>

      <div>
        <BaseLabel text="Name"/>
        <BaseTextField v-model="nameCounter" type="text" placeholder="Enter a lowercase username" required/>
      </div>
      <div>
        <BaseLabel text="Value"/>
        <BaseTextField type="number" v-model="valueCounter" required/>
      </div>

    </fieldset>
    <div class="actions">
      <BaseButton variant="success" @clicked="setCounter" text="Create"></BaseButton>
      <BaseButton variant="cancel" @clicked="cancelCreate" text="Cancelar"></BaseButton>
    </div>
  </div>

</template>

<script>

import {setLocalStorage} from "~/utils";
import modalServices from "~/services/Modal.services";
import BaseAlert from "~/components/shared/BaseAlert";
import {mapActions, mapMutations} from "vuex";
import {ERRORS_LABEL, TYPE_ALERTS} from "~/constants";

export default {
  name: "CounterCreate",
  components: {
    BaseAlert,
    BaseTextField: () => import("~/components/shared/BaseTextInput"),
    BaseButton: () => import("~/components/shared/BaseButton"),
    BaseLabel: () => import("~/components/shared/BaseLabel")
  },
  data: () => ({
    nameCounter: '',
    valueCounter: 0
  }),
  methods: {
    async setCounter() {
      if (this.$validRangeContador(this.valueCounter) && this.$validEmptyOrGreaterThan(this.nameCounter)) {
        this.createCounter({
          name: this.nameCounter,
          value: this.valueCounter
        })
        modalServices.close()
      } else
        this.setError({ type: TYPE_ALERTS.ERROR, label: ERRORS_LABEL.CANNOT_CREATE_COUNTER })
        await modalServices.Open(BaseAlert)
    },

    cancelCreate() {
      modalServices.close()
    },

    ...mapMutations({ setError: 'setError' }),
    ...mapActions({createCounter: 'counter/createCounter'}),
  }
}
</script>

<style scoped lang="scss">
fieldset {
  border: none;
  padding: 0;

  div {
    margin: 1rem 0;
  }

  legend {
    font-size: 1.3rem;
    font-weight: 700;
  }
}

.form-group {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}


</style>
