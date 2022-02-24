import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import FieldAndLabel from "./FieldAndLabel";

afterEach(cleanup);

test("Renders Field", () => {
  const component = render(
    <FieldAndLabel label='Insurance' content='Allianz' />
  );
  component.getAllByLabelText("Insurance");
  component.getByText("Allianz");
});
