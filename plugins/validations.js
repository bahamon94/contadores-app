import Vue from "vue";
import {
  QUANTITY_MAX_CHARACTERS,
  QUANTITY_MAX_VALUE_COUNTER,
  QUANTITY_MIN_CHARACTERS,
  QUANTITY_MIN_VALUE_COUNTER,
} from "~/constants";

const validations = {
  methods: {
    $validRangeContador(value) {
      return (
        value <= QUANTITY_MAX_VALUE_COUNTER &&
        value >= QUANTITY_MIN_VALUE_COUNTER
      );
    },
    $validEmptyOrGreaterThan(value) {
      return (
        value.length < QUANTITY_MAX_CHARACTERS &&
        value.length > QUANTITY_MIN_CHARACTERS
      );
    },
    $validNumberMax(value) {
      return value < QUANTITY_MAX_VALUE_COUNTER;
    },
    $validNumberMin(value) {
      return value > QUANTITY_MIN_VALUE_COUNTER;
    },
  },
};

Vue.mixin(validations);
