import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  status: "Processing" | "Shipped" | "Delivered" | "Canceled";
  totalAmount: number;
  paymentMethod: "Card" | "PayPal" | "Cash";
  shippingMethod: "Standard" | "Express";
  itemsCount: number;
}

const data: Order[] = [
  {
    id: 1001,
    customerName: "Alice Johnson",
    orderDate: "2025-07-10",
    status: "Delivered",
    totalAmount: 150.99,
    paymentMethod: "Card",
    shippingMethod: "Standard",
    itemsCount: 3,
  },
  {
    id: 1002,
    customerName: "Charlie Davis",
    orderDate: "2025-07-10",
    status: "Shipped",
    totalAmount: 45.0,
    paymentMethod: "PayPal",
    shippingMethod: "Express",
    itemsCount: 1,
  },
  {
    id: 1003,
    customerName: "Eve Brown",
    orderDate: "2025-07-09",
    status: "Processing",
    totalAmount: 220.5,
    paymentMethod: "Card",
    shippingMethod: "Standard",
    itemsCount: 5,
  },
  {
    id: 1004,
    customerName: "Frank Miller",
    orderDate: "2025-07-08",
    status: "Delivered",
    totalAmount: 99.99,
    paymentMethod: "Cash",
    shippingMethod: "Standard",
    itemsCount: 2,
  },
  {
    id: 1005,
    customerName: "Grace Lee",
    orderDate: "2025-07-07",
    status: "Canceled",
    totalAmount: 75.0,
    paymentMethod: "PayPal",
    shippingMethod: "Express",
    itemsCount: 1,
  },
  {
    id: 1006,
    customerName: "Henry Kim",
    orderDate: "2025-07-06",
    status: "Delivered",
    totalAmount: 310.25,
    paymentMethod: "Card",
    shippingMethod: "Standard",
    itemsCount: 4,
  },
  {
    id: 1007,
    customerName: "Jack Wong",
    orderDate: "2025-07-05",
    status: "Shipped",
    totalAmount: 60.0,
    paymentMethod: "Card",
    shippingMethod: "Standard",
    itemsCount: 1,
  },
  {
    id: 1008,
    customerName: "Karen Green",
    orderDate: "2025-07-04",
    status: "Processing",
    totalAmount: 180.0,
    paymentMethod: "PayPal",
    shippingMethod: "Express",
    itemsCount: 2,
  },
  {
    id: 1009,
    customerName: "Mia Rodriguez",
    orderDate: "2025-07-03",
    status: "Delivered",
    totalAmount: 50.0,
    paymentMethod: "Cash",
    shippingMethod: "Standard",
    itemsCount: 1,
  },
  {
    id: 1010,
    customerName: "Nathan Clark",
    orderDate: "2025-07-02",
    status: "Shipped",
    totalAmount: 420.5,
    paymentMethod: "Card",
    shippingMethod: "Express",
    itemsCount: 7,
  },
  {
    id: 1011,
    customerName: "Olivia White",
    orderDate: "2025-07-01",
    status: "Delivered",
    totalAmount: 25.0,
    paymentMethod: "Card",
    shippingMethod: "Standard",
    itemsCount: 1,
  },
  {
    id: 1012,
    customerName: "David Wilson",
    orderDate: "2025-06-30",
    status: "Canceled",
    totalAmount: 105.0,
    paymentMethod: "PayPal",
    shippingMethod: "Standard",
    itemsCount: 3,
  },
  {
    id: 1013,
    customerName: "Leo Harris",
    orderDate: "2025-06-29",
    status: "Processing",
    totalAmount: 88.0,
    paymentMethod: "Card",
    shippingMethod: "Express",
    itemsCount: 2,
  },
  {
    id: 1014,
    customerName: "Bob Smith",
    orderDate: "2025-06-28",
    status: "Shipped",
    totalAmount: 115.5,
    paymentMethod: "Cash",
    shippingMethod: "Standard",
    itemsCount: 3,
  },
  {
    id: 1015,
    customerName: "Ivy Chen",
    orderDate: "2025-06-27",
    status: "Delivered",
    totalAmount: 300.0,
    paymentMethod: "Card",
    shippingMethod: "Express",
    itemsCount: 6,
  },
];

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
    cell: (info) => info.getValue() as number,
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "orderDate",
    header: "Date",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "totalAmount",
    header: "Amount",
    cell: (info) => {
      const value = info.getValue() as number;
      return `$${value.toFixed(2)}`;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "shippingMethod",
    header: "Shipping",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "itemsCount",
    header: "Items",
    cell: (info) => info.getValue() as number,
  },
];

export const Orders = () => {
  const table = useReactTable<Order>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full" style={{ padding: "20px" }}>
      {/* Table Header Section */}
      <div className="sticky top-0 py-6 bg-white flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Orders
        </h2>
      </div>

      {/* Responsive Wrapper for the table content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      padding: "18px",
                      borderBottom: "1px solid #ccc",
                      textAlign: "left",
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{ padding: "16px", borderBottom: "1px solid #eee" }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
