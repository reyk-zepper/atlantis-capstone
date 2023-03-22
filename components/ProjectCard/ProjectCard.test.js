import React from "react";
import { render } from "@testing-library/react";
import ProjectCard from "./index";

describe("ProjectCard component", () => {
  const projects = [
    {
      name: "Project 1",
      items: [
        { id: 1, name: "Item 1", value: "", price: 10 },
        { id: 2, name: "Item 2", value: "value", price: 20 },
      ],
    },
  ];

  it("should render the project name and items correctly", () => {
    const { getByText } = render(<ProjectCard projects={projects} />);

    expect(getByText("Project: Project 1")).toBeInTheDocument();
    expect(getByText("ITEM 1: 10$")).toBeInTheDocument();
    expect(getByText("VALUE: 20$")).toBeInTheDocument();
  });

  it("should calculate the total price correctly", () => {
    const { getByText } = render(<ProjectCard projects={projects} />);

    expect(getByText("Total: 30$")).toBeInTheDocument();
  });
});
