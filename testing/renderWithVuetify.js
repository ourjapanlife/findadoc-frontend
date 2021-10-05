import Vue from "vue";
import Vuetify from "vuetify";
import { render } from "@testing-library/vue";

Vue.use(Vuetify);

export const renderWithVuetify = (component, options, callback) => {
  const root = document.createElement("div");
  root.setAttribute("data-app", "true");

  return render(
    component,
    {
      container: document.body.appendChild(root),
      vuetify: new Vuetify(),
      ...options,
    },
    callback
  );
};
