import { screen } from "@testing-library/vue";
import { renderWithVuetify } from "testing/renderWithVuetify";
import Alert from "./Alert.vue";

describe("Alert", () => {
  it("renders the alert button", () => {
    const buttonText = "The button text";
    const buttonUrl = "https://test.com";

    renderWithVuetify(Alert, {
      props: { buttonText, buttonUrl },
    });

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
  });
});
