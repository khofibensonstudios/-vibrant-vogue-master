import { create } from "zustand";
type CounterStore = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => {
    set({ counter: 1 });
  },
  decrement: () => {
    set({ counter: -1 });
  },
}));
