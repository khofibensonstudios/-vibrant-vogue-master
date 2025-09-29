import { create } from "zustand";

interface Rates {
  ghc: number;
  ngn: number;
}
interface CurrencyStore {
  rates: Rates;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
  rates: {
    ghc: 15.5,
    ngn: 1545.43,
  },
  selectedCurrency: "usd",
  setSelectedCurrency: function (currency) {
    return set({ selectedCurrency: currency });
  },
}));
