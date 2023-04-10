export const chartOptions = (legendDisplay, labelColor) => {
  return {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: legendDisplay,
        position: "right",
        labels: {
          color: labelColor,
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
  };
};
