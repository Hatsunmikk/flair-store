import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store.js";

// ✅ Mock toast
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    info: jest.fn(),
  },
}));

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  image: "https://via.placeholder.com/150",
  rating: { rate: 4.5 },
  category: "test-category",
};

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("ProductCard", () => {
  it("renders product title and price", () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$89.99")).toBeInTheDocument(); // 10% off
    expect(screen.getByText("$99.99")).toBeInTheDocument(); // Original price
  });

  it("shows 'Go to Cart' after clicking 'Add to Cart'", () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    const button = screen.getByText("Add to Cart");

    fireEvent.click(button);

    expect(screen.getByText("Go to Cart")).toBeInTheDocument();
  });
});


