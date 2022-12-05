import { QUANTITY_MAX_COUNTERS } from "~/constants";
import { UUID } from "~/utils";

export const state = () => ({
  counters: [],
  sortBy: "",
  order: "",
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

  setOrderCounters(state, counters) {
    state.counters = [];
    state.counters = counters;
  },

  setSortBy(state, value) {
    state.sortBy = value;
  },

  setOrder(state, order) {
    state.order = order;
    state.counters = [...state.counters];
  },
  clearSortOrder(state) {
    state.sortBy = "";
    state.order = "";
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
  hasSorterSelect(state) {
    return !!state.sortBy;
  },
  sortBy(state) {
    return state.sortBy;
  },
  orderSort(state) {
    return state.order;
  },
};

export const actions = {
  createCounter({ commit }, payload) {
    const id = UUID();
    const counter = {
      id,
      name: payload.name,
      value: Number(payload.value),
    };
    commit("addCounter", counter);
  },

  async orderCounters({ commit, state }) {
    let data = [...state.counters];
    const by = state.sortBy;

    if (!state.order && !state.sortBy) return null;

    let order = 0;
    order = state.order.includes("asc") ? -1 : 1;

    if (state.order.includes("asc"))
      data.sort((a, b) => (a[by] !== b[by] ? (a[by] < b[by] ? -1 : 1) : 0));
    else data.sort((a, b) => (a[by] !== b[by] ? (a[by] < b[by] ? 1 : -1) : 0));

    commit("setOrderCounters", data);
  },
};
