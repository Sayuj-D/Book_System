import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Testing from "./testing";

test("OnChange testing", () => {
  render(<Testing />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input).toHaveValue("a");
});
