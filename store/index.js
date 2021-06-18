import { authState, authActions, authMutations } from "./authStore";

export const state = () => ({
  alert: true,
  ...authState,
});

export const mutations = {
  hideAlert(state, val) {
    state.alert = val;
  },
  ...authMutations,
};

export const actions = {
  ...authActions,
};
