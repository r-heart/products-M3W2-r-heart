import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import data from "../db.json";
import App from "./App";

test("renders correctly", () => {
  const appRender = render(<App />);
  expect(appRender).toMatchSnapshot();
});

it("loads and displays products", async () => {
  render(<App />);

  const products = await screen.findAllByRole("listitem");

  expect(products).toHaveLength(data.products.length);
});

describe("🔍 Search", () => {
  it("filters by search term", async () => {
    // Arrange
    const query = "a";
    const expectedProducts = data.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    const user = userEvent.setup();
    render(<App />);

    // Act
    const searchInput = screen.getAllByRole("searchbox");

    // *Make sure that the product list is loaded
    await screen.findAllByRole("listitem");

    await user.type(searchInput, query);

    const actualProducts = await screen.findAllByRole("listitem");

    // Assert
    expect(actualProducts).toHaveLength(expectedProducts.length);
  });
});
