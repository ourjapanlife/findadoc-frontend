export const state = () => ({
  user: null,
  alert: true,
});

export const mutations = {
  updateUser(state, googleUser) {
    state.user = googleUser;
  },
  hideAlert(state, val) {
    state.alert = val;
  },
};
