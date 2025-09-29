import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

interface Customer {
  id: number;
  name: string;
  email: string;
  age: number;
  status: "Active" | "Inactive" | "Pending";
  lastLogin: string;
  totalOrders: number;
  loyaltyTier: "Gold" | "Bronze" | "Platinum" | "Silver";
  isSubscribed: boolean;
}

const data: Customer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 25,
    status: "Active",
    lastLogin: "2025-07-10",
    totalOrders: 12,
    loyaltyTier: "Gold",
    isSubscribed: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 30,
    status: "Inactive",
    lastLogin: "2024-01-15",
    totalOrders: 3,
    loyaltyTier: "Bronze",
    isSubscribed: false,
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    age: 42,
    status: "Active",
    lastLogin: "2025-07-09",
    totalOrders: 28,
    loyaltyTier: "Platinum",
    isSubscribed: true,
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    age: 28,
    status: "Pending",
    lastLogin: "2025-07-11",
    totalOrders: 0,
    loyaltyTier: "Bronze",
    isSubscribed: true,
  },
  {
    id: 5,
    name: "Eve Brown",
    email: "eve@example.com",
    age: 35,
    status: "Active",
    lastLogin: "2025-07-08",
    totalOrders: 15,
    loyaltyTier: "Gold",
    isSubscribed: false,
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    age: 51,
    status: "Active",
    lastLogin: "2025-06-30",
    totalOrders: 40,
    loyaltyTier: "Platinum",
    isSubscribed: true,
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace@example.com",
    age: 22,
    status: "Active",
    lastLogin: "2025-07-11",
    totalOrders: 5,
    loyaltyTier: "Silver",
    isSubscribed: true,
  },
  {
    id: 8,
    name: "Henry Kim",
    email: "henry@example.com",
    age: 45,
    status: "Active",
    lastLogin: "2025-07-05",
    totalOrders: 10,
    loyaltyTier: "Gold",
    isSubscribed: false,
  },
  {
    id: 9,
    name: "Ivy Chen",
    email: "ivy@example.com",
    age: 29,
    status: "Inactive",
    lastLogin: "2025-05-20",
    totalOrders: 1,
    loyaltyTier: "Bronze",
    isSubscribed: false,
  },
  {
    id: 10,
    name: "Jack Wong",
    email: "jack@example.com",
    age: 33,
    status: "Active",
    lastLogin: "2025-07-11",
    totalOrders: 7,
    loyaltyTier: "Silver",
    isSubscribed: true,
  },
  {
    id: 11,
    name: "Karen Green",
    email: "karen@example.com",
    age: 38,
    status: "Active",
    lastLogin: "2025-07-07",
    totalOrders: 19,
    loyaltyTier: "Gold",
    isSubscribed: true,
  },
  {
    id: 12,
    name: "Leo Harris",
    email: "leo@example.com",
    age: 27,
    status: "Pending",
    lastLogin: "2025-07-11",
    totalOrders: 0,
    loyaltyTier: "Bronze",
    isSubscribed: false,
  },
  {
    id: 13,
    name: "Mia Rodriguez",
    email: "mia@example.com",
    age: 31,
    status: "Active",
    lastLogin: "2025-07-10",
    totalOrders: 22,
    loyaltyTier: "Platinum",
    isSubscribed: true,
  },
  {
    id: 14,
    name: "Nathan Clark",
    email: "nathan@example.com",
    age: 55,
    status: "Active",
    lastLogin: "2025-07-01",
    totalOrders: 50,
    loyaltyTier: "Platinum",
    isSubscribed: true,
  },
  {
    id: 15,
    name: "Olivia White",
    email: "olivia@example.com",
    age: 19,
    status: "Active",
    lastLogin: "2025-07-11",
    totalOrders: 2,
    loyaltyTier: "Silver",
    isSubscribed: false,
  },
];

// Define columns using ColumnDef<Customer> for type safety
const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (info) => info.getValue() as number,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "totalOrders",
    header: "Total Orders",
    cell: (info) => info.getValue() as number,
  },
  {
    accessorKey: "loyaltyTier",
    header: "Loyalty Tier",
    cell: (info) => info.getValue() as string,
  },
  {
    accessorKey: "isSubscribed",
    header: "Subscribed",
    cell: (info) => (info.getValue() ? "Yes" : "No"),
  },
];

export const Customers = () => {
  const table = useReactTable<Customer>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full" style={{ padding: "20px" }}>
      <div className="sticky top-0 py-6 bg-white flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Customers
        </h2>
      </div>

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
