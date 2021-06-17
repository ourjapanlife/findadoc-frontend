//TODO: in v9 of firebase this can be modularized/tree shaken
import firebase from "firebase/app";
import "firebase/auth";

export const authState = {
  user: {
    isLoggedIn: false,
    uid: "",
  },
};

export const authGetters = {
  getCurrentFirebaseUser() {
    try {
      const currentUser = firebase.auth().currentUser;

      if (currentUser && currentUser.uid) {
        return currentUser;
      }

      return undefined;
    } catch (error) {
      console.log("An error occurred retrieving the current user.", error);
      return undefined;
    }
  },
};

export const authActions = {
  async login(context, { email, password }) {
    try {
      console.log("made it to login method.");
      //set the lifetime of the session to persist when the browser is closed.
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

      const authResult = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      context.commit("updateUser", {
        isLoggedIn: true,
        uid: authResult.user.uid,
      });

      return true;
    } catch (error) {
      console.log("Login failed.", error);
      return false;
    }
  },
  refreshUser(context) {
    console.log("refreshing current user.");
    try {
      const currentUser = context.getters.getCurrentFirebaseUser();
      context.commit("updateUser", {
        isLoggedIn: currentUser ? true : false,
        uid: currentUser ? currentUser.uid : "",
      });
    } catch (error) {
      return;
    }
  },
};

export const authMutations = {
  updateUser(state, updatedUser) {
    state.user = updatedUser;
  },
};
