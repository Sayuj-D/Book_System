import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Main_here from "./Main_here";

describe("Print Functions", () => {
  test("React component testing", () => {
    render(<Main_here />);
    // to remove the test case sensitivity
    const text = screen.getByText("This is Test"); // with case sensitivity
    // const text = screen.getByText(/This is test/i);
    const title = screen.getByTitle("This is a image"); // with case sensitivity
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

test("testing input field", () => {
  render(<Main_here />);
  const check_input = screen.getByRole("textbox");
  const check_input_placeholder = screen.getByPlaceholderText("Name Here");
  expect(check_input).toBeInTheDocument();
  expect(check_input_placeholder).toBeInTheDocument();
  expect(check_input).toHaveAttribute("name", "username");
  expect(check_input).toHaveAttribute("id", "1");
  expect(check_input).toHaveAttribute("type", "text");
});

describe("UI testcase group", () => {
  test("test case 1", () => {
    render(<Main_here />);
    const avaiable = screen.getByRole("textbox");
    expect(avaiable).toBeInTheDocument();
    expect(avaiable).toHaveAttribute("id", "1");
  });
});

describe("API testcase group", () => {
  test("Test case 1", () => {
    render(<Main_here />);
    const avaiable = screen.getByRole("textbox");
    expect(avaiable).toBeInTheDocument();
    expect(avaiable).toHaveAttribute("id", "1");
  });

  describe("Minor API testcase group", () => {
    test("Test case 1", () => {
      render(<Main_here />);
      const avaiable = screen.getByRole("textbox");
      expect(avaiable).toBeInTheDocument();
      expect(avaiable).toHaveAttribute("id", "1");
    });
  });
});
