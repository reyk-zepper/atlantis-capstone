import { createChartData } from "./createChartData";

const LABEL_COLORS = {
  motherboard: "hsla(208, 50%, 50%, 1)",
  cpu: "hsla(312, 50%, 50%, 1)",
  gpu: "hsla(169, 60%, 50%, 1)",
  ram: "hsla(31, 60%, 50%, 1)",
  storage: "hsla(10, 80%, 50%, 1)",
  pcu: "hsla(53, 100%, 50%, 1)",
  cooling: "hsla(229, 52%, 83%, 1)",
  case: "hsla(5, 91%, 69%, 1)",
  others: "hsla(146, 30%, 65%, 1)",
};

describe("createChartData", () => {
  const mockProject = {
    items: [
      { name: "Motherboard", price: 100 },
      { name: "CPU", price: 200 },
      { name: "GPU", price: 300 },
      { name: "RAM", price: 400 },
      { name: "Storage", price: 500 },
      { name: "PCU", price: 600 },
      { name: "Cooling", price: 700 },
      { name: "Case", price: 800 },
    ],
  };

  it("creates chart data with the correct labels, data, and colors", () => {
    const chartData = createChartData(mockProject);

    expect(chartData.labels).toEqual(Object.keys(LABEL_COLORS));
    expect(chartData.datasets).toHaveLength(1);
    expect(chartData.datasets[0].labels).toEqual(Object.keys(LABEL_COLORS));
    expect(chartData.datasets[0].data).toEqual([
      100, 200, 300, 400, 500, 600, 700, 800, 0,
    ]);
    expect(chartData.datasets[0].backgroundColor).toEqual(
      Object.values(LABEL_COLORS)
    );
    expect(chartData.datasets[0].hoverOffset).toBe(4);
  });

  it("creates chart data with the correct data when there are less than 9 items", () => {
    const mockProjectWithFewerItems = {
      items: [
        { name: "Motherboard", price: 100 },
        { name: "CPU", price: 200 },
        { name: "GPU", price: 300 },
        { name: "RAM", price: 400 },
        { name: "Storage", price: 500 },
        { name: "PCU", price: 600 },
        { name: "Cooling", price: 700 },
        { name: "Case", price: 800 },
      ],
    };

    const chartData = createChartData(mockProjectWithFewerItems);

    expect(chartData.datasets[0].data).toEqual([
      100, 200, 300, 400, 500, 600, 700, 800, 0,
    ]);
  });

  it("creates chart data with the correct data when there are more than 9 items", () => {
    const mockProjectWithMoreItems = {
      items: [
        { name: "Motherboard", price: 100 },
        { name: "CPU", price: 200 },
        { name: "GPU", price: 300 },
        { name: "RAM", price: 400 },
        { name: "Storage", price: 500 },
        { name: "PCU", price: 600 },
        { name: "Cooling", price: 700 },
        { name: "Case", price: 800 },
        { name: "Other 1", price: 900 },
        { name: "Other 2", price: 1000 },
      ],
    };

    const chartData = createChartData(mockProjectWithMoreItems);

    expect(chartData.datasets[0].data).toEqual([
      100, 200, 300, 400, 500, 600, 700, 800, 1900,
    ]);
  });
});
