import {
  Chart as ChartJS,
  registerables,
  ChartData,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

// Register Chart.js components needed for all charts (Line, Doughnut, Bar)
ChartJS.register(
  ...registerables,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

// --- Dashboard Data and Configuration ---

// 1. KPI Metrics Data (unchanged)
const dashboardMetrics = [
  {
    title: "Total Sales",
    value: "$15,450",
    description: "Revenue this month",
    color: "text-blue-600",
  },
  {
    title: "Total Orders",
    value: "1,230",
    description: "Orders placed this month",
    color: "text-green-600",
  },
  {
    title: "Active Customers",
    value: "850",
    description: "Customers logged in today",
    color: "text-purple-600",
  },
  {
    title: "Orders Processing",
    value: "45",
    description: "Orders pending shipment",
    color: "text-yellow-600",
  },
];

// 2. Orders Received Last 7 Days (Bar Chart Data)
const ordersLast7DaysData: ChartData<"bar"> = {
  labels: ["Jul 4", "Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10"],
  datasets: [
    {
      label: "Orders Received",
      data: [55, 70, 40, 85, 90, 110, 75], // Sample order counts
      backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue color for bars
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const ordersBarChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Orders Received: Last 7 Days",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        // Ensure Y-axis ticks are integers for order counts
        stepSize: 20,
      },
    },
  },
};

// 3. Order Status Data (Doughnut Chart - unchanged)
const orderStatusData: ChartData<"doughnut"> = {
  labels: ["Delivered", "Shipped", "Processing", "Canceled"],
  datasets: [
    {
      label: "Order Count",
      data: [650, 300, 150, 130],
      backgroundColor: [
        "rgba(75, 192, 192, 0.8)", // Delivered (Green/Teal)
        "rgba(54, 162, 235, 0.8)", // Shipped (Blue)
        "rgba(255, 206, 86, 0.8)", // Processing (Yellow)
        "rgba(255, 99, 132, 0.8)", // Canceled (Red)
      ],
      borderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
      borderWidth: 2,
    },
  ],
};

// 4. Recent Orders Data (Simplified placeholder data - unchanged)
interface RecentOrder {
  id: number;
  customerName: string;
  amount: string;
  status: string;
}

const recentOrders: RecentOrder[] = [
  {
    id: 1015,
    customerName: "Ivy Chen",
    amount: "$300.00",
    status: "Delivered",
  },
  { id: 1014, customerName: "Bob Smith", amount: "$115.50", status: "Shipped" },
  {
    id: 1013,
    customerName: "Leo Harris",
    amount: "$88.00",
    status: "Processing",
  },
  {
    id: 1012,
    customerName: "David Wilson",
    amount: "$105.00",
    status: "Canceled",
  },
  {
    id: 1011,
    customerName: "Olivia White",
    amount: "$25.00",
    status: "Delivered",
  },
];

// --- Overview Component ---

export const OverView = () => {
  return (
    <div className="w-full" style={{ padding: "20px" }}>
      {/* Dashboard Header */}
      <div className="sticky top-0 py-6 bg-white flex justify-between items-center z-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Dashboard Overview
        </h2>
      </div>

      {/* 1. Metrics Cards (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium text-gray-500">
                {metric.title}
              </h3>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {metric.value}
            </div>
            <p className="text-sm text-gray-400">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* 2. Main Content Area (Charts and Recent Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders Received Bar Chart (Replaces Sales Line Chart) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100 h-[500px] flex flex-col justify-center items-center">
          <Bar data={ordersLast7DaysData} options={ordersBarChartOptions} />
        </div>

        {/* Order Status Chart (Doughnut Chart) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Order Status Breakdown
          </h3>
          <div className="w-full max-w-[300px]">
            <Doughnut data={orderStatusData} />
          </div>
        </div>
      </div>

      {/* 3. Recent Activity Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Orders
        </h3>

        {/* Simple table for recent orders */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
