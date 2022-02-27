import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Login Form Happy Path", () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    render(<LoginForm handleSubmit={handleSubmit} />);
  });

  test("If Valid Button is Enabled", async () => {
    act(() => {
      userEvent.type(getEmailInput(), "john.dee@hotmail.com");
      userEvent.type(getPasswordInput(), "111111");
    });
    await waitFor(() => {
      expect(getSubmitButton()).not.toBeDisabled();
    });
  });
  test("Email and Password Input get correct Value", async () => {
    userEvent.type(getEmailInput(), "john.dee@someemail.com");
    userEvent.type(getPasswordInput(), "111111");

    await waitFor(() => {
      expect(getEmailInput()).toHaveValue("john.dee@someemail.com");
    });
    expect(screen.getByDisplayValue("111111")).toBeInTheDocument();
  });

  test("Form fills with pass values", async () => {
    userEvent.type(getEmailInput(), "john.dee@someemail.com");
    userEvent.type(getPasswordInput(), "111111");
    userEvent.click(getSubmitButton());

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "john.dee@someemail.com",
        password: "111111",
      });
    });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

describe("Login Form Error States", () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    render(<LoginForm handleSubmit={handleSubmit} />);
  });

  test("If Invalid Button Disabled", async () => {
    act(() => {
      userEvent.type(getEmailInput(), "john.dee");
      userEvent.type(getPasswordInput(), "111111");
    });
    await waitFor(() => {
      expect(getSubmitButton()).toBeDisabled();
    });
  });
});

function getEmailInput() {
  return screen.getByTestId("email");
}
function getPasswordInput() {
  return screen.getByTestId("password");
}
function getSubmitButton() {
  return screen.getByRole("button", {
    name: /log in/i,
  });
}
