import { chartOptions } from "./chartOptions";

describe("chartOptions", () => {
  it("returns an object with the correct properties", () => {
    const legendDisplay = true;
    const labelColor = "red";
    const options = chartOptions(legendDisplay, labelColor);

    expect(options).toEqual({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: true,
          position: "right",
          labels: {
            color: "red",
            usePointStyle: true,
          },
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: false,
        },
      },
    });
  });
});
