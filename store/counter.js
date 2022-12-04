import { QUANTITY_MAX_COUNTERS } from "~/constants";

export const state = () => ({
  counters: [],
});

export const mutations = {
  addCounter(state, payload) {},
};

export const getters = {
  getCounters(state) {},
  countCounters(state) {
    return state.counters.length;
  },
  allowAdd(state) {
    return !(state.counters.length < QUANTITY_MAX_COUNTERS);
  },
};

export const actions = {};
