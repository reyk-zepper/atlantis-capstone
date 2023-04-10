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

function createPriceData(project) {
  const prices = project.items.map((item) => item.price);

  // If prices array has less than 9 elements, add a 0 as the 9th element
  if (prices.length < 9) {
    prices.push(0);
  }

  // Calculate sum of prices starting from the 9th element
  const restPrice = prices
    .slice(8)
    .reduce((acc, price) => Number(acc) + Number(price), 0);

  // Create new array with first 8 prices and total sum of remaining prices
  return [...prices.slice(0, 8), restPrice];
}

export function createChartData(project) {
  const chartData = {
    labels: Object.keys(LABEL_COLORS),
    datasets: [
      {
        labels: Object.keys(LABEL_COLORS),
        data: createPriceData(project),
        backgroundColor: Object.values(LABEL_COLORS),
        hoverOffset: 4,
      },
    ],
  };

  return chartData;
}
