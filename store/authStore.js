//TODO: in v9 of firebase this can be modularized/tree shaken
import firebase from "firebase/app";
import "firebase/auth";

export const authState = {
  user: {
    uid: "",
  },
};

export const authGetters = {
  isUserLoggedIn: (state) => {
    return state.user && state.user.uid;
  },
};

export const authActions = {
  async refreshUser({ commit }) {
    console.log("refreshing current user.");
    try {
      //This is a non-awaitable observer.
      //auth() sets the current user as a background task and this observable will be triggered async.
      firebase.auth().onAuthStateChanged(async (currentUser) => {
        if (!currentUser) {
          return;
        }

        await commit("updateUser", {
          uid: currentUser ? currentUser.uid : "",
        });
      });
    } catch (error) {
      console.log("error retrieving current user", error);
      return;
    }
  },
};

export const authMutations = {
  updateUser(state, updatedUser) {
    state.user = updatedUser;
  },
};
