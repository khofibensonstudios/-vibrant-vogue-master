import { Outlet } from "react-router";
import { AdminProvider } from "../../Providers/admin_provider";
import { useContext } from "react";
import { AdminContext } from "../../utils/hooks";
import ProductUpload from "./AdminUpload";

const AdminContent = () => {
  const adminContext = useContext(AdminContext);
  return (
    <div className="relative w-screen">
      {adminContext?.showAddProductPopUp && <ProductUpload />}
      <Outlet />
    </div>
  );
};

export const Admin = () => {
  return (
    <AdminProvider>
      <AdminContent />
    </AdminProvider>
  );
};
