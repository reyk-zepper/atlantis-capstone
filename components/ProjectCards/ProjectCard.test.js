import React from "react";
import { render } from "@testing-library/react";
import ProjectCards from "./index";

describe("ProjectCards component", () => {
  const mockProjects = [
    { id: 1, name: "Project 1", description: "Description for project 1" },
    { id: 2, name: "Project 2", description: "Description for project 2" },
  ];

  it("should render without errors", () => {
    const { queryByTestId } = render(<ProjectCards />);
    const productCardsComponent = queryByTestId("product-cards");
    expect(productCardsComponent).toBeNull();
  });

  it("should pass correct props to ProductCard components", () => {
    const { queryAllByTestId } = render(
      <ProjectCards projects={mockProjects} />
    );
    const productCardComponents = queryAllByTestId("product-card");

    productCardComponents.forEach((productCardComponent, index) => {
      const projectProp = productCardComponent.getAttribute("project");
      const hasDataProp = productCardComponent.getAttribute("hasData");
      const keyProp = productCardComponent.getAttribute("key");

      expect(JSON.parse(projectProp)).toEqual(mockProjects[index]);
      expect(JSON.parse(hasDataProp)).toBe(true);
      expect(keyProp).toBe(mockProjects[index].id.toString());
    });
  });
});
