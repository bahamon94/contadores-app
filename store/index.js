export const state = () => ({
  errorsAlerts: {},
});

export const mutations = {
  setError(state, payload) {
    console.log("errors set", payload);
    state.errorsAlerts = payload;
  },
};

export const getters = {
  error(state) {
    return state.errorsAlerts;
  },
};

export const actions = {};
