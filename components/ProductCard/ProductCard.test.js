import { render, screen } from "@testing-library/react";
import ProductCard from "./index";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockProjects = [
  {
    id: 1,
    name: "Project 1",
    items: [
      {
        value: "ASRock X670E Taichi Carrara",
        name: "motherboard",
        price: 600,
        id: uuidv4(),
      },
      { value: "AMD Ryzen 9 7950X", name: "cpu", price: 600, id: uuidv4() },
      {
        value: "Gigabyte RTX 4080 16GB Aero",
        name: "gpu",
        price: 1500,
        id: uuidv4(),
      },
      {
        value: "Corsair Dominator Platinum 64GB",
        name: "ram",
        price: 330,
        id: uuidv4(),
      },
      {
        value: "Samsung 980 Pro M.2 2TB",
        name: "storage",
        price: 150,
        id: uuidv4(),
      },
      {
        value: "1000W bequite Straight Power 80+ Platinum",
        name: "pcu",
        price: 200,
        id: uuidv4(),
      },
      { value: "Nocutua NH-D15", name: "cooling", price: 110, id: uuidv4() },
      {
        value: "Lian Li O11Dynamic XL",
        name: "case",
        price: 265,
        id: uuidv4(),
      },
    ],
  },
];

describe("ProductCard", () => {
  it("renders an h2 element", () => {
    useRouter.mockImplementation(() => ({ pathname: "/test" })); // Mocking useRouter hook
    render(<ProductCard project={mockProjects[0]} />);
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });
});
