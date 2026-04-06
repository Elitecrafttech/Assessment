import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "@/app/types/product";

describe("ProductCard", () => {
  const product: Product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "Popular mascara",
    category: "beauty",
    price: 9.99,
    rating: 4.5,
    thumbnail: "https://dummyjson.com/image/300x200",
  };

  it("renders product title, price, and category", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("Essence Mascara Lash Princess")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
    expect(screen.getByText("beauty")).toBeInTheDocument();
  });

  it("renders product image with correct alt text", () => {
    render(<ProductCard product={product} />);

    const image = screen.getByAltText("Essence Mascara Lash Princess");
    expect(image).toBeInTheDocument();
  });
});