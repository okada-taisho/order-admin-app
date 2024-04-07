import createStore from "zustand";
import { OrderStore } from "../types";

export const useOrderStore = createStore<OrderStore>((set) => ({
  orderValues: {
    id: "",
    order: {},
  },
  setOrderValues: (newValues) =>
    set((state) => ({ orderValues: { ...state.orderValues, ...newValues } })),
}));
