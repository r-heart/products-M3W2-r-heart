import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders correctly", () => {
  const appRender = render(<App />);
  expect(appRender).toMatchSnapshot();
});
