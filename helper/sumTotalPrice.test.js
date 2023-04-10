import { sumTotalPrice } from "./sumTotalPrice";

describe("sumTotalPrice", () => {
  it("should return the correct total price for a project", () => {
    const project = {
      items: [
        { name: "Item 1", price: "10.50" },
        { name: "Item 2", price: "15.25" },
        { name: "Item 3", price: "5.75" },
      ],
    };

    const expectedTotalPrice = 31.5;
    const actualTotalPrice = sumTotalPrice(project);

    expect(actualTotalPrice).toBe(expectedTotalPrice);
  });
});
