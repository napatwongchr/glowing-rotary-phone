import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/todo app/i);
  expect(linkElement).toBeInTheDocument();
});

test("render article correctly", () => {
  render(<App />);
  const firstArticleElement = screen.getByText(/First aritcle/i);
  expect(firstArticleElement).toBeInTheDocument();
});
