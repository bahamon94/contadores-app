import { QUANTITY_MAX_COUNTERS } from "~/constants";
import { UUID } from "~/utils";

export const state = () => ({
  counters: [],
});

export const mutations = {
  addCounter(state, payload) {
    state.counters = [...state.counters, payload];
  },
  deleteOneCounter(state, counterId) {
    state.counters = state.counters.filter(({ id }) => id !== counterId);
  },
  changerValueCounter(state, payload) {
    const { action, id } = payload;
    state.counters.map((counter) => {
      if (counter.id.includes(id)) {
        const total = action ? +1 : -1;
        return {
          ...counter,
          value: (counter.value += total),
        };
      } else return counter;
    });
  },
};

export const getters = {
  getCounters(state) {
    return state.counters;
  },
  countCounters(state) {
    return state.counters.length;
  },
  allowAdd(state) {
    return !(state.counters.length < QUANTITY_MAX_COUNTERS);
  },
};

export const actions = {
  createCounter({ commit }, payload) {
    console.log("payload", payload);
    const id = UUID();
    const counter = {
      id,
      name: payload.name,
      value: Number(payload.value),
    };
    commit("addCounter", counter);
  },
};
