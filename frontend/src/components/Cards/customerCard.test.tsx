import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import CustomerCard from "./CustomerCard";

afterEach(cleanup);

test("Renders Customer Card", () => {
  const history = createMemoryHistory();

  const customerProps = {
    customer: {
      firstName: "John",
      lastName: "Meyer",
      dateOfBirth: "12-12-2020",
    },
    policyNumber: "1872",
    status: "ACTIVE",
  };
  history.push = jest.fn();
  const component = render(
    <MemoryRouter initialEntries={["/customer/1872"]}>
      <CustomerCard
        customer={customerProps.customer}
        policyNumber={customerProps.policyNumber}
        status={customerProps.status}
      />
    </MemoryRouter>
  );
  const chip = component.getByTestId("chip");
  expect(chip).toHaveClass("bg-featherGreen");

  component.getByAltText("avatar-placeholder");
  component.getByLabelText("Full Name");
  component.getByLabelText("Date of Birth");
});
