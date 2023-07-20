import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ....

    // Assert
    const helloWorld = screen.getByText("Hello World", { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphText = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(paragraphText).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphText = screen.getByText("Changed!");
    expect(paragraphText).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphText = screen.queryByText("good to see you", { exact: false });
    expect(paragraphText).toBeNull();
  });
});
