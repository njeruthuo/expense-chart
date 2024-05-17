import { Bar } from "react-chartjs-2";
import weekData from "../data.json";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = () => {
  // Transform the data
  const labels = weekData.map((item) => item.day);
  const dataValues = weekData.map((item) => item.amount);

  // Find the maximum value
  const maxAmount = Math.max(...dataValues);

  // Set background colors with a different color for the max value
  const backgroundColors = dataValues.map((amount) =>
    amount === maxAmount ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
  );

  const borderColors = dataValues.map((amount) =>
    amount === maxAmount ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
  );

  // Chart.js data structure
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Amount",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 0,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false,
        text: "Daily Amounts",
      },
    },
    scales: {
      x: {
        ticks: {
          display: true, // Show x-axis labels (days of the week)
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        display: false, // Hide the y-axis
        ticks: {
          display: false, // Hide y-axis labels
        },
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarGraph;
