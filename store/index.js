export const state = () => ({
  user: null
});

export const mutations = {
  updateUser(state, googleUser) {
    state.user = googleUser;
  }
};
