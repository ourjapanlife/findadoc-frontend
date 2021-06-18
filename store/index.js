import {
  authState,
  authGetters,
  authActions,
  authMutations,
} from "./authStore";

export const state = () => ({
  alert: true,
  ...authState,
});

export const getters = {
  ...authGetters,
};

export const mutations = {
  hideAlert(state, val) {
    state.alert = val;
  },
  ...authMutations,
};

export const actions = {
  ...authActions,
};
