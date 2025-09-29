import { createContext } from "react";
import { Product } from "../types/product";

export type AdminContextType = {
  products: Product[];
  loadingProducts: boolean;
  showAddProductPopUp: boolean;
  handleShowAddProductPopUp: () => void;
};

export const AdminContext = createContext<AdminContextType | undefined>(
  undefined
);
